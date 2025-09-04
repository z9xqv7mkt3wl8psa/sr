import React from "react";
import { Link } from "react-router-dom";

const InternshipCard = ({ internship }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex flex-col h-full border-l-4 border-green-600 bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6">
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {internship.name}
        </h2>

        {/* Company */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Company:</strong> {internship.company}
        </div>

        {/* Mode */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Mode:</strong> {internship.mode}
        </div>

        {/* Duration */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Duration:</strong> {internship.duration}
        </div>

        {/* Type */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Type:</strong> {internship.type}
        </div>

        {/* Location */}
        <div className="text-gray-700 text-sm mb-2">
          <strong>Location:</strong> {internship.location}
        </div>

        {/* Deadline */}
        <div className="text-red-600 text-sm font-medium mb-5">
          <strong>Deadline:</strong> {internship.deadline}
        </div>

        {/* Apply Button */}
        <div className="mt-auto">
          <Link
            to={`/internships/${internship.id}`}
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
