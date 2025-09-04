import React from "react";
import CourseCard from "../ui/CourseCard";
import { courses } from "../../data/courses";

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Top Online & Offline Courses to Boost Your Career
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
