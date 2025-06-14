const createRequestData =(text) => {
  return {
  contents: [
    {
      role: "user",
      parts: [
        {
          text: `Analyze this resume and provide a structured response in JSON format with the following fields:
              
             {
  "resumeScore": {
    "ATS_Score": "percentage value (0-100)",
    "Keyword_Match": "percentage value (0-100)",
    "Formatting_Issues": "count",
    "Readability_Score": "percentage value (0-100)",
    "Sentence_Complexity": {
      "average_words_per_sentence": "number",
      "long_sentences_count": "number"
    },
    "Spelling_Errors": "count",
    "Grammar_Errors": "count",
    "summary": "Brief analysis of the resume's overall ATS compatibility and readability."
  },
  "visualRepresentations": {
    "Keyword_Match": {
      "labels": ["Matched", "Missing"],
      "data": ["percentage value (0-100)", "percentage value (0-100)"],
      "chartType": "doughnut"
    },
    "Skill_Distribution": {
      "categories": ["Technical", "Soft Skills", "Certifications"],
      "data": ["percentage value (0-100)", "percentage value (0-100)", "percentage value (0-100)"],
      "chartType": "bar"
    },
    "Experience_Breakdown": {
      "years": ["year1", "year2", ...],
      "roles": ["role1", "role2", ...],
      "chartType": "timeline"
    },
    "Formatting_Errors": {
      "error_types": ["font inconsistency", "alignment issue", "spacing errors"],
      "count": ["count1", "count2", ...],
      "chartType": "heatmap"
    },
    "Keyword_Density": {
      "keywords": ["keyword1", "keyword2", ...],
      "density": ["percentage value (0-100)", "percentage value (0-100)", ...],
      "chartType": "doughnut"
    },
    "Education_vs_Experience": {
      "education": "percentage value (0-100)",
      "experience": "percentage value (0-100)",
      "chartType": "pie"
    },
    "summary": "Insights from visual representations and what they indicate about the resume."
  },
  "improvementSuggestions": {
    "Actionable_Tips": ["tip1", "tip2", ...],
    "Bullet_Point_Strength": "score",
    "Grammar_Clarity_Check": ["suggestion1", "suggestion2", ...],
    "Quantify_Achievements": ["example1", "example2", ...],
    "Optimize_Keyword_Usage": {
      "missing_keywords": ["keyword1", "keyword2", ...],
      "impact": "high/medium/low"
    },
    "Formatting_Fixes": {
      "issues": ["issue1", "issue2", ...],
      "recommendations": ["fix1", "fix2", ...]
    },
    "Skills_Enhancement_Suggestions": {
      "current_skills": ["skill1", "skill2", ...],
      "suggested_skills": ["skill3", "skill4", ...],
      "importance": "high/medium/low"
    },
    "summary": "Key areas that need improvement and how they can enhance the resume."
  },
  "jobFitAnalysis": {
    "Match_percentage": "percentage value (0-100)",
    "Alternative_Job_Suggestions": ["job1", "job2", ...],
    "Comparison_with_Industry_Resumes": "summary",
    "Top_Industries_Matching_Profile": ["industry1", "industry2", ...],
    "Job_Market_Trend_Analysis": {
      "high_demand_jobs": ["job1", "job2", ...],
      "low_demand_jobs": ["job3", "job4", ...]
    },
    "summary": "How well the resume aligns with industry standards and potential job matches."
  },
  "selectionProbability": {
    "current_chance": "percentage value (0-100)",
    "improved_chance_after_changes": "percentage value (0-100)",
    "HR_Review_Likelihood": "percentage value (0-100)",
    "Recruiter_Scan_Duration": "seconds",
    "summary": "Evaluation of how much the resume improves after suggested changes."
  },
  "resumeBenchmarking": {
    "Comparison_with_Top_Resumes": {
      "average_score_of_top_resumes": "percentage value (0-100)",
      "resume_score_difference": "percentage value (0-100)"
    },
    "Industry_Average_Keyword_Match": "percentage value (0-100)",
    "summary": "How the resume compares to industry-leading resumes."
  },
  "personalizationInsights": {
    "Resume_Tone": "Formal/Conversational/Neutral",
    "Engagement_Level": "percentage value (0-100)",
    "Consistency_Check": {
      "tense_inconsistencies": "count",
      "pronoun_usage": "correct/incorrect"
    },
    "summary": "Analysis of how personal and engaging the resume appears."
  }
}

    
              Resume content: \n\n${text}`
        }
      ]
    }
  ]
}
};
module.exports = createRequestData;