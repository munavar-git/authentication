import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
async function handleLogin(e) {
  e.preventDefault();

  if (!email || !password) {
    alert("All fields are required");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/users`
    );

 const foundUser = response.data.find(
  (user) =>
    user.email &&
    user.email.toLowerCase() === email.toLowerCase() &&
    user.password === password
);

    if (foundUser) {
      login(foundUser);

      alert("Login successful");

      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  } catch (error) {
  console.log("LOGIN ERROR:", error);
  console.log("ERROR RESPONSE:", error.response);
  console.log("ERROR MESSAGE:", error.message);

  alert("Login failed");
}
}

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-96 bg-white p-8 rounded-lg shadow-md">

      <h1 className="text-3xl font-bold text-center mb-6">
        Login
      </h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-blue-500 mb-4"
        >
          {showPassword ? "Hide" : "Show"}
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>

    </div>
  </div>
);
}

export default LoginPage;