import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import resultBanner from '../../images/resultbanner.png'; // <-- Replace with your image path

const Result = () => {
  return (
    <>
      <div className='border-2 border-gray-300 bg-white shadow-lg rounded-md mx-auto mt-6 max-w-4xl'>
        {/* Image at the top */}
   <img 
       src={resultBanner} 
       alt="Result Banner" 
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
  <Link to="/result/ssc-steno-cd-final-marks-2025" className="text-blue-800 hover:underline">
    SSC Stenographer C, D Final Marks 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-btsc-insect-collector-result-2025" className="text-blue-800 hover:underline">
    Bihar BTSC Insect Collector Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/sbi-clerk-waitlist-2025" className="text-blue-800 hover:underline">
    SBI Bank Clerk 1st Wait List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bvs-junior-clerk-result-2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-icar-aieea-result-2025" className="text-blue-800 hover:underline">
    NTA ICAR AIEEA PG and PhD Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/jci-various-post-result-2025" className="text-blue-800 hover:underline">
    JCI Various Post 2024 Result – Out
  </Link>
</li>
<li>
  <Link to="/result/rrb-paramedical-result-2025" className="text-blue-800 hover:underline">
    Railway RRB Paramedical Staff CEN 04/2024 Result/ Score Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/niacl-apprentice-result-2025" className="text-blue-800 hover:underline">
    NIACL Apprentice Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/cbse-superintendent-tier2-result-2025" className="text-blue-800 hover:underline">
    CBSE Superintendent Tier-2 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-shsb-cho-result-2025" className="text-blue-800 hover:underline">
    Bihar SHSB CHO Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/sci-spa-result-2025" className="text-blue-800 hover:underline">
    Supreme Court of India SPA Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/lnmu-ug-3rd-merit-list-2025" className="text-blue-800 hover:underline">
    LNMU UG 3rd Merit List 2025-29 – Out
  </Link>
</li>
<li>
  <Link to="/result/nicl-ao-pre-result-2025" className="text-blue-800 hover:underline">
    NICL AO Scale-I Pre Result 2025
  </Link>
</li>
<li>
  <Link to="/result/hbse-class-10th-compartmental-result-2025" className="text-blue-800 hover:underline">
    Haryana Board Class 10th Compartmental Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bpsc-ae-result-2025" className="text-blue-800 hover:underline">
    BPSC Assistant Engineer AE 32, 33/2024 Result – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-animal-attendant-result-2025" className="text-blue-800 hover:underline">
    Rajasthan RSMSSB Animal Attendant Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-jen-result-2025" className="text-blue-800 hover:underline">
    Rajasthan RSMSSB Junior Engineer JE Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-surveyor-mines-supervisor-result-2025" className="text-blue-800 hover:underline">
    RSMSSB Surveyor and Mines Supervisor Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-cet-bed-3rd-merit-list-2025" className="text-blue-800 hover:underline">
    Bihar CET B.Ed 3rd Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsc-engineering-services-reserve-list-2024" className="text-blue-800 hover:underline">
    UPSC Engineering Services 2024 Reserve List – Out
  </Link>
</li>
<li>
  <Link to="/result/up-board-10th-12th-compartmental-result-2025" className="text-blue-800 hover:underline">
    UP Board Class 10th/ 12th Compartmental Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta-ntet-result-2025" className="text-blue-800 hover:underline">
    NTA NTET Result/ Score Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-group1-2-result-2025" className="text-blue-800 hover:underline">
    MPESB Group 1 & 2 Sub Group 1 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/ubi-assistant-manager-result-2025" className="text-blue-800 hover:underline">
    Union Bank of India Assistant Manager Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/railway-secr-apprentice-final-merit-list-2025" className="text-blue-800 hover:underline">
    Railway SECR Raipur Apprentice Final Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/upsssc-junior-assistant-result-2025" className="text-blue-800 hover:underline">
    UPSSSC Junior Assistant 08/2022 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-iticat-1st-round-allotment-2025" className="text-blue-800 hover:underline">
    Bihar ITI CAT 2025 1st Round Allotment Result
  </Link>
</li>

<li>
  <Link to="/result/bihar-diploma-dece-le-2025-2nd-round-allotment-result" className="text-blue-800 hover:underline">
    Bihar Diploma DECE LE 2025 2nd Round Allotment Result – Out
  </Link>
</li>
<li>
  <Link to="/result/ibps-clerk-14-reserve-list-2025" className="text-blue-800 hover:underline">
    IBPS Clerk 14 Reserve List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/ibps-po-14-reserve-list-2025" className="text-blue-800 hover:underline">
    IBPS PO 14 Reserve List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/ibps-so-14-reserve-list-2025" className="text-blue-800 hover:underline">
    IBPS SO 14 Reserve List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-pbbsc-msc-nursing-result-2025" className="text-blue-800 hover:underline">
    MPESB PBBSC MSC Nursing Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-aiapget-result-2025" className="text-blue-800 hover:underline">
    NTA AIAPGET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/india-post-gds-6th-merit-list-2025" className="text-blue-800 hover:underline">
    India Post GDS 6th Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsc-geo-scientist-mains-result-2025" className="text-blue-800 hover:underline">
    UPSC Geo-Scientist Mains Result 2025 (Name Wise) – Out
  </Link>
</li>
<li>
  <Link to="/result/bis-group-a-b-c-post-2024-final-result" className="text-blue-800 hover:underline">
    BIS Group A, B, C Post 2024 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/upsssc-eye-testing-officer-eto-2023-result" className="text-blue-800 hover:underline">
    UPSSSC Eye Testing Officer ETO 2023 Result
  </Link>
</li>
<li>
  <Link to="/result/ssc-jht-2024-final-result" className="text-blue-800 hover:underline">
    SSC JHT 2024 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/indian-army-agniveer-cee-result-2025" className="text-blue-800 hover:underline">
    Indian Army Agniveer CEE Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-pnst-gnmtst-result-2025" className="text-blue-800 hover:underline">
    MPESB PNST/ GNMTST Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mp-anmtst-result-2025" className="text-blue-800 hover:underline">
    MP ANMTST Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/cbi-apprentices-final-result-2025" className="text-blue-800 hover:underline">
    Central Bank CBI Apprentices Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/jpsc-civil-services-final-result-2025" className="text-blue-800 hover:underline">
    JPSC Civil Services Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/itbp-medical-officer-result-2025" className="text-blue-800 hover:underline">
    ITBP Medical Officer MO Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/brabu-ug-2nd-merit-list-2025-29" className="text-blue-800 hover:underline">
    BRABU UG 2nd Merit List 2025-29 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-ugc-net-june-result-2025" className="text-blue-800 hover:underline">
    NTA UGC NET June Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rrb-je-cbt-2-result-2025" className="text-blue-800 hover:underline">
    Railway RRB JE CBT-2 Result / Score Card 2025 – Update
  </Link>
</li>
<li>
  <Link to="/result/hppsc-hpas-pre-exam-result-2025" className="text-blue-800 hover:underline">
    HPPSC HPAS Pre Exam Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aiims-bsc-nursing-1st-round-seat-allotment-2025" className="text-blue-800 hover:underline">
    AIIMS BSc Nursing 1st Round Seat Allocation Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-addet-result-2025" className="text-blue-800 hover:underline">
    MP MPESB ADDET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/iit-jee-advanced-score-card-2025" className="text-blue-800 hover:underline">
    IIT JEE Advanced Score Cared 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-btsc-smo-final-result-2025" className="text-blue-800 hover:underline">
    Bihar BTSC SMO Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bsf-group-b-c-various-post-result-2025" className="text-blue-800 hover:underline">
    BSF Group B, C Various Post Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/iert-entrance-result-2025" className="text-blue-800 hover:underline">
    IERT Entrance Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/secr-nagpur-apprentice-merit-list-2025" className="text-blue-800 hover:underline">
    Railway SECR Nagpur Apprentice Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/nvs-non-teaching-result-2025" className="text-blue-800 hover:underline">
    NVS Non Teaching Various Post Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/indian-navy-incet-01-24-result" className="text-blue-800 hover:underline">
    Indian Navy INCET 01/24 (Fireman, Driver) Result – Out
  </Link>
</li>
<li>
  <Link to="/result/purnea-university-ug-1st-merit-list-2025-29" className="text-blue-800 hover:underline">
    Purnea University UG 1st Merit List 2025-29
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-informatic-assistant-2023-final-result" className="text-blue-800 hover:underline">
    RSMSSB Informatic Assistant 2023 Final Result
  </Link>
</li>
<li>
  <Link to="/result/hpsc-assistant-professor-result-2025" className="text-blue-800 hover:underline">
    HPSC Assistant Professor Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/secr-bilaspur-apprentice-provisional-merit-list-2025" className="text-blue-800 hover:underline">
    Railway SECR Bilaspur Apprentice Provisional Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/upsc-epfo-2024-skill-test-shortlist" className="text-blue-800 hover:underline">
    UPSC EPFO 2024 Shortlisted for Skill Test
  </Link>
</li>
<li>
  <Link to="/result/hssc-group-c-25-2nd-list" className="text-blue-800 hover:underline">
    HSSC Group C (Group 25) Shortlisted Candidates 2nd List
  </Link>
</li>
<li>
  <Link to="/result/nfl-non-executives-2024-result" className="text-blue-800 hover:underline">
    NFL Non Executives Various Post 2024 Result/ Score Card
  </Link>
</li>
<li>
  <Link to="/result/cbi-zone-based-officer-result-2025" className="text-blue-800 hover:underline">
    Central Bank Zone Based Officer ZBO Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/csir-crri-jsa-jst-skill-test-result-2025" className="text-blue-800 hover:underline">
    Delhi CSIR CRRI JSA, JST Skill Test Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aic-management-trainee-result-2025" className="text-blue-800 hover:underline">
    AIC Management Trainee MT Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/up-board-10th-12th-scrutiny-result-2025" className="text-blue-800 hover:underline">
    UP Board 10th / 12th Scrutiny Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/idbi-bank-jam-final-result-2025" className="text-blue-800 hover:underline">
    IDBI Bank JAM Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-home-guard-final-merit-list-2025" className="text-blue-800 hover:underline">
    Bihar Home Guard Final Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/uppsc-staff-nurse-unani-2023-final-result" className="text-blue-800 hover:underline">
    UPPSC Staff Nurse Unani 2023 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/uppsc-staff-nurse-ayurved-final-result-2025" className="text-blue-800 hover:underline">
    UPPSC Staff Nurse Ayurved Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-cuet-ug-result-2025" className="text-blue-800 hover:underline">
    NTA CUET UG Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/up-cpet-result-2025" className="text-blue-800 hover:underline">
    UP CPET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-sangnak-computer-2023-exam-result-2025" className="text-blue-800 hover:underline">
    Rajasthan RSSB Sangnak Computer 2023 Exam Result 2025
  </Link>
</li>
<li>
  <Link to="/result/hssc-cet-group-d-01-2023-additional-result" className="text-blue-800 hover:underline">
    HSSC CET Group-D 01/2023 Additional Post Result
  </Link>
</li>
<li>
  <Link to="/result/rrb-alp-cbt-2-result-2025" className="text-blue-800 hover:underline">
    Railway RRB ALP CBT-2 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-ptet-result-2025" className="text-blue-800 hover:underline">
    Rajasthan PTET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsssc-mukhya-sevika-05-2022-final-result" className="text-blue-800 hover:underline">
    UPSSSC UP Mukhya Sevika 05/2022 Final Result
  </Link>
</li>
<li>
  <Link to="/result/up-iti-1st-merit-list-2025" className="text-blue-800 hover:underline">
    UP ITI 1st Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rrb-ntpc-graduate-level-answer-key-2025" className="text-blue-800 hover:underline">
    Railway RRB NTPC Graduate Level Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bcece-entrance-exam-result-2025" className="text-blue-800 hover:underline">
    BCECE Entrance Exam Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/magadh-university-ug-1st-merit-list-2025" className="text-blue-800 hover:underline">
    Magadh University UG 1st Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bpssc-asi-steno-final-result-2025" className="text-blue-800 hover:underline">
    BPSSC ASI Steno Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/vksu-ug-1st-merit-list-2025" className="text-blue-800 hover:underline">
    VKSU UG 1st Merit List / Cutoff 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/patna-university-ug-3rd-merit-list-2025-29" className="text-blue-800 hover:underline">
    Patna University UG 3rd Merit List 2025-29 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-swayam-result-2025" className="text-blue-800 hover:underline">
    NTA SWAYAM Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/patna-hc-translator-final-result-2025" className="text-blue-800 hover:underline">
    Patna HC Translator Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-reet-certificate-download-2025" className="text-blue-800 hover:underline">
    Rajasthan REET Certificate Download 2025
  </Link>
</li>
<li>
  <Link to="/result/up-police-head-operator-final-result-2025" className="text-blue-800 hover:underline">
    UP Police Head Operator Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/gpat-result-2025" className="text-blue-800 hover:underline">
    GPAT Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsc-cpf-ac-final-result-with-marks-2025" className="text-blue-800 hover:underline">
    UPSC CPF Assistant Commandant Final Result With Marks 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/allahabad-university-pgat-result-2025" className="text-blue-800 hover:underline">
    Allahabad University PGAT Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upcatet-result-2025" className="text-blue-800 hover:underline">
    UPCATET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-cooperative-bank-rcrb-result-2025" className="text-blue-800 hover:underline">
    Rajasthan Cooperative Bank RCRB Various Post Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/cbi-credit-officer-result-2025" className="text-blue-800 hover:underline">
    Central Bank Credit Officer Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-nift-final-result-2025" className="text-blue-800 hover:underline">
    NTA NIFT Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-parvekshak-result-2025" className="text-blue-800 hover:underline">
    MPESB Parvekshak Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/uco-bank-lbo-final-result-2025" className="text-blue-800 hover:underline">
    UCO Bank LBO Final Result 2025 – Out
  </Link>
</li>

          {/* Add more results here */}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Result;
