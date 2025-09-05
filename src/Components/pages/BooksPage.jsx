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
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] bg-black/95 text-amber-100">
      {/* Hero Banner */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-amber-300 px-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Knowledge Library
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-amber-200">
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
            className="w-full px-4 py-2 rounded-md bg-stone-900 border border-amber-900 
              text-amber-300 placeholder-amber-700 focus:ring-1 focus:ring-amber-500 
              focus:outline-none text-sm transition shadow-lg shadow-black/40"
          />
        </div>

        {/* Divider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <hr className="border-amber-800/40" />
          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-black px-4 text-sm text-amber-400 font-medium"
          >
            Browse All Books
          </span>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-center text-amber-600 mt-12 text-lg">
            No books found. Try a different search term.
          </p>
        )}

        {/* Benefits Section */}
        <section className="my-20">
          <h2 className="text-2xl font-bold text-amber-300 text-center mb-10">
            Why Choose Our Library?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Diverse Collection", "From NCERT to novels, explore a wide range of books."],
              ["Free & Open", "Access all materials without restrictions or hidden costs."],
              ["Learning First", "Focused on students, readers, and curious minds alike."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-stone-900 to-black rounded-xl 
                border border-amber-800/40 shadow-md shadow-black/40 text-center 
                hover:shadow-lg hover:shadow-amber-700/30 transition"
              >
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  {title}
                </h3>
                <p className="text-amber-100/80 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="text-center bg-gradient-to-r from-stone-900 via-black to-stone-800 
          p-10 rounded-2xl shadow-xl mb-20 border border-amber-800/40"
        >
          <h3 className="text-2xl font-semibold mb-3 text-amber-300">
            Start Your Journey
          </h3>
          <p className="mb-6 max-w-xl mx-auto text-sm md:text-base text-amber-200 font-light">
            Dive into knowledge. Access books anytime, anywhere, without limits.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-md shadow 
              hover:bg-amber-400 transition"
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
