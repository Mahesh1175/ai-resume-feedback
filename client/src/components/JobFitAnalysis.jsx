import { Briefcase, TrendingUp, TrendingDown } from "lucide-react"
import Card from "./ui/Card"
import Badge from "./ui/Badge"

function JobFitAnalysis({ data }) {
  return (
    <Card>
      <div className="px-6 py-5 border-b border-gray-200 text-gray-200 ">
        <h3 className="text-lg font-medium text-gray-200">Job Fit Analysis</h3>
        <p className="text-sm text-gray-400">{data.summary}</p>
      </div>
      <div className="px-6 py-5 space-y-6">
        {/* Match Percentage */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-200">Match Percentage</h3>
          <Badge className="text-lg px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-100">
            {data.Match_Percentage}
          </Badge>
        </div>

        {/* Alternative Job Suggestions */}
        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center text-gray-200">
            <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
            Alternative Job Suggestions
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.Alternative_Job_Suggestions.map((job, index) => (
              <Badge key={index} className="text-md bg-gray-100">
                {job}
              </Badge>
            ))}
          </div>
        </div>

        {/* Industry Comparison */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Industry Comparison</h3>
          <p className="text-gray-700 mb-4">{data.Comparison_with_Industry_Resumes}</p>
        </div>

        {/* Top Industries */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-red-50">Top Industries Matching Your Profile</h3>
          <div className="flex flex-wrap gap-2">
            {data.Top_Industries_Matching_Profile.map((industry, index) => (
              <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-100">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Job Market Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-md font-medium mb-2 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
              High Demand Jobs
            </h3>
            <ul className="space-y-1 pl-6 list-disc">
              {data.Job_Market_Trend_Analysis.high_demand_jobs.map((job, index) => (
                <li key={index} className="text-gray-700">
                  {job}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-md font-medium mb-2 flex items-center">
              <TrendingDown className="h-4 w-4 text-red-600 mr-2" />
              Low Demand Jobs
            </h3>
            <ul className="space-y-1 pl-6 list-disc">
              {data.Job_Market_Trend_Analysis.low_demand_jobs.map((job, index) => (
                <li key={index} className="text-gray-700">
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default JobFitAnalysis

