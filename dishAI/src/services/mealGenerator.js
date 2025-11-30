import { Model } from "../utils/models.js";
import { fileTypeFromBuffer } from "file-type";
import { CookingPrompt } from "../Prompts/prompt.js";
import dotenv from "dotenv";
dotenv.config();

export  const generateMealFromImage  = async (imageBuffer) => {
  let ingredients = "No ingredients detected.";
  let meal = "No meal suggestion found.";


  const fileType = await fileTypeFromBuffer(imageBuffer);
  const mimeType = fileType?.mime || "image/jpeg";


   try {
    
     const visionModel =Model;

     const visionResponse = await visionModel.generateContent({
       contents: [
         {
           role: process.env.ROLE,
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
       temperature: process.env.MODEL_TEMP,
       maxOutputTokens: process.env.MODEL_MAX_OUTPUT_TOKENS,
     });

     ingredients =
       visionResponse?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
       ingredients;
   } catch (err) {
     console.error("Vision model error:", err);
   }
   try {
     const textModel = Model;

     const prompt = CookingPrompt(ingredients);

     const recipeResponse = await textModel.generateContent({
       contents: [
         {
          role: process.env.ROLE,
           parts: [{ text: prompt }],
         },
       ],
     });

     meal =
       recipeResponse?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
       meal;
   } catch (err) {
     console.error("Recipe model error:", err);
   }

   return { ingredients, meal };
}
