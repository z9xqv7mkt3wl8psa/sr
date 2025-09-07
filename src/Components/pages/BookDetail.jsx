import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) return <p className="text-center mt-10">Book not found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <img src={book.image} alt={book.title} className="w-full lg:w-1/3 h-auto rounded" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-700 mb-2">Author: {book.author}</p>
          <p className="text-gray-700 mb-2">Category: {book.category}</p>
          <p className="text-gray-700 mb-2">Exam: {book.exam}</p>
          <p className="mt-4">{book.description}</p>
          <a
            href={book.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download / Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
