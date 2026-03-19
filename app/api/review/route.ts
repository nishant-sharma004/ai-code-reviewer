// if we want ot use stream text and sructred way
import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(request) {
  try {
    const { code, language } = await request.json();

    if (!code || !language) {
      return Response.json(
        { error: "Code and language are required" },
        { status: 400 },
      );
    }

    const result = streamText({
      model: google("gemini-2.5-flash"),
      prompt: `You are a senior software developer with 10 years of experience.
                Review the following code. The user selected ${language} as language.

                Important rules:
                - First detect the actual programming language of the code yourself
                - ALWAYS return valid JSON regardless of language mismatch
                - If selected language does not match actual code, still review it
                - JavaScript and TypeScript can also run in Node.js environment
                - setTimeout, Promise, async/await are valid in JS/TS/Node.js
                - NEVER return plain text or explanation outside JSON
                - If code has no TypeScript types, still review it as JavaScript
                - NEVER wrap response in markdown backticks or json blocks
                - Return RAW JSON only, starting directly with {

                Return ONLY this exact JSON structure, nothing else:
                {
                "qualityScore": <number between 1-10>,
                "detectedLanguage": <string — actual language you detected>,
                "bugs": [<string>],
                "performanceIssues": [<string>],
                "suggestions": [<string>],
                "improvedCode": <string>
                }

                Code to review:
                ${code}
      `,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Review API error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

// we use it if we use grenreateOBject ad structed output
// import { generateText, Output } from "ai";
// import { google } from "@ai-sdk/google";
// import { z } from "zod";

// const reviewSchema = z.object({
//   qualityScore: z.number(),
//   bugs: z.array(z.string()),
//   performanceIssue: z.array(z.string()),
//   suggestion: z.array(z.string()),
//   improvedCode: z.string(),
// });

// export async function POST(req: Request) {
//   const { code, language } = await req.json();

//   const { output } = await generateText({
//     model: google("gemini-2.5-flash"),
//     output: Output.object({
//       schema: reviewSchema,
//     }),
//     prompt: `You are a senior software developer with 10 years of experience.
//             Review the following code written in ${language} and return a detailed review.

//             Important rules:
//             - If the code is React but language selected is JavaScript, still review it correctly
//             - Detect the actual code type smartly
//             - Be specific about bugs and issues you find

//     Code to review:
//     ${code}`,
//   });
//   return Response.json(output);
// }
