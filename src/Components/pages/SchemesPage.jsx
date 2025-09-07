import React from "react";
import { schemes } from "../../data/schemes";
import SchemeCard from "../ui/SchemeCard";
import Footer from "../footer/Footer";

const SchemesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1581793/pexels-photo-1581793.jpeg?auto=compress&cs=tinysrgb&w=800')",
        }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-green-800 px-6">
          <h1 className="text-4xl font-bold mb-4">Government Schemes & Yojanas</h1>
          <p className="text-base max-w-xl mx-auto text-gray-700">
            Detailed information on latest Yojanas, welfare schemes, and financial aid programs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SchemesPage;
