import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
  <img src={`/images/${book.image}`} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-sm mt-1">{book.description.substring(0, 100)}...</p>
      <a
        href={`/books/${book.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        View Details
      </a>
    </div>
  );
};

export default BookCard;
