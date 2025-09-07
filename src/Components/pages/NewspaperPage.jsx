import React from "react";
import { newspapers } from "../../data/newspapers";
import NewspaperCard from "../ui/NewspaperCard";
import Footer from "../footer/Footer";

const NewspaperPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div
        className="relative w-full h-72 bg-cover bg-center flex items-center justify-center text-center mb-12"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl font-bold mb-3">Daily Newspaper</h1>
          <p className="text-base">Read top newspapers like The Hindu, Indian Express, and Dainik Jagran for current affairs.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Read Today’s Paper →</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {newspapers.map((paper) => (
            <NewspaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewspaperPage;
