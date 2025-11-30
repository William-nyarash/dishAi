import { generateMealFromImage } from "../services/mealGenerator.js";

export const createMeal = async (req,res, next ) => {
    try{
        if(!req.file) {
            console.warn("NO image file received.");
            return res.status(400).json({error: "Image file is required."});
        }
        console.log("Received file:", req.file.originalname, "size", req.file.size);
        const result = await generateMealFromImage(req.file.buffer);
        res.json(result);
    }
    catch(err) {
        console.error("Error in /api/meal:", err);
        next(err);
    }
}