import React from "react";
import { useParams } from "react-router-dom";
import { newspapers } from "../../data/newspapers";

const NewspaperDetail = () => {
  const { id } = useParams();
  const newspaper = newspapers.find((n) => n.id === id);

  if (!newspaper) return <p className="text-center mt-10">Newspaper not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={newspaper.image}
          alt={newspaper.title}
          className="w-full lg:w-1/3 h-auto rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{newspaper.title}</h1>
          <p className="text-gray-700 mb-2">Language: {newspaper.language}</p>
          <p className="mt-4">{newspaper.description}</p>
          <a
            href={newspaper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Read Today’s Paper →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewspaperDetail;
