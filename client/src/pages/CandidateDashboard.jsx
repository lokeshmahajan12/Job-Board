const CandidateDashboard = ({ applications = [] }) => {
  return (
    <section className="p-6 md:p-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">My Job Applications</h2>

      {applications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{app.jobTitle}</h3>
              <p className="text-sm text-gray-500 mb-2">at {app.companyName}</p>

              <div className="text-gray-600 text-sm space-y-1 mb-3">
                <p><strong>Status:</strong> <span className="text-blue-600">{app.status}</span></p>
                <p><strong>Applied On:</strong> {new Date(app.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> {app.location}</p>
                <p><strong>Job Type:</strong> {app.jobType}</p>
                <p><strong>Salary:</strong> ₹{app.salary}</p>
              </div>

              {app.resume && (
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  View Resume
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">You haven’t applied for any jobs yet.</p>
      )}
    </section>
  );
};

export default CandidateDashboard;
