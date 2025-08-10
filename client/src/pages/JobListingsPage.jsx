import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { useNavigate,useLocation } from "react-router-dom";

export default function JobListingsPage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Backend मधून Jobs मिळवणारा function
  const fetchJobs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs");
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // 🔹 पेज लोड झाल्यावर किंवा नवीन Job आल्यावर run होईल
// useEffect(() => {
//   if (location.state?.newJob) {
//     // ✅ नवीन job लगेच UI मध्ये दाखव
//     setJobs((prevJobs) => [...prevJobs, location.state.newJob]);
//   } else {
//     // ✅ जुने jobs API मधून आणा
//     fetchJobs();
//   }
// }, [location.state]);

useEffect(() => {
  if (location.state?.newJob) {
    setJobs((prev) => [...prev, location.state.newJob]); // लगेच add कर
  } else {
    fetchJobs(); // आधीचा DB मधला fetch
  }
}, [location.state]);
  useEffect(() => {
  fetchJobs();
}, []);




  // 🔹 जॉब detail page ला navigate करणे
  const handleViewDetails = (id) => {
    navigate(`/jobs/${id}`);
  };

  // 🔹 Search filter
  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Jobs</h2>
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job._id || job.id}
              job={job}
              onClick={() => handleViewDetails(job._id || job.id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No jobs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
