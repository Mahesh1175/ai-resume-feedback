const express = require("express");
const cors = require("cors");
const axios = require("axios");
const multer = require("multer");
const fs = require("fs");
const mammoth = require("mammoth");
const pdfParse = require("pdf-parse"); //  Use pdf-parse instead of pdf-lib
require("dotenv").config();
const createRequestData  = require("./requestedData");
const app = express();
const port = process.env.PORT ||5000;
const upload = multer({ dest: "uploads/" });

app.use(cors({
  origin: "https://ai-resume-feedback.netlify.app",  // allow Netlify domain
  methods: ["GET", "POST"],
}));

app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

console.log(" GEMINI_API_KEY:", GEMINI_API_KEY ? "Loaded " : "Missing ");


//  Corrected PDF text extraction using pdf-parse
async function extractTextFromPDF(filePath) {
  try {
    const pdfBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(pdfBuffer);
    return data.text; // Extracted text from PDF
  } catch (error) {
    console.error(" PDF Extraction Error:", error.message);
    return null;
  }
}

//  Extract text from DOCX (unchanged)
async function extractTextFromDOCX(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } catch (error) {
    console.error(" DOCX Extraction Error:", error.message);
    return null;
  }
}

app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  console.log(` Uploaded file: ${req.file.originalname} (${req.file.mimetype})`);

  try {
    let text = "";
    const filePath = req.file.path;

    if (req.file.mimetype === "application/pdf") {
      text = await extractTextFromPDF(filePath);
    } else if (req.file.mimetype.includes("word")) {
      text = await extractTextFromDOCX(filePath);
    } else {
      return res.status(400).json({ error: "Unsupported file format" });
    }

    fs.unlinkSync(filePath); //  Delete temp file after extraction

    if (!text) {
      return res.status(400).json({ error: "Text extraction failed" });
    }

    console.log(" Extracted Text:", text.substring(0, 200) + "..."); // Log first 200 chars for debugging

    console.log(" Sending request to Gemini API...");

   const requestData = createRequestData(text);

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      requestData
    );

    console.log(" Received AI Response:", response.data);

    res.json({ feedback: response.data.candidates[0].content.parts[0].text });

  } catch (error) {
    console.error(" AI Processing Error:", error.response?.data || error.message);
    res.status(500).json({ error: "AI processing failed", details: error.response?.data || error.message });
  }
});

app.listen(port, () => console.log(` Server running on http://localhost:${port}`));