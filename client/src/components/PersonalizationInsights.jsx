import { AlertCircle, CheckCircle } from "lucide-react"
import Card from "./ui/Card"
import Progress from "./ui/Progress"

function PersonalizationInsights({ data }) {
  // Convert percentage string to number
  const engagementLevel = Number.parseInt(data.Engagement_Level)

  return (
    <Card className="bg-[#222] text-gray-200">
      <div className="px-6 py-5 border-b border-gray-700">
        <h3 className="text-lg font-medium text-gray-200">Personalization Insights</h3>
        <p className="text-sm text-gray-400">{data.summary}</p>
      </div>
      <div className="px-6 py-5 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-200">Resume Tone</h3>
          <div className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">{data.Resume_Tone}</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-200">Engagement Level</h3>
            <span className="text-sm font-medium text-gray-200">{data.Engagement_Level}</span>
          </div>
          <Progress value={engagementLevel} />
          <p className="text-sm text-gray-400 mt-1">How engaging and compelling your resume appears to recruiters</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg space-y-4">
          <h3 className="text-lg font-medium text-gray-200">Consistency Check</h3>

          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {data.Consistency_Check.tense_inconsistencies > 0 ? (
                <AlertCircle className="h-5 w-5 text-amber-400" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-400" />
              )}
            </div>
            <div>
              <p className="font-medium text-gray-200">Tense Consistency</p>
              <p className="text-sm text-gray-400">
                {data.Consistency_Check.tense_inconsistencies > 0
                  ? `Found ${data.Consistency_Check.tense_inconsistencies} tense inconsistencies in your resume.`
                  : "Your resume maintains consistent tense throughout."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {data.Consistency_Check.pronoun_usage === "correct" ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <AlertCircle className="h-5 w-5 text-amber-400" />
              )}
            </div>
            <div>
              <p className="font-medium text-gray-200">Pronoun Usage</p>
              <p className="text-sm text-gray-400">
                {data.Consistency_Check.pronoun_usage === "correct"
                  ? "Your pronoun usage is consistent and appropriate."
                  : "There are issues with pronoun usage in your resume."}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 p-4 rounded-lg">
          <h3 className="text-md font-medium text-gray-200 mb-2">Personalization Tips</h3>
          <ul className="space-y-2 pl-6 list-disc">
            <li className="text-sm text-gray-300">Use more dynamic action verbs to increase engagement</li>
            <li className="text-sm text-gray-300">Maintain first-person perspective without using "I" statements</li>
            <li className="text-sm text-gray-300">
              Ensure all achievements are in past tense and responsibilities in present tense
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default PersonalizationInsights
