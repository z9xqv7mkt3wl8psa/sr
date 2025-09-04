import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import internships from "../../data/internships";
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBuilding,
  FaInfoCircle,
  FaEnvelope,
  FaLink,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

const colors = {
  about: "bg-green-100 text-green-800",
  eligibility: "bg-yellow-100 text-yellow-800",
  apply: "bg-blue-100 text-blue-800",
  contact: "bg-purple-100 text-purple-800",
};

const InternshipDetail = () => {
  const { id } = useParams();
  const internship = internships.find((i) => i.id === id);
  const [activeTab, setActiveTab] = useState("about");

  if (!internship) return <NotFound />;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 pb-16">
      {/* Breadcrumb + Apply Button */}
      <div className="sticky top-0 bg-white z-30 shadow-md py-3 border-b border-green-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <nav className="flex items-center text-sm text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-600 transition duration-200">Home</Link>
            <FaChevronRight className="mx-2 text-gray-400" />
            <Link to="/internships" className="hover:text-green-600 transition duration-200">Internships</Link>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-900 font-semibold truncate max-w-xs">{internship.name}</span>
          </nav>
          <a
            href={internship.applyLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
          >
            <FaExternalLinkAlt /> <span>Apply Now</span>
          </a>
        </div>
      </div>

      {/* Internship Info */}
      <div className="max-w-6xl mx-auto px-6 pt-8 space-y-10">
        <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-tr from-green-300 to-green-500 opacity-20 blur-3xl"></div>
          <h1 className="text-4xl font-extrabold text-gray-900">{internship.name}</h1>
          <p className="mt-2 text-gray-700 max-w-3xl">{internship.tagline || "Boost your career with this opportunity."}</p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">{internship.company}</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              <FaClock /> {internship.duration}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
              <FaInfoCircle /> {internship.type}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              <FaMapMarkerAlt /> {internship.location}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full">
              <FaCalendarAlt /> {internship.deadline}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50">
            {["about", "eligibility", "apply", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollTo(tab)}
                className={`flex-1 px-6 py-4 font-semibold text-sm tracking-wide transition-colors duration-300 ${
                  activeTab === tab
                    ? `border-b-4 border-green-600 bg-white text-green-600`
                    : `text-gray-600 hover:text-green-600`
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-8 space-y-12 select-text">
            <section id="about" className="scroll-mt-28">
              <div className={`${colors.about} inline-block rounded-full px-4 py-1 font-semibold mb-4`}>
                About the Internship
              </div>
              <p className="text-gray-700 leading-relaxed">{internship.description}</p>
              {internship.source && (
                <p className="mt-2 text-xs text-gray-500">Source: {internship.source}</p>
              )}
            </section>

            {internship.eligibility && (
              <section id="eligibility" className="scroll-mt-28">
                <div className={`${colors.eligibility} inline-block rounded-full px-4 py-1 font-semibold mb-4`}>
                  Eligibility & Benefits
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {internship.eligibility.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                {internship.benefits && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Benefits</h3>
                    <p className="text-gray-700">{internship.benefits}</p>
                  </>
                )}
              </section>
            )}

            {internship.howToApply && (
              <section id="apply" className="scroll-mt-28">
                <div className={`${colors.apply} inline-block rounded-full px-4 py-1 font-semibold mb-4`}>
                  How to Apply
                </div>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  {internship.howToApply.split("\n").map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </section>
            )}

            <section id="contact" className="scroll-mt-28 space-y-6">
              <div className={`${colors.contact} inline-block rounded-full px-4 py-1 font-semibold`}>
                Contact Details & Links
              </div>
              {internship.contact && (
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-300 text-purple-900 whitespace-pre-line">
                  <div className="flex items-center gap-2 mb-2 font-semibold">
                    <FaEnvelope /> Contact Information
                  </div>
                  {internship.contact}
                </div>
              )}
              {internship.links?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaLink /> Important Links
                  </h4>
                  <ul className="space-y-3">
                    {internship.links.map((l, i) => (
                      <li key={i}>
                        <a
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
                        >
                          <FaExternalLinkAlt className="text-green-600" />
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center p-5 bg-green-50 rounded-lg border border-green-300 text-sm text-green-700 font-medium shadow-sm">
          This portal aggregates internship opportunities from public sources. Please verify all information on official websites before applying.
        </div>
      </div>
    </div>
  );
};

const NotFound = () => (
  <div className="p-8 max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-red-600 mb-4">Internship Not Found</h2>
    <Link to="/internships" className="text-green-600 underline hover:text-green-800">
      ← Back to Internships
    </Link>
  </div>
);

export default InternshipDetail;
