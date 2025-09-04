import React from "react";
import { useParams } from "react-router-dom";
import { schemes } from "../../data/schemes";

const SchemeDetail = () => {
  const { id } = useParams();
  const scheme = schemes.find((s) => s.id === id);

  if (!scheme) return <p className="text-center mt-10">Scheme not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={scheme.image}
          alt={scheme.title}
          className="w-full lg:w-1/3 h-auto rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{scheme.title}</h1>
          <p className="text-gray-700 mb-2">Category: {scheme.category}</p>
          <p className="mt-4">{scheme.description}</p>
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Schemes →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
