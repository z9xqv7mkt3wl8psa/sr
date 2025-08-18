import React, { useState } from 'react';
import { Link } from "react-router-dom";
// I upload scholarship data in Important page . 

const Important = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ All important links array
  const importantLinks = [
    
    
  { "to": "https://www.education.gov.in/en/scholarships-education-loan-0", "text": "Central Sector Scheme of Scholarship for College and University Students (CSSS)" },
  { "to": "https://www.myscheme.gov.in/schemes/csss-cus", "text": "PM-USP Special Scholarship Scheme for Jammu & Kashmir & Ladakh" },
  { "to": "https://www.desw.gov.in/prime-ministers-scholarship-scheme-pmss", "text": "Prime Minister’s Scholarship Scheme (PMSS) for Armed Forces Wards/Widows" },
  { "to": "https://www.nosmsje.gov.in/", "text": "National Overseas Scholarship (SC/Disabled/Minorities)" },
  { "to": "https://iccr.gov.in/scholarship/iccr-scholarship/iccr-scholarship-schemes", "text": "ICCR Scholarship Schemes (e.g., Atal Bihari Vajpayee General Scholarship, etc.)" },
  { "to": "https://www.education.gov.in/en/scholarships-education-loan-2", "text": "External Scholarships via Ministry of Education (Research/Master’s/Ph.D.)" },
  { "to": "https://egovernance.vikaspedia.in/viewcontent/.../national-scholarships-portal?lgn=en", "text": "National Scholarship Portal (NSP) – Central & State Scholarships" },
  { "to": "https://scholarship.odisha.gov.in/", "text": "Odisha State Scholarship Portal (Pre/ Post-Matric schemes, etc.)" }


    // ✅ You can add more later
  ];

  // ✅ Show first 5 or all depending on state
  const visibleLinks = showAll ? importantLinks : importantLinks.slice(0, 3);

  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
         Government Scholarship
        </h3>

        <ul className='list-disc list-inside pl-6'>
          {visibleLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 4 links */}
        {importantLinks.length > 6 && (
          <div className='text-center my-3'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='font-bold border-b-2 border-blue-700 text-blue-700 hover:text-red-600'
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Important;
