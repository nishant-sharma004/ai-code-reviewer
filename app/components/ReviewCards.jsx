export default function ReviewCards({ completion, isLoading, review, error }) {
  return (
    <div className="w-1/2 overflow-y-auto bg-gray-50 p-6">

      {/* Empty State */}
      {!completion && !review && !isLoading && (
        <div className="h-full flex flex-col items-center
                        justify-center text-center text-gray-400">
          <span className="text-6xl mb-4">🤖</span>
          <p className="text-lg font-medium">Ready to review your code</p>
          <p className="text-sm mt-2">
            Paste your code on the left and click Review
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200
                        rounded-lg text-red-600 text-sm">
          ❌ {error}
        </div>
      )}

      {/* Streaming Text */}
      {isLoading && completion && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
            <span className="text-sm text-blue-500 font-medium">
              AI is reviewing...
            </span>
          </div>
          <pre className="text-xs text-gray-600 font-mono
                          whitespace-pre-wrap break-words">
            {completion}
          </pre>
        </div>
      )}

      {/* Final Review Cards */}
      {review && !isLoading && (
        <div className="space-y-4">

          {/* Quality Score */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            {review.detectedLanguage && (
              <div className="mb-3">
                <span className="text-xs bg-blue-50 text-blue-600
                                 font-medium px-3 py-1 rounded-full
                                 border border-blue-100">
                  Detected: {review.detectedLanguage}
                </span>
              </div>
            )}
            <p className="text-sm text-gray-500 font-medium mb-1">
              Quality Score
            </p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-blue-600">
                {review.qualityScore}
              </span>
              <span className="text-gray-400 mb-1">/10</span>
            </div>
          </div>

          {/* Bugs */}
          {review.bugs?.length > 0 && (
            <div className="bg-white rounded-xl border border-red-100 p-6">
              <h3 className="font-semibold text-red-500 mb-3">
                🐛 Bugs Found
              </h3>
              <ul className="space-y-2">
                {review.bugs.map((bug, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>{bug}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Performance Issues */}
          {review.performanceIssues?.length > 0 && (
            <div className="bg-white rounded-xl border border-orange-100 p-6">
              <h3 className="font-semibold text-orange-500 mb-3">
                ⚡ Performance Issues
              </h3>
              <ul className="space-y-2">
                {review.performanceIssues.map((issue, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          {review.suggestions?.length > 0 && (
            <div className="bg-white rounded-xl border border-green-100 p-6">
              <h3 className="font-semibold text-green-600 mb-3">
                💡 Suggestions
              </h3>
              <ul className="space-y-2">
                {review.suggestions.map((s, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Improved Code */}
          {review.improvedCode && (
            <div className="bg-white rounded-xl border border-purple-100 p-6">
              <h3 className="font-semibold text-purple-600 mb-3">
                ✨ Improved Code
              </h3>
              <pre className="bg-gray-50 p-4 rounded-lg text-xs
                              overflow-x-auto text-gray-700 font-mono
                              whitespace-pre-wrap">
                {review.improvedCode}
              </pre>
            </div>
          )}

        </div>
      )}

    </div>
  )
}