import { Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage.jsx";
import Login from './pages/login';
import Register from './pages/registration';
import JobList from './pages/JobListingsPage';
import JobDetails from './pages/JobDetailPage';

import CandidateDashboard from './pages/CandidateDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar.jsx';
import ApplyPage from './pages/ApplyForm.jsx';
import PostJobs from './pages/PostJob.jsx';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        {/* <Route path="/post-job" element={<PostJob />} /> */}
        <Route path="/dashboard/candidate" element={<CandidateDashboard />} />
        <Route path="/dashboard/employer" element={<EmployerDashboard />} />
        <Route path="/apply/:jobId" element={<ApplyPage />} />
        <Route path="/post job" element={<PostJobs />} />
        <Route path="/job/:id" element={<JobDetails/>} />
        

      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
