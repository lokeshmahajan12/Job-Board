const ApplicationForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold text-indigo-700">Apply for this job</h3>
      <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <textarea placeholder="Cover Letter" required className="w-full p-2 border rounded" rows="4"></textarea>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Submit</button>
    </form>
  );
};

export default ApplicationForm;
