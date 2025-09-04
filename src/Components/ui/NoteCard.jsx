import React from "react";

const NoteCard = ({ note }) => {
  if (!note) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {note.image && (
        <img
          src={note.image}
          alt={note.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{note.title}</h3>
      <p className="text-gray-600">{note.author}</p>
      <p className="text-sm mt-1">{note.description.substring(0, 100)}...</p>
      <a
        href={`/notes/${note.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        Download Notes →
      </a>
    </div>
  );
};

export default NoteCard;
