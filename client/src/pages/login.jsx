import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    if (res.data.userId) {
  localStorage.setItem("userId", res.data.userId);
  localStorage.setItem("userData", JSON.stringify(res.data.userData));

  alert("Login successful!");

  // Custom event dispatch for Navbar update
  window.dispatchEvent(new Event("login"));

  navigate("/"); // Home page pe redirect
} else {
      alert(res.data.message || "Login failed");
    }
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
