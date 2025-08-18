import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white font-bold">
      {/* Mobile top bar (hidden on desktop) */}
      <div className="flex items-center justify-between px-4 h-14 md:hidden">
        <h1 className="text-xl">Sarkari Result</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Links */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden md:overflow-visible md:max-h-full`}
      >
        <div className="flex flex-col md:flex-row text-center">
          <Link to="/" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Home</Link>
          <Link to="/latestjobs" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Latest Jobs</Link>
          <Link to="/results" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Results</Link>
          <Link to="/admitcard" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Admit Card</Link>
          <Link to="/answerkey" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Answer Key</Link>
          <Link to="/syllabus" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Syllabus</Link>
          <Link to="/search" className="p-3 border-b md:border-r md:border-b-0 w-full hover:bg-gray-800">Search</Link>
          <Link to="/contact" className="p-3 w-full hover:bg-gray-800">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
