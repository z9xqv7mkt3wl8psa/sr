import React from "react";
import { useParams } from "react-router-dom";
import { classes } from "../../data/classes";
import Footer from "../footer/Footer";

const ClassDetail = () => {
  const { id } = useParams();
  const cls = classes.find((c) => c.id === id);

  if (!cls) {
    return <p className="text-center mt-20 text-red-500 text-xl font-semibold">Class not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-60 sm:h-72 bg-cover bg-center flex items-center justify-center text-center mb-10 rounded-b-2xl"
        style={{
          backgroundImage: `url('${cls.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-green-800 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{cls.title}</h1>
          <p className="text-sm sm:text-base text-green-700">
            Class {cls.class} | {cls.board}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mb-16">
        <div className="bg-white border border-green-100 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-800 mb-4">Class Overview</h2>
          <p className="text-sm text-gray-700 mb-6">{cls.description}</p>
          <a
            href={cls.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-500 shadow-md"
          >
            Start Learning →
          </a>
        </div>

        {/* Why Join Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-green-800 text-center mb-6">Why Join This Class?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              ["Expert Educators", "Learn from experienced subject experts."],
              ["Flexible Access", "Watch live or recorded anytime."],
              ["Free Learning", "No cost, just your time and attention."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white border border-green-100 rounded-lg p-5 shadow hover:shadow-md transition text-center"
              >
                <h3 className="text-green-800 font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ClassDetail;
