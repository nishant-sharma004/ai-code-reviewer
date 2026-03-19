export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-8 py-4
                       flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        <h1 className="text-xl font-bold text-gray-800">
          AI Code Reviewer
        </h1>
      </div>
      <span className="text-sm text-gray-400">
        Built with Next.js + Vercel AI SDK
      </span>
    </header>
  )
}