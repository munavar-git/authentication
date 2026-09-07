import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Auth System
        </h1>

        {/* Navigation links */}
        <div className="flex gap-3">
          
          <Link
            to="/"
            className="px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Home
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </Link>

        </div>
      </nav>

      {/* Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Routes>
    </div>
  );
}

export default App;