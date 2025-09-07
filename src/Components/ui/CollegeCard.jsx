import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const logoSrc =
    college.logo?.startsWith("http") ? college.logo : `/images/${college.logo || "college.webp"}`;
    

  return (
    <Link to={`/colleges/${college.id}`} className="block group">
      <div
        className="bg-gradient-to-br from-white to-gray-100 rounded-xl overflow-hidden 
        h-96 w-full max-w-sm mx-auto flex flex-col border border-green-200 
        shadow-md shadow-gray-200 transition-all duration-300 
        group-hover:shadow-lg group-hover:shadow-green-300/50 
        group-hover:-translate-y-2"
      >
        {/* Banner / Image */}
        <div className="relative h-40">
          <img
            src={
              college.banner?.startsWith("http")
                ? college.banner
                : `/images/${college.banner || "campus.webp"}`
            }
            alt={college.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-white"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Logo bubble */}
          <div className="absolute -bottom-6 left-4 w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-md bg-white">
            <img src={logoSrc} alt={`${college.name} logo`} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Info */}
        <div className="p-4 pt-8 flex flex-col flex-1">
          <h3 className="text-base font-semibold text-green-800 line-clamp-1 group-hover:text-green-700 transition">
            {college.name}
          </h3>
          <p className="text-xs text-green-700 mt-1">
            {college.city}, {college.state} • {college.tier || "Tier —"}
          </p>

          <p className="text-xs text-gray-600 mt-2 line-clamp-2">{college.shortDesc}</p>

          {/* Chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {college.accreditations?.slice(0, 3).map((a) => (
              <span
                key={a}
                className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200"
              >
                {a}
              </span>
            ))}
            {college.ownership && (
              <span className="text-[10px] px-2 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                {college.ownership}
              </span>
            )}
          </div>

          {/* Button */}
          <div className="mt-auto pt-3">
            <span
              className="text-sm text-green-700 font-medium group-hover:text-green-900 
              transition flex items-center gap-1"
            >
              ➜ View College
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
