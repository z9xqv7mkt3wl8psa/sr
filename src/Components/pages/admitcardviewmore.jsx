import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import admitcardBanner from '../../images/admitcardbanner.png'; // <-- Replace with your image path

const Admitcard = () => {
  return (
    <>
      <div className='border-2 border-gray-300 bg-white shadow-lg rounded-md mx-auto mt-6 max-w-4xl'>
        {/* Image at the top */}
    <img 
  src={admitcardBanner} 
  alt="Admit Card Banner" 
  className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-t-md" 
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
  <Link to="/admitcard/bihar-btsc-tutor-nursing-admit-card-2025" className="text-blue-800 hover:underline">
    Bihar BTSC Tutor Nursing Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bihar-bpssc-enforcement-si-admit-card-2025" className="text-blue-800 hover:underline">
    BPSSC Bihar Police Enforcement SI Admit Card Date 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/ibps-po-mt-xv-pre-admit-card-2025" className="text-blue-800 hover:underline">
    IBPS PO MT XV 15 Pre Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/railway-rrb-ntpc-inter-admit-card-2025" className="text-blue-800 hover:underline">
    Railway RRB NTPC 10+2 Inter Level Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/upsc-civil-services-ias-mains-admit-card-2025" className="text-blue-800 hover:underline">
    UPSC Civil Services IAS Mains Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bscb-assistant-csa-exam-date-2025" className="text-blue-800 hover:underline">
    BSCB Bihar Co-operative Bank Assistant/ CSA Exam Date 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/bihar-bpssc-si-prohibition-mains-admit-card-2025" className="text-blue-800 hover:underline">
    Bihar Police BPSSC SI Prohibition Mains Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bpsc-vice-principal-iti-admit-card-2025" className="text-blue-800 hover:underline">
    BPSC Vice Principal ITI Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bank-of-baroda-lbo-exam-date-2025" className="text-blue-800 hover:underline">
    Bank Of Baroda LBO Exam Date 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bihar-vidhan-sabha-office-attendant-admit-card-2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Sabha Office Attendant 05/2023 Admit Card 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/rajasthan-rssb-patwari-admit-card-2025" className="text-blue-800 hover:underline">
    Rajasthan RSSB Patwari Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bihar-vidhan-parishad-office-attendant-admit-card-2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Parishad Office Attendant 03/2024 Admit Card 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/ssc-gd-constable-pet-pst-admit-card-2025" className="text-blue-800 hover:underline">
    SSC Constable GD 2024 PET/ PST Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/rrb-ministerial-isolated-exam-date-2025" className="text-blue-800 hover:underline">
    Railway RRB Ministerial & Isolated CEN 07/2024 Exam Date 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/rbi-grade-a-b-admit-card-2025" className="text-blue-800 hover:underline">
    RBI Grade A, B Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bpssc-range-officer-forest-admit-card-2025" className="text-blue-800 hover:underline">
    BPSSC Range Officer of Forest Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/afcat-02-2025-exam-city-details" className="text-blue-800 hover:underline">
    AFCAT 02/2025 Exam City Details – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/rssb-vdo-new-exam-date-2025" className="text-blue-800 hover:underline">
    RSSB VDO New Exam Date 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/bpsc-mvi-admit-card-2025" className="text-blue-800 hover:underline">
    BPSC MVI Admit Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/bpsc-mdo-admit-card-2025" className="text-blue-800 hover:underline">
    BPSC MDO Admit Card 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Sabha Security Guard 01/2023 PET Admit Card 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/ssc-chsl-10plus2-tentative-vacancy-2025" className="text-blue-800 hover:underline">
    SSC CHSL 10+2 Tentative Vacancy Details 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/ssc-je-tentative-vacancy-2025" className="text-blue-800 hover:underline">
    SSC JE 2025 Tentative Vacancy – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/ssc-jht-exam-city-details-2025" className="text-blue-800 hover:underline">
    SSC JHT Exam City Details 2025 – Out
  </Link>
</li>
<li>
  <Link to="/admitcard/ssc-stenographer-c-d-admit-card-2025" className="text-blue-800 hover:underline">
    SSC Stenographer C, D Admit Card 2025
  </Link>
</li>
<li>
  <Link to="/admitcard/dsssb-assistant-teacher-08-2023-admit-card-2025" className="text-blue-800 hover:underline">
    DSSSB Assistant Teacher 08/2023 Admit Card 2025 – Out
  </Link>
</li>
<li><Link to="/admitcard/uksssc-police-constable-2025" className="text-blue-800 hover:underline">UKSSSC Police Constable Written Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/ssc-cgl-tentative-vacancy-2025" className="text-blue-800 hover:underline">SSC CGL 2025 Tentative Vacancy</Link></li>
<li><Link to="/admitcard/bpsc-dso-ad-2025" className="text-blue-800 hover:underline">BPSC DSO/ AD Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/neet-pg-2025" className="text-blue-800 hover:underline">NEET PG Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/bihar-bssc-field-assistant-pre-2025" className="text-blue-800 hover:underline">Bihar BSSC Field Assistant Pre Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/upsc-engineering-services-mains-2025" className="text-blue-800 hover:underline">UPSC Engineering Services Mains Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/sci-junior-court-assistant-descriptive-test-2025" className="text-blue-800 hover:underline">SCI Junior Court Assistant Descriptive Test Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/dsssb-various-post-aug-sep-schedule-2025" className="text-blue-800 hover:underline">DSSSB Various Post August – September Exam Schedule 2025 – Out</Link></li>
<li><Link to="/admitcard/sav-bihar-class-11th-dummy-2025" className="text-blue-800 hover:underline">SAV Bihar Class 11th Dummy Admit Card 2025-27 – Out</Link></li>
<li><Link to="/admitcard/bihar-board-class-10th-12th-dummy-registration-2026" className="text-blue-800 hover:underline">Bihar Board Class 10th & 12th Dummy Registration Card 2026</Link></li>
<li><Link to="/admitcard/hpcl-junior-executive-2025" className="text-blue-800 hover:underline">HPCL Junior Executive Exam Date 2025 – Out</Link></li>
<li><Link to="/admitcard/upsc-capf-ac-2025" className="text-blue-800 hover:underline">UPSC CAPF AC Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/up-ncvt-mis-iti-2025" className="text-blue-800 hover:underline">UP NCVT MIS ITI Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/sbi-bank-po-pre-2025" className="text-blue-800 hover:underline">SBI Bank PO Pre Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/bihar-police-csbc-constable-2025" className="text-blue-800 hover:underline">Bihar Police CSBC Constable Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rssb-librarian-gr-iii-2025" className="text-blue-800 hover:underline">RSSB Librarian Gr-III Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/indian-navy-agniveer-mr-musician-2025" className="text-blue-800 hover:underline">Indian Navy Agniveer MR Musician Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rpsc-various-post-exam-date-2025" className="text-blue-800 hover:underline">RPSC Various Post Exam Date 2025</Link></li>
<li><Link to="/admitcard/upsssc-auditor-assistant-accountant-05-2023-dv-2025" className="text-blue-800 hover:underline">UPSSSC Auditor & Assistant Accountant 05/2023 DV Letter</Link></li>
<li><Link to="/admitcard/rpsc-senior-teacher-gr-ii-tgt-2025" className="text-blue-800 hover:underline">RPSC Senior Teacher Gr II TGT Exam Date 2025 – Out</Link></li>
<li><Link to="/admitcard/bseb-bihar-jee-neet-free-coaching-2025" className="text-blue-800 hover:underline">BSEB Bihar JEE/ NEET Free Coaching Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/indian-territorial-army-officer-2025" className="text-blue-800 hover:underline">Indian Territorial Army Officer Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/idbi-bank-jam-grade-o-interview-2025" className="text-blue-800 hover:underline">IDBI Bank JAM Grade “O” Interview Letter 2025 – Out</Link></li>
<li><Link to="/admitcard/jceceb-para-medical-entrance-2025" className="text-blue-800 hover:underline">JCECEB Para Medical Entrance Exam Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/upsssc-pet-exam-date-2025" className="text-blue-800 hover:underline">UPSSSC PET Exam Date 2025</Link></li>
<li><Link to="/admitcard/haryana-high-court-stenographer-2025" className="text-blue-800 hover:underline">Haryana High Court Stenographer Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/railway-rrb-alp-01-2024-cbat-2025" className="text-blue-800 hover:underline">Railway RRB ALP 01/2024 CBAT Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/aai-junior-executive-atc-2025" className="text-blue-800 hover:underline">AAI Junior Executive ATC Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/sbi-circle-based-officers-cbo-2025" className="text-blue-800 hover:underline">SBI Circle Based Officers CBO Admit Card 2025</Link></li>
<li><Link to="/admitcard/upsc-cms-2025" className="text-blue-800 hover:underline">UPSC CMS Admit Card 2025</Link></li>
<li><Link to="/admitcard/rajasthan-police-constable-new-exam-date-2025" className="text-blue-800 hover:underline">Rajasthan Police Constable New Exam Date 2025 – Out</Link></li>
<li><Link to="/admitcard/rajasthan-hc-civil-judge-pre-2025" className="text-blue-800 hover:underline">Rajasthan HC Civil Judge Pre Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/jharkhand-high-court-assistant-2025" className="text-blue-800 hover:underline">Jharkhand High Court Assistant Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rpsc-research-assistant-2025" className="text-blue-800 hover:underline">RPSC Research Assistant Admit Card 2025</Link></li>
<li><Link to="/admitcard/iob-local-bank-officer-lbo-2025" className="text-blue-800 hover:underline">IOB Local Bank Officer LBO Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/bpsc-71th-pre-exam-date-2025" className="text-blue-800 hover:underline">BPSC 71th Pre Exam Date 2025 – Out</Link></li>
<li><Link to="/admitcard/bpsc-assistant-section-officer-aso-pre-exam-date-2025" className="text-blue-800 hover:underline">BPSC Assistant Section Officer ASO Pre Exam Date 2025 – Out</Link></li>
<li><Link to="/admitcard/jpsc-acf-pre-2025" className="text-blue-800 hover:underline">JPSC ACF Pre Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/pspcl-assistant-lineman-2025" className="text-blue-800 hover:underline">PSPCL Assistant Lineman Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rpsc-school-lecturer-pgt-2025" className="text-blue-800 hover:underline">RPSC School Lecturer PGT Admit Card 2025</Link></li>
<li><Link to="/admitcard/uppsc-pcs-mains-2025" className="text-blue-800 hover:underline">UPPSC PCS Mains Admit Card 2025</Link></li>
<li><Link to="/admitcard/uksssc-group-c-forester-2025" className="text-blue-800 hover:underline">UKSSSC Group C Forester Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/bssc-ldc-welfare-organiser-2025" className="text-blue-800 hover:underline">BSSC LDC & Welfare Organiser Exam Date 2025 – Out</Link></li>
<li><Link to="/admitcard/nielit-ccc-june-2025" className="text-blue-800 hover:underline">NIELIT CCC Admit Card June 2025 – Out</Link></li>
<li><Link to="/admitcard/ibps-revised-exam-calendar-2025-2026" className="text-blue-800 hover:underline">IBPS Revised Exam Calendar 2025-2026</Link></li>
<li><Link to="/admitcard/rpsc-ras-mains-2025" className="text-blue-800 hover:underline">RPSC RAS Mains Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rpsc-assistant-engineer-mains-2025" className="text-blue-800 hover:underline">RPSC Assistant Engineer Mains Exam Date 2025</Link></li>
<li><Link to="/admitcard/jharkhand-jcece-2025" className="text-blue-800 hover:underline">Jharkhand JCECE Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rssb-livestock-assistant-exam-city-2025" className="text-blue-800 hover:underline">RSSB Livestock Assistant Exam City Details 2025</Link></li>
<li><Link to="/admitcard/rssb-account-assistant-exam-city-2025" className="text-blue-800 hover:underline">RSSB Account Assistant Exam City Details 2025</Link></li>
<li><Link to="/admitcard/rssb-exam-calendar-2025-revised" className="text-blue-800 hover:underline">RSSB Exam Calendar 2025 Revised</Link></li>
<li><Link to="/admitcard/cipet-2025" className="text-blue-800 hover:underline">CIPET Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/ignou-tee-exam-june-2025" className="text-blue-800 hover:underline">IGNOU TEE Exam June Admit Card 2025 – Out</Link></li>
<li><Link to="/admitcard/rpf-sub-inspector-si-pet-pmt-exam-date-2025" className="text-blue-800 hover:underline">RPF Sub Inspector SI PET / PMT Exam Date </Link></li>
     
          {/* Add more results here */}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Admitcard;
