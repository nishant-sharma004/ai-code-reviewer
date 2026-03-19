"use client";

import { useState } from "react";
import { useCompletion } from "@ai-sdk/react";
import Header from "./components/Header";
import CodeInput from "./components/CodeInput";
import ReviewCards from "./components/ReviewCards";

export default function Home() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("React");
  const [review, setReview] = useState(null);
  const [parseError, setParseError] = useState("");

  const { completion, isLoading, error, complete, stop } = useCompletion({
    api: "/api/review",
    onFinish: (prompt, completion) => {
      try {
        const cleaned = completion
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();
        const parsed = JSON.parse(cleaned);
        setReview(parsed);
      } catch (e) {
        setParseError("AI returned invalid response. Please try again.");
      }
    },
  });

  const handleReview = async () => {
    if (!code.trim()) {
      setParseError("Please paste some code first!");
      return;
    }
    setReview(null);
    setParseError("");
    await complete("Review this code", {
      body: { code, language },
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <div className="flex h-[calc(100vh-65px)]">
        <CodeInput
          code={code}
          language={language}
          isLoading={isLoading}
          onCodeChange={setCode}
          onLanguageChange={setLanguage}
          onReview={handleReview}
          onStop={stop}
        />
        <ReviewCards
          completion={completion}
          isLoading={isLoading}
          review={review}
          error={error?.message || parseError}
        />
      </div>
    </main>
  );
}
