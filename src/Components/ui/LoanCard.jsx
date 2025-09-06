import React from "react";
import { useNavigate } from "react-router-dom";

const LoanCard = ({ loan }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4 cursor-pointer"
      onClick={() => navigate(`/loans/${loan.id}`)}
    >
      {loan.image && (
        <img
          src={loan.image}
          alt={loan.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{loan.title}</h3>
      <p className="text-gray-600">{loan.provider}</p>
      <p className="text-sm mt-1">{loan.description?.substring(0, 100)}...</p>
      <span className="mt-3 inline-block text-blue-600 font-medium hover:underline">
        View Details →
      </span>
    </div>
  );
};

export default LoanCard;
