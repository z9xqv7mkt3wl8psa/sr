import React, { useState } from "react";
import internships from "../../data/internships";
import InternshipCard from "../ui/InternshipCard";

const InternshipPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    mode: "",
    company: "",
    duration: "",
    category: "",
    search: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearAllFilters = () => {
    setFilters({
      location: "",
      type: "",
      mode: "",
      company: "",
      duration: "",
      category: "",
      search: "",
    });
  };

  const filteredInternships = internships.filter((item) => {
    return (
      (filters.location ? item.location === filters.location : true) &&
      (filters.type ? item.type === filters.type : true) &&
      (filters.mode ? item.mode === filters.mode : true) &&
      (filters.company ? item.company === filters.company : true) &&
      (filters.duration ? item.duration === filters.duration : true) &&
      (filters.category ? item.category === filters.category : true) &&
      (filters.search
        ? item.name.toLowerCase().includes(filters.search.toLowerCase())
        : true)
    );
  });

  const locationOptions = [...new Set(internships.map((i) => i.location))];
  const typeOptions = ["Paid", "Unpaid"];
  const modeOptions = ["Remote", "In-Office", "Hybrid"];
  const companyOptions = [...new Set(internships.map((i) => i.company))];
  const durationOptions = [...new Set(internships.map((i) => i.duration))];
  const categoryOptions = ["Government", "Private", "Startup", "NGO", "Research"];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Internship Opportunities</h1>

      {/* 🔍 Search + Clear All Filters */}
      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap md:flex-nowrap">
        <input
          type="text"
          placeholder="Search internships..."
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
          className="flex-1 min-w-[200px] p-2 border rounded text-sm"
        />

        <button
          className="bg-red-500 text-white px-4 py-2 rounded text-sm whitespace-nowrap"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </button>
      </div>

      {/* 🔘 Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <select className="border p-2 rounded" onChange={(e) => handleFilterChange("location", e.target.value)}>
          <option value="">Select Location</option>
          {locationOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange("company", e.target.value)}>
          <option value="">Select Company</option>
          {companyOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange("mode", e.target.value)}>
          <option value="">Mode</option>
          {modeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange("type", e.target.value)}>
          <option value="">Paid / Unpaid</option>
          {typeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange("duration", e.target.value)}>
          <option value="">Duration</option>
          {durationOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange("category", e.target.value)}>
          <option value="">Category</option>
          {categoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>

      {/* 🗂️ Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">
            No internships found for selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default InternshipPage;
