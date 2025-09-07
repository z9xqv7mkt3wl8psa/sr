import React, { useMemo, useState ,useEffect} from "react";
import CollegeCard from "../ui/CollegeCard";
import Footer from "../footer/Footer";
import { colleges } from "../../data/colleges";
import { Link } from "react-router-dom"; 

/*
  Flexible category explorer inspired by your BooksPage:
  - CATEGORY_LIST tiles for quick drilldown (State, City, Tier, Stream, Degree, Type, Accreditation, Admission, Facilities, Exams, Placement, Review Tags, Rankings, Special)
  - Chips per selection
  - Search within selection
  - Smart matching across fields
*/

const LABELS = { ALL: "All" };

const CATEGORY_LIST = [
  {
    key: "name",
    label: "College-wise",
    type: "name",
    description: "Browse colleges individually with detailed profiles.",
  },
  {
    key: "state",
    label: "State-wise",
    type: "state",
    description: "Explore colleges categorized by states and UTs.",
  },
  {
    key: "city",
    label: "City-wise",
    type: "city",
    description: "Find colleges located in your preferred cities.",
  },
  {
    key: "tier",
    label: "Tier-wise",
    type: "tier",
    description: "Compare Tier 1, Tier 2, and Tier 3 institutions.",
  },
  {
    key: "stream",
    label: "Course / Stream",
    type: "stream",
    description: "Discover colleges by Engineering, Medical, Arts, and more.",
  },
  {
    key: "degree",
    label: "Degree Level",
    type: "degree",
    description: "Choose colleges based on UG or PG degrees.",
  },
  {
    key: "type",
    label: "College Type",
    type: "type",
    description: "Government, Private, and Deemed universities.",
  },
  {
    key: "accreditation",
    label: "Affiliation / Accreditation",
    type: "accreditation",
    description: "Filter colleges by NAAC, AICTE, UGC approvals.",
  },
  {
    key: "admission",
    label: "Admission Mode",
    type: "admission",
    description: "Check entrance-based and merit-based admission colleges.",
  },
  {
    key: "facility",
    label: "Facilities & Infrastructure",
    type: "facility",
    description: "Hostels, labs, libraries, and sports facilities.",
  },
  {
    key: "exam",
    label: "Popular Exams",
    type: "exam",
    description: "Colleges accepting JEE, NEET, GATE, CAT, and more.",
  },
  {
    key: "placement",
    label: "Placement Performance",
    type: "placement",
    description: "Top recruiters, highest packages, average salaries.",
  },
  {
    key: "reviewTags",
    label: "Student Reviews Tags",
    type: "reviewTag",
    description: "See feedback on academics, faculty, and campus life.",
  },
  {
    key: "rankings",
    label: "Top Rankings",
    type: "ranking",
    description: "NIRF, Times Higher Education, QS rankings, and more.",
  },
  {
    key: "special",
    label: "Special Categories",
    type: "special",
    description: "Scholarships, minority institutions, special programs.",
  },
];


const CATEGORY_IMAGES = {
  name: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",  // College-wise
  state: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800", // State-wise
  city: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800", // City-wise
  tier: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800", // Tier-wise
  stream: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
  degree: "https://images.pexels.com/photos/207729/pexels-photo-207729.jpeg?auto=compress&cs=tinysrgb&w=800",
  type: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=800",
  accreditation: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
  admission: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800",
  facility: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
  exam: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800",
  placement: "https://images.pexels.com/photos/256547/pexels-photo-256547.jpeg?auto=compress&cs=tinysrgb&w=800",
  reviewTags: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=800",
  rankings: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
  special: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=800",
};


const getBg = (cat) => CATEGORY_IMAGES[cat.key];

const uniq = (arr) => Array.from(new Set(arr.filter(Boolean)));
const norm = (s) => (s || "").toString().trim().toLowerCase();
const includesI = (a, b) => norm(a).includes(norm(b));
const hasAnyI = (arr = [], val) => arr.map(norm).some((x) => x.includes(norm(val)));

