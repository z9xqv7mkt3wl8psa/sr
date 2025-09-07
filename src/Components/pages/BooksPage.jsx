import React, { useMemo, useState } from "react";
import BookCard from "../ui/BookCard";
import { books } from "../../data/books";
import Footer from "../footer/Footer";

/*
  Key ideas:
  - CATEGORY_LIST: fixed tiles shown on landing (Class 1..12, UG, PG, JEE, NEET, CBSE, ICSE, RBSE, Competitive)
  - chips: built per selected category (objects with {label, value, type})
  - filtering uses selectedCategory + activeChip + search (search visible only after selecting a category)
  - book-detection is dataset-agnostic (looks at many fields: class, grade, level, exam, tags, board)
*/

const CATEGORY_LIST = [
  // Classes 1..12
  ...Array.from({ length: 12 }, (_, i) => ({
    key: `class-${i + 1}`,
    label: `Class ${i + 1}`,
    type: "class",
    value: String(i + 1),
  })),

  // Levels / exams
  { key: "ug", label: "UG", type: "level", value: "UG" },
  { key: "pg", label: "PG", type: "level", value: "PG" },
  { key: "jee", label: "JEE", type: "exam", value: "JEE" },
  { key: "neet", label: "NEET", type: "exam", value: "NEET" },

  // Boards
  { key: "cbse", label: "CBSE", type: "board", value: "CBSE" },
  { key: "icse", label: "ICSE", type: "board", value: "ICSE" },
  { key: "rbse", label: "RBSE", type: "board", value: "RBSE" },

  // Extra helpful category for library
  { key: "competitive", label: "Competitive", type: "competitive", value: "Competitive" },
];

const CATEGORY_IMAGES = {
  // class images: distinct Pexels photos (free)
  "class-1": "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-2": "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-3": "https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-4": "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-5": "https://images.pexels.com/photos/3862639/pexels-photo-3862639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-6": "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-7": "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-8": "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-9": "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-10": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-11": "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  "class-12": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",

  ug: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  pg: "https://images.pexels.com/photos/3747487/pexels-photo-3747487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  jee: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  neet: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  cbse: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  icse: "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  rbse: "https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  competitive: "https://images.pexels.com/photos/159711/books-book-pages-read-literature-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
  default: "https://images.pexels.com/photos/159711/books-book-pages-read-literature-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
};

const LABELS = { ALL: "All" };

// helpers
const equalsI = (a, b) =>
  (a || "").toString().trim().toLowerCase() === (b || "").toString().trim().toLowerCase();

const extractNumberFromString = (s) => {
  if (!s) return null;
  const m = s.toString().match(/(\d{1,2})/);
  return m ? m[1] : null;
};

const bookClassNumber = (book) => {
  // check commonly used fields for class/grade
  const fields = [book.class, book.grade, book.level, book.category, book.year];
  for (const f of fields) {
    const n = extractNumberFromString(f);
    if (n) return n;
  }
  // fallback: try 'tags' array
  if (Array.isArray(book.tags)) {
    for (const t of book.tags) {
      const n = extractNumberFromString(t);
      if (n) return n;
    }
  }
  return null;
};

const hasTagLike = (book, values = []) => {
  const pool = []
    .concat(book.tags || [])
    .concat(book.exam || [])
    .concat(book.category ? [book.category] : [])
    .concat(book.stream ? [book.stream] : [])
    .concat(book.subject ? [book.subject] : [])
    .filter(Boolean)
    .map((x) => x.toString().toLowerCase());
  return values.some((v) => pool.some((p) => p.includes(v.toLowerCase())));
};

const getBg = (cat) => {
  return CATEGORY_IMAGES[cat.key] || CATEGORY_IMAGES[cat.type] || CATEGORY_IMAGES.default;
};

const BooksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // object from CATEGORY_LIST or null
  const [activeChip, setActiveChip] = useState({ label: LABELS.ALL, value: LABELS.ALL, type: "all" });
  const [search, setSearch] = useState("");

  // Build chips depending on selectedCategory
  const chips = useMemo(() => {
    if (!selectedCategory) return [];

    const { type, value } = selectedCategory;

    if (type === "class") {
      const n = Number(value);
      // For class 11/12 show boards + JEE/NEET options
      if (n === 11 || n === 12) {
        return [
          { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
          { label: "CBSE", value: "CBSE", type: "board" },
          { label: "ICSE", value: "ICSE", type: "board" },
          { label: "RBSE", value: "RBSE", type: "board" },
          { label: "JEE", value: "JEE", type: "exam" },
          { label: "NEET", value: "NEET", type: "exam" },
        ];
      }
      // regular classes 1..10
      return [
        { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
        { label: "CBSE", value: "CBSE", type: "board" },
        { label: "ICSE", value: "ICSE", type: "board" },
        { label: "RBSE", value: "RBSE", type: "board" },
      ];
    }

    if (type === "board") {
      // clicking a board should show classes 1..12 as chips
      return [
        { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
        ...Array.from({ length: 12 }, (_, i) => ({
          label: `Class ${i + 1}`,
          value: String(i + 1),
          type: "class",
        })),
      ];
    }

    if (type === "exam") {
      if (equalsI(value, "NEET")) {
        return [
          { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
          { label: "Biology", value: "Biology", type: "subject" },
          { label: "Physics", value: "Physics", type: "subject" },
          { label: "Chemistry", value: "Chemistry", type: "subject" },
          { label: "Zoology", value: "Zoology", type: "subject" },
        ];
      }
      if (equalsI(value, "JEE")) {
        return [
          { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
          { label: "Mains", value: "Mains", type: "examPart" },
          { label: "Advanced", value: "Advanced", type: "examPart" },
          { label: "Physics", value: "Physics", type: "subject" },
          { label: "Chemistry", value: "Chemistry", type: "subject" },
          { label: "Maths", value: "Maths", type: "subject" },
        ];
      }
      // generic exam fallback
      return [{ label: LABELS.ALL, value: LABELS.ALL, type: "all" }];
    }

    if (type === "level") {
      return [
        { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
        { label: "Engineering", value: "Engineering", type: "stream" },
        { label: "Medical", value: "Medical", type: "stream" },
        { label: "Commerce", value: "Commerce", type: "stream" },
        { label: "Arts", value: "Arts", type: "stream" },
      ];
    }

    if (type === "competitive") {
      return [
        { label: LABELS.ALL, value: LABELS.ALL, type: "all" },
        { label: "GATE", value: "GATE", type: "exam" },
        { label: "UPSC", value: "UPSC", type: "exam" },
        { label: "CLAT", value: "CLAT", type: "exam" },
      ];
    }

    return [{ label: LABELS.ALL, value: LABELS.ALL, type: "all" }];
  }, [selectedCategory]);

  // Reset chip + search on category change
  const pickCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveChip({ label: LABELS.ALL, value: LABELS.ALL, type: "all" });
    setSearch("");
  };

  // Matching functions
  const matchesCategory = (book) => {
    if (!selectedCategory) return true;
    const { type, value } = selectedCategory;

    if (type === "class") {
      const bc = bookClassNumber(book);
      return bc ? bc === value : false;
    }
    if (type === "board") {
      return equalsI(book.board, value) || hasTagLike(book, [value]);
    }
    if (type === "exam") {
      return equalsI(book.exam, value) || equalsI(book.category, value) || hasTagLike(book, [value]);
    }
    if (type === "level") {
      return equalsI(book.level, value) || equalsI(book.class, value) || hasTagLike(book, [value]);
    }
    if (type === "competitive") {
      return hasTagLike(book, [value]);
    }
    return true;
  };

  const matchesChip = (book) => {
    if (!activeChip || activeChip.value === LABELS.ALL) return true;

    const { type, value } = activeChip;

    if (type === "class") {
      const bc = bookClassNumber(book);
      return bc ? bc === value : false;
    }
    if (type === "board") {
      return equalsI(book.board, value) || hasTagLike(book, [value]);
    }
    if (type === "subject" || type === "stream") {
      // subject/stream: check subject, tags, category
      if (equalsI(book.subject, value)) return true;
      return hasTagLike(book, [value]);
    }
    if (type === "exam" || type === "examPart") {
      return equalsI(book.exam, value) || hasTagLike(book, [value]) || equalsI(book.category, value);
    }
    if (type === "all") return true;

    return true;
  };

  const matchesSearch = (book) => {
    // search is only shown after selecting a category (so here search applies only in drilldown)
    const q = search.trim().toLowerCase();
    if (!q) return true;
    const fields = [book.title, book.author, book.subject, book.board, book.exam, book.category];
    return fields.filter(Boolean).some((f) => f.toString().toLowerCase().includes(q));
  };

  const filteredBooks = books.filter(
    (b) => matchesCategory(b) && matchesChip(b) && matchesSearch(b)
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-center mb-12 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-green-800 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Knowledge Library</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700">
            Access all types of books – academic, competitive, and beyond – free to download and explore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* SEARCH: only visible once a category is selected */}
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

        {/* LANDING: category grid */}
        {!selectedCategory && (
          <div className="my-16">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-10">Select a Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {CATEGORY_LIST.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => pickCategory(cat)}
                  className="h-32 rounded-xl overflow-hidden border border-green-200 shadow-md hover:shadow-lg transition transform hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.32), rgba(0,0,0,0.32)), url('${getBg(cat)}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="w-full h-full flex items-center justify-center text-white font-semibold text-lg">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* DRILLDOWN: when category selected */}
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

            <h2 className="text-2xl font-bold text-green-800 text-center mb-6">{selectedCategory.label} Books</h2>

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

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-12 text-lg">No books found for this selection.</p>
            )}
          </div>
        )}

        {/* Keep your Benefits + CTA only on landing (unchanged look) */}
        {!selectedCategory && (
          <>
            <section className="my-20">
              <h2 className="text-2xl font-bold text-green-700 text-center mb-10">Why Choose Our Library?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  ["Diverse Collection", "From NCERT to novels, explore a wide range of books."],
                  ["Free & Open", "Access all materials without restrictions or hidden costs."],
                  ["Learning First", "Focused on students, readers, and curious minds alike."],
                ].map(([title, desc], i) => (
                  <div key={i} className="p-6 bg-gradient-to-br from-green-100 to-white rounded-xl border border-green-200 shadow-md text-center hover:shadow-lg hover:shadow-green-200 transition">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center bg-gradient-to-r from-green-100 via-white to-green-50 p-10 rounded-2xl shadow-xl mb-20 border border-green-200">
              <h3 className="text-2xl font-semibold mb-3 text-green-800">Start Your Journey</h3>
              <p className="mb-6 max-w-xl mx-auto text-sm md:text-base text-gray-700 font-light">Dive into knowledge. Access books anytime, anywhere, without limits.</p>
              <a href="/contact" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-500 transition">
                Contact Us
              </a>
            </section>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BooksPage;
