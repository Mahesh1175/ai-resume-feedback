import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const HomePage = ({ user }) => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!user) {
      navigate("/signin");
      toast.error('You must sign in first!');
      return;
    }

    if (!file) return toast.warn("Please upload a resume file.");

    setIsLoading(true);
    setFeedback("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      setFeedback(data.feedback || "No feedback available.");

      navigate("/resume-analysis", { state: { feedback: data.feedback } });
    } catch (error) {
      console.error("Upload Error:", error);
      toast.error("Error connecting to the server.");
      setFeedback("Error retrieving feedback.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#212121]">
        <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg w-full max-w-lg text-center text-white">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            AI Resume Feedback✨
          </h1>
          {/* <h1 className="text-3xl font-bold text-gray-100 mb-4">
  Make your resume shine 💫
</h1> */}

          {/* File Upload Box */}
          <label className="block w-full cursor-pointer">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden">
              <div className="flex justify-center">
                <div className="w-full p-3">
                  <div className="relative h-48 rounded-lg border-2 border-dashed border-gray-500 bg-[#333] flex justify-center items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                    <div className="absolute flex flex-col items-center pointer-events-none">
                      <img
                        alt="File Icon"
                        className="mb-3 h-16 opacity-80"
                        src="/images/file.png"
                      />
                      <span className="block text-gray-300 font-semibold">
                        Drag & Drop your files here
                      </span>
                      <span className="block text-gray-400 font-normal mt-1">
                        or click to upload
                      </span>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      className="h-full w-full opacity-1 cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </label>

          {file && <p className="mt-2 text-gray-300">Selected: {file.name}</p>}

          {/* Upload & Analyze Button */}
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className={`mt-4 w-full font-semibold py-2 px-4 rounded-lg shadow-md transition ${isLoading
              ? "bg-[#404040] cursor-not-allowed"
              : "bg-[#FFD700] text-[#212121] hover:bg-[#FFC107]"
              }`}
          >
            {isLoading ? "Processing..." : "Upload & Analyze"}
          </button>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="text-center mt-6">
              <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
              ></div>
              <h2 className="text-gray-300 mt-4">Analyzing your resume...</h2>
              <p className="text-gray-400">
                Your career boost is on the way
              </p>
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default HomePage;