import React from "react";

const GeoNewsCard = ({ news }) => {
  if (!news) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{news.title}</h3>
      <p className="text-gray-600">{news.category}</p>
      <p className="text-sm mt-1">{news.description.substring(0, 100)}...</p>
      <a
        href={`/geonews/${news.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        Watch Live Updates →
      </a>
    </div>
  );
};

export default GeoNewsCard;
