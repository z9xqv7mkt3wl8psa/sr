import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Syllabus = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Put all syllabus items in one array
  const syllabusList = [
    { to: "/syllabus/ibps-clerk-syllabus-2025", text: "IBPS Clerk Syllabus 2025 (CRP Clerk-XV): Prelims & Mains Exam Pattern & Syllabus" },
    { to: "/syllabus/bihar-jeevika-syllabus-2025", text: "Bihar Jeevika Syllabus 2025: Check Latest Syllabus, Exam Pattern" },
    { to: "/syllabus/bssc-office-attendant-syllabus-2025", text: "BSSC Office Attendant Syllabus 2025 Out for 3727 Posts" },
    { to: "/syllabus/icfre-tfri-syllabus-2025", text: "ICFRE TFRI Syllabus 2025: Driver, Forest Guard & TA" },
    { to: "/syllabus/rsmssb-vdo-syllabus-2025", text: "RSMSSB VDO Syllabus 2025 PDF Download" },
    { to: "/syllabus/ssc-chsl-syllabus-2025", text: "SSC CHSL 10+2 Exam 2025 Full Syllabus" },
    // ✅ Add more syllabus items here later if needed
  ];

  // ✅ Show first 5 or all depending on state
  const visibleSyllabus = showAll ? syllabusList : syllabusList.slice(0, 4);

  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Syllabus
        </h3>

        <ul className='list-disc list-inside pl-6'>
          {visibleSyllabus.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 4 syllabus items */}
        {syllabusList.length > 4 && (
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

export default Syllabus;
