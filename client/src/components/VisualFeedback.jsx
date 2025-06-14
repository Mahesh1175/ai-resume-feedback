"use client"

import { useState } from "react"
import Card from "./ui/Card"
import Tabs from "./ui/Tabs"
import { BarChart, PieChart, DoughnutChart } from "./ui/Chart"

function VisualFeedback({ data }) {
  const [activeTab, setActiveTab] = useState("keyword-match")

  // Colors for charts
  const chartColors = [
    "rgba(59, 130, 246, 0.8)", // Blue
    "rgba(239, 68, 68, 0.8)", // Red
    "rgba(16, 185, 129, 0.8)", // Green
    "rgba(245, 158, 11, 0.8)", // Amber
    "rgba(139, 92, 246, 0.8)", // Purple
  ]

  // Prepare data for Education vs Experience pie chart
  const educationVsExperienceData = {
    labels: ["Education", "Experience"],
    datasets: [
      {
        data: [data.Education_vs_Experience.education, data.Education_vs_Experience.experience],
        backgroundColor: [chartColors[0], chartColors[2]],
        borderColor: ["rgba(59, 130, 246, 1)", "rgba(16, 185, 129, 1)"],
        borderWidth: 1,
      },
    ],
  }

  // Prepare data for Keyword Match doughnut chart
  const keywordMatchData = {
    labels: data.Keyword_Match.labels,
    datasets: [
      {
        data: data.Keyword_Match.data,
        backgroundColor: [chartColors[2], chartColors[1]],
        borderColor: ["rgba(16, 185, 129, 1)", "rgba(239, 68, 68, 1)"],
        borderWidth: 1,
      },
    ],
  }

  // Prepare data for Skill Distribution bar chart
  const skillDistributionData = {
    labels: data.Skill_Distribution.categories,
    datasets: [
      {
        label: "Skill Distribution",
        data: data.Skill_Distribution.data,
        backgroundColor: chartColors.slice(0, data.Skill_Distribution.categories.length),
        borderColor: chartColors.map((color) => color.replace("0.8", "1")),
        borderWidth: 1,
      },
    ],
  }

  // Prepare data for Keyword Density doughnut chart
  const keywordDensityData = {
    labels: data.Keyword_Density.keywords,
    datasets: [
      {
        data: data.Keyword_Density.density,
        backgroundColor: chartColors.slice(0, data.Keyword_Density.keywords.length),
        borderColor: chartColors.map((color) => color.replace("0.8", "1")),
        borderWidth: 1,
      },
    ],
  }

  const tabs = [
    { id: "keyword-match", label: "Keyword Match" },
    { id: "skill-distribution", label: "Skill Distribution" },
    { id: "keyword-density", label: "Keyword Density" },
    { id: "education-experience", label: "Education vs Experience" },
  ]

  return (
    <Card>
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-200">Visual Feedback</h3>
        <p className="text-sm text-gray-300">{data.summary}</p>
      </div>
      <div className="px-6 py-5">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "keyword-match" && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 max-w-md">
                <DoughnutChart
                  data={keywordMatchData}
                  options={{
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => `${context.label}: ${context.raw}%`,
                        },
                      },
                    },
                    cutout: "70%",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Keyword Match Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Your resume matches {data.Keyword_Match.data[0]}% of the keywords typically expected in your industry.
                  Adding the missing {data.Keyword_Match.data[1]}% of keywords could significantly improve your chances.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Pro Tip</h4>
                  <p className="text-sm text-blue-600">
                    Tailor your resume for each job application by including keywords from the job description. This
                    improves your ATS score and increases your chances of getting past automated screening.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skill-distribution" && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2">
                <BarChart
                  data={skillDistributionData}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => `${context.label}: ${context.raw}`,
                        },
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                          callback: (value) => value + "%",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Skill Distribution Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Your resume emphasizes technical skills ({data.Skill_Distribution.data[0]}%), with less focus on soft
                  skills ({data.Skill_Distribution.data[1]}%) and certifications ({data.Skill_Distribution.data[2]}%).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Pro Tip</h4>
                  <p className="text-sm text-blue-600">
                    A balanced resume showcases both technical and soft skills. Consider adding more soft skills like
                    communication, leadership, and problem-solving to complement your technical expertise.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "keyword-density" && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 max-w-md">
                <DoughnutChart
                  data={keywordDensityData}
                  options={{
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => `${context.label}: ${context.raw}`,
                        },
                      },
                    },
                    cutout: "60",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Keyword Density Analysis</h3>
                <p className="text-gray-300 mb-4">
                  The most prominent keywords in your resume are Node.js ({data.Keyword_Density.density[2]}%),
                  JavaScript ({data.Keyword_Density.density[0]}%), and React ({data.Keyword_Density.density[1]}%).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Pro Tip</h4>
                  <p className="text-sm text-blue-600">
                    While these keywords are valuable, consider adding related technologies like Express, MongoDB, or
                    Redux to create a more comprehensive skill profile that appeals to employers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education-experience" && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 max-w-md">
                <PieChart
                  data={educationVsExperienceData}
                  options={{
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => `${context.label}: ${context.raw}`,
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Education vs Experience Balance</h3>
                <p className="text-gray-300 mb-4">
                  Your resume dedicates {data.Education_vs_Experience.experience}% to professional experience and{" "}
                  {data.Education_vs_Experience.education}% to education. This is a good balance for your career stage.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Pro Tip</h4>
                  <p className="text-sm text-blue-600">
                    As you progress in your career, consider gradually reducing the education section and expanding your
                    professional experience with more detailed achievements and responsibilities.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default VisualFeedback

