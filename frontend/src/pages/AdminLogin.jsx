import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  // input field for user
  const [loginInfo, setLoginInfo] = useState({
    aadharCardNumber: "",
    password: "",
  });

  //to navigate components
  const navigate = useNavigate();

  // handling input
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyloginInfo = { ...loginInfo };
    copyloginInfo[name] = value;
    setLoginInfo(copyloginInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(loginInfo);

    // checking all input are filled
    const { aadharCardNumber, password } = loginInfo;
    if (!aadharCardNumber || !password) {
      return alert("Please Enter All Fields");
    }

    // backend connection
    try {
      const url = "http://localhost:3000/admin/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();

      //after getting result destructured form console
      const { token, error } = result;
      // go to home page after login success
      if (token) {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin-dashboard");

        // storing users data
        localStorage.setItem("token", token);
        localStorage.setItem("loggedInAdmin", aadharCardNumber);
      } else if (error) {
        Swal.fire({
          position: "middle",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }

    // Reset form data to clear inputs
    setLoginInfo({
      aadharCardNumber: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your aadhar number
            </label>
            <input
              type="number"
              name="aadharCardNumber"
              value={loginInfo.aadharCardNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
          <Link
            className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center"
            to="/"
          >
            Back to Home
          </Link>
        </form>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link to="/admin-register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
