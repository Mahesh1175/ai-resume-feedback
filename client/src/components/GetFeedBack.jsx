import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
const GetFeedBack = ({displayFeed}) => {
  return (
    <>
      <div className="mt-6 bg-[#333] p-4 rounded-lg shadow-inner text-left overflow-auto">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Feedback:</h3>
            <ErrorBoundary>
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-gray-200">
                {displayFeed}
              </ReactMarkdown>
            </ErrorBoundary>
          </div>
    </>
  )
}

export default GetFeedBack
