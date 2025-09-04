import React from "react";
import GeoNewsCard from "../ui/GeoNewsCard";
import { geoNews } from "../../data/geonews";

const GeoNewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Live Geo-political & Government News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {geoNews.map((news) => (
          <GeoNewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default GeoNewsPage;
