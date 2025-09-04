import React from "react";
import { useParams } from "react-router-dom";
import { notes } from "../../data/notes";

const NoteDetail = () => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) return <p className="text-center mt-10">Note not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={note.image}
          alt={note.title}
          className="w-full lg:w-1/3 h-auto rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
          <p className="text-gray-700 mb-2">Author: {note.author}</p>
          <p className="text-gray-700 mb-2">Exam: {note.exam}</p>
          <p className="mt-4">{note.description}</p>
          <a
            href={note.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download Notes →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
