import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ cls }) => {
  return (
    <Link to={`/classes/${cls.id}`} className="block group">
      <div className="bg-white rounded-xl border border-green-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        <div className="h-44 relative">
          <img
            src={cls.image}
            alt={cls.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col">
          <h3 className="text-green-800 font-semibold text-base group-hover:text-green-700 transition line-clamp-1">
            {cls.title}
          </h3>
          <p className="text-xs text-green-700 mt-1">
            Class {cls.class} | {cls.board}
          </p>
          <p className="text-xs text-gray-600 mt-2 line-clamp-2">
            {cls.description}
          </p>
          <div className="mt-auto pt-3">
            <span className="text-sm text-green-700 font-medium group-hover:text-green-900 flex items-center gap-1">
              ➜ View Class
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClassCard;
