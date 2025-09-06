import React from "react";
import { useParams } from "react-router-dom";
import { loans } from "../../data/loans";
import Footer from "../footer/Footer";

const LoanDetail = () => {
  const { id } = useParams();
  const loan = loans.find((l) => l.id === id);

  if (!loan) return <p className="text-center mt-10">Loan not found!</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={loan.image}
            alt={loan.title}
            className="w-full lg:w-1/3 h-auto rounded"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{loan.title}</h1>
            <p className="text-gray-700 mb-2">Category: {loan.category}</p>
            <p className="text-gray-700 mb-2">Provider: {loan.provider}</p>
            <p className="mt-4">{loan.description}</p>
            <a
              href={loan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              APPLY NOW →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoanDetail;
