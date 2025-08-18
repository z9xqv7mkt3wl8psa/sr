import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header
      className="relative h-auto flex flex-col md:flex-row items-center px-4 md:px-24 py-4 md:py-10"
      style={{ backgroundColor: '#1e5be0ff' }}
    >
      {/* Logo */}
      <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-6">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-28 md:h-32 md:w-40 object-contain"
        />
      </div>

      {/* Title Section */}
      <div className="flex-1 text-center">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          PRASUNET SARKARI RESULT
        </h1>

        {/* Flowing Hindi Text */}
        <div className="relative w-full h-6 mt-2 overflow-hidden flex justify-center items-center">
          <div
            className="whitespace-nowrap text-white text-sm sm:text-base md:text-lg font-semibold"
            style={{
              animation: 'scrollText 8s linear infinite',
            }}
          >
            सबसे पहले सबसे तेज़
          </div>
        </div>

        {/* Website link */}
        <span className="text-white text-sm sm:text-base md:text-lg border-b-2 border-dotted inline-block mt-2">
          <a
            href="https://www.sarkariresult.prasunet.com"
            className="hover:underline"
          >
            <i className="fa-solid fa-magnifying-glass"></i>{' '}
            WWW.SARKARIRESULT.PRASUNET.COM
          </a>
        </span>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
