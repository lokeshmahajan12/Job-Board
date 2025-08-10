const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, createdBy: req.userId });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("createdBy", "name");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
