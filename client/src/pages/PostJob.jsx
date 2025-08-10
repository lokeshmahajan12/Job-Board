import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    jobType: "",
    skills: "",
    experience: "",
    deadline: "",
    contactEmail: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJobData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    if (!res.ok) throw new Error("Failed to post job");

    const newJob = await res.json();

    alert("Job posted successfully!");

    // ✅ फक्त एकदाच navigate करायचं
    navigate("/jobs", { state: { newJob } });


  } catch (error) {
    console.error(error);
    alert("Error posting job. Please try again.");
  }
};


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Job Title *" value={jobData.title} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="company" placeholder="Company Name *" value={jobData.company} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Job Description *" value={jobData.description} onChange={handleChange} rows="5" required className="w-full p-2 border rounded" />
        <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="salary" placeholder="Salary Range" value={jobData.salary} onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="jobType" value={jobData.jobType} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Select Job Type *</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        <input type="text" name="skills" placeholder="Required Skills" value={jobData.skills} onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="experience" value={jobData.experience} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Experience Level *</option>
          <option value="Fresher">Fresher</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
        <input type="date" name="deadline" value={jobData.deadline} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="contactEmail" placeholder="Contact Email *" value={jobData.contactEmail} onChange={handleChange} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full py-2 rounded text-white bg-indigo-600 hover:bg-indigo-700">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;

