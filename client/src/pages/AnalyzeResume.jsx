import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResumeScoreCard from "../components/ResumeScoreCard";
import VisualFeedback from "../components/VisualFeedback";
import ImprovementSuggestions from "../components/ImprovementSuggestions";
import JobFitAnalysis from "../components/JobFitAnalysis";
import ResumeComparison from "../components/ResumeComparison";
import PersonalizationInsights from "../components/PersonalizationInsights";

function AnalyzeResume() {
  const location = useLocation();
  const navigate = useNavigate();
  const parsedFeedback = location.state?.feedback;

  // No feedback found
  if (!parsedFeedback) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#212121] text-white">
        <h2 className="text-2xl">⚠️ No feedback data found.</h2>
        <p className="mt-2 text-gray-400">Please upload your resume first.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold"
        >
          ⬅ Go Back to Home
        </button>
      </div>
    );
  }

  // Try parsing the JSON feedback
  let resumeData = {};
  try {
    // console.log("📤 Raw Feedback:", parsedFeedback);
    const sanitizedFeedback = parsedFeedback
      .trim()
      .replace(/^```json/, "")
      .replace(/```$/, "");
    resumeData = JSON.parse(sanitizedFeedback);
    console.log(" Parsed Feedback:", resumeData);
  } catch (error) {
    console.error(" JSON Parsing Error:", error.message);
    resumeData = {};
  }

  return (
    <div className="min-h-screen bg-[#212121]">
      <header className="bg-[#212121] shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-500">Resume Analyzer</h1>
          <p className="text-gray-400 mt-1">AI-powered resume feedback and analysis</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ResumeScoreCard data={resumeData.resumeScore} />
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#212121] overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-200">Selection Probability</h3>
                  <div className="mt-4 flex flex-col items-center">
                    <div className="text-5xl font-bold text-blue-600">
                      {resumeData.selectionProbability?.current_chance}
                    </div>
                    <p className="mt-2 text-sm text-gray-300">Current chance of selection</p>
                    <div className="mt-4 text-3xl font-semibold text-green-600">
                      {resumeData.selectionProbability?.improved_chance_after_changes}
                    </div>
                    <p className="mt-1 text-sm text-gray-300">After suggested improvements</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-300">{resumeData.selectionProbability?.summary}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12">
              <VisualFeedback data={resumeData.visualRepresentations} />
            </div>

            <div className="lg:col-span-6">
              <ImprovementSuggestions data={resumeData.improvementSuggestions} />
            </div>

            <div className="lg:col-span-6">
              <JobFitAnalysis data={resumeData.jobFitAnalysis} />
            </div>

            <div className="lg:col-span-6">
              <ResumeComparison data={resumeData.resumeBenchmarking} />
            </div>

            <div className="lg:col-span-6">
              <PersonalizationInsights data={resumeData.personalizationInsights} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AnalyzeResume;
