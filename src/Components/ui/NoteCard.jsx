import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  return (
    <Link to={`/notes/${note.id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden h-96 border border-blue-200 shadow-md hover:shadow-xl transition-all group-hover:-translate-y-2">
        <div className="h-48">
          <img
            src={note.image}
            alt={note.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col h-48">
          <h3 className="text-blue-800 font-semibold text-base group-hover:text-blue-700 line-clamp-1">
            {note.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {note.exam} | {note.subject}
          </p>
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
            {note.description}
          </p>
          <div className="mt-auto pt-3">
            <span className="text-sm text-blue-600 font-medium group-hover:text-blue-800">
              ➜ View Notes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
