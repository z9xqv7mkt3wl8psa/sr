import React from "react";
import { notes } from "../../data/notes";
import NoteCard from "../ui/NoteCard";
import Footer from "../footer/Footer";

const NotesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/50987/pexels-photo-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-blue-800 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Handwritten Notes</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700">
            Access free PDF handwritten notes for UPSC, SSC, Banking, CTET, and other competitive exams.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 my-12">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-10">All Notes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotesPage;
