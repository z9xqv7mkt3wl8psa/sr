import React from "react";

const SchemeCard = ({ scheme }) => {
  if (!scheme) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {scheme.image && (
        <img
          src={scheme.image}
          alt={scheme.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{scheme.title}</h3>
      <p className="text-gray-600">{scheme.category}</p>
      <p className="text-sm mt-1">{scheme.description.substring(0, 100)}...</p>
      <a
        href={`/schemes/${scheme.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        View Schemes →
      </a>
    </div>
  );
};

export default SchemeCard;
