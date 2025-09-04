import React from "react";

const CourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
      <p className="text-gray-600">{course.provider} | {course.mode}</p>
      <p className="text-sm mt-1">{course.description.substring(0, 100)}...</p>
      <a
        href={`/courses/${course.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        View All Courses →
      </a>
    </div>
  );
};

export default CourseCard;
