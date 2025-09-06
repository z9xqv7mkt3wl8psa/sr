import React, { useState } from "react";
import LoanCard from "../ui/LoanCard";
import { loans } from "../../data/loans";
import Footer from "../footer/Footer";

const LoansPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(loans.map((loan) => loan.category))];
  const filteredLoans = loans.filter((loan) => loan.category === selectedCategory);

  const imageMap = {
    "International Lenders": "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg",
    "Public Banks": "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    "NBFCs": "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg",
    "Government Schemes": "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
    "Private Banks": "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg",
  };

  const descriptionMap = {
    "International Lenders": "Loans from global education partners.",
    "Public Banks": "Secure loans from public sector banks.",
    "NBFCs": "Flexible loans from NBFCs for all needs.",
    "Government Schemes": "Subsidized schemes for students.",
    "Private Banks": "Fast-processing loans from private banks.",
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center mb-16 rounded-3xl overflow-hidden mt-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-6 sm:px-12">
          <h1 className="text-5xl font-bold mb-4">Education Loans</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Access low-interest education loans to fund your higher education dreams in India or abroad.
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
          >
            Browse All Options
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16">
        {/* Categories */}
        {!selectedCategory && (
          <div className="my-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Loan Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="h-48 bg-cover bg-center rounded-lg shadow-lg flex items-end p-6 cursor-pointer transition transform hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${imageMap[cat]}?auto=compress&cs=tinysrgb&dpr=2&w=800')`,
                  }}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white">{cat}</h3>
                    <p className="text-sm text-gray-200 mt-1">{descriptionMap[cat]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filtered Loans */}
        {selectedCategory && (
          <div className="my-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              ← Back to Categories
            </button>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              {selectedCategory} Loans
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLoans.map((loan) => (
                <LoanCard key={loan.id} loan={loan} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LoansPage;
