import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ResumeAnalysis = ({ resumeData }) => {
  let parsedFeedback = {};

  try {
    // console.log(" Raw Feedback:", resumeData); // Debugging: Check raw feedback before parsing

    const sanitizedFeedback = resumeData.trim().replace(/^```json/, "").replace(/```$/, "");
    parsedFeedback = JSON.parse(sanitizedFeedback);
    
    console.log(" Parsed Feedback:", parsedFeedback); // Debugging: Check parsed data
  } catch (error) {
    console.error(" JSON Parsing Error:", error.message);
    parsedFeedback = {};
  }
  
  console.log(" Parsed Feedback:", parsedFeedback); // Debugging

  return (
    <div className="p-6 space-y-6 text-gray-200 bg-[#212121]">
    <h1 className="text-3xl font-bold text-white">Resume Analysis Report</h1>

    {/* Resume Score */}
    <div className="bg-[#1e1e1e] p-6 shadow-md rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-white">Resume Score</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <p>ATS Score: <span className="font-bold text-blue-400">{parsedFeedback?.resumeScore?.ATS_Score || "N/A"}%</span></p>
        <p>Keyword Match: <span className="font-bold text-green-400">{parsedFeedback?.resumeScore?.Keyword_Match || "N/A"}%</span></p>
        <p>Formatting Issues: <span className="font-bold text-red-400">{parsedFeedback?.resumeScore?.Formatting_Issues || 0}</span></p>
        <p>Readability Score: <span className="font-bold text-yellow-400">{parsedFeedback?.resumeScore?.Readability_Score || "N/A"}%</span></p>
        <p>Spelling Errors: <span className="font-bold text-red-400">{parsedFeedback?.resumeScore?.Spelling_Errors || 0}</span></p>
        <p>Grammar Errors: <span className="font-bold text-red-400">{parsedFeedback?.resumeScore?.Grammar_Errors || 0}</span></p>
      </div>
      <p className="mt-2 text-gray-300">{parsedFeedback?.resumeScore?.summary || "No summary available."}</p>
    </div>

    {/* Keyword Match Chart */}
    {parsedFeedback?.visualRepresentations?.Keyword_Match && (
      <div className="bg-[#1e1e1e] p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-white">Keyword Match</h2>
        <div className="w-60 h-60 mx-auto">
          <Pie
            key={JSON.stringify(parsedFeedback.visualRepresentations.Keyword_Match)}
            data={{
              labels: parsedFeedback.visualRepresentations.Keyword_Match.labels || [],
              datasets: [
                {
                  data: parsedFeedback.visualRepresentations.Keyword_Match.data || [],
                  backgroundColor: ["#4CAF50", "#F44336"],
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    )}

    {/* Skill Distribution Chart */}
    {parsedFeedback?.visualRepresentations?.Skill_Distribution && (
      <div className="bg-[#1e1e1e] p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-white">Skill Distribution</h2>
        <div className="w-80 h-60 mx-auto">
          <Bar
            key={JSON.stringify(parsedFeedback.visualRepresentations.Skill_Distribution)}
            data={{
              labels: parsedFeedback.visualRepresentations.Skill_Distribution.categories || [],
              datasets: [
                {
                  data: parsedFeedback.visualRepresentations.Skill_Distribution.data || [],
                  backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    )}

    {/* Selection Probability */}
    <div className="bg-[#1e1e1e] p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-white">Selection Probability</h2>
      <p>Current Chance: <span className="font-bold text-blue-400">{parsedFeedback?.selectionProbability?.current_chance || "N/A"}%</span></p>
      <p>Improved Chance After Changes: <span className="font-bold text-green-400">{parsedFeedback?.selectionProbability?.improved_chance_after_changes || "N/A"}%</span></p>
      <p>HR Review Likelihood: <span className="font-bold text-yellow-400">{parsedFeedback?.selectionProbability?.HR_Review_Likelihood || "N/A"}%</span></p>
      <p>Recruiter Scan Duration: <span className="font-bold text-red-400">{parsedFeedback?.selectionProbability?.Recruiter_Scan_Duration || "N/A"} sec</span></p>
      <p className="mt-2 text-gray-300">{parsedFeedback?.selectionProbability?.summary || "No insights available."}</p>
    </div>
  </div>
  );
};

export default ResumeAnalysis;
