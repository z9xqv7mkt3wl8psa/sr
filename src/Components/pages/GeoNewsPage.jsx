import React from "react";
import { geonews } from "../../data/geonews";
import GeoNewsCard from "../ui/GeoNewsCard";
import Footer from "../footer/Footer";

const GeoNewsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7111687/pexels-photo-7111687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Live Geo-political News
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Real-time coverage of India’s foreign policy, international relations, and strategic developments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-10">
          Today's Major Geo-political Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {geonews.map((news) => (
            <GeoNewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GeoNewsPage;
