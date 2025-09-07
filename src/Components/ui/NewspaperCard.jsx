import React from "react";
import { Link } from "react-router-dom";

const NewspaperCard = ({ paper }) => {
  return (
    <Link to={`/newspapers/${paper.id}`} className="block group">
      <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-lg transition duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-800 group-hover:text-green-700">
            {paper.title}
          </h3>
          <p className="text-sm text-gray-500">{paper.language} | {paper.publisher}</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{paper.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewspaperCard;
