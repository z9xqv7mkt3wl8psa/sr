import React from "react";
import { useParams } from "react-router-dom";
import { classes } from "../../data/classes";

const ClassDetail = () => {
  const { id } = useParams();
  const classItem = classes.find((c) => c.id === id);

  if (!classItem) return <p className="text-center mt-10">Class not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={classItem.image}
          alt={classItem.title}
          className="w-full lg:w-1/3 h-auto rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{classItem.title}</h1>
          <p className="text-gray-700 mb-2">Educator: {classItem.educator}</p>
          <p className="text-gray-700 mb-2">Type: {classItem.type}</p>
          <p className="text-gray-700 mb-2">Exam: {classItem.exam}</p>
          <p className="mt-4">{classItem.description}</p>
          <a
            href={classItem.link}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Start Learning →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
