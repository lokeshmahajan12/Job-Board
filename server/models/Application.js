const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume: {
    data: Buffer,         // File data binary form मध्ये
    contentType: String   // उदा. 'application/pdf'
  }
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
