import React from "react";
import { useParams } from "react-router-dom";
import { geonews } from "../../data/geonews";
import Footer from "../footer/Footer";

const GeoNewsDetail = () => {
  const { id } = useParams();
  const news = geonews.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="text-center text-red-500 font-semibold mt-20 text-lg">
        News article not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-center mb-10 rounded-b-2xl"
        style={{ backgroundImage: `url('${news.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-3xl md:text-4xl font-bold">{news.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mb-16">
        <p className="text-sm text-gray-500 mb-4">Published on: {news.date}</p>
        <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>

        {news.source && (
          <p className="mt-6 text-sm text-blue-700 underline">
            <a href={news.source} target="_blank" rel="noopener noreferrer">
              Source Link
            </a>
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GeoNewsDetail;
