import React from 'react'
import { Link } from "react-router-dom";
const Headline = () => {
  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>Important</h3>
        <ul className='list-disc list-inside pl-6'>
          <li>
  <Link to="/important/up-scholarship-online-form-2024" className="text-blue-800 hover:underline">
    UP Scholarship Online Form 2024
  </Link>
</li>
<li>
  <Link to="/important/ssc-otr-online-form-2024" className="text-blue-800 hover:underline">
    SSC OTR Online Form 2024
  </Link>
</li>
<li>
  <Link to="/important/sahara-refund-portal-online-registration-2023" className="text-blue-800 hover:underline">
    Sahara Refund Portal Online Registration 2023
  </Link>
</li>
<li>
  <Link to="/important/up-family-id-ek-parivar-ek-pahchan-online-registration-2023" className="text-blue-800 hover:underline">
    UP Family ID Ek Parivar Ek Pahchan Online Registration 2023
  </Link>
</li>
<li>
  <Link to="/important/uppsc-one-time-registration-otr-online-form-2023" className="text-blue-800 hover:underline">
    UPPSC One Time Registration OTR Online Form 2023
  </Link>
</li>
  </ul>
        {/* <span className='font-bold border-b-2 border-blue-700 text-blue-700' >View More</span> */}
      </div>
    </div>
  )
}

export default Headline
