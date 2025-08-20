import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import latestjobsBanner from '../../images/latestjobs-banner.png'; // <-- Replace with your image path

const LatestJobs = () => {
  return (
    <>
      <div className='border-2 border-gray-300 bg-white shadow-lg rounded-md mx-auto mt-6 max-w-4xl'>
        {/* Image at the top */}
         <img 
       src={latestjobsBanner} 
       alt="Latest Jobs Banner" 
       className="w-full h-64 md:h-80 lg:h-[400px] object-cover rounded-t-md" 
     />

        {/* Header */}
        <h3 className='text-2xl font-semibold bg-red-800 text-center text-white py-2'>
          Sarkari Exam Sarkari Result
        </h3>

        {/* Subheader */}
        <div className="bg-green-100 text-green-800 font-semibold text-center py-2 border-b border-gray-200">
          Sarkari Result Latest Government Exam Sarkari Results
        </div>

        {/* Result list */}
        <ul className='list-disc list-inside px-6 py-4 space-y-1'>
<li>
  <Link to="/latestjobs/bihar-police-csbc-driver-constable-recruitment-2025" className="text-blue-800 hover:underline">
    Bihar Police CSBC Driver Constable Online Form 2025 – Last Date Today
  </Link>
</li>
<li>
  <Link to="/latestjobs/bihar-jeevika-recruitment-2025" className="text-blue-800 hover:underline">
    Bihar JEEVIKA Online Form 2025 (2747 Posts) – Date Extend
  </Link>
</li>
<li>
  <Link to="/latestjobs/ibps-clerk-15th-recruitment-2025" className="text-blue-800 hover:underline">
    IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Start
  </Link>
</li>
<li>
  <Link to="/latestjobs/up-police-si-recruitment-2025" className="text-blue-800 hover:underline">
    UP Police SI Online Form 2025 (4543 Post) – Start
  </Link>
</li>
<li>
  <Link to="/latestjobs/rpsc-2nd-grade-teacher-recruitment-2025" className="text-blue-800 hover:underline">
    RPSC 2nd Grade Teacher Online Form 2025 (6500 Posts) – Start
  </Link>
</li>
<li>
  <Link to="/latestjobs/bihar-vidhan-sabha-mains-recruitment-2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Sabha 05/2024 Mains Online Form 2025
  </Link>
</li>
<li>
  <Link to="/latestjobs/upsc-epfo-eo-ao-apfc-recruitment-2025" className="text-blue-800 hover:underline">
    UPSC EPFO EO / AO / APFC Online Form 2025 – Date Extend
  </Link>
</li>
<li>
  <Link to="/latestjobs/indian-navy-ssc-executive-it-jan-2026" className="text-blue-800 hover:underline">
    Indian Navy SSC Executive IT January 2026 Online Form – Last Date Today
  </Link>
</li>
<li>
  <Link to="/latestjobs/bsf-hc-ro-rm-recruitment-2025" className="text-blue-800 hover:underline">
    BSF HC RO / RM Online Form 2025
  </Link>
</li>
<li>
  <Link to="/latestjobs/indian-army-dental-corps-recruitment-2025" className="text-blue-800 hover:underline">
    Indian Army Dental Corps Online Form 2025 – Start
  </Link>
</li>
<li>
  <Link to="/latestjobs/dsssb-non-teaching-recruitment-2025" className="text-blue-800 hover:underline">
    DSSSB Non-Teaching Various Post Online Form 2025 – Start
  </Link>
</li>
<li>
  <Link to="/latestjobs/bssc-4th-graduate-level-recruitment-2025" className="text-blue-800 hover:underline">
    Bihar BSSC 4th Graduate Level Online Form 2025 (1481 Posts)
  </Link>
</li>
<li>
  <Link to="/latestjobs/lic-aao-ae-recruitment-2025" className="text-blue-800 hover:underline">
    LIC AAO / AE Online Form 2025 – Start
  </Link>
</li>
                    
<li><Link to="/latestjobs/bihar-shs-anm-recruitment-2025" className="text-blue-800 hover:underline">Bihar SHS ANM Online Form 2025 – Last Date: 28 August 2025</Link></li>
<li><Link to="/latestjobs/bihar-shs-ophthalmic-assistant-recruitment-2025" className="text-blue-800 hover:underline">Bihar SHS Ophthalmic Assistant Online Form 2025 – Last Date: 28 August 2025</Link></li>
<li><Link to="/latestjobs/dsssb-delhi-high-court-attendant-recruitment-2025" className="text-blue-800 hover:underline">DSSSB Delhi High Court Attendant Online Form 2025 – Last Date: 24 September 2025</Link></li>
<li><Link to="/latestjobs/up-police-si-recruitment-2025" className="text-blue-800 hover:underline">UP Police SI Online Form 2025 (4543 Post) – Last Date: 11 September 2025</Link></li>
<li><Link to="/latestjobs/rrc-eastern-railway-apprentice-recruitment-2025" className="text-blue-800 hover:underline">RRC Eastern Railway Apprentice Online Form 2025 – Last Date: 13 September 2025</Link></li>
<li><Link to="/latestjobs/rpsc-1st-grade-teacher-recruitment-2025" className="text-blue-800 hover:underline">RPSC 1st Grade Teacher Online Form 2025 – Last Date: 12 September 2025</Link></li>
<li><Link to="/latestjobs/rrc-cr-apprentice-recruitment-2025" className="text-blue-800 hover:underline">Railway RRC CR Apprentice Online Form 2025 – Last Date: 11 September 2025</Link></li>
<li><Link to="/latestjobs/bsf-hc-ro-rm-recruitment-2025" className="text-blue-800 hover:underline">BSF HC RO / RM Online Form 2025 – Last Date: 23 September 2025</Link></li>
<li><Link to="/latestjobs/indian-navy-tradesman-skilled-apprentice-2025" className="text-blue-800 hover:underline">Indian Navy Tradesman Skilled Apprentice Online Form 2025 – Last Date: 02 September 2025</Link></li>
<li><Link to="/latestjobs/up-police-si-syllabus-exam-pattern-2025" className="text-blue-800 hover:underline">UP Police SI Syllabus / Exam Pattern 2025 – Last Date: 11 September 2025</Link></li>
<li><Link to="/latestjobs/uppsc-gic-lecturer-recruitment-2025" className="text-blue-800 hover:underline">UPPSC GIC Lecturer Online Form 2025 – Last Date: 12 September 2025</Link></li>
<li><Link to="/latestjobs/indian-army-ncc-123rd-course-april-2026-online-form" className="text-blue-800 hover:underline">Indian Army NCC 123rd Course April 2026 Online Form – Last Date: 11 September 2025</Link></li>
<li><Link to="/latestjobs/indian-airforce-agniveer-vayu-02-2026-edit-application-form" className="text-blue-800 hover:underline">Indian Airforce Agniveer Vayu 02/2026 Edit Application Form</Link></li>
<li><Link to="/latestjobs/ofss-bihar-11th-intermediate-spot-admission-2025-27" className="text-blue-800 hover:underline">OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Last Date: 18 August 2025</Link></li>
<li><Link to="/latestjobs/rpsc-si-platoon-commander-recruitment-2025" className="text-blue-800 hover:underline">RPSC SI / Platoon Commander Online Form 2025 (1015 Posts) – Last Date: 08 September 2025</Link></li>
<li><Link to="/latestjobs/rrb-paramedical-staff-recruitment-2025" className="text-blue-800 hover:underline">Railway RRB Paramedical Staff CEN.No.03/2025 Online Form 2025 – Last Date: 08 September 2025</Link></li>
<li><Link to="/latestjobs/indian-navy-ssc-officer-june-2026-online-form" className="text-blue-800 hover:underline">Indian Navy SSC Officer June 2026 Online Form – Last Date: 01 September 2025</Link></li>
<li><Link to="/latestjobs/sbi-clerk-recruitment-2025" className="text-blue-800 hover:underline">SBI Clerk Online Form 2025 (5180 Posts) – Last Date: 26 August 2025</Link></li>
<li><Link to="/latestjobs/ib-security-assistant-recruitment-2025" className="text-blue-800 hover:underline">IB Security Assistant Online Form 2025 (4987 Post) – Last Date: 17 August 2025</Link></li>
<li><Link to="/latestjobs/bsf-constable-tradesman-recruitment-2025" className="text-blue-800 hover:underline">BSF Constable Tradesman Online Form 2025 – Last Date: 24 August 2025</Link></li>
<li><Link to="/latestjobs/ibps-clerk-15th-recruitment-2025" className="text-blue-800 hover:underline">IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Last Date: 21 August 2025</Link></li>
<li><Link to="/latestjobs/indian-navy-ssc-executive-it-jan-2026" className="text-blue-800 hover:underline">Indian Navy SSC Executive IT Jan 2026 Online Form – Last Date: 20 August 2025</Link></li>
<li><Link to="/latestjobs/oicl-assistant-recruitment-2025" className="text-blue-800 hover:underline">Oriental Insurance OICL Assistant Recruitment 2025</Link></li>
<li><Link to="/latestjobs/bihar-jeevika-online-form-2025" className="text-blue-800 hover:underline">Bihar Jeevika Online Form 2025</Link></li>
<li><Link to="/latestjobs/bihar-jeevika-online-form-2025-2747-posts" className="text-blue-800 hover:underline">Bihar JEEVIKA Online Form 2025 (2747 Posts) – Last Date: 18 August 2025</Link></li>
<li><Link to="/latestjobs/up-police-otr-registration-2025" className="text-blue-800 hover:underline">UP Police OTR Registration 2025</Link></li>
<li><Link to="/latestjobs/dsssb-non-teaching-various-post-online-form-2025" className="text-blue-800 hover:underline">DSSSB Non-Teaching Various Post Online Form 2025 – Last Date: 16 September 2025</Link></li>
<li><Link to="/latestjobs/mpesb-primary-school-teacher-pstst-online-form-2025" className="text-blue-800 hover:underline">MPESB Primary School Teacher PSTST Online Form 2025 – Last Date: 25 August 2025</Link></li>
<li><Link to="/latestjobs/oriental-insurance-oicl-assistant-online-form-2025" className="text-blue-800 hover:underline">Oriental Insurance OICL Assistant Online Form 2025 – Last Date: 17 August 2025</Link></li>
<li><Link to="/latestjobs/indian-navy-ssc-executive-it-january-2026-online-form" className="text-blue-800 hover:underline">Indian Navy SSC Executive IT January 2026 Online Form – Last Date: 17 August 2025</Link></li>
<li><Link to="/latestjobs/ccras-group-a-b-c-online-form-2025" className="text-blue-800 hover:underline">CCRAS Group A B C Online Form 2025 – Last Date: 31 August 2025</Link></li>
<li><Link to="/latestjobs/upsc-epfo-eo-ao-apfc-online-form-2025" className="text-blue-800 hover:underline">UPSC EPFO EO / AO / APFC Online Form 2025 – Last Date: 18 August 2025</Link></li>
<li><Link to="/latestjobs/supreme-court-sci-court-master-online-form-2025" className="text-blue-800 hover:underline">Supreme Court SCI Court Master Online Form 2025</Link></li>
<li><Link to="/latestjobs/uppsc-assistant-teacher-tgt-online-form-2025" className="text-blue-800 hover:underline">UPPSC Assistant Teacher TGT Online Form 2025 – Last Date: 28 August 2025</Link></li>
<li><Link to="/latestjobs/bank-of-baroda-so-online-form-2025" className="text-blue-800 hover:underline">Bank of Baroda SO Online Form 2025 – Last Date: 19 August 2025</Link></li>
<li><Link to="/latestjobs/rpsc-assistant-agriculture-engineer-online-form-2025" className="text-blue-800 hover:underline">RPSC Assistant Agriculture Engineer Online Form 2025 – Last Date: 26 August 2025</Link></li>
<li><Link to="/latestjobs/indian-army-ssc-technical-men-april-2026-online-form" className="text-blue-800 hover:underline">Indian Army SSC Technical Men April 2026 Online Form – Last Date: 22 August 2025</Link></li>
<li><Link to="/latestjobs/indian-army-ssc-technical-april-2026-online-form" className="text-blue-800 hover:underline">Indian Army SSC Technical April 2026 Online Form – Last Date: 21 August 2025</Link></li>
<li><Link to="/latestjobs/rssb-platoon-commander-online-form-2025" className="text-blue-800 hover:underline">RSSB Platoon Commander Online Form 2025 – Last Date: 21 August 2025</Link></li>
<li><Link to="/latestjobs/mppgcl-ae-je-other-post-online-form-2025" className="text-blue-800 hover:underline">MPPGCL AE/ JE & Other Post Online Form 2025 – Last Date: 21 August 2025</Link></li>
<li><Link to="/latestjobs/rssb-upper-school-teacher-online-form-2025-2123-posts" className="text-blue-800 hover:underline">RSSB Upper School Teacher Online Form 2025 (2123 Posts) – Last Date: Available Soon</Link></li>
<li><Link to="/latestjobs/rssb-primary-school-teacher-online-form-2025-5636-posts" className="text-blue-800 hover:underline">RSSB Primary School Teacher Online Form 2025 (5636 Posts) – Last Date: Available Soon</Link></li>
<li><Link to="/latestjobs/rssb-aayush-officer-online-form-2025-1535-posts" className="text-blue-800 hover:underline">RSSB Aayush Officer Online Form 2025 (1535 Posts) – Last Date: Available Soon</Link></li>
<li><Link to="/latestjobs/rssb-support-engineer-online-form-2025-1050-posts" className="text-blue-800 hover:underline">RSSB Support Engineer Online Form 2025 (1050 Posts) – Last Date: Available Soon</Link></li>
<li><Link to="/latestjobs/rssb-forest-guard-forester-surveyor-online-form-2025" className="text-blue-800 hover:underline">RSSB Forest Guard, Forester & Surveyor Online Form 2025 – Last Date: Available Soon</Link></li>
<li><Link to="/latestjobs/rssb-agriculture-supervisor-online-form-2025-1100-posts" className="text-blue-800 hover:underline">RSSB Agriculture Supervisor Online Form 2025 (1100 Posts) – Last Date: Available Soon</Link></li>
<li><Link to="/latestjobs/rpsc-veterinary-officer-online-form-2025-1100-posts" className="text-blue-800 hover:underline">RPSC Veterinary Officer Online Form 2025 (1100 Posts) – Last Date: 03 September 2025</Link></li>
<li><Link to="/latestjobs/rpsc-senior-teacher-grade-iv-online-form-2025-6500-posts" className="text-blue-800 hover:underline">RPSC Senior Teacher Grade IV Online Form 2025 (6500 Posts) – Last Date: 17 September 2025</Link></li>
<li><Link to="/latestjobs/army-school-awes-tgt-pgt-prt-online-form-2025" className="text-blue-800 hover:underline">Army School AWES TGT, PGT, PRT Online Form 2025 – Last Date: 16 August 2025</Link></li>


          {/* Add more results here */}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default LatestJobs;
