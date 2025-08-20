import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ All latest jobs in one array
  const jobs = [
    { to: "/latestjobs/bihar-police-csbc-driver-constable-recruitment-2025", text: "Bihar Police CSBC Driver Constable Online Form 2025 – Last Date Today" },
{ to: "/latestjobs/bihar-jeevika-recruitment-2025", text: "Bihar JEEVIKA Online Form 2025 (2747 Posts) – Date Extend" },
{ to: "/latestjobs/ibps-clerk-15th-recruitment-2025", text: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Start" },
{ to: "/latestjobs/up-police-si-recruitment-2025", text: "UP Police SI Online Form 2025 (4543 Post) – Start" },
{ to: "/latestjobs/rpsc-2nd-grade-teacher-recruitment-2025", text: "RPSC 2nd Grade Teacher Online Form 2025 (6500 Posts) – Start" },
{ to: "/latestjobs/bihar-vidhan-sabha-mains-recruitment-2025", text: "Bihar Vidhan Sabha 05/2024 Mains Online Form 2025" },
{ to: "/latestjobs/upsc-epfo-eo-ao-apfc-recruitment-2025", text: "UPSC EPFO EO / AO / APFC Online Form 2025 – Date Extend" },
{ to: "/latestjobs/indian-navy-ssc-executive-it-jan-2026", text: "Indian Navy SSC Executive IT January 2026 Online Form – Last Date Today" },
{ to: "/latestjobs/bsf-hc-ro-rm-recruitment-2025", text: "BSF HC RO / RM Online Form 2025" },
{ to: "/latestjobs/indian-army-dental-corps-recruitment-2025", text: "Indian Army Dental Corps Online Form 2025 – Start" },
{ to: "/latestjobs/dsssb-non-teaching-recruitment-2025", text: "DSSSB Non-Teaching Various Post Online Form 2025 – Start" },
{ to: "/latestjobs/bssc-4th-graduate-level-recruitment-2025", text: "Bihar BSSC 4th Graduate Level Online Form 2025 (1481 Posts)" },
{ to: "/latestjobs/lic-aao-ae-recruitment-2025", text: "LIC AAO / AE Online Form 2025 – Start" },

    { to: "/latestjobs/bihar-shs-anm-recruitment-2025", text: "Bihar SHS ANM Online Form 2025 – Last Date: 28 August 2025" },
    { to: "/latestjobs/bihar-shs-ophthalmic-assistant-recruitment-2025", text: "Bihar SHS Ophthalmic Assistant Online Form 2025 – Last Date: 28 August 2025" },
    { to: "/latestjobs/dsssb-delhi-high-court-attendant-recruitment-2025", text: "DSSSB Delhi High Court Attendant Online Form 2025 – Last Date: 24 September 2025" },
    { to: "/latestjobs/up-police-si-recruitment-2025", text: "UP Police SI Online Form 2025 (4543 Post) – Last Date: 11 September 2025" },
    { to: "/latestjobs/rrc-eastern-railway-apprentice-recruitment-2025", text: "RRC Eastern Railway Apprentice Online Form 2025 – Last Date: 13 September 2025" },
    { to: "/latestjobs/rpsc-1st-grade-teacher-recruitment-2025", text: "RPSC 1st Grade Teacher Online Form 2025 – Last Date: 12 September 2025" },
    { to: "/latestjobs/rrc-cr-apprentice-recruitment-2025", text: "Railway RRC CR Apprentice Online Form 2025 – Last Date: 11 September 2025" },
    { to: "/latestjobs/bsf-hc-ro-rm-recruitment-2025", text: "BSF HC RO / RM Online Form 2025 – Last Date: 23 September 2025" },
    { to: "/latestjobs/indian-navy-tradesman-skilled-apprentice-2025", text: "Indian Navy Tradesman Skilled Apprentice Online Form 2025 – Last Date: 02 September 2025" },
    { to: "/latestjobs/up-police-si-syllabus-exam-pattern-2025", text: "UP Police SI Syllabus / Exam Pattern 2025 – Last Date: 11 September 2025" },
    { to: "/latestjobs/uppsc-gic-lecturer-recruitment-2025", text: "UPPSC GIC Lecturer Online Form 2025 – Last Date: 12 September 2025" },
    { to: "/latestjobs/indian-army-ncc-123rd-course-april-2026-online-form", text: "Indian Army NCC 123rd Course April 2026 Online Form – Last Date: 11 September 2025" },
    { to: "/latestjobs/indian-airforce-agniveer-vayu-02-2026-edit-application-form", text: "Indian Airforce Agniveer Vayu 02/2026 Edit Application Form" },
    { to: "/latestjobs/ofss-bihar-11th-intermediate-spot-admission-2025-27", text: "OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Last Date: 18 August 2025" },
    { to: "/latestjobs/rpsc-si-platoon-commander-recruitment-2025", text: "RPSC SI / Platoon Commander Online Form 2025 (1015 Posts) – Last Date: 08 September 2025" },
    { to: "/latestjobs/rrb-paramedical-staff-recruitment-2025", text: "Railway RRB Paramedical Staff CEN.No.03/2025 Online Form 2025 – Last Date: 08 September 2025" },
    { to: "/latestjobs/indian-navy-ssc-officer-june-2026-online-form", text: "Indian Navy SSC Officer June 2026 Online Form – Last Date: 01 September 2025" },
    { to: "/latestjobs/sbi-clerk-recruitment-2025", text: "SBI Clerk Online Form 2025 (5180 Posts) – Last Date: 26 August 2025" },
    { to: "/latestjobs/ib-security-assistant-recruitment-2025", text: "IB Security Assistant Online Form 2025 (4987 Post) – Last Date: 17 August 2025" },
    { to: "/latestjobs/bsf-constable-tradesman-recruitment-2025", text: "BSF Constable Tradesman Online Form 2025 – Last Date: 24 August 2025" },
    { to: "/latestjobs/ibps-clerk-15th-recruitment-2025", text: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Last Date: 21 August 2025" },
    { to: "/latestjobs/indian-navy-ssc-executive-it-jan-2026", text: "Indian Navy SSC Executive IT Jan 2026 Online Form – Last Date: 20 August 2025" },
    { to: "/latestjobs/oicl-assistant-recruitment-2025", text: "Oriental Insurance OICL Assistant Recruitment 2025" },
    { to: "/latestjobs/bihar-jeevika-online-form-2025", text: "Bihar Jeevika Online Form 2025" },
  ];

  // ✅ Show first 10 or all depending on state
  const visibleJobs = showAll ? jobs : jobs.slice(0, 22);

  return (
    <div className='border-2 border-borderColor'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Latest Jobs
        </h3>
        <ul className='list-disc list-inside pl-6'>
          {visibleJobs.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 10 jobs */}
        {jobs.length > 10 && (
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

export default LatestJobs;
