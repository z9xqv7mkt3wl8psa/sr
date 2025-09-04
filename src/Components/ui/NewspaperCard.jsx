import React from "react";

const NewspaperCard = ({ newspaper }) => {
  if (!newspaper) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {newspaper.image && (
        <img
          src={newspaper.image}
          alt={newspaper.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{newspaper.title}</h3>
      <p className="text-gray-600">{newspaper.language}</p>
      <p className="text-sm mt-1">{newspaper.description.substring(0, 100)}...</p>
      <a
        href={`/newspapers/${newspaper.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        Read Today’s Paper →
      </a>
    </div>
  );
};

export default NewspaperCard;
