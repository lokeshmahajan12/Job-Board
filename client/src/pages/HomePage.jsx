import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 animate-fade-in">
          Welcome to JobBoard
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Discover top opportunities or post jobs with ease. Find your dream team or dream role here.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Get Started
          </Link>
          <Link
            to="/jobs"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
