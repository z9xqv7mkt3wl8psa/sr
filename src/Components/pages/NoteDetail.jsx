import React from "react";
import { useParams } from "react-router-dom";
import { notes } from "../../data/notes";
import NoteCard from "../ui/NoteCard";
import Footer from "../footer/Footer";

const NoteDetail = () => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note)
    return (
      <p className="text-center mt-20 text-red-500 text-xl font-semibold">
        Note not found!
      </p>
    );

  const similarNotes = notes
    .filter((n) => n.exam === note.exam && n.id !== note.id)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div
        className="relative w-full h-60 bg-cover bg-center flex items-center justify-center text-center mb-10 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-blue-800 px-6">
          <h1 className="text-4xl font-bold mb-2">{note.title}</h1>
          <p className="text-base text-blue-700">{note.exam} | {note.subject}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 mb-10">
          <img
            src={note.image}
            alt={note.title}
            className="w-full h-64 object-contain rounded-md mb-6 border"
          />
          <h2 className="text-xl font-semibold text-blue-800 mb-4">About the Notes</h2>
          <p className="text-gray-700 mb-6">{note.description}</p>
          <a
            href={note.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition"
          >
            Download Notes
          </a>
        </div>

        {similarNotes.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Similar Notes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {similarNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default NoteDetail;
