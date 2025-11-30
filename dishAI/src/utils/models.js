import { VertexAI } from "@google-cloud/vertexai";
import dotenv from 'dotenv'
dotenv.config();

const vertex = new VertexAI({
    project:process.env.PROJECT_ID,
    location:process.env.LOCATION
});

export const  Model = vertex.getGenerativeModel({
    model:process.env.MODEL
});

