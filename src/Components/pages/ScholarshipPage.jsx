import React, { useState } from "react";
import scholarships from "../../data/scholarships";
import ScholarshipCard from "../ui/ScholarshipCard";

const ScholarshipPage = () => {
  const [filters, setFilters] = useState({
    classLevel: "",
    state: "",
    category: "",
    type: "",
    country: "",
    gender: "",
    religion: "",
    course: "",
    search: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearAllFilters = () => {
    setFilters({
      classLevel: "",
      state: "",
      category: "",
      type: "",
      country: "",
      gender: "",
      religion: "",
      course: "",
      search: "",
    });
  };

  const filteredScholarships = scholarships.filter((item) => {
    return (
      (filters.classLevel ? item.classLevel === filters.classLevel : true) &&
      (filters.state ? item.state === filters.state : true) &&
      (filters.category ? item.category === filters.category : true) &&
      (filters.type ? item.type === filters.type : true) &&
      (filters.country ? item.country === filters.country : true) &&
      (filters.gender ? item.gender === filters.gender : true) &&
      (filters.religion ? item.religion === filters.religion : true) &&
      (filters.course ? item.course === filters.course : true) &&
      (filters.search
        ? item.name.toLowerCase().includes(filters.search.toLowerCase())
        : true)
    );
  });

  const classOptions = [
    "Upto Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Graduation",
    "Post Graduation", "Post Graduation Diploma", "Phd", "ITI",
    "Polytechnic/Diploma", "Post Doctoral", "Vocational Course", "Coaching classes"
  ];

  const countryOptions = ["India", "Study Abroad"];
  const genderOptions = ["Female", "Male", "Third/Transgender"];
  const religionOptions = [
    "Buddhism", "Christian", "Hindu", "Jain", "Parsi", "Sikh", "Muslim"
  ];

  const stateOptions = [
    "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chandigarh", "Chhattisgarh", "Dadra And Nagar Haveli",
    "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jammu And Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal", "Others"
  ];

  const courseOptions = ["Engineering", "Medical", "Management", "Fellowship", "Talent", "Sports"];
  const categoryOptions = ["OBC", "SC", "ST", "General", "All"];
  const typeOptions = ["Government", "Private"];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Scholarships for Indian Students</h1>

      {/* 🔍 Search Bar */}
    {/* 🔍 Search + Clear All Filters in One Line */}
<div className="flex items-center justify-between gap-4 mb-4 flex-wrap md:flex-nowrap">
  <input
    type="text"
    placeholder="Search scholarships..."
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

{/* 🧮 Filter Controls Below */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("classLevel", e.target.value)}>
    <option value="">Select Class</option>
    {classOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("country", e.target.value)}>
    <option value="">Select Country</option>
    {countryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("gender", e.target.value)}>
    <option value="">Gender</option>
    {genderOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("religion", e.target.value)}>
    <option value="">Religion</option>
    {religionOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("state", e.target.value)}>
    <option value="">Select State</option>
    {stateOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("course", e.target.value)}>
    <option value="">Course</option>
    {courseOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("category", e.target.value)}>
    <option value="">Caste Category</option>
    {categoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>

  <select className="border p-2 rounded" onChange={(e) => handleFilterChange("type", e.target.value)}>
    <option value="">Type (Govt/Private)</option>
    {typeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>
</div>

      {/* 🗂️ Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">
            No scholarships found for selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ScholarshipPage;
