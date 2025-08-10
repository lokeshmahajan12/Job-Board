const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  location: String,
  salary: String,
  jobType: { type: String, required: true },
  skills: String,
  experience: { type: String, required: true },
  deadline: Date,
  contactEmail: { type: String, required: true },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
