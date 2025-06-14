import Card from "./ui/Card"
import Progress from "./ui/Progress"

function ResumeComparison({ data }) {
  // Convert percentage strings to numbers
  const topResumeScore = Number.parseInt(data.Comparison_with_Top_Resumes.average_score_of_top_resumes)
  const industryAvgKeywordMatch = Number.parseInt(data.Industry_Average_Keyword_Match)
  const yourScore = topResumeScore - Number.parseInt(data.Comparison_with_Top_Resumes.resume_score_difference)

  return (
    <Card className="bg-[#333]">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-200">Resume Benchmarking</h3>
        <p className="text-sm text-gray-200">{data.summary}</p>
      </div>
      <div className="px-6 py-5 space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-200">Comparison with Top Resumes</h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-200">Top Resumes Average</h4>
                <span className="text-sm font-medium text-gray-200">
                  {data.Comparison_with_Top_Resumes.average_score_of_top_resumes}
                </span>
              </div>
              <Progress value={topResumeScore} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-200">Your Resume Score</h4>
                <span className="text-sm font-medium text-gray-200">{yourScore}%</span>
              </div>
              <Progress value={yourScore} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-200">Industry Average Keyword Match</h4>
                <span className="text-sm font-medium text-gray-200">{data.Industry_Average_Keyword_Match}</span>
              </div>
              <Progress value={industryAvgKeywordMatch} />
            </div>
          </div>
        </div>

        <div className="bg-[#333] p-4 rounded-lg">
          <h3 className="text-md font-medium text-gray-200 mb-2">Gap Analysis</h3>
          <p className="text-sm text-gray-200">
            Your resume is{" "}
            <span className="font-medium text-gray-200">{data.Comparison_with_Top_Resumes.resume_score_difference}</span> below the
            average score of top resumes in your industry. Focus on the improvement suggestions to close this gap.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-[#333] rounded-lg">
            <p className="text-2xl font-bold text-gray-200">{yourScore}%</p>
            <p className="text-xs text-gray-200 mt-1">Your Score</p>
          </div>
          <div className="p-3 bg-[#333] rounded-lg">
            <p className="text-2xl font-bold text-gray-200">{topResumeScore}%</p>
            <p className="text-xs text-gray-200 mt-1">Top Resumes</p>
          </div>
          <div className="p-3 bg-[#333] rounded-lg">
            <p className="text-2xl font-bold text-gray-200">{industryAvgKeywordMatch}%</p>
            <p className="text-xs text-gray-200 mt-1">Industry Avg</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ResumeComparison