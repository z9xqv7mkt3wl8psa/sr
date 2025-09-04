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
    <a href="/box/up-police-si-recruitment-2025">UP Police SI<br />Online Form (4543 Post)</a>
  </span>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box2 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/bsf-hc-ro-rm-recruitment-2025">BSF HC RO / RM<br />Form (1121 Posts)</a>
  </span>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box3 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/bssc-office-attendant-recruitment-2025">BSSC Office Attendant<br />Form (3727 Posts)</a>
  </span>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box4 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/lic-aao-ae-recruitment-2025">LIC AAO / AE<br />Online Form 2025</a>
  </span>
</div>

<div className='flex flex-wrap font-semibold text-white text-center px-2 sm:px-10 gap-2 mt-2'>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box5 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/ib-jio-grade-ii-recruitment-2025">IB JIO-II/ Tech<br />Online Form 2025</a>
  </span>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box6 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/rrb-section-controller-recruitment-2025">RRB Section Controller<br />Online Form</a>
  </span>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box7 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/up-scholarship-online-form-2025-26">UP Scholarship<br />Online Form 2025-26</a>
  </span>
  <span className='flex-1 min-w-[45%] sm:min-w-[20%] bg-box8 h-14 border-2 flex items-center justify-center text-sm sm:text-base'>
    <a href="/box/up-police-constable-recruitment-2025">UP Police Constable<br />Form (19,220 Post)</a>
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
{/* === Scholarship, Internships, News Cards Section === */}
<div className="container mx-auto px-4 sm:px-10 py-8">
  <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Explore More Opportunities</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* 🎓 Scholarship Card */}
    <a href="/scholarships" className="block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src="/scholarship.jpg"
        alt="Scholarship"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700">Scholarships</h3>
        <p className="text-sm text-gray-600 mt-1">Apply for government and private scholarships available for school and college students in India.</p>
        <span className="inline-block mt-3 text-sm text-blue-600 font-semibold hover:underline">Explore Scholarships →</span>
      </div>
    </a>

    {/* 💼 Internships Card */}
    <a href="/internships" className="block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src="/internship.jpeg"
        alt="Internships"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700">Internships</h3>
        <p className="text-sm text-gray-600 mt-1">Get hands-on experience with internships from top government departments and private companies.</p>
        <span className="inline-block mt-3 text-sm text-blue-600 font-semibold hover:underline">Find Internships →</span>
      </div>
    </a>

    {/* 📰 News Card */}
    <a href="/news" className="block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src="/news.jpeg"
        alt="News"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700">Latest News</h3>
        <p className="text-sm text-gray-600 mt-1">Stay updated with the latest government job alerts, results, and Sarkari news from across India.</p>
        <span className="inline-block mt-3 text-sm text-blue-600 font-semibold hover:underline">Read Latest News →</span>
      </div>
    </a>

    {/* 📘 Courses Card */}
    <a href="/courses" className="block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src="/courses.jpeg"
        alt="Courses"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700">Courses</h3>
        <p className="text-sm text-gray-600 mt-1">Elevate your skills with top-rated online and offline courses to grow in your career.</p>
        <span className="inline-block mt-3 text-sm text-blue-600 font-semibold hover:underline">View All Courses →</span>
      </div>
    </a>

    {/* 🏆 Competitions & Events */}
    <a href="/competitions" className="block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src="/events.webp"
        alt="Competitions"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700">Competitions & Events</h3>
        <p className="text-sm text-gray-600 mt-1">Showcase your skills, participate in events, and win exciting awards & recognition.</p>
        <span className="inline-block mt-3 text-sm text-blue-600 font-semibold hover:underline">View All Events →</span>
      </div>
    </a>

    

    {/* 💰 Education Loans */}
    <a href="/education-loans" className="block bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src="/loans.png"
        alt="Education Loans"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700">Education Loans</h3>
        <p className="text-sm text-gray-600 mt-1">Access low-interest education loans to fund your higher education dreams in India or abroad.</p>
        <span className="inline-block mt-3 text-sm text-blue-600 font-semibold hover:underline">Check Loan Options →</span>
      </div>
    </a>

  </div>
</div>

      <SomeNotes />
      <Footer />
    </div>
  )
}

export default Main
