
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  if (!course) return null;

  return (
    <div
      className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4 cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
      <p className="text-gray-600">{course.provider} | {course.mode}</p>
      <p className="text-sm mt-1">
        {course.description?.substring(0, 100)}...
      </p>
      <span className="mt-3 inline-block text-blue-600 font-medium hover:underline">
        View Details →
      </span>
    </div>
  );
};

export default CourseCard;
