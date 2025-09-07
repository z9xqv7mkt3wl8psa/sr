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
      <p className="text-center mt-20 text-red-500 text-xl font-semibold">
        Book not found!
      </p>
    );

 // Determine similarity based on category type
let similarBooks = [];

if (["CBSE", "ICSE", "RBSE"].includes(book.board)) {
  // Board books: show same board + same class (1–12)
  similarBooks = books.filter(
    (b) =>
      b.board === book.board &&
      b.class === book.class &&
      b.id !== book.id
  );
} else if (["JEE", "NEET"].includes(book.board)) {
  // Competitive: show same exam type + subject
  similarBooks = books.filter(
    (b) =>
      b.board === book.board &&
      b.subject === book.subject &&
      b.id !== book.id
  );
} else {
  // General fallback: show by class
  similarBooks = books.filter(
    (b) => b.class === book.class && b.id !== book.id
  );
}

// Shuffle and limit
similarBooks = similarBooks.sort(() => 0.5 - Math.random()).slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-60 sm:h-72 md:h-80 bg-cover bg-center flex items-center justify-center text-center mb-10 sm:mb-16 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-green-800 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{book.title}</h1>
          <p className="text-base sm:text-lg text-green-700">
            Class {book.class} | {book.board}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Main Content */}
        <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-10 sm:mb-12 border border-gray-200">
          <div className="lg:flex gap-8 sm:gap-12">
            {/* Book Image */}
            <div className="lg:w-1/3 mb-6 lg:mb-0 relative flex justify-center">
              <div className="absolute inset-0 blur-2xl bg-green-200/40 rounded-lg"></div>
              <img
                src={book.image}
                alt={book.title}
                className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80 md:h-96 object-contain rounded-lg shadow-lg border border-green-200 
                hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition"
              />
            </div>

            {/* Book Info */}
            <div className="lg:w-2/3 flex flex-col">
              <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-3 sm:mb-4">
                About This Book
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                {book.description}
              </p>
              <a
                href={book.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                  hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] 
                  transition duration-300 self-start shadow-md"
              >
                Get Book
              </a>
            </div>
          </div>
        </div>

        {/* Why This Book */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 text-center mb-6">
            Why Choose This Book?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              ["Curriculum-Aligned", "Designed to match CBSE and board syllabi"],
              ["Engaging Content", "Interactive lessons for effective learning"],
              ["Free Access", "Download PDFs directly from NCERT"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-4 sm:p-6 bg-white rounded-lg border border-green-100 shadow-sm 
                  hover:shadow-md hover:shadow-green-100 transition text-center"
              >
                <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Books */}
        {similarBooks.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-6">
              Explore Similar Books
            </h2>
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-inner">
              <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 sm:pb-6 snap-x snap-mandatory 
                scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100">
                {similarBooks.map((similar) => (
                  <div className="flex-shrink-0 w-48 sm:w-56 md:w-72 snap-start" key={similar.id}>
                    <BookCard book={similar} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section
          className="text-center bg-gradient-to-r from-white via-green-50 to-white 
          text-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mb-12 sm:mb-16 border border-green-100"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-green-800">
            Ready to Study Smarter?
          </h3>
          <p className="mb-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
            Access top-quality books for your academic success.
          </p>
          <a
            href="/books"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-semibold 
              rounded-md hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition"
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
