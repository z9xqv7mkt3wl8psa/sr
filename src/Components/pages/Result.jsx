import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Result = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Put all results in one array
  const results = [
    { to: "/result/bpsc-school-teacher-tre2-result-2025", text: "BPSC School Teacher TRE 2.0 Result (NIOS DElEd) – Out" },
{ to: "/result/neet-pg-result-2025", text: "NEET PG Result 2025 – Out" },
{ to: "/result/rajasthan-hc-civil-judge-pre-result-2025", text: "Rajasthan HC Civil Judge Pre Result 2025 – Out" },
{ to: "/result/pspcl-assistant-lineman-result-2025", text: "PSPCL Assistant Lineman Result 2025 – Out" },
{ to: "/result/bcece-le-1st-round-allotment-2025", text: "BCECE 2025 1st Round Allotment Result – Out" },
{ to: "/result/bihar-dcece-2025-pe-mopup-seat-allotment", text: "Bihar DCECE 2025 PE Mop-Up Round Seat Allotment Result" },
{ to: "/result/sbi-clerk-1st-waitlist-2025", text: "SBI Bank Clerk 1st Wait List With Marks 2025 – Out" },

    { to: "/result/ssc-steno-cd-final-marks-2025", text: "SSC Stenographer C, D Final Marks 2025 – Out" },
    { to: "/result/bihar-btsc-insect-collector-result-2025", text: "Bihar BTSC Insect Collector Final Result 2025" },
    { to: "/result/sbi-clerk-waitlist-2025", text: "SBI Bank Clerk 1st Wait List 2025 – Out" },
    { to: "/result/bvs-junior-clerk-result-2025", text: "Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025 – Out" },
    { to: "/result/nta-icar-aieea-result-2025", text: "NTA ICAR AIEEA PG and PhD Result 2025 – Out" },
    { to: "/result/jci-various-post-result-2025", text: "JCI Various Post 2024 Result – Out" },
    { to: "/result/rrb-paramedical-result-2025", text: "Railway RRB Paramedical Staff CEN 04/2024 Result/ Score Card 2025 – Out" },
    { to: "/result/niacl-apprentice-result-2025", text: "NIACL Apprentice Result 2025 – Out" },
    { to: "/result/cbse-superintendent-tier2-result-2025", text: "CBSE Superintendent Tier-2 Result 2025 – Out" },
    { to: "/result/bihar-shsb-cho-result-2025", text: "Bihar SHSB CHO Result 2025 – Out" },
    { to: "/result/sci-spa-result-2025", text: "Supreme Court of India SPA Result 2025 – Out" },
    { to: "/result/lnmu-ug-3rd-merit-list-2025", text: "LNMU UG 3rd Merit List 2025-29 – Out" },
    { to: "/result/nicl-ao-pre-result-2025", text: "NICL AO Scale-I Pre Result 2025" },
    { to: "/result/hbse-class-10th-compartmental-result-2025", text: "Haryana Board Class 10th Compartmental Result 2025 – Out" },
    { to: "/result/bpsc-ae-result-2025", text: "BPSC Assistant Engineer AE 32, 33/2024 Result – Out" },
    { to: "/result/rsmssb-animal-attendant-result-2025", text: "Rajasthan RSMSSB Animal Attendant Result 2025 – Out" },
    { to: "/result/rsmssb-jen-result-2025", text: "Rajasthan RSMSSB Junior Engineer JE Result 2025 – Out" },
    { to: "/result/rsmssb-surveyor-mines-supervisor-result-2025", text: "RSMSSB Surveyor and Mines Supervisor Result 2025 – Out" },
    { to: "/result/bihar-cet-bed-3rd-merit-list-2025", text: "Bihar CET B.Ed 3rd Merit List 2025 – Out" },
    { to: "/result/upsc-engineering-services-reserve-list-2024", text: "UPSC Engineering Services 2024 Reserve List – Out" },
    { to: "/result/up-board-10th-12th-compartmental-result-2025", text: "UP Board Class 10th/ 12th Compartmental Result 2025" },
    { to: "/result/nta-ntet-result-2025", text: "NTA NTET Result/ Score Card 2025 – Out" },
    { to: "/result/mpesb-group1-2-result-2025", text: "MPESB Group 1 & 2 Sub Group 1 Result 2025 – Out" },
 
    { to: "/result/ubi-assistant-manager-result-2025", text: "Union Bank of India Assistant Manager Result 2025 – Out" },
    { to: "/result/railway-secr-apprentice-final-merit-list-2025", text: "Railway SECR Raipur Apprentice Final Merit List 2025" },
    { to: "/result/upsssc-junior-assistant-result-2025", text: "UPSSSC Junior Assistant 08/2022 Final Result – Out" },
    { to: "/result/bihar-iticat-1st-round-allotment-2025", text: "Bihar ITI CAT 2025 1st Round Allotment Result" },
  ];

  // ✅ Show first 6 or all depending on state
  const visibleResults = showAll ? results : results.slice(0, 26);

  return (
    <div className='border-2 border-borderColor row-span-2 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Results
        </h3>

        <ul className='list-disc list-inside pl-6'>
          {visibleResults.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 20 results */}
        {results.length > 20 && (
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

export default Result;
