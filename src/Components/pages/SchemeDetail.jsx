import React from "react";
import { useParams } from "react-router-dom";
import { schemes } from "../../data/schemes";
import Footer from "../footer/Footer";

const SchemeDetail = () => {
  const { id } = useParams();
  const scheme = schemes.find((s) => s.id === id);

  if (!scheme)
    return <p className="text-center mt-20 text-red-500 text-xl font-semibold">Scheme not found!</p>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="relative w-full h-72 bg-cover bg-center flex items-center justify-center text-center mb-10 rounded-b-2xl"
        style={{ backgroundImage: `url(${scheme.image})` }}>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-green-800 px-4">
          <h1 className="text-4xl font-bold mb-2">{scheme.title}</h1>
          <p className="text-sm text-green-700">{scheme.ministry}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mb-16">
        <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 mb-10">
          <h2 className="text-xl font-semibold text-green-800 mb-3">Description</h2>
          <p className="text-gray-700 mb-6">{scheme.description}</p>

          <h3 className="text-lg font-semibold text-green-700 mb-2">Eligibility</h3>
          <p className="text-gray-700 mb-4">{scheme.eligibility}</p>

          <h3 className="text-lg font-semibold text-green-700 mb-2">Benefits</h3>
          <p className="text-gray-700 mb-4">{scheme.benefits}</p>

          <h3 className="text-lg font-semibold text-green-700 mb-2">How to Apply</h3>
          <p className="text-gray-700 mb-6">{scheme.howToApply}</p>

          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-500 transition"
          >
            Visit Official Website
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SchemeDetail;
