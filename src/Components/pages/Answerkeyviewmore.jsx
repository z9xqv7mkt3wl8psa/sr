import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import answerkeyBanner from '../../images/answerkeybanner.png'; // <-- Replace with your image path

const AnswerKey = () => {
  return (
    <>
      <div className='border-2 border-gray-300 bg-white shadow-lg rounded-md mx-auto mt-6 max-w-4xl'>
        {/* Image at the top */}
   <img 
       src={answerkeyBanner} 
       alt="Answer Key Banner" 
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
  <Link to="/answerkey/ssc-cpo-si-paper2-2025" className="text-blue-800 hover:underline">
    SSC CPO SI Paper II Final Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/answerkey/bsphcl-technician-gr3-answerkey-2025" className="text-blue-800 hover:underline">
    Bihar BSPHCL Technician Gr-III Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/answerkey/phc-mazdoor-final-answerkey-202" className="text-blue-800 hover:underline">
    Patna High Court Mazdoor Final Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/answerkey/bseb-sakshamta-pariksha-3rd-answerkey-2025" className="text-blue-800 hover:underline">
    BSEB Sakshamta Pariksha 3rd Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/answerkey/bpsc-aee-other-post-answerkey-2025" className="text-blue-800 hover:underline">
    BPSC AEE & Other Post Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/answerkey/ssc-phase13-answerkey-2025" className="text-blue-800 hover:underline">
    SSC Phase 13 Answer Key 2025
  </Link>
</li>

<li><Link to="/answerkey/bihar-btsc-staff-nurse-2025" className="text-blue-800 hover:underline">Bihar BTSC Staff Nurse Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/bihar-bpsc-assistant-engineer-ae-2025" className="text-blue-800 hover:underline">Bihar BPSC Assistant Engineer AE Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/allahabad-high-court-uphjs-2023-pre" className="text-blue-800 hover:underline">Allahabad High Court UPHJS 2023 Pre Answer Key</Link></li>
<li><Link to="/answerkey/rpsc-deputy-jailor-2025" className="text-blue-800 hover:underline">RPSC Deputy Jailor Answer Key 2025</Link></li>
<li><Link to="/answerkey/dsssb-may-june-final-2025" className="text-blue-800 hover:underline">DSSSB May & June Examination Final Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/nta-csir-ugc-net-june-2025" className="text-blue-800 hover:underline">NTA CSIR UGC NET June Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/haryana-tet-2024" className="text-blue-800 hover:underline">Haryana TET 2024 Answer Key – Out</Link></li>
<li><Link to="/answerkey/uppsc-ro-aro-2023-pre-2025" className="text-blue-800 hover:underline">UPPSC RO/ ARO 2023 Pre Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/bihar-btsc-dresser-2025" className="text-blue-800 hover:underline">Bihar BTSC Dresser Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/hssc-cet-group-c-2025" className="text-blue-800 hover:underline">HSSC CET Group C Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/mpesb-pat-2025" className="text-blue-800 hover:underline">MPESB PAT Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-vdo-2023-mains" className="text-blue-800 hover:underline">UPSSSC VDO 2023 Mains Revised Answer Key</Link></li>
<li><Link to="/answerkey/scl-assistant-2025" className="text-blue-800 hover:underline">SCL Assistant Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/dfccil-mts-executive-jr-manager-2025" className="text-blue-800 hover:underline">DFCCIL MTS, Executive & Jr. Manager Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/cpcb-various-post-2025" className="text-blue-800 hover:underline">CPCB Various Post Answer Key 2025</Link></li>
<li><Link to="/answerkey/upsssc-technical-assistant-group-c-072024" className="text-blue-800 hover:underline">UPSSSC Technical Assistant Group C 07/2024 Answer Key – Out</Link></li>
<li><Link to="/answerkey/cci-various-147-post-2025" className="text-blue-800 hover:underline">CCI Various 147 Post Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/ukpsc-upper-pcs-pre-2025" className="text-blue-800 hover:underline">UKPSC Upper PCS Pre Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/ncl-cil-technician-2025" className="text-blue-800 hover:underline">NCL CIL Technician Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-sachiv-grade-iii-mains-2025" className="text-blue-800 hover:underline">UPSSSC Sachiv Grade-III Mains Revised Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-junior-assistant-mains-2025" className="text-blue-800 hover:underline">UPSSSC Junior Assistant Mains Answer Key/ Objection 2025</Link></li>
<li><Link to="/answerkey/nielit-scientific-assistant-2025" className="text-blue-800 hover:underline">NIELIT Scientific Assistant Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/railway-rrb-ntpc-graduate-level-2025" className="text-blue-800 hover:underline">Railway RRB NTPC Graduate Level Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/bihar-dst-office-attendant-2025" className="text-blue-800 hover:underline">Bihar DST Office Attendant Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/dgafms-group-c-2025" className="text-blue-800 hover:underline">DGAFMS Group C Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-assistant-accountant-2025" className="text-blue-800 hover:underline">UPSSSC Assistant Accountant Revised Answer Key 2025</Link></li>
<li><Link to="/answerkey/upsssc-junior-analyst-food-2025" className="text-blue-800 hover:underline">UPSSSC Junior Analyst Food Revised Answer Key 2025</Link></li>
<li><Link to="/answerkey/mpesb-group-i-sub-group-3-2025" className="text-blue-800 hover:underline">MPESB Group I Sub Group 3 Answer Key 2025</Link></li>
<li><Link to="/answerkey/rpsc-pro-2025" className="text-blue-800 hover:underline">RPSC PRO Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/bihar-board-10th-compartmental-2025" className="text-blue-800 hover:underline">Bihar Board 10th Compartmental Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/nta-nssnet-2025" className="text-blue-800 hover:underline">NTA NSSNET Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-enforcement-constable-2025" className="text-blue-800 hover:underline">UPSSSC Enforcement Constable Answer Key 2025</Link></li>
<li><Link to="/answerkey/mpesb-group-4-various-post-2025" className="text-blue-800 hover:underline">MPESB Group 4 Various Post Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/rajasthan-rssb-jail-prahari-2025" className="text-blue-800 hover:underline">Rajasthan RSSB Jail Prahari Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-junior-analyst-medicine-2024" className="text-blue-800 hover:underline">UPSSSC Junior Analyst Medicine 2024 Revised Answer Key</Link></li>
<li><Link to="/answerkey/upsssc-homoeopathic-pharmacist-2024" className="text-blue-800 hover:underline">UPSSSC Homoeopathic Pharmacist 2024 Exam Revised Answer Key</Link></li>
<li><Link to="/answerkey/mp-esb-middle-primary-teacher-2025" className="text-blue-800 hover:underline">MP ESB Middle and Primary Teacher Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/upsssc-dental-hygienist-2023" className="text-blue-800 hover:underline">UPSSSC Dental Hygienist 2023 Revised Answer Key</Link></li>
<li><Link to="/answerkey/aai-junior-senior-assistant-2025" className="text-blue-800 hover:underline">AAI Junior/ Senior Assistant Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/rpsc-agriculture-officer-2025" className="text-blue-800 hover:underline">RPSC Agriculture Officer Answer Key 2025</Link></li>
<li><Link to="/answerkey/upsssc-assistant-store-keeper-2025" className="text-blue-800 hover:underline">UPSSSC Assistant Store Keeper Answer Key 2025 – Out</Link></li>
<li><Link to="/answerkey/ssc-mts-havaldar-2024" className="text-blue-800 hover:underline">SSC MTS & Havaldar 2024 Final Answer Key – Out</Link></li>
<li><Link to="/answerkey/ssc-cgl-2024-final" className="text-blue-800 hover:underline">SSC CGL 2024 Final Result/ Final Answer Key/ Marks</Link></li>
<li><Link to="/answerkey/jharkhand-jssc-jmlcce-2023-2024" className="text-blue-800 hover:underline">Jharkhand JSSC JMLCCE 2023 Exam Answer Key 2024 – Out</Link></li>
<li><Link to="/answerkey/rajasthan-rsmssb-junior-instructor-2024" className="text-blue-800 hover:underline">Rajasthan RSMSSB Junior Instructor 2024 Answer Key</Link></li>
<li><Link to="/answerkey/upsssc-junior-assistant-2022" className="text-blue-800 hover:underline">UPSSSC Junior Assistant 2022 Answer Key / Objection</Link></li>
<li><Link to="/answerkey/rpsc-sr-teacher-sanskrit-2024" className="text-blue-800 hover:underline">RPSC Sr. Teacher (Sanskrit Edu.) Answer Key 2024 – Out</Link></li>
<li><Link to="/answerkey/ssc-cpo-si-paper-ii-2024" className="text-blue-800 hover:underline">SSC CPO SI Paper II Answer Key 2024 Out At ssc.nic.in</Link></li>
<li><Link to="/answerkey/ctet-january-2018" className="text-blue-800 hover:underline">CTET January 2018 Answer Key Download At ctet.nic.in</Link></li>


          {/* Add more results here */}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default AnswerKey;