const buildFacet = (colleges, type) => {
  switch (type) {
    case "state":
      return uniq(colleges.map((c) => c.state)).sort();
    case "city":
      return uniq(colleges.map((c) => c.city)).sort();
    case "tier":
      return uniq(colleges.map((c) => c.tier)).sort();

    case "stream":
      return uniq(colleges.flatMap((c) => c.streams || [])).sort();
    case "degree":
      return uniq(colleges.flatMap((c) => c.degrees || [])).sort();
    case "type":
      return uniq(colleges.map((c) => c.type || c.ownership)).sort();

    case "accreditation":
      return uniq(colleges.flatMap((c) => c.accreditations || [])).sort();
    case "admission":
      return uniq(colleges.flatMap((c) => c.admissionModes || [])).sort();
    case "facility":
      return uniq(colleges.flatMap((c) => c.facilities || [])).sort();

    case "exam":
      return uniq(colleges.flatMap((c) => c.exams || [])).sort();
    case "placement":
      return ["Top Placement Colleges", "Highest Package", "Average Package 5L+"]; // virtual facets
    case "reviewTag":
      return uniq(colleges.flatMap((c) => c.reviewTags || [])).sort();

    case "ranking":
      return uniq(colleges.flatMap((c) => c.rankings?.map((r) => r.agency) || [])).sort();
    case "special":
      return uniq(colleges.flatMap((c) => c.special || [])).sort();

    default:
      return [];
  }
};

const CollegesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // object from CATEGORY_LIST or null
  const [activeChip, setActiveChip] = useState({ label: LABELS.ALL, value: LABELS.ALL, type: "all" });
  const [search, setSearch] = useState("");

  const chips = useMemo(() => {
    if (!selectedCategory) return [];
    const values = buildFacet(colleges, selectedCategory.type);
    return [{ label: LABELS.ALL, value: LABELS.ALL, type: "all" }].concat(
      values.map((v) => ({ label: v, value: v, type: selectedCategory.type }))
    );
  }, [selectedCategory]);

  const pickCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveChip({ label: LABELS.ALL, value: LABELS.ALL, type: "all" });
    setSearch("");
  };

  const matchesCategory = (c) => {
    if (!selectedCategory) return true;
    const { type } = selectedCategory;

    switch (type) {
      case "state":
        return true; // chip narrows
      case "city":
        return true;
      case "tier":
        return true;

      case "stream":
        return true;
      case "degree":
        return true;
      case "type":
        return true;

      case "accreditation":
        return true;
      case "admission":
        return true;
      case "facility":
        return true;

      case "exam":
        return true;
      case "placement":
        return true;
      case "reviewTag":
        return true;

      case "ranking":
        return true;
      case "special":
        return true;

      default:
        return true;
    }
  };

  const matchesChip = (c) => {
    if (!activeChip || activeChip.value === LABELS.ALL) return true;

    const { type, value } = activeChip;

    switch (type) {
      case "state":
        return norm(c.state) === norm(value);
      case "city":
        return norm(c.city) === norm(value);
      case "tier":
        return norm(c.tier) === norm(value);

      case "stream":
        return hasAnyI(c.streams, value);
      case "degree":
        return hasAnyI(c.degrees, value);
      case "type":
        return includesI(c.type || c.ownership, value);

      case "accreditation":
        return hasAnyI(c.accreditations, value);
      case "admission":
        return hasAnyI(c.admissionModes, value);
      case "facility":
        return hasAnyI(c.facilities, value);

      case "exam":
        return hasAnyI(c.exams, value);
      case "placement":
        if (value === "Top Placement Colleges") return (c.placement?.topRecruiters?.length || 0) > 10 || (c.placement?.avg || 0) >= 600000;
        if (value === "Highest Package") return (c.placement?.highest || 0) >= 2000000;
        if (value === "Average Package 5L+") return (c.placement?.avg || 0) >= 500000;
        return true;

      case "reviewTag":
        return hasAnyI(c.reviewTags, value);

      case "ranking":
        return (c.rankings || []).some((r) => includesI(r.agency, value));
      case "special":
        return hasAnyI(c.special, value);

      default:
        return true;
    }
  };

  const matchesSearch = (c) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    const fields = [
      c.name,
      c.city,
      c.state,
      c.tier,
      c.type,
      c.ownership,
      ...(c.streams || []),
      ...(c.degrees || []),
      ...(c.accreditations || []),
      ...(c.exams || []),
      ...(c.special || []),
    ].filter(Boolean);
    return fields.some((f) => f.toString().toLowerCase().includes(q));
  };
   const images = [
   
    "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4 sec
    return () => clearInterval(interval);
  }, [images.length]);

  const filtered = colleges.filter((c) => matchesCategory(c) && matchesChip(c) && matchesSearch(c));

  return (
   <div className="min-h-screen bg-white text-gray-800">
  {/* Hero Section */}
  <div
    className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center transition-all duration-700"
    style={{
      backgroundImage: `url(${images[currentImage]})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="relative z-10 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Explore Colleges & Trusted Reviews
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
        Discover top institutions across the world. Compare courses, placements,
        fees, facilities, and real student reviews to make informed career
        choices.
      </p>
      
    </div>
  </div>

  {/* Additional Content */}
  <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
    <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-green-700">State-wise Search</h2>
      <p className="text-gray-600">
        Explore colleges across all states and union territories with detailed
        information at your fingertips.
      </p>
    </div>
    <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-green-700">Accreditation & Rankings</h2>
      <p className="text-gray-600">
        Get insights on NAAC grades, NIRF rankings, and AICTE/UGC approvals
        before making your choice.
      </p>
    </div>
    <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-green-700">Student Reviews</h2>
      <p className="text-gray-600">
        Read authentic reviews from students and alumni to understand campus
        life, placements, and academics.
      </p>
    </div>
  </div>


      <div className="container mx-auto px-4">
        {/* SEARCH after category select */}
        {selectedCategory && (
          <div className="max-w-2xl mx-auto mb-6">
            <input
              type="text"
              placeholder={`Search within ${selectedCategory.label}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-sm transition shadow-sm"
            />
          </div>
        )}

        {/* Landing grid of categories */}
        {!selectedCategory && (
          <div className="my-16">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-10">Select a Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {CATEGORY_LIST.map((cat) => (
  <button
    key={cat.key}
    onClick={() => pickCategory(cat)}
    className="relative h-40 rounded-xl overflow-hidden border border-green-200 shadow-md hover:shadow-lg transition transform hover:scale-105"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${getBg(cat)}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
      <h3 className="text-white font-semibold text-lg mb-1">{cat.label}</h3>
      <p className="text-xs text-gray-200">{cat.description}</p>
    </div>
  </button>
))}

            </div>
          </div>
        )}

        {/* Drilldown */}
        {selectedCategory && (
          <div className="my-16">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setActiveChip({ label: LABELS.ALL, value: LABELS.ALL, type: "all" });
                setSearch("");
              }}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              ← Back to Categories
            </button>

            <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
              {selectedCategory.label} Colleges
            </h2>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {chips.map((c) => (
                <button
                  key={c.label + c.value}
                  onClick={() => setActiveChip(c)}
                  className={`px-4 py-2 text-sm rounded-full border transition ${
                    activeChip.value === c.value
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-green-700 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filtered.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-12 text-lg">No colleges found for this selection.</p>
            )}
          </div>
        )}
      </div>

      {/* CTA & Footer */}
      {!selectedCategory && (
        <section className="text-center bg-gradient-to-r from-green-100 via-white to-green-50 p-10 rounded-2xl shadow-xl mb-20 border border-green-200">
          <h3 className="text-2xl font-semibold mb-3 text-green-800">Compare, Decide, and Apply</h3>
          <p className="mb-6 max-w-xl mx-auto text-sm md:text-base text-gray-700 font-light">
            Use our Compare Tool and College Predictor to shortlist smarter.
          </p>
          <a
            href="/colleges/compare"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-500 transition"
          >
            Open Compare Tool
          </a>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CollegesPage;
