import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import Footer from '../footer/Footer'

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course)
    return <p className="text-center mt-10">Course not found!</p>;

  return (
    <div className="flex flex-col min-h-screen"> {/* Full height layout */}
      <div className="container mx-auto px-4 py-8 flex-1"> {/* flex-1 makes content take remaining space */}
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full lg:w-1/3 h-auto rounded"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-700 mb-2">Provider: {course.provider}</p>
            <p className="text-gray-700 mb-2">Mode: {course.mode}</p>
            <p className="mt-4">{course.description}</p>
            {course.link && (
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Enroll Now →
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer /> {/* Footer now sticks to bottom if content is short */}
    </div>
  );
};

export default CourseDetail;
