import React from "react";
import BookCard from "../ui/BookCard";
import { books } from "../../data/books";

const BooksPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Top Books for School, College & Competitive Exams
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
