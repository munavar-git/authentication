import { useState } from "react";
import axios from "axios";
import { registerUser } from "../services/authApi";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const user = {
      name,
      email,
      password
    };

    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${email}`
      );

      if (response.data.length > 0) {
        alert("Email already exists");
        return;
      }

      await registerUser(user);

      alert("Registration successful");

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  }

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-96 bg-white p-8 rounded-lg shadow-md">

      <h1 className="text-3xl font-bold text-center mb-6">
        Register
      </h1>

      <form onSubmit={handleRegister}>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <div className="flex mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-l outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="bg-gray-200 px-4 rounded-r hover:bg-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Register button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          Register
        </button>

      </form>

      {/* Login link */}
      <p className="text-center mt-5 text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-500 hover:underline"
        >
          Login
        </Link>
      </p>

    </div>
  </div>
);
}

export default RegisterPage;