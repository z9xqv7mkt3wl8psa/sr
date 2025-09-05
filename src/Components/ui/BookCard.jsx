import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`} className="block group">
      <div
        className="bg-gradient-to-br from-stone-900 to-black rounded-xl overflow-hidden 
        h-96 w-full max-w-sm mx-auto flex flex-col border border-amber-900/40 
        shadow-md shadow-black/40 transition-all duration-300 
        group-hover:shadow-lg group-hover:shadow-amber-700/30 
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
              bg-black/50"
           
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        {/* Book Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3
            className="text-base font-semibold text-amber-300 line-clamp-1 
            group-hover:text-amber-200 transition"
          >
            {book.title}
          </h3>
          <p className="text-xs text-amber-500/70 mt-1">
            Class {book.class} | {book.board}
          </p>
          <p className="text-xs text-amber-100/70 mt-2 line-clamp-2">
            {book.description}
          </p>

          {/* Button */}
          <div className="mt-auto pt-3">
            <span
              className="text-sm text-amber-400 font-medium group-hover:text-amber-200 
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
