const EmployerDashboard = ({ jobs = [] }) => {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Employer Dashboard</h2>

        {/* Summary Section */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-600">Total Jobs</h3>
            <p className="text-3xl font-bold text-indigo-600">{jobs.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-600">Applications</h3>
            <p className="text-3xl font-bold text-green-600">Coming Soon</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-600">Saved Resumes</h3>
            <p className="text-3xl font-bold text-blue-600">Coming Soon</p>
          </div>
        </div>

        {/* Job List Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-indigo-700">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company} — {job.location}</p>
                <p className="text-sm text-gray-700 mb-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-lg mt-10">
              No jobs posted yet. Start by creating a new job.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmployerDashboard;
