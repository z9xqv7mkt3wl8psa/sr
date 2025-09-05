import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`} className="block group">
      <div
        className="bg-gradient-to-br from-white to-gray-100 rounded-xl overflow-hidden 
        h-96 w-full max-w-sm mx-auto flex flex-col border border-green-200 
        shadow-md shadow-gray-200 transition-all duration-300 
        group-hover:shadow-lg group-hover:shadow-green-300/50 
        group-hover:-translate-y-2"
      >
        {/* Book Image */}
        <div className="relative h-48">
          <img
            src={
              book.image.startsWith("http")
                ? book.image
                : `/images/${book.image}`
            }
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 
              bg-white"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        {/* Book Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3
            className="text-base font-semibold text-green-800 line-clamp-1 
            group-hover:text-green-700 transition"
          >
            {book.title}
          </h3>
          <p className="text-xs text-green-700 mt-1">
            Class {book.class} | {book.board}
          </p>
          <p className="text-xs text-gray-600 mt-2 line-clamp-2">
            {book.description}
          </p>

          {/* Button */}
          <div className="mt-auto pt-3">
            <span
              className="text-sm text-green-700 font-medium group-hover:text-green-900 
              transition flex items-center gap-1"
            >
              ➜ View Book
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
