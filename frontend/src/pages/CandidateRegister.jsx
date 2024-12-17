import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CandidateRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    party: "",
    image: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copysignupInfo = { ...formData };
    copysignupInfo[name] = value;
    setFormData(copysignupInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);

    // checking all input are filled
    const { name, age, party, image } = formData;
    if (!name || !age || !party || !image) {
      return alert("Please Enter All Fields");
    }

    // backend connection
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:3000/candidate";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      //after getting result destructured form console
      const { error } = result;
      // go to login page after signup success
      if (token) {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Register Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin-dashboard");
      } else if (error) {
        Swal.fire({
          position: "center",
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
    setFormData({
      name: "",
      age: "",
      party: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Candidate Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="party"
              className="block text-sm font-medium text-gray-700"
            >
              Party Name
            </label>
            <input
              style={{ textTransform: "uppercase" }}
              type="text"
              id="party"
              name="party"
              value={formData.party}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Party Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateRegister;
