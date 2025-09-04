import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import scholarships from "../../data/scholarships";
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUniversity,
  FaInfoCircle,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";

const colors = {
  about: "bg-blue-100 text-blue-800",
  eligibility: "bg-green-100 text-green-800",
  apply: "bg-purple-100 text-purple-800",
  contact: "bg-yellow-100 text-yellow-800",
};

const ScholarshipDetail = () => {
  const { id } = useParams();
  const sch = scholarships.find((s) => s.id === id);
  const [activeTab, setActiveTab] = useState("about");

  if (!sch) return <NotFound />;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pb-16">
      {/* Breadcrumb + Apply CTA */}
      <div className="sticky top-0 bg-white z-30 shadow-md py-3 border-b border-blue-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <nav className="flex items-center text-sm text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition duration-200">Home</Link>
            <FaChevronRight className="mx-2 text-gray-400" />
            <Link to="/scholarships" className="hover:text-blue-600 transition duration-200">Scholarships</Link>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-900 font-semibold truncate max-w-xs">{sch.name}</span>
          </nav>
          <a
            href={sch.applyLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
          >
            <FaExternalLinkAlt /> <span>Apply Now</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 space-y-10">
        {/* Scholarship Hero */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-300 to-blue-500 opacity-20 blur-3xl"></div>
          <h1 className="text-4xl font-extrabold text-gray-900">{sch.name}</h1>
          <p className="mt-2 text-gray-700 max-w-3xl">{sch.tagline || "Empowering students through funding opportunities."}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{sch.followers || 0} Followers</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
              <FaUniversity /> {sch.state}{sch.country && `, ${sch.country}`}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
              <FaInfoCircle /> {sch.award}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full">
              <FaCalendarAlt /> {sch.deadline}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50">
            {["about", "eligibility", "apply", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollTo(tab)}
                className={`flex-1 px-6 py-4 font-semibold text-sm tracking-wide transition-colors duration-300 ${
                  activeTab === tab
                    ? `border-b-4 border-blue-600 bg-white text-blue-600`
                    : `text-gray-600 hover:text-blue-600`
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-8 space-y-12 select-text">
            <section id="about" className={`scroll-mt-28`}>
              <div className={`${colors.about} inline-block rounded-full px-4 py-1 font-semibold mb-4`}>
                About the Program
              </div>
              <p className="text-gray-700 leading-relaxed">{sch.description}</p>
              {sch.source && (
                <p className="mt-2 text-xs text-gray-500">Source: {sch.source}</p>
              )}
            </section>

            {sch.eligibility && (
              <section id="eligibility" className={`scroll-mt-28`}>
                <div className={`${colors.eligibility} inline-block rounded-full px-4 py-1 font-semibold mb-4`}>
                  Eligibility & Benefits
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {sch.eligibility.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                {sch.benefits && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Benefits</h3>
                    <p className="text-gray-700">{sch.benefits}</p>
                  </>
                )}
              </section>
            )}

            {sch.howToApply && (
              <section id="apply" className={`scroll-mt-28`}>
                <div className={`${colors.apply} inline-block rounded-full px-4 py-1 font-semibold mb-4`}>
                  How to Apply
                </div>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  {sch.howToApply.split("\n").map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </section>
            )}

            <section id="contact" className={`scroll-mt-28 space-y-6`}>
              <div className={`${colors.contact} inline-block rounded-full px-4 py-1 font-semibold`}>
                Contact Details & Links
              </div>
              {sch.contact && (
                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-300 text-yellow-900 whitespace-pre-line">
                  <div className="flex items-center gap-2 mb-2 font-semibold">
                    <FaEnvelope /> Contact Information
                  </div>
                  {sch.contact}
                </div>
              )}
              {sch.links?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaLink /> Important Links
                  </h4>
                  <ul className="space-y-3">
                    {sch.links.map((l, i) => (
                      <li key={i}>
                        <a
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-700 font-semibold hover:underline"
                        >
                          <FaExternalLinkAlt className="text-blue-600" />
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

        <div className="max-w-6xl mx-auto text-center p-5 bg-blue-50 rounded-lg border border-blue-300 text-sm text-blue-700 font-medium shadow-sm">
          This portal aggregates scholarship details from public sources. Please verify all information on official websites before applying.
        </div>
      </div>
    </div>
  );
};

const NotFound = () => (
  <div className="p-8 max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-red-600 mb-4">Scholarship Not Found</h2>
    <Link to="/scholarships" className="text-blue-600 underline hover:text-blue-800">
      ← Back to Scholarships
    </Link>
  </div>
);

export default ScholarshipDetail;
