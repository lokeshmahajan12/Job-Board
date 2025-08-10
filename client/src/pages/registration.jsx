// import { useState } from "react";
// import axios from "axios";

// const Registration = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault(); // Prevents page refresh

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         password,
//       });

//       console.log(res.data.message);
//       alert("Registration successful!");
//     } catch (error) {
//       console.error(
//         "Registration failed:",
//         error.response?.data?.message || error.message
//       );
//       alert("Registration failed: " + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleRegister}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
//           Register
//         </h2>

//         <input
//           type="text"
//           placeholder="Name"
//           className="mb-4 w-full p-2 border rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="mb-4 w-full p-2 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="mb-4 w-full p-2 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert(res.data.message || "Registration successful!");

      // Registration success hone ke baad login page pe redirect karo
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="mb-4 w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          Register
        </button>
      </form>
    </div>
  )
};

export default Register;

