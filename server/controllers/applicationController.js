const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const resumeBuffer = req.file.buffer;
    const resumeType = req.file.mimetype;

    const application = await Application.create({
      job: jobId,
      candidate: req.userId,
      resume: resumeBuffer,
      resumeType,
    });
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
