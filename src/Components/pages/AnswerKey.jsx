import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AnswerKey = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Put all answer keys in one array
  const answerKeys = [
    { to: "/answerkey/ssc-cpo-si-paper2-2025", text: "SSC CPO SI Paper II Final Answer Key 2025 – Out" },
    { to: "/answerkey/bsphcl-technician-gr3-answerkey-2025", text: "Bihar BSPHCL Technician Gr-III Answer Key 2025 – Out" },
    { to: "/answerkey/phc-mazdoor-final-answerkey-202", text: "Patna High Court Mazdoor Final Answer Key 2025 – Out" },
    { to: "/answerkey/bseb-sakshamta-pariksha-3rd-answerkey-2025", text: "BSEB Sakshamta Pariksha 3rd Answer Key 2025 – Out" },
    { to: "/answerkey/bpsc-aee-other-post-answerkey-2025", text: "BPSC AEE & Other Post Answer Key 2025 – Out" },
    { to: "/answerkey/ssc-phase13-answerkey-2025", text: "SSC Phase 13 Answer Key 2025" },
    // ✅ Add more items later if needed
  ];

  // ✅ Show first 5 or all depending on state
  const visibleKeys = showAll ? answerKeys : answerKeys.slice(0, 5);

  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Answer Key
        </h3>

        <ul className='list-disc list-inside pl-6'>
          {visibleKeys.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 5 items */}
        {answerKeys.length > 5 && (
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

export default AnswerKey;
