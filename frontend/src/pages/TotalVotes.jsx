import React, { useEffect, useState } from "react";

const TotalVotes = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/candidate");
      const data = await res.json();
      setCandidates(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Vote Count</h1>

          {/* Candidate 1 */}
          {candidates.map((candidate) => (
            <div
              key={candidate._id}
              className="mb-4 p-4 border rounded shadow-sm flex items-center"
            >
              <img src={candidate.image} alt="" className="h-20 w-20 mx-2" />
              <h2 className="text-lg font-medium">{candidate.name}</h2>
              <p className="text-gray-600 mx-8">{candidate.voteCount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalVotes;
