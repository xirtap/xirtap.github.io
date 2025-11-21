import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: In a real production environment, you should use a backend proxy to hide the API key.
// For this demo/SPA, we use the env variable directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Converts Chinese text to Hanyu Pinyin using Gemini Flash model.
 * @param text The Chinese text to convert.
 * @returns A promise that resolves to the Pinyin string.
 */
export const convertToPinyin = async (text: string): Promise<string> => {
  if (!text.trim()) return "";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Convert the following Chinese text into Hanyu Pinyin with tone marks. 
      Output ONLY the Pinyin text, separated by spaces where appropriate for readability. 
      Do not add any explanations or markdown formatting.
      
      Text: "${text}"`,
    });

    return response.text?.trim() || "";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to convert text to Pinyin. Please check your API key or internet connection.");
  }
};