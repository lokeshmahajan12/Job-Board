import React from "react";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  // Skills normalize
  const skillList = Array.isArray(job.skills)
    ? job.skills
    : typeof job.skills === "string"
    ? job.skills.split(",").map((s) => s.trim())
    : [];

  const handleCardClick = () => {
    navigate(`/job/${job._id || job.id}`, { state: { job } });
  };

  return (
    <div
      className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
        {job.title}
      </h3>
      <p className="text-md text-gray-700 dark:text-gray-300 mb-1">
        <strong>Company:</strong> {job.company}
      </p>
      <p className="text-md text-gray-700 dark:text-gray-300 mb-1">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-md text-gray-700 dark:text-gray-300 mb-1">
        <strong>Type:</strong> {job.jobType || job.type || "N/A"}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Skills */}
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
     <strong>Skills:</strong> {skillList.join(", ")}
</p>

      {/* View Details Button */}
      <button
        onClick={handleCardClick}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        View Details
      </button>
    </div>
  );
}
