import React from "react";

const LoanCard = ({ loan }) => {
  if (!loan) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {loan.image && (
        <img
          src={loan.image}
          alt={loan.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{loan.title}</h3>
      <p className="text-gray-600">{loan.bank} | Interest: {loan.interest}</p>
      <p className="text-sm mt-1">{loan.description.substring(0, 100)}...</p>
      <a
        href={`/loans/${loan.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        Check Loan Options →
      </a>
    </div>
  );
};

export default LoanCard;
