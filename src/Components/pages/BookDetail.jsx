import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import BookCard from "../ui/BookCard";
import Footer from "../footer/Footer";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book)
    return (
      <p className="text-center mt-20 text-gray-400 text-xl">Book not found!</p>
    );

  const similarBooks = books
    .filter((b) => (b.class === book.class || b.board === book.board) && b.id !== book.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] bg-black/95 text-amber-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-16 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-amber-300 px-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg text-amber-200">
            Class {book.class} | {book.board}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Content */}
        <div className="bg-gradient-to-br from-stone-900 to-black rounded-xl shadow-xl p-8 mb-12 border border-amber-900/40">
          <div className="lg:flex gap-12">
            {/* Book Image */}
            <div className="lg:w-1/3 mb-8 lg:mb-0 relative">
              <div className="absolute inset-0 blur-xl bg-amber-600/20 rounded-lg"></div>
              <img
                src={book.image}
                alt={book.title}
                className="relative w-full h-96 object-contain rounded-lg shadow-lg bg-black/30"
                
              />
            </div>

            {/* Book Info */}
            <div className="lg:w-2/3 flex flex-col">
              <h2 className="text-xl font-semibold text-amber-300 mb-4">
                About This Book
              </h2>
              <p className="text-amber-100/90 leading-relaxed text-base mb-8">
                {book.description}
              </p>
              <a
                href={book.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-500 text-black px-8 py-4 rounded-lg font-semibold 
                  hover:bg-amber-400 transition duration-300 self-start shadow-lg"
              >
                Enter Portal
              </a>
            </div>
          </div>
        </div>

        {/* Why This Book */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-amber-300 text-center mb-6">
            Why Choose This Book?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Curriculum-Aligned", "Designed to match CBSE and board syllabi"],
              ["Engaging Content", "Interactive lessons for effective learning"],
              ["Free Access", "Download PDFs directly from NCERT"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-6 bg-black/80 rounded-lg border border-amber-800/40 shadow-md 
                  hover:shadow-lg hover:shadow-amber-700/30 text-center transition"
              >
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  {title}
                </h3>
                <p className="text-amber-100/80">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Books */}
        {similarBooks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-amber-300 mb-6">
              Explore Similar Books
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory 
              scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-black/30">
              {similarBooks.map((similar) => (
                <div className="flex-shrink-0 w-72 snap-start" key={similar.id}>
                  <BookCard book={similar} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section
          className="text-center bg-gradient-to-r from-stone-900 via-black to-stone-800 
          text-amber-100 p-10 rounded-2xl shadow-xl mb-16 border border-amber-800/40"
        >
          <h3 className="text-xl font-bold mb-3 text-amber-300">
            Ready to Study Smarter?
          </h3>
          <p className="mb-4 max-w-xl mx-auto text-amber-200">
            Access top-quality books for your academic success.
          </p>
          <a
            href="/books"
            className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold 
              rounded-md hover:bg-amber-400 transition"
          >
            Browse All Books
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BookDetail;
