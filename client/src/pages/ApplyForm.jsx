import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function ApplyPage() {
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const jobTitle = queryParams.get("title");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("jobId", jobId);
    formData.append("jobTitle", jobTitle);

    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        alert(`✅ Thanks for applying for this "${jobTitle}" job!`);
        navigate("/"); // Home page ला redirect
      } else {
        alert("❌ Failed to submit application");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Apply for Job #{jobId}</h2>
      {jobTitle && (
        <p className="text-lg text-gray-700 mb-4">Position: {jobTitle}</p>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Resume</label>
          <input
            type="file"
            name="resume"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
