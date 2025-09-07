import React from "react";
import { classes } from "../../data/classes";
import ClassCard from "../ui/ClassCard";
import Footer from "../footer/Footer";

const ClassesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12 rounded-b-2xl relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold text-green-800 mb-3">Online Classes</h1>
          <p className="text-base text-gray-700 max-w-xl mx-auto">
            Live and recorded classes by top educators. Access anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="container mx-auto px-4 pb-20">
        {classes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {classes.map((cls) => (
              <ClassCard key={cls.id} cls={cls} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-20">No classes available right now.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ClassesPage;
