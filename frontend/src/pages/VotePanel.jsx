import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const VoterPanel = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/candidate");
      const data = await res.json();
      setCandidates(data);
    };
    fetchData();
  }, []);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleVote = async () => {
    if (selectedCandidate) {
      // Add backend integration to submit the vote here
      try {
        // getting data from localstorage
        const token = localStorage.getItem("token");

        const url = `http://localhost:3000/candidate/vote/${selectedCandidate._id}`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass the token here
          },
        });

        const result = await response.json();

        if (!result.ok) {
          Swal.fire({
            position: "middle",
            icon: "error",
            title: result.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }

      setVoteSubmitted(true);

      // logout;

      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a candidate to vote for",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Voter Panel</h2>
        {!voteSubmitted ? (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select a Candidate:</h3>
            <div className="space-y-4">
              {candidates.map((candidate) => (
                <div key={candidate._id} className="flex items-center">
                  <img
                    src={candidate.image}
                    alt=""
                    className="h-20 w-20 mx-2"
                  />
                  <input
                    type="radio"
                    id={`candidate-${candidate._id}`}
                    name="candidate"
                    value={candidate._id}
                    onChange={() => setSelectedCandidate(candidate)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor={`candidate-${candidate._id}`}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {candidate.name}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={handleVote}
              className="w-full bg-blue-600 text-white py-2 px-4 mt-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Vote
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              Thank you for voting!
            </h3>
            <p className="text-sm text-gray-700">
              You have successfully voted for{" "}
              <strong>{selectedCandidate?.name}</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoterPanel;
