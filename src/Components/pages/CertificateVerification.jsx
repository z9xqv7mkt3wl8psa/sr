import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CertificateVerification = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ All certificate verification links in one array
  const certificates = [
    { to: "https://www.digilocker.gov.in", text: "DigiLocker (School/College Certificates)" },
    { to: "https://incometaxindia.gov.in", text: "PAN Card Verification" },
    { to: "https://www.ugc.ac.in", text: "UGC Approved University List" },
    { to: "https://www.aicte-india.org", text: "AICTE Approved University List" },
    { to: "https://www.epfindia.gov.in", text: "EPFO (Employment/Service Verification, PF Passbook)" },
       { to: "https://parivahan.gov.in", text: "Driving License / Vehicle RC Verification" },
    // 👉 You can add more items here in the same format if needed
  ];

  // ✅ Show first 4 by default, or all if expanded
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 5);

  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Certificate Verification
        </h3>
        <ul className='list-disc list-inside pl-6'>
          {visibleCertificates.map((item, index) => (
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
        {certificates.length > 5 && (
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

export default CertificateVerification;
