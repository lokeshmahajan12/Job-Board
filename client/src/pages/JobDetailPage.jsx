import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function JobDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const [job, setJob] = useState(location.state?.job || null);

  useEffect(() => {
    // जर state मध्ये job नसेल तर backend वरून fetch कर
    if (!job) {
      fetch(`http://localhost:5000/jobs/${id}`) // तुझा API endpoint इथे दे
        .then((res) => res.json())
        .then((data) => setJob(data))
        .catch((err) => console.error("Error fetching job details:", err));
    }
  }, [id, job]);

  if (!job) {
    return <p className="text-center text-gray-500">Loading job details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg mt-6">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        {job.title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        <strong>Company:</strong> {job.company}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        <strong>Type:</strong> {job.jobType || job.type || "N/A"}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {(Array.isArray(job.skills)
          ? job.skills
          : typeof job.skills === "string"
          ? job.skills.split(",").map((s) => s.trim())
          : []
        ).map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white text-xs font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={`/apply/${job._id || job.id}?title=${encodeURIComponent(job.title)}`}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Apply Now
      </a>
    </div>
  );
}
