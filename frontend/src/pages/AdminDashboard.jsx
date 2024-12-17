// Import necessary libraries and components
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Components for the dashboard
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInAdmin");
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Logout Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/candidate-register" className="hover:text-gray-400">
              Manage Candidates
            </Link>
          </li>
          <li>
            <Link to="/total" className="hover:text-gray-400">
              Vote Count
            </Link>
          </li>
          <button
            onClick={handleLogout}
            className="mt-5 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

const NotFound = () => (
  <div className="p-4 text-center">
    <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
    <Link to="/" className="text-blue-500 hover:underline">
      Go back to Dashboard
    </Link>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <div className="p-4 bg-black">
          <img
            src="https://cdn.sanity.io/images/3tzzh18d/production/63729c5c326b5939c8fa4327d601f214a56b9c8b-1200x675.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
