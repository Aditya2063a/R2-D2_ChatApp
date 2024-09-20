import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY); 
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getAskAnswer = async (req, res) => {
  const { question } = req.body;

  // Check if the question is provided
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    // Send the question to the Gemini API
    const result = await model.generateContent(question);

    // Ensure the response contains the text
    if (result && result.response && result.response.text) {
      const answer = result.response.text();
      return res.json({ answer });
    } else {
      return res.status(500).json({ error: "No valid response from AI model" });
    }

  } catch (error) {
    // Log and handle the error
    console.error("Error querying Gemini API:", error);
    return res.status(500).json({ error: "AI query failed" });
  }
};
