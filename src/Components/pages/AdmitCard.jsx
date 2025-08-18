import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ All admit card links in one array
  const admitCards = [
    { to: "/admitcard/bihar-btsc-tutor-nursing-admit-card-2025", text: "Bihar BTSC Tutor Nursing Admit Card 2025 – Out" },
    { to: "/admitcard/bihar-bpssc-enforcement-si-admit-card-2025", text: "BPSSC Bihar Police Enforcement SI Admit Card Date 2025" },
    { to: "/admitcard/ibps-po-mt-xv-pre-admit-card-2025", text: "IBPS PO MT XV 15 Pre Admit Card 2025 – Out" },
    { to: "/admitcard/railway-rrb-ntpc-inter-admit-card-2025", text: "Railway RRB NTPC 10+2 Inter Level Admit Card 2025 – Out" },
    { to: "/admitcard/upsc-civil-services-ias-mains-admit-card-2025", text: "UPSC Civil Services IAS Mains Admit Card 2025 – Out" },
    { to: "/admitcard/bscb-assistant-csa-exam-date-2025", text: "BSCB Bihar Co-operative Bank Assistant/ CSA Exam Date 2025" },
    { to: "/admitcard/bihar-bpssc-si-prohibition-mains-admit-card-2025", text: "Bihar Police BPSSC SI Prohibition Mains Admit Card 2025 – Out" },
    { to: "/admitcard/bpsc-vice-principal-iti-admit-card-2025", text: "BPSC Vice Principal ITI Admit Card 2025 – Out" },
    { to: "/admitcard/bank-of-baroda-lbo-exam-date-2025", text: "Bank Of Baroda LBO Exam Date 2025 – Out" },
    { to: "/admitcard/bihar-vidhan-sabha-office-attendant-admit-card-2025", text: "Bihar Vidhan Sabha Office Attendant 05/2023 Admit Card 2025" },
    { to: "/admitcard/rajasthan-rssb-patwari-admit-card-2025", text: "Rajasthan RSSB Patwari Admit Card 2025 – Out" },
    { to: "/admitcard/bihar-vidhan-parishad-office-attendant-admit-card-2025", text: "Bihar Vidhan Parishad Office Attendant 03/2024 Admit Card 2025" },
    { to: "/admitcard/ssc-gd-constable-pet-pst-admit-card-2025", text: "SSC Constable GD 2024 PET/ PST Admit Card 2025 – Out" },
    { to: "/admitcard/rrb-ministerial-isolated-exam-date-2025", text: "Railway RRB Ministerial & Isolated CEN 07/2024 Exam Date 2025 – Out" },
    { to: "/admitcard/rbi-grade-a-b-admit-card-2025", text: "RBI Grade A, B Admit Card 2025 – Out" },
    { to: "/admitcard/bpssc-range-officer-forest-admit-card-2025", text: "BPSSC Range Officer of Forest Admit Card 2025 – Out" },
    { to: "/admitcard/afcat-02-2025-exam-city-details", text: "AFCAT 02/2025 Exam City Details – Out" },
    { to: "/admitcard/rssb-vdo-new-exam-date-2025", text: "RSSB VDO New Exam Date 2025" },
    { to: "/admitcard/bpsc-mvi-admit-card-2025", text: "BPSC MVI Admit Card 2025 – Out" },
    { to: "/admitcard/bpsc-mdo-admit-card-2025", text: "BPSC MDO Admit Card 2025" },
    { to: "/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025", text: "Bihar Vidhan Sabha Security Guard 01/2023 PET Admit Card 2025" },
    { to: "/admitcard/ssc-chsl-10plus2-tentative-vacancy-2025", text: "SSC CHSL 10+2 Tentative Vacancy Details 2025" },
    { to: "/admitcard/ssc-je-tentative-vacancy-2025", text: "SSC JE 2025 Tentative Vacancy – Out" },
    { to: "/admitcard/ssc-jht-exam-city-details-2025", text: "SSC JHT Exam City Details 2025 – Out" },
    { to: "/admitcard/ssc-stenographer-c-d-admit-card-2025", text: "SSC Stenographer C, D Admit Card 2025 " },
    { to: "/admitcard/dsssb-assistant-teacher-08-2023-admit-card-2025", text: "DSSSB Assistant Teacher 08/2023 Admit Card 2025 – Out" },
  ];

  // ✅ Show first 10 by default
  const visibleAdmitCards = showAll ? admitCards : admitCards.slice(0, 26);

  return (
    <div className='border-2 border-borderColor mr-3'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>Admit Card</h3>
        <ul className='list-disc list-inside pl-5'>
          {visibleAdmitCards.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 10 admit cards */}
        {admitCards.length > 10 && (
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

export default AdmitCard;
