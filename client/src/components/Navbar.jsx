import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Login status check karo jab component load ho ya localStorage update ho
 useEffect(() => {
  const checkLoginStatus = () => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  };

  checkLoginStatus();

  window.addEventListener("storage", checkLoginStatus);

  // Agar tu app ke andar kahin login kar raha hai, tab bhi Navbar update hona chahiye
  window.addEventListener("login", checkLoginStatus);

  return () => {
    window.removeEventListener("storage", checkLoginStatus);
    window.removeEventListener("login", checkLoginStatus);
  };
 }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        JobBoard
      </h1>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/jobs" className="hover:text-blue-500">
          Jobs
        </Link>
        <Link to="/post job" className="hover:text-blue-500">
          Post Job
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
            <Link to="/register" className="hover:text-blue-500">
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
