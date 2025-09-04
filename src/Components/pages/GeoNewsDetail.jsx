import React from "react";
import { useParams } from "react-router-dom";
import { geoNews } from "../../data/geonews";

const GeoNewsDetail = () => {
  const { id } = useParams();
  const news = geoNews.find((n) => n.id === id);

  if (!news) return <p className="text-center mt-10">News not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={news.image}
          alt={news.title}
          className="w-full lg:w-1/3 h-auto rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
          <p className="text-gray-700 mb-2">Category: {news.category}</p>
          <p className="mt-4">{news.description}</p>
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Watch Live Updates →
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeoNewsDetail;
