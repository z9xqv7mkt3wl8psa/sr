import React from "react";
import { Link } from "react-router-dom";

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex flex-col h-full border-l-4 border-blue-600 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6">
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {scholarship.name}
        </h2>

        {/* Award */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Award:</strong> {scholarship.award}
        </div>

        {/* Eligibility */}
        <div className="text-gray-600 text-sm mb-3 leading-snug">
          <strong>Eligibility:</strong> {scholarship.eligibility}
        </div>

        {/* Class */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Class:</strong> {scholarship.classLevel}
        </div>

        {/* State */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>State:</strong> {scholarship.state}
        </div>

        {/* Type */}
        <div className="text-gray-700 text-sm mb-4">
          <strong>Type:</strong> {scholarship.type}
        </div>

        {/* Deadline */}
        <div className="text-red-600 text-sm font-medium mb-5">
          <strong>Deadline:</strong> {scholarship.deadline}
        </div>

        {/* Apply Button */}
        <div className="mt-auto">
          <Link
            to={`/scholarships/${scholarship.id}`}
            className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
