import React, { useState } from "react";
import BookCard from "../ui/BookCard";
import { books } from "../../data/books";
import Footer from "../footer/Footer";

const BooksPage = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.class.toLowerCase().includes(search.toLowerCase()) ||
      book.board.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-green-800 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Knowledge Library
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700">
            Access all types of books – academic, competitive, and beyond – free
            to download and explore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 
              placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-sm
              transition shadow-sm"
          />
        </div>

        {/* Divider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <hr className="border-gray-300" />
          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-white px-4 text-sm text-green-700 font-medium"
          >
            Browse All Books
          </span>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No books found. Try a different search term.
          </p>
        )}

        {/* Benefits Section */}
        <section className="my-20">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-10">
            Why Choose Our Library?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              [
                "Diverse Collection",
                "From NCERT to novels, explore a wide range of books.",
              ],
              [
                "Free & Open",
                "Access all materials without restrictions or hidden costs.",
              ],
              [
                "Learning First",
                "Focused on students, readers, and curious minds alike.",
              ],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-green-100 to-white rounded-xl 
                border border-green-200 shadow-md text-center 
                hover:shadow-lg hover:shadow-green-200 transition"
              >
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="text-center bg-gradient-to-r from-green-100 via-white to-green-50 
          p-10 rounded-2xl shadow-xl mb-20 border border-green-200"
        >
          <h3 className="text-2xl font-semibold mb-3 text-green-800">
            Start Your Journey
          </h3>
          <p className="mb-6 max-w-xl mx-auto text-sm md:text-base text-gray-700 font-light">
            Dive into knowledge. Access books anytime, anywhere, without limits.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow 
              hover:bg-green-500 transition"
          >
            Contact Us
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BooksPage;
