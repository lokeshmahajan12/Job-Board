const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// POST /api/jobs => job post karne ke liye
router.post('/', async (req, res) => {
  try {
    const jobData = req.body;
    const job = new Job(jobData);
    await job.save();
    res.status(201).json({ message: 'Job posted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to post job' });
  }
});

// Optional: GET /api/jobs => sab jobs laane ke liye
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
});

router.post('/', async (req, res) => {
  try {
    const job = new JobModel(req.body);
    const savedJob = await job.save();
    res.json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving job" });
  }
});

module.exports = router;
