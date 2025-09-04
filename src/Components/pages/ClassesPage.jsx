import React from "react";
import ClassCard from "../ui/ClassCard";
import { classes } from "../../data/classes";

const ClassesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Online Classes for UPSC, NEET, JEE & State Exams
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <ClassCard key={classItem.id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
