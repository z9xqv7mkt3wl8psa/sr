import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email.trim() !== "") {
      setSuccessMessage(" You successfully subscribed!");
      setEmail(""); // Clear input field
      setTimeout(() => setSuccessMessage(""), 4000); // Hide message after 4 sec
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">About Us</h2>
          <p className="text-sm leading-6">
            PRASUNET Sarkari Result is your trusted source for latest 
            government jobs, admit cards, results, admissions, and 
            exam updates in 2025. Stay informed with real-time updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/latestjobs" className="hover:text-white">Latest Jobs</Link></li>
            <li><Link to="/results" className="hover:text-white">Results</Link></li>
            <li><Link to="/admitcard" className="hover:text-white">Admit Card</Link></li>
            <li><Link to="/answerkey" className="hover:text-white">Answer Key</Link></li>
            <li><Link to="/syllabus" className="hover:text-white">Syllabus</Link></li>
            <li><Link to="/colleges" className="hover:text-white">Colleges</Link></li>
            <li><Link to="/search" className="hover:text-white">Search</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
              <div>
      <p className="font-medium"> Address:</p>
      <p className="text-sm mb-3">
        Chandigarh, India
      </p>
    </div>
    
    <div>
      <p className="font-medium"> Email:</p>
      <p className="text-sm mb-3">prasunetcompany@gmail.com</p>
    </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Subscribe</h2>
          <p className="text-sm mb-3">Get free job alerts and updates directly in your inbox.</p>
          
          <form className="flex" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-red-600 px-4 py-2 rounded-r-md text-white hover:bg-red-700">
              Subscribe
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-400 text-sm mt-2">{successMessage}</p>
          )}

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/prasunet" target="_blank" rel="noreferrer"><FaFacebook size={20} /></a>
            <a href="https://x.com/prasunet" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com/prasunet_company/" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/prasunet-company/" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Government Important Links */}
      <div className="bg-gray-800 py-6 px-6">
        <h2 className="text-lg font-semibold text-white mb-3 text-center">Important Government Links</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="https://uidai.gov.in" className="hover:text-white">UIDAI</a>
          <a href="https://www.digilocker.gov.in" className="hover:text-white">DigiLocker</a>
          <a href="https://www.incometaxindia.gov.in" className="hover:text-white">PAN Card</a>
          <a href="https://www.epfindia.gov.in" className="hover:text-white">EPFO</a>
          <a href="https://voterportal.eci.gov.in" className="hover:text-white">Voter ID</a>
          <a href="https://www.nvsp.in" className="hover:text-white">NVSP</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p>© {new Date().getFullYear()} PRASUNET Sarkari Result. All Rights Reserved.</p>
        <p className="text-gray-400 mt-1">
          Designed & Developed by <span className="text-white font-semibold">Prasunet</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
