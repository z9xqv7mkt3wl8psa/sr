import React from "react";

const ClassCard = ({ classItem }) => {
  if (!classItem) return null; // Safe check

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {classItem.image && (
        <img
          src={classItem.image}
          alt={classItem.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{classItem.title}</h3>
      <p className="text-gray-600">{classItem.educator}</p>
      <p className="text-sm mt-1">{classItem.description.substring(0, 100)}...</p>
      <a
        href={classItem.link}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        Start Learning →
      </a>
    </div>
  );
};

export default ClassCard;
