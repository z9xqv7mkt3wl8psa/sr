import React from "react";
import { useParams, Link } from "react-router-dom";
import { colleges } from "../../data/colleges";
import CollegeCard from "../ui/CollegeCard";
import Footer from "../footer/Footer";

const Stat = ({ label, value }) => (
  <div className="p-4 bg-white rounded-lg border border-green-100 shadow-sm text-center">
    <div className="text-xs text-gray-500">{label}</div>
    <div className="text-lg font-semibold text-green-800">{value ?? "—"}</div>
  </div>
);

const Section = ({ title, children }) => (
  <section className="mb-10 sm:mb-12">
    <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">{title}</h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
    {children}
  </span>
);

const CollegeDetail = () => {
  const { id } = useParams();
  const college = colleges.find((c) => c.id === id);

  if (!college)
    return (
      <p className="text-center mt-20 text-red-500 text-xl font-semibold">College not found!</p>
    );

  // Similar Colleges (by state + stream overlap)
  let similar = colleges.filter(
    (c) =>
      c.id !== college.id &&
      (c.state === college.state || (c.streams || []).some((s) => (college.streams || []).includes(s)))
  );
  similar = similar.sort(() => 0.5 - Math.random()).slice(0, 8);

  const contactItems = [
    { label: "Email", value: college.contact?.email },
    { label: "Phone", value: college.contact?.phone },
    { label: "Website", value: college.contact?.website },
    { label: "Address", value: college.contact?.address },
  ].filter((x) => x.value);
const heroImages = [
  "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // students walking on campus
  "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // group of students sitting outdoors with books
  "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // students in graduation gowns
  "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // students studying together in library
  "https://images.pexels.com/photos/819916/pexels-photo-819916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // students in classroom with laptops
];

const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    <div
  className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center mb-10 sm:mb-16"
  style={{
    backgroundImage: `url(${randomImage})`,
  }}
>

  <div className="absolute inset-0 bg-black/40" />

<div className="relative z-10 text-green-100 px-4 sm:px-6 max-w-3xl mx-auto text-center">
  {/* Title */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
    {college.name}
  </h1>

  {/* Location & Tier */}
  <p className="text-base sm:text-lg mb-4">
    {college.city}, {college.state} • {college.tier || "Tier —"}
  </p>

  {/* Short description */}
  {college.shortDesc && (
    <p className="text-sm sm:text-base text-gray-200 mb-6">
      {college.shortDesc}
    </p>
  )}

  <div className="flex flex-wrap gap-3 justify-center">
  <a
    href={college.contact?.website}   // 👈 updated path
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 sm:py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500"
  >
    Visit Now
  </a>

  <Link
    to={`/colleges/compare?add=${college.id}`}
    className="px-5 py-2 sm:py-3 bg-white/20 text-green-100 rounded-lg font-semibold hover:bg-white/30"
  >
    Compare
  </Link>
</div>


  {/* Tags / Badges */}
  <div className="mt-6 flex flex-wrap gap-2 justify-center">
    {(college.accreditations || []).map((a) => (
      <span
        key={a}
        className="text-xs px-3 py-1 rounded-full bg-green-100/20 border border-green-200/40"
      >
        {a}
      </span>
    ))}
  </div>
</div>
</div>


      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Summary card */}
        <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-10 sm:mb-12 border border-gray-200">
          <div className="lg:flex gap-8 sm:gap-12">
            {/* Logo */}
            <div className="lg:w-1/3 mb-6 lg:mb-0 flex items-start">
              <div className="relative">
                <div className="absolute -inset-3 blur-2xl bg-green-200/40 rounded-lg" />
                <img
                  src={
                    college.logo?.startsWith("http")
                      ? college.logo
                      : `/images/${college.logo || "college.webp"}`
                  }
                  alt={`${college.name} logo`}
                  className="relative w-40 h-40 object-contain rounded-lg shadow-lg border border-green-200 bg-white"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-2/3 flex flex-col">
              <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-3 sm:mb-4">
                About the College
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                {college.about || college.shortDesc}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Stat label="Ownership" value={college.ownership || college.type} />
                <Stat label="NAAC Grade" value={college.naac || "—"} />
                <Stat label="NIRF Rank" value={college.rankings?.find((r) => r.agency === "NIRF")?.rank || "—"} />
                <Stat label="Campus Area" value={college.strength?.campusArea || "—"} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {(college.accreditations || []).map((a) => <Pill key={a}>{a}</Pill>)}
                {(college.special || []).map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <Section title="Programs & Streams">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(college.streams || []).map((s) => <Pill key={s}>{s}</Pill>)}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(college.degrees || []).map((d) => (
              <span key={d} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {d}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Admissions">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">Admission Modes</h3>
              <div className="flex flex-wrap gap-2">
                {(college.admissionModes || []).map((m) => <Pill key={m}>{m}</Pill>)}
              </div>
              {college.cutoffs && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Cutoff Trends</h4>
                  <ul className="text-sm text-gray-600 list-disc ml-5">
                    {college.cutoffs.map((co, idx) => (
                      <li key={idx}>
                        {co.year}: {co.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {college.counselling && (
                <p className="text-sm text-gray-600 mt-3">Counseling: {college.counselling}</p>
              )}
              {college.reservation && (
                <p className="text-sm text-gray-600 mt-1">Reservation: {college.reservation}</p>
              )}
            </div>

            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">Popular Exams</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {(college.exams || []).map((e) => <Pill key={e}>{e}</Pill>)}
              </div>
              {college.importantDates && (
                <>
                  <h4 className="text-sm font-semibold text-gray-700 mt-2 mb-1">Important Dates</h4>
                  <ul className="text-sm text-gray-600 list-disc ml-5">
                    {college.importantDates.map((d, i) => (
                      <li key={i}>
                        {d.label}: {d.date}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </Section>

        <Section title="Facilities & Campus Life">
          <div className="flex flex-wrap gap-2 mb-4">
            {(college.facilities || []).map((f) => <Pill key={f}>{f}</Pill>)}
          </div>
          {college.hostels && (
            <div className="grid md:grid-cols-3 gap-3">
              <Stat label="Hostel (Boys/Girls)" value={college.hostels?.summary || "—"} />
              <Stat label="Wi-Fi Campus" value={college.facilities?.includes("Wi-Fi Enabled Campus") ? "Yes" : "—"} />
              <Stat label="Sports & Cultural" value={college.facilities?.includes("Sports & Cultural Activities") ? "Yes" : "—"} />
            </div>
          )}
        </Section>

        <Section title="Placements">
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <Stat label="Highest Package" value={college.placement?.highest ? `₹${(college.placement.highest/100000).toFixed(1)} LPA` : "—"} />
            <Stat label="Average Package" value={college.placement?.avg ? `₹${(college.placement.avg/100000).toFixed(1)} LPA` : "—"} />
            <Stat label="Top Recruiters" value={(college.placement?.topRecruiters || []).slice(0, 2).join(", ") || "—"} />
          </div>
          {college.placement?.branchwise && (
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">Branch-wise Highlights</h3>
              <ul className="text-sm text-gray-700 list-disc ml-5">
                {college.placement.branchwise.map((b, i) => (
                  <li key={i}>
                    {b.branch}: Highest ₹{(b.highest/100000).toFixed(1)} LPA, Avg ₹{(b.avg/100000).toFixed(1)} LPA
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>

        <Section title="Scholarships & Financial Aid">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">Available Schemes</h3>
              <ul className="text-sm text-gray-700 list-disc ml-5">
                {(college.scholarships || []).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            {college.fees && (
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold text-green-800 mb-2">Fee Range</h3>
                <p className="text-sm text-gray-700">{college.fees}</p>
              </div>
            )}
          </div>
        </Section>

        <Section title="Collaborations & Industry">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">International Tie-ups</h3>
              <ul className="text-sm text-gray-700 list-disc ml-5">
                {(college.international || []).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">Corporate MoUs & Incubation</h3>
              <ul className="text-sm text-gray-700 list-disc ml-5">
                {(college.industry || []).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Key Stats & Diversity">
          <div className="grid md:grid-cols-4 gap-3">
            <Stat label="Students" value={college.strength?.students} />
            <Stat label="Faculty" value={college.strength?.faculty} />
            <Stat label="F:S Ratio" value={college.strength?.ratio} />
            <Stat label="International Students" value={college.diversity?.international ?? "—"} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(college.modes || []).map((m) => (
              <span key={m} className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                {m}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Reviews & Sentiment">
          {college.sentiment && (
            <div className="p-4 bg-white rounded-lg border border-gray-200 mb-3">
              <p className="text-sm text-gray-700">
                Live Sentiment Score: <span className="font-semibold text-green-700">{college.sentiment.score}% Positive</span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(college.sentiment.breakdown || {}).map(([k, v]) => (
                  <Pill key={k}>
                    {k}: {v}%
                  </Pill>
                ))}
              </div>
            </div>
          )}
          {college.reviews && (
            <div className="grid md:grid-cols-2 gap-4">
              {college.reviews.slice(0, 4).map((r, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">
                    {r.type} • {r.date}
                  </div>
                  <div className="text-sm text-gray-800">{r.text}</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4">
            <Link
              to={`/colleges/compare?add=${college.id}`}
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
            >
              Compare this College
            </Link>
          </div>
        </Section>

        <Section title="Contact & Location">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <ul className="text-sm text-gray-700">
                {contactItems.map((ci) => (
                  <li key={ci.label} className="mb-1">
                    <span className="font-semibold">{ci.label}:</span> {ci.value}
                  </li>
                ))}
              </ul>
            </div>
            {college.map && (
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="aspect-video w-full rounded-md overflow-hidden">
                  {/* Replace with Google Maps embed if you have address */}
                  <iframe
                    title="college-map"
                    src={college.map}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>
          {college.nearby && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-2">Nearby Essentials</h3>
              <ul className="text-sm text-gray-700 list-disc ml-5">
                {college.nearby.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>
          )}
        </Section>

        {/* Similar Colleges */}
        {similar.length > 0 && (
          <Section title="Explore Similar Colleges">
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-inner">
              <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100">
                {similar.map((c) => (
                  <div className="flex-shrink-0 w-52 sm:w-60 md:w-72 snap-start" key={c.id}>
                    <CollegeCard college={c} />
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-white via-green-50 to-white text-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mb-12 sm:mb-16 border border-green-100">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-green-800">Ready to shortlist?</h3>
          <p className="mb-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
            Try Compare Tool or ask verified alumni in the Q&A.
          </p>
          <Link
            to="/colleges/compare"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500"
          >
            Open Compare Tool
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CollegeDetail;
