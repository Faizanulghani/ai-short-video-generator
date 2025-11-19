import { CohereClientV2 } from "cohere-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const cohere = new CohereClientV2({ token: process.env.COHERE_API_KEY });
    const { formData } = await req.json();

    const response = await cohere.chat({
      model: "command-a-03-2025",
      temperature: 0.3,
      messages: [
        {
          role: "user",
          content: `Based on the following user selections, create a concise script for a short video.
          Topics: ${formData.topic || "Not specified"}
    Style: ${formData.imageStyle || "Not specified"}
    Duration: ${formData.duration || "Not specified"}
    The script should be clear, engaging, and directly usable for video creation.`,
        },
      ],
    });

    const script =
      response.message.content.map((c) => c.text).join("\n") ||
      "No output from AI";

    return NextResponse.json({ script });
  } catch (error) {
    console.error("Cohere API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
