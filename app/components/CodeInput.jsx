const LANGUAGES = ["React", "JavaScript", "TypeScript", "Node.js"]

export default function CodeInput({
  code,
  language,
  isLoading,
  onCodeChange,
  onLanguageChange,
  onReview,
  onStop,
}) {
  return (
    <div className="w-1/2 border-r border-gray-200 bg-white flex flex-col">

      {/* Language Selector */}
      <div className="px-6 py-4 border-b border-gray-100
                      flex items-center gap-3">
        <span className="text-sm text-gray-500 font-medium">
          Language:
        </span>
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all
              ${language === lang
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Code Textarea */}
      <textarea
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        placeholder="Paste your code here..."
        className="flex-1 p-6 font-mono text-sm text-gray-800
                   bg-gray-50 resize-none focus:outline-none
                   placeholder-gray-400"
      />

      {/* Bottom Bar */}
      <div className="px-6 py-4 border-t border-gray-100
                      bg-white flex gap-3">
        <button
          onClick={onReview}
          disabled={isLoading}
          className="flex-1 bg-blue-600 hover:bg-blue-700
                     text-white font-semibold py-2.5 rounded-lg
                     transition-all disabled:opacity-50
                     disabled:cursor-not-allowed text-sm"
        >
          {isLoading ? "⏳ Reviewing..." : "🔍 Review My Code"}
        </button>

        {isLoading && (
          <button
            onClick={onStop}
            className="px-4 py-2.5 bg-red-100 hover:bg-red-200
                       text-red-600 font-semibold rounded-lg
                       transition-all text-sm"
          >
            ⏹ Stop
          </button>
        )}
      </div>

    </div>
  )
}