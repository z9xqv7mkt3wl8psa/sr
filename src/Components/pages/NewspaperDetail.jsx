import React from "react";
import { useParams } from "react-router-dom";
import { newspapers } from "../../data/newspapers";
import Footer from "../footer/Footer";

const NewspaperDetail = () => {
  const { id } = useParams();
  const paper = newspapers.find((n) => n.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Newspaper not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div
        className="relative w-full h-60 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center text-center mb-10"
        style={{ backgroundImage: `url('${paper.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{paper.title}</h1>
          <p className="text-sm sm:text-base">{paper.language} | {paper.publisher}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-green-800 mb-4">About the Newspaper</h2>
          <p className="text-gray-700 text-sm mb-6">{paper.description}</p>
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-500 transition"
          >
            Read Today’s Edition
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewspaperDetail;
