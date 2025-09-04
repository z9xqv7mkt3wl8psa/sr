import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white border-l-4 border-blue-600 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Date:</strong> {article.date}
        </p>
        <p className="text-gray-700 text-sm mb-4">{article.description}</p>
        <div className="mt-auto">
          <Link
            to={`/news/${article.id}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Read Full News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
