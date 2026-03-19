# 🔍 AI Code Reviewer

An AI-powered code review tool built with Next.js and Vercel AI SDK.
Paste your code and get instant feedback — bugs, performance issues,
suggestions and improved code — streamed in real time like ChatGPT.

## 🚀 Live Demo

[Click here to view live demo](#) <!-- add your Vercel link here later -->

## ✨ Features

- 🤖 Real-time AI code review powered by Google Gemini
- ⚡ Streaming response word by word like ChatGPT
- 🐛 Detects bugs, performance issues and suggestions
- 🔍 Auto detects programming language
- ✨ Provides improved version of your code
- 🛑 Stop streaming anytime
- 💻 Clean split screen UI

## 🛠️ Tech Stack

- **Next.js 14** — React framework
- **Vercel AI SDK v6** — AI streaming and hooks
- **Google Gemini 2.5 Flash** — AI model (free tier)
- **Tailwind CSS** — Styling

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in root:

```
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
```

Get your free API key at [aistudio.google.com](https://aistudio.google.com)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
  components/
    Header.jsx        → Top navigation bar
    CodeInput.jsx     → Code editor and language selector
    ReviewCards.jsx   → AI review results display
  api/
    review/
      route.js        → API route — calls Gemini AI
  page.js             → Main page — state and logic
```

## 🧠 What I Learned

- Vercel AI SDK v6 with `useCompletion` hook
- Real time streaming with `streamText`
- Prompt engineering for structured JSON output
- Next.js App Router and API routes
- Building production ready AI applications

## 👨‍💻 Author

Built by [Your Name] — [LinkedIn](#) | [GitHub](#)
