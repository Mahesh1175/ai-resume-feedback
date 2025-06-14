import { CheckCircle, AlertTriangle, ArrowUpCircle } from "lucide-react"
import Card from "./ui/Card"
import Badge from "./ui/Badge"

function ImprovementSuggestions({ data }) {
  // Function to get badge color based on importance
  const getImportanceColor = (importance) => {
    switch (importance.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    }
  }

  return (
    <Card>
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className=" text-lg font-medium text-white">Improvement Suggestions</h3>
        <p className="text-sm text-gray-200">{data.summary}</p>
      </div>
      <div className="px-6 py-5 space-y-6">
        {/* Actionable Tips */}
        <div>
          <h3 className="text-gray-100 text-lg font-medium mb-3 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            Actionable Tips
          </h3>
          <ul className="space-y-2 pl-7 list-disc">
            {data.Actionable_Tips.map((tip, index) => (
              <li key={index} className="text-gray-300">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Grammar & Clarity */}
        <div>
          <h3 className="text-gray-100 text-lg font-medium mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            Grammar & Clarity
          </h3>
          <ul className="space-y-2 pl-7 list-disc">
            {data.Grammar_Clarity_Check.map((item, index) => (
              <li key={index} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quantify Achievements */}
        <div>
          <h3 className="text-gray-100 text-lg font-medium mb-3 flex items-center">
            <ArrowUpCircle className="h-5 w-5 text-blue-500 mr-2" />
            Quantify Achievements
          </h3>
          <p className="text-sm text-gray-300 mb-2">Good examples to include:</p>
          <ul className="space-y-2 pl-7 list-disc">
            {data.Quantify_Achievements.map((achievement, index) => (
              <li key={index} className="text-gray-300">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Keyword Optimization */}
        <div className="bg-[#333] p-4 rounded-lg">
          <h3 className="text-gray-100 text-lg font-medium mb-3">Keyword Optimization</h3>
          <p className="text-sm text-gray-300 mb-2">Consider adding these missing keywords:</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {data.Optimize_Keyword_Usage.missing_keywords.map((keyword, index) => (
              <Badge key={index} className={getImportanceColor(data.Optimize_Keyword_Usage.impact)}>
                {keyword}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            Impact: <span className="font-medium">{data.Optimize_Keyword_Usage.impact}</span>
          </p>
        </div>

        {/* Skills Enhancement */}
        <div className="bg-[#333] p-4 rounded-lg text-gray-100">
          <h3 className="text-gray-100 text-lg font-medium mb-3">Skills Enhancement</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Current Skills</p>
              <div className="flex flex-wrap gap-2">
                {data.Skills_Enhancement_Suggestions.current_skills.map((skill, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Suggested Skills</p>
              <div className="flex flex-wrap gap-2">
                {data.Skills_Enhancement_Suggestions.suggested_skills.map((skill, index) => (
                  <Badge key={index} className={getImportanceColor(data.Skills_Enhancement_Suggestions.importance)}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Importance: <span className="font-medium">{data.Skills_Enhancement_Suggestions.importance}</span>
          </p>
        </div>
      </div>
    </Card>
  )
}

export default ImprovementSuggestions

