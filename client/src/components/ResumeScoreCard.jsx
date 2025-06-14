import { AlertCircle, CheckCircle, XCircle } from "lucide-react"
import Card from "./ui/Card"
import Progress from "./ui/Progress"

function ResumeScoreCard({ data }) {
  // Convert percentage strings to numbers for progress bars
  const atsScore = Number.parseInt(data.ATS_Score)
  const keywordMatch = Number.parseInt(data.Keyword_Match)
  const readabilityScore = Number.parseInt(data.Readability_Score)

  return (
    <Card className="bg-[#222] text-gray-200">
      <div className="px-6 py-5 border-b border-gray-700">
        <h3 className="text-lg font-medium text-gray-200">Resume Score Overview</h3>
        <p className="text-sm text-gray-400">Key metrics from your resume analysis</p>
      </div>
      <div className="px-6 py-5">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-300">ATS Compatibility</h4>
                <span className="text-sm font-medium text-gray-300">{data.ATS_Score}</span>
              </div>
              <Progress value={atsScore} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-300">Keyword Match</h4>
                <span className="text-sm font-medium text-gray-300">{data.Keyword_Match}</span>
              </div>
              <Progress value={keywordMatch} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-300">Readability</h4>
                <span className="text-sm font-medium text-gray-300">{data.Readability_Score}</span>
              </div>
              <Progress value={readabilityScore} />
            </div>
          </div>

          <div className="space-y-4 text-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-600 p-3">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-medium text-gray-300">Formatting Issues</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-gray-200">{data.Formatting_Issues}</p>
              </div>

              <div className="rounded-lg border border-gray-600 p-3">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-300">Grammar Errors</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-gray-200">{data.Grammar_Errors}</p>
              </div>

              <div className="rounded-lg border border-gray-600 p-3">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-300">Spelling Errors</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-gray-200">{data.Spelling_Errors}</p>
              </div>

              <div className="rounded-lg border border-gray-600 p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">Avg. Words/Sentence</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-gray-200">{data.Sentence_Complexity.average_words_per_sentence}</p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-600 p-4 bg-[#333]">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Summary</h4>
              <p className="text-sm text-gray-400">{data.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ResumeScoreCard
