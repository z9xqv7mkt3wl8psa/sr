import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import syllabusBanner from '../../images/syllabusbanner.png'; // <-- Replace with your image path

const Syllabus = () => {
  return (
    <>
      <div className='border-2 border-gray-300 bg-white shadow-lg rounded-md mx-auto mt-6 max-w-4xl'>
        {/* Image at the top */}
    <img 
    src={syllabusBanner} 
    alt="Syllabus Banner" 
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
  <Link to="/syllabus/ibps-clerk-syllabus-2025" className="text-blue-800 hover:underline">
    IBPS Clerk Syllabus 2025 (CRP Clerk-XV): Prelims & Mains Exam Pattern & Syllabus
  </Link>
</li>
<li>
  <Link to="/syllabus/bihar-jeevika-syllabus-2025" className="text-blue-800 hover:underline">
    Bihar Jeevika Syllabus 2025: Check Latest Syllabus, Exam Pattern
  </Link>
</li>
<li>
  <Link to="/syllabus/bssc-office-attendant-syllabus-2025" className="text-blue-800 hover:underline">
    BSSC Office Attendant Syllabus 2025 Out for 3727 Posts
  </Link>
</li>
<li>
  <Link to="/syllabus/icfre-tfri-syllabus-2025" className="text-blue-800 hover:underline">
    ICFRE TFRI Syllabus 2025: Driver, Forest Guard & TA
  </Link>
</li>
<li>
  <Link to="/syllabus/rsmssb-vdo-syllabus-2025" className="text-blue-800 hover:underline">
    RSMSSB VDO Syllabus 2025 PDF Download
  </Link>
</li>
<li>
  <Link to="/syllabus/ssc-chsl-syllabus-2025" className="text-blue-800 hover:underline">
    SSC CHSL 10+2 Exam 2025 Full Syllabus
  </Link>
</li>

          {/* Add more results here */}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Syllabus;
