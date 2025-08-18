import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Admission = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Put all admission items in one array
  const admissions = [
    { to: "/admission/jci-result-2025", text: "JCI Various Post Result 2025 – Out" },
    { to: "/admission/nvs-class6-2026", text: "NVS Class 6 Admission Online Form 2026 – Date Extend" },
    { to: "/admission/ofss-bihar-11th-spot-2025", text: "OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Extend" },
    { to: "/admission/bcece-2025-counselling", text: "BCECE 2025 Online Counselling/ Choice Filling" },
    { to: "/admission/iim-cat-2025-admission", text: "IIM CAT 2025 Admission Online Form" },
    { to: "/admission/clat-2026-admission", text: "CLAT 2026 Admission Online Form – Start" },
    { to: "/admission/jeecup-2025-counseling", text: "UP Polytechnic JEECUP Online Counseling 2025" },
    { to: "/admission/muit-diploma-admissions-2025", text: "MUIT Diploma Admissions Online Form 2025" },
    { to: "/admission/mathura-pvt-admissions-2025", text: "Mathura PVT Online Form 2025 – Date Extend" },
    { to: "/admission/muit-2025-admission", text: "MUIT Noida MAJMC, BAJMC, Bachelor of Animation Online Form 2025" },
    { to: "/admission/bihar-cet-bed-2025", text: "Bihar CET B.Ed Online Form 2025 – Start" },
    { to: "/admission/csu-prakshastri-2025", text: "Central Sanskrit University CSU Prak Shastri Online Form 2025" },
    { to: "/admission/muit-admission-2025", text: "MUIT Admissions Online Form 2025" },
    { to: "/admission/rajasthan-bed-2025", text: "Rajasthan B.Ed. 2025 Online Form" },
    { to: "/admission/mp-rojgar-panjiyan-2025", text: "MP Rojgar Panjiyan Online Form 2025" },
    { to: "/admission/updeled-2024-counseling", text: "UPDELED 2024 Online Counseling" },
  ];

  // ✅ Show first 10 or all depending on state
  const visibleAdmissions = showAll ? admissions : admissions.slice(0, 15);

  return (
    <div className='border-2 border-borderColor row-span-2 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Admission
        </h3>

        <ul className='list-disc list-inside pl-6'>
          {visibleAdmissions.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 10 admissions */}
        {admissions.length > 15 && (
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

export default Admission;
