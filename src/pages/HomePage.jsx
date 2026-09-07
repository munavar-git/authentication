import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Auth System
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
        >
          Logout
        </button>
      </nav>

      {/* Home content */}
      <div className="flex justify-center items-center min-h-[80vh] px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome, {user?.name}! 👋
          </h2>

          <p className="text-gray-600 mb-6">
            You are logged in successfully.
          </p>

          {/* User information */}
          <div className="bg-gray-100 rounded-lg p-4 text-left">
            <p className="mb-2">
              <span className="font-semibold">Name:</span>{" "}
              {user?.name}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {user?.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
          >
            Logout
          </button>

        </div>
      </div>

    </div>
  );
}

export default HomePage;