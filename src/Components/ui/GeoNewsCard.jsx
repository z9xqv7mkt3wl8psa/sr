import React from "react";
import { Link } from "react-router-dom";

const GeoNewsCard = ({ news }) => {
  return (
    <Link to={`/geonews/${news.id}`} className="block group">
      <div className="bg-white border border-green-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="h-48 w-full overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col">
          <h3 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2 group-hover:text-green-600 transition">
            {news.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{news.description}</p>
          <span className="text-sm text-green-700 font-medium mt-auto group-hover:text-green-900 transition">
            ➜ Watch Update
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GeoNewsCard;
