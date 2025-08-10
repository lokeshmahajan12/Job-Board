const express = require("express");
const multer = require("multer");
const Application = require("../models/Application");

const router = express.Router();

// Memory storage - file disk वर न ठेवता RAM मध्ये store होईल
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, jobId, jobTitle } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    // MongoDB मध्ये file binary + mime type save करतो
    const newApplication = new Application({
      jobId,
      jobTitle,
      name,
      email,
      resume: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    await newApplication.save();

    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
