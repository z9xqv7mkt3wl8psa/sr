import React, { useEffect } from 'react'
import Result from './Result'
import AdmitCard from './AdmitCard'
import LatestJobs from './LatestJobs'
import AnswerKey from './AnswerKey'
import Syllabus from './Syllabus'
import Admission from './Admission'
import CertificateVerification from './CertificateVerification'
import Important from './Important'
import SomeNotes from './SomeNotes'
import Footer from '../footer/Footer'

const Main = () => {
  useEffect(() => {
    // Load Google Ads script once
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9096209867795576";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Push adsbygoogle after script loads
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle error", e);
      }
    };
  }, []);

  useEffect(() => {
    // Try pushing on each render of ad blocks
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  });

  return (
    <div>
      {/* Header */}
      <div className='text-center font-semibold pt-3 text-xl px-2'>
        <p>
          <a
            href="https://www.sarkariresult.prasunet.com"
            className='text-blue-700'
          >
            <i className="fa-solid fa-magnifying-glass"></i>{' '}
            <span className='border-b-2 border-dotted border-blue-700'>
              INDIA's Sarkari Result : www.sarkariresult.prasunet.com
            </span>
          </a>
        </p>
        <p className='text-red-700 pt-3'>
          Welcome to India's No. 1 Sarkari Result Portal
        </p>
      </div>

{/* ✅ Google Ads Banner (auto) */}
<div className="flex justify-center my-2">
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-9096209867795576"
    data-ad-slot="9856555475"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>

{/* ✅ Social Links */}
<div className='text-center font-semibold text-base sm:text-xl px-4 sm:px-10 space-x-2 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center'>
  <a href="https://www.linkedin.com/company/prasunet-company/" className='text-blue-700 border-b-2 border-blue-700'>Join Linkedin</a>
  <span className="hidden sm:inline">||</span>
  <a href="https://x.com/prasunet" className='text-blue-700 border-b-2 border-blue-700'>Follow Twitter</a>
  <span className="hidden sm:inline">||</span>
  <a href="https://www.instagram.com/prasunet_company/" className='text-blue-700 border-b-2 border-blue-700'>Follow Instagram</a>
</div>


      {/* ✅ In-Article Google Ad (fluid) */}
      <div className="my-2 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-9096209867795576"
          data-ad-slot="1148484920"
        ></ins>
      </div> 
      {/* ✅ Mobile View Ticker (visible only on small screens) */}
<div className="overflow-hidden bg-gray-100 border-y-2 border-blue-500 my-3 block md:hidden">
  <div className="flex whitespace-nowrap animate-scroll font-semibold text-blue-700 text-sm">
    
    {/* First copy of items */}
    <div className="flex space-x-10 px-5">
      <a href="/headline/rrb-ntpc-12th-admitcard-2025" className="hover:underline">RRB NTPC 12th Level Admit Card 2025</a>
      <a href="/headline/bihar-jeevika-recruitment-2025" className="hover:underline">Bihar JEEViKA Recruitment 2025</a>
      <a href="/headline/indian-navy-ssc-it-recruitment-2025" className="hover:underline">Indian Navy SSC IT Recruitment 2025</a>
      <a href="/headline/hssc-cet-groupc-result-2025" className="hover:underline">HSSC CET Result 2025 Out Soon</a>
      <a href="/headline/oicl-assistant-recruitment-2025" className="hover:underline">OICL Assistant Recruitment 2025</a>
      <a href="/headline/up-deled-result-2025" className="hover:underline">UP DElEd Result 2025</a>
      <a href="/headline/dsssb-assistant-teacher-nursery-admitcard-2025" className="hover:underline">DSSSB Assistant Teacher Admit Card 2025</a>
      <a href="/headline/ssc-stenographer-admitcard-2025" className="hover:underline">SSC Stenographer Admit Card 2025</a>
      <a href="/headline/rrc-er-apprentice-recruitment-2025" className="hover:underline">RRC ER Apprentice Recruitment 2025</a>
    </div>

    {/* Duplicate copy for infinite loop */}
    <div className="flex space-x-10 px-5">
      <a href="/headline/rrb-ntpc-12th-admitcard-2025" className="hover:underline">RRB NTPC 12th Level Admit Card 2025</a>
      <a href="/headline/bihar-jeevika-recruitment-2025" className="hover:underline">Bihar JEEViKA Recruitment 2025</a>
      <a href="/headline/indian-navy-ssc-it-recruitment-2025" className="hover:underline">Indian Navy SSC IT Recruitment 2025</a>
      <a href="/headline/hssc-cet-groupc-result-2025" className="hover:underline">HSSC CET Result 2025 Out Soon</a>
      <a href="/headline/oicl-assistant-recruitment-2025" className="hover:underline">OICL Assistant Recruitment 2025</a>
      <a href="/headline/up-deled-result-2025" className="hover:underline">UP DElEd Result 2025</a>
      <a href="/headline/dsssb-assistant-teacher-nursery-admitcard-2025" className="hover:underline">DSSSB Assistant Teacher Admit Card 2025</a>
      <a href="/headline/ssc-stenographer-admitcard-2025" className="hover:underline">SSC Stenographer Admit Card 2025</a>
      <a href="/headline/rrc-er-apprentice-recruitment-2025" className="hover:underline">RRC ER Apprentice Recruitment 2025</a>
    </div>
  </div>
</div>

{/* ✅ Desktop View Marquees (hidden on mobile, visible on md+) */}
<div className='hidden md:block text-center font-semibold text-xl pr-10 pl-10'>
  <marquee behavior="alternate" direction="onscreen">
    <p className='pt-1'>
      <a href="/headline/rrb-ntpc-12th-admitcard-2025" className='text-blue-700 border-b-2 border-blue-700'>
        RRB NTPC 12th Level Admit Card 2025
      </a> ||
      <a href="/headline/bihar-jeevika-recruitment-2025" className='text-blue-700 border-b-2 border-blue-700'>
        Bihar JEEViKA Recruitment 2025
      </a> ||
      <a href="/headline/indian-navy-ssc-it-recruitment-2025" className='text-blue-700 border-b-2 border-blue-700'>
        Indian Navy SSC IT Recruitment 2025
      </a>
    </p>
  </marquee>

  <marquee behavior="alternate" direction="onscreen">
    <p className='pt-1'>
      <a href="/headline/hssc-cet-groupc-result-2025" className='text-blue-700 border-b-2 border-blue-700'>
        HSSC CET Result 2025 Out Soon
      </a> ||
      <a href="/headline/oicl-assistant-recruitment-2025" className='text-blue-700 border-b-2 border-blue-700'>
        OICL Assistant Recruitment 2025
      </a> ||
      <a href="/headline/up-deled-result-2025" className='text-blue-700 border-b-2 border-blue-700'>
        UP DElEd Result 2025
      </a>
    </p>
  </marquee>

  <marquee behavior="alternate" direction="onscreen">
    <p className='pt-1'>
      <a href="/headline/dsssb-assistant-teacher-nursery-admitcard-2025" className='text-blue-700 border-b-2 border-blue-700'>
        DSSSB Assistant Teacher Admit Card 2025
      </a> ||
      <a href="/headline/ssc-stenographer-admitcard-2025" className='text-blue-700 border-b-2 border-blue-700'>
        SSC Stenographer Admit Card 2025
      </a> ||
      <a href="/headline/rrc-er-apprentice-recruitment-2025" className='text-blue-700 border-b-2 border-blue-700'>
        RRC ER Apprentice Recruitment 2025
      </a>
    </p>
  </marquee>
</div>


      

      {/* Box Links */}
      <div className='flex flex-wrap font-semibold text-white text-center pt-6 sm:pt-10 px-2 sm:px-10 gap-2'>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box1 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/up-police-otr-registration-2025">UP Police OTR<br />Registration 2025</a>
        </span>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box2 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/rrb-ntpc-12th-level-admit-card-2025">RRB NTPC 12th Level<br />Admit Card 2025</a>
        </span>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box3 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/rrb-paramedical-recruitment-2025">RRB Paramedical<br />Recruitment 2025</a>
        </span>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box4 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/up-police-si-vacancy-2025">UP Police SI Vacancy<br />4543 Posts</a>
        </span>
      </div>

      <div className='flex flex-wrap font-semibold text-white text-center px-2 sm:px-10 gap-2 mt-2'>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box5 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/ssc-stenographer-admit-card-2025">SSC Stenographer<br />Admit Card</a>
        </span>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box6 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/up-lt-grade-teacher-recruitment-2025">UP LT Grade Teacher<br />Recruitment 2025</a>
        </span>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box7 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/up-police-si-recruitment-2025">UP Police SI<br />4543 Post</a>
        </span>
        <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box8 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
          <a href="/box/bsf-constable-tradesman-recruitment-2025">BSF Constable<br />3588 Posts</a>
        </span>
      </div>

      {/* Main Sections */}
      <div className="flex flex-col lg:flex-row p-4 sm:px-10 gap-6">
        <Result />
        <AdmitCard />
        <LatestJobs />
      </div>

      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6">
          <AnswerKey />
          <Syllabus />
          <Admission />
          <CertificateVerification />
          <Important />
        </div>
      </div>

      <SomeNotes />
      <Footer />
    </div>
  )
}

export default Main
