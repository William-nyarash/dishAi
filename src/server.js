import { VertexAI } from "@google-cloud/vertexai";
import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import { fileTypeFromBuffer } from "file-type";

dotenv.config();

if (!process.env.PROJECT_ID) {
  throw new Error("Missing PROJECT_ID in .env");
}


const app = express();
const upload = multer();
app.use(express.json());

const vertex = new VertexAI({
  project: process.env.PROJECT_ID,
  location: "us-central1",
});


async function generateMealFromImage(imageBuffer) {
  let ingredients = "No ingredients detected.";
  let meal = "No meal suggestion found.";


  const fileType = await fileTypeFromBuffer(imageBuffer);
  const mimeType = fileType?.mime || "image/jpeg";


   try {
     const visionModel = vertex.getGenerativeModel({
         model: "gemini-2.5-pro",
     });

     console.log("Sending image to Vision model...");

     const visionResponse = await visionModel.generateContent({
       contents: [
         {
           role: "user",
           parts: [
             {
               inlineData: {
                data: imageBuffer.toString("base64"),
                 mimeType,
               },
             },
             {
               text: "Identify all visible food ingredients in this image. Respond with a comma-separated list.",
             },
           ],
         },
       ],
       temperature: 0.2,
       maxOutputTokens: 256,
     });

     console.log("Vision model completed.");

     ingredients =
       visionResponse?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
       ingredients;

     console.log("Detected ingredients:", ingredients);

   } catch (err) {
     console.error("Vision model error:", err);
   }
   try {
     const textModel = vertex.getGenerativeModel({
       model: "gemini-2.5-pro",
     });

     const prompt = `
 You are a helpful AI chef.
 Given the following ingredients: ${ingredients}
 Suggest ONE simple, beginner-friendly meal I can cook.
 Respond concisely in 1 paragraph.
     `;

     console.log("Sending prompt to Text model...");

     const recipeResponse = await textModel.generateContent({
       contents: [
         {
          role: "user",
           parts: [{ text: prompt }],
         },
       ],
     });

     console.log("Recipe generation completed.");

     meal =
       recipeResponse?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
       meal;

     console.log("Suggested meal:", meal);
   } catch (err) {
     console.error("Recipe model error:", err);
   }

   return { ingredients, meal };
}


app.get("/", (req, res) => {
  res.send("AI MealSnap backend is running.");
});

app.post("/api/suggest-meal", upload.single("image"), async (req, res, next) => {

  try {
    if (!req.file) {
      console.warn(" No image file received");
      return res.status(400).json({ error: "Image file is required." });
    }

    console.log("Received file:", req.file.originalname, "size:", req.file.size);

    const result = await generateMealFromImage(req.file.buffer);
    res.json(result);
  } catch (err) {
    console.error("Error in /api/suggest-meal:", err);
    next(err);
  }
});


app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
