import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[url('https://images.thequint.com/thequint%2F2022-01%2Fb874ccff-fa3d-4c74-a34b-cfea9e615ea0%2FSC_PIL.jpeg')] min-h-screen flex items-center justify-center bg-cover">
        <div className="bg-white  p-8 rounded-lg shadow-md w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Welcome to the Voting Platform
          </h1>
          <p className="text-gray-700 mb-6 font-semibold">
            Participate in the voting process and make your voice heard. Click
            below to start voting or register as a voter.
          </p>
          <div className="space-y-4">
            <Link
              to="/admin"
              className="block w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Admin Login
            </Link>
            <Link
              to="/register"
              className="block w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Register as a Voter
            </Link>
            <Link
              to="/login"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Vote Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
