import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AnswerKey = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Put all answer keys in one array
  const answerKeys = [


    { to: "/answerkey/beltron-programmer-answer-key-2025", text: "BELTRON Programmer Answer Key 2025" },
{ to: "/answerkey/bpsc-mvi-answer-key-2025", text: "BPSC MVI Answer Key 2025" },
{ to: "/answerkey/bpsc-mdo-answer-key-2025", text: "BPSC MDO Answer Key 2025" },
{ to: "/answerkey/dsssb-exam-25-june-to-09-july-final-answer-key-2025", text: "DSSSB Exam (05-14 August) Answer Key 2025" },
{ to: "/answerkey/sav-bihar-class-11th-answer-key-2025", text: "SAV Bihar Class 11th Answer Key 2025" },
{ to: "/answerkey/jpsc-acf-pre-revised-answer-key-2025", text: "JPSC ACF Pre Revised Answer Key 2025" },
{ to: "/answerkey/bpsc-vice-principal-iti-answer-key-2025", text: "BPSC Vice Principal ITI Answer Key 2025" },
{ to: "/answerkey/ssc-stenographer-c-d-answer-key-2025", text: "SSC Stenographer C, D Answer Key 2025" },
{ to: "/answerkey/rssb-livestock-assistant-answer-key-2025", text: "RSSB Livestock Assistant Answer Key 2025" },
{ to: "/answerkey/rssb-account-assistant-answer-key-2025", text: "RSSB Account Assistant Answer Key 2025" },
{ to: "/answerkey/rssb-nhm-rajmes-answer-key-2025", text: "RSSB NHM & RajMES Answer Key 2025" },
{ to: "/answerkey/bpsc-dso-ad-answer-key-2025", text: "BPSC DSO/ AD Answer Key 2025" },
{ to: "/answerkey/rajasthan-rssb-patwari-question-paper-2025", text: "Rajasthan RSSB Patwari Question Paper 2025" },
{ to: "/answerkey/ssc-cpo-si-paper2-2025", text: "SSC CPO SI Paper II Final Answer Key 2025 – Out" },
{ to: "/answerkey/patna-high-court-mazdoor-answer-key-2025-out", text: "Patna High Court Mazdoor Final Answer Key 2025" },
{ to: "/answerkey/bseb-sakshamta-pariksha-3rd-answer-key-2025", text: "BSEB Sakshamta Pariksha 3rd Answer Key 2025" },
{ to: "/answerkey/bpsc-aee-other-post-answer-key-2025", text: "BPSC AEE & Other Post Answer Key 2025" },
{ to: "/answerkey/bihar-btsc-staff-nurse-answer-key-2025", text: "Bihar BTSC Staff Nurse Answer Key 2025" },
{ to: "/answerkey/bpsc-assistant-engineer-ae-answer-key-2025", text: "Bihar BPSC Assistant Engineer AE Answer Key 2025" },
{ to: "/answerkey/allahabad-high-court-hjs-pre-answer-key-2025", text: "Allahabad High Court UPHJS Answer Key 2025" },
{ to: "/answerkey/rpsc-deputy-jailor-answer-key-2025", text: "RPSC Deputy Jailor Answer Key 2025" },
{ to: "/answerkey/haryana-tet-2024-answer-key", text: "Haryana TET 2024 Answer Key" },
{ to: "/answerkey/uppsc-ro-aro-2023-pre-answer-key-2025", text: "UPPSC RO/ ARO 2023 Pre Answer Key 2025" },
{ to: "/answerkey/bihar-btsc-dresser-answer-key-2025", text: "Bihar BTSC Dresser Answer Key 2025" },
{ to: "/answerkey/hssc-cet-group-c-answer-key-2025", text: "HSSC CET Group C Answer Key 2025" },
{ to: "/answerkey/upsssc-vdo-2023-mains-revised-answer-key", text: "UPSSSC VDO 2023 Mains Revised Answer Key" },
{ to: "/answerkey/scl-assistant-answer-key-2025", text: "SCL Assistant Answer Key 2025" },
{ to: "/answerkey/dfccil-mts-executive-jr-manager-answer-key-2025", text: "DFCCIL MTS, Executive & Jr. Manager Answer Key 2025" },
{ to: "/answerkey/cpcb-various-post-answer-key-2025", text: "CPCB Various Post Answer Key 2025" },
{ to: "/answerkey/upsssc-technical-assistant-group-c-07-2024-answer-key", text: "UPSSSC Technical Assistant Group C 07/2024 Answer Key" },
{ to: "/answerkey/cci-various-147-post-answer-key-2025", text: "CCI Various 147 Post Answer Key 2025" },
{ to: "/answerkey/ukpsc-upper-pcs-pre-answer-key-2025", text: "UKPSC Upper PCS Pre Answer Key 2025" },
{ to: "/answerkey/ncl-cil-technician-answer-key-2025", text: "NCL CIL Technician Answer Key 2025" },
{ to: "/answerkey/upsssc-sachiv-grade-iii-mains-revised-answer-key-2025", text: "UPSSSC Sachiv Grade-III Mains Revised Answer Key 2025" },
{ to: "/answerkey/upsssc-junior-assistant-mains-answer-key-objection-2025", text: "UPSSSC Junior Assistant Mains Answer Key/ Objection 2025" },
{ to: "/answerkey/nielit-scientific-assistant-answer-key-2025", text: "NIELIT Scientific Assistant Answer Key 2025" },
{ to: "/answerkey/railway-rrb-ntpc-graduate-answer-key-2025", text: "Railway RRB NTPC Graduate Answer Key 2025" },
{ to: "/answerkey/bihar-dst-office-attendant-answer-key-2025", text: "Bihar DST Office Attendant Answer Key 2025" },
{ to: "/answerkey/dgafms-group-c-answer-key-2025", text: "DGAFMS Group C Answer Key 2025" },
{ to: "/answerkey/upsssc-assistant-accountant-revised-answer-key-2025", text: "UPSSSC Assistant Accountant Revised Answer Key 2025" },
{ to: "/answerkey/upsssc-junior-analyst-food-revised-answer-key-2025", text: "UPSSSC Junior Analyst Food Revised Answer Key 2025" },
{ to: "/answerkey/mpesb-group-i-sub-group-3-answer-key-2025", text: "MPESB Group I Sub Group 3 Answer Key 2025" },
{ to: "/answerkey/rpsc-pro-answer-key-2025", text: "RPSC PRO Answer Key 2025" },
{ to: "/answerkey/bihar-board-10th-compartmental-answer-key-2025", text: "Bihar Board 10th Compartmental Answer Key 2025" },
{ to: "/answerkey/nta-nssnet-answer-key-2025", text: "NTA NSSNET Answer Key 2025" },
{ to: "/answerkey/upsssc-enforcement-constable-answer-key-2025", text: "UPSSSC Enforcement Constable Answer Key 2025" },
{ to: "/answerkey/mpesb-group-4-various-post-answer-key-2025", text: "MPESB Group 4 Various Post Answer Key 2025" },
{ to: "/answerkey/upsssc-junior-analyst-medicine-2024-revised-answer-key", text: "UPSSSC Junior Analyst Medicine 2024 Revised Answer Key" },
{ to: "/answerkey/mp-esb-middle-and-primary-teacher-answer-key-2025", text: "MP ESB Middle and Primary Teacher Answer Key 2025" },
{ to: "/answerkey/upsssc-dental-hygienist-2023-revised-answer-key", text: "UPSSSC Dental Hygienist 2023 Revised Answer Key" },
{ to: "/answerkey/aai-junior-senior-assistant-answer-key-2025", text: "AAI Junior Assistant, Senior Assistant Answer Key 2025" },
{ to: "/answerkey/rpsc-agriculture-officer-answer-key-2025", text: "RPSC Agriculture Officer Answer Key 2025" },
{ to: "/answerkey/upsssc-assistant-store-keeper-answer-key-2025", text: "UPSSSC Assistant Store Keeper Answer key 2025" },
{ to: "/answerkey/ssc-mts-havaldar-2024-final-answer-key", text: "SSC MTS & Havaldar 2024 Final Answer Key" },
{ to: "/answerkey/rajasthan-rsmssb-junior-instructor-2024-answer-key", text: "Rajasthan RSMSSB Junior Instructor 2024 Answer Key" },
{ to: "/answerkey/upsssc-junior-assistant-2022-answer-key-objection", text: "UPSSSC Junior Assistant 2022 Answer Key / Objection" },
{ to: "/answerkey/rpsc-senior-teacher-sanskrit-edu-dept-answer-key-2024", text: "RPSC Senior Teacher Sanskrit Edu Dept. Answer Key 2024" },
{ to: "/answerkey/ssc-cpo-si-paper-ii-answer-key-2024", text: "SSC CPO SI Paper II Answer Key 2024 Out At ssc.nic.in" },
{ to: "/answerkey/ctet-2018-answer-key", text: "CTET January 2018 Answer Key Download At ctet.nic.in" },

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
