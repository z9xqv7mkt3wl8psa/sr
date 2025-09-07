import React from "react";
import { Link } from "react-router-dom";

const SchemeCard = ({ scheme }) => {
  return (
    <Link to={`/schemes/${scheme.id}`} className="block group">
      <div className="bg-white border border-green-200 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
        <img
          src={scheme.image}
          alt={scheme.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-800 group-hover:text-green-700">{scheme.title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{scheme.description}</p>
          <div className="mt-3 text-green-700 text-sm font-medium group-hover:text-green-900">
            ➜ View Scheme
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SchemeCard;
