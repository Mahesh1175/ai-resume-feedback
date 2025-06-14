import React from 'react';
import ResumeScoreCard from './ResumeScoreCard';
import VisualFeedback from './VisualFeedback';
import ImprovementSuggestions from './ImprovementSuggestions';
import JobFitAnalysis from './JobFitAnalysis';
import ResumeComparison from './ResumeComparison';
import PersonalizationInsights from './PersonalizationInsights';

const ResumeAnalyzer = () => {
  // Sample data - in a real app, this would come from an API or file upload
  const resumeData = {
    resumeScore: {
      ATS_Score: "75%",
      Keyword_Match: "80%",
      Formatting_Issues: 3,
      Readability_Score: "85%",
      Sentence_Complexity: {
        average_words_per_sentence: 15,
        long_sentences_count: 5,
      },
      Spelling_Errors: 2,
      Grammar_Errors: 4,
      summary:
        "The resume has a strong ATS compatibility but could improve readability by simplifying long sentences and reducing grammatical errors.",
    },
    visualRepresentations: {
      Keyword_Match: {
        labels: ["Matched", "Missing"],
        data: [80, 20],
        chartType: "doughnut",
      },
      Skill_Distribution: {
        categories: ["Technical", "Soft Skills", "Certifications"],
        data: [60, 30, 10],
        chartType: "bar",
      },
      Experience_Breakdown: {
        years: ["2018", "2019", "2020", "2021", "2022"],
        roles: ["Intern", "Junior Developer", "Mid-level Developer", "Senior Developer", "Lead Engineer"],
        chartType: "timeline",
      },
      Formatting_Errors: {
        error_types: ["font inconsistency", "alignment issue", "spacing errors"],
        count: [1, 1, 1],
        chartType: "heatmap",
      },
      Keyword_Density: {
        keywords: ["JavaScript", "React", "Node.js"],
        density: [5, 4, 6],
        chartType: "doughnut",
      },
      Education_vs_Experience: {
        education: 40,
        experience: 60,
        chartType: "pie",
      },
      summary:
        "The resume highlights strong technical expertise, but missing keywords and minor formatting errors can be improved.",
    },
    improvementSuggestions: {
      Actionable_Tips: ["Use more action verbs", "Reduce long sentences", "Include more quantifiable achievements"],
      Bullet_Point_Strength: "Good",
      Grammar_Clarity_Check: ["Reword sentence in the summary section", "Fix verb tense inconsistencies"],
      Quantify_Achievements: ["Increased efficiency by 20%", "Reduced bug occurrence by 30%"],
      Optimize_Keyword_Usage: {
        missing_keywords: ["Agile", "Microservices"],
        impact: "medium",
      },
      Formatting_Fixes: {
        issues: ["Spacing inconsistency", "Unclear section headings"],
        recommendations: ["Use consistent spacing", "Bold section headings for clarity"],
      },
      Skills_Enhancement_Suggestions: {
        current_skills: ["JavaScript", "React"],
        suggested_skills: ["GraphQL", "Docker"],
        importance: "high",
      },
      summary:
        "Focusing on minor formatting fixes, keyword optimization, and quantifiable achievements will significantly enhance the resume.",
    },
    jobFitAnalysis: {
      Match_Percentage: "78%",
      Alternative_Job_Suggestions: ["Frontend Developer", "Full Stack Developer"],
      Comparison_with_Industry_Resumes:
        "The resume is above average in keyword match but needs improvement in formatting.",
      Top_Industries_Matching_Profile: ["Tech", "E-commerce"],
      Job_Market_Trend_Analysis: {
        high_demand_jobs: ["Software Engineer", "Cloud Engineer"],
        low_demand_jobs: ["Manual Tester", "Data Entry Operator"],
      },
      summary: "The resume aligns well with industry demands, but optimizing keywords can increase job opportunities.",
    },
    selectionProbability: {
      current_chance: "65%",
      improved_chance_after_changes: "85%",
      HR_Review_Likelihood: "70%",
      Recruiter_Scan_Duration: "7 seconds",
      summary: "With improvements, the resume can increase its chances of being shortlisted by recruiters.",
    },
    resumeBenchmarking: {
      Comparison_with_Top_Resumes: {
        average_score_of_top_resumes: "85%",
        resume_score_difference: "10%",
      },
      Industry_Average_Keyword_Match: "82%",
      summary: "The resume is slightly below the top industry benchmarks, mainly due to keyword gaps.",
    },
    personalizationInsights: {
      Resume_Tone: "Formal",
      Engagement_Level: "78%",
      Consistency_Check: {
        tense_inconsistencies: 2,
        pronoun_usage: "correct",
      },
      summary:
        "The resume maintains a professional tone but could improve engagement with a more dynamic language style.",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Analyzer</h1>
          <p className="text-gray-600 mt-1">AI-powered resume feedback and analysis</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Main score card - spans full width on mobile, 8 columns on desktop */}
            <div className="lg:col-span-8">
              <ResumeScoreCard data={resumeData.resumeScore} />
            </div>

            {/* Selection probability - spans full width on mobile, 4 columns on desktop */}
            <div className="lg:col-span-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Selection Probability</h3>
                  <div className="mt-4 flex flex-col items-center">
                    <div className="text-5xl font-bold text-blue-600">
                      {resumeData.selectionProbability.current_chance}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Current chance of selection</p>
                    <div className="mt-4 text-3xl font-semibold text-green-600">
                      {resumeData.selectionProbability.improved_chance_after_changes}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">After suggested improvements</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{resumeData.selectionProbability.summary}</p>
                </div>
              </div>
            </div>

            {/* Visual feedback section - spans full width */}
            <div className="lg:col-span-12">
              <VisualFeedback data={resumeData.visualRepresentations} />
            </div>

            {/* Improvement suggestions - spans 6 columns on desktop */}
            <div className="lg:col-span-6">
              <ImprovementSuggestions data={resumeData.improvementSuggestions} />
            </div>

            {/* Job fit analysis - spans 6 columns on desktop */}
            <div className="lg:col-span-6">
              <JobFitAnalysis data={resumeData.jobFitAnalysis} />
            </div>

            {/* Resume benchmarking - spans 6 columns on desktop */}
            <div className="lg:col-span-6">
              <ResumeComparison data={resumeData.resumeBenchmarking} />
            </div>

            {/* Personalization insights - spans 6 columns on desktop */}
            <div className="lg:col-span-6">
              <PersonalizationInsights data={resumeData.personalizationInsights} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeAnalyzer;