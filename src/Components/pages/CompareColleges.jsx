import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { colleges } from "../../data/colleges";

const Row = ({ label, values }) => (
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 border-b last:border-b-0 py-3">
    <div className="text-sm font-semibold text-gray-700">{label}</div>
    {values.map((v, i) => (
      <div key={i} className="text-sm text-gray-800 bg-white p-3 rounded-lg border border-gray-200">
        {v || "—"}
      </div>
    ))}
  </div>
);

const ChipList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items?.length ? items.map((x) => (
      <span key={x} className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
        {x}
      </span>
    )) : "—"}
  </div>
);

const useQuery = () => new URLSearchParams(useLocation().search);

const CompareColleges = () => {
  const q = useQuery();
  const preselect = q.get("add");

  const [selectedIds, setSelectedIds] = useState(preselect ? [preselect] : []);
  const [search, setSearch] = useState("");

  const options = useMemo(() => {
    const ql = search.trim().toLowerCase();
    return colleges
      .filter((c) => !selectedIds.includes(c.id))
      .filter((c) =>
        !ql
          ? true
          : [c.name, c.city, c.state, ...(c.streams || [])].some((f) =>
              (f || "").toString().toLowerCase().includes(ql)
            )
      )
      .slice(0, 20);
  }, [search, selectedIds]);

  const selected = selectedIds.map((id) => colleges.find((c) => c.id === id)).filter(Boolean);

  const addCollege = (id) => {
    if (selectedIds.length >= 3) return; // compare up to 3
    setSelectedIds((s) => (s.includes(id) ? s : s.concat(id)));
    setSearch("");
  };
  const removeCollege = (id) => setSelectedIds((s) => s.filter((x) => x !== id));

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div
        className="relative w-full h-56 bg-cover bg-center flex items-center justify-center text-center mb-8 rounded-b-2xl"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="relative z-10 text-green-800 px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Compare Colleges</h1>
          <p className="text-sm md:text-base text-gray-700">
            Compare Fees, Placements, Courses, Infrastructure, Reviews & more
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Selectors */}
        <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow p-4 border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <input
              type="text"
              placeholder="Search colleges to add..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-sm transition shadow-sm"
            />
            <div className="flex-1 flex gap-2 overflow-x-auto">
              {options.map((c) => (
                <button
                  key={c.id}
                  onClick={() => addCollege(c.id)}
                  className="px-3 py-2 text-xs rounded-md border border-green-300 text-green-700 bg-white hover:bg-green-50 whitespace-nowrap"
                >
                  + {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-3 flex-wrap">
            {selected.map((c) => (
              <div key={c.id} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
                <img
                  src={c.logo?.startsWith("http") ? c.logo : `/images/${c.logo || "college.webp"}`}
                  className="w-8 h-8 object-contain"
                  alt="logo"
                />
                <span className="text-sm">{c.name}</span>
                <button
                  onClick={() => removeCollege(c.id)}
                  className="ml-1 text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                >
                  ✕
                </button>
              </div>
            ))}
            {!selected.length && <span className="text-sm text-gray-500">Add up to 3 colleges to compare</span>}
          </div>
        </div>

        {/* Comparison Table */}
        {selected.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-green-50 border-b p-3">
              <div />
              {selected.map((c) => (
                <div key={c.id} className="text-sm font-semibold text-green-800">
                  {c.name}
                </div>
              ))}
              {selected.length < 3 && <div className="hidden sm:block" />}
            </div>

            <div className="p-3">
              <Row
                label="Location"
                values={selected.map((c) => `${c.city}, ${c.state}`)}
              />
              <Row
                label="Ownership / Type"
                values={selected.map((c) => c.ownership || c.type)}
              />
              <Row
                label="Tier"
                values={selected.map((c) => c.tier || "—")}
              />
              <Row
                label="Streams"
                values={selected.map((c) => <ChipList key="s" items={c.streams} />)}
              />
              <Row
                label="Degrees"
                values={selected.map((c) => <ChipList key="d" items={c.degrees} />)}
              />
              <Row
                label="Accreditations"
                values={selected.map((c) => <ChipList key="a" items={c.accreditations} />)}
              />
              <Row
                label="Admission Modes"
                values={selected.map((c) => <ChipList key="am" items={c.admissionModes} />)}
              />
              <Row
                label="Popular Exams"
                values={selected.map((c) => <ChipList key="ex" items={c.exams} />)}
              />
              <Row
                label="Facilities"
                values={selected.map((c) => <ChipList key="f" items={c.facilities} />)}
              />
              <Row
                label="Placements (Highest / Avg)"
                values={selected.map((c) =>
                  c.placement
                    ? `₹${(c.placement.highest/100000).toFixed(1)} LPA / ₹${(c.placement.avg/100000).toFixed(1)} LPA`
                    : "—"
                )}
              />
              <Row
                label="Top Recruiters"
                values={selected.map((c) => (c.placement?.topRecruiters || []).slice(0, 5).join(", "))}
              />
              <Row
                label="Fee Range"
                values={selected.map((c) => c.fees || "—")}
              />
              <Row
                label="Scholarships"
                values={selected.map((c) => (c.scholarships || []).slice(0, 4).join(", ") || "—")}
              />
              <Row
                label="NAAC / NIRF"
                values={selected.map((c) => {
                  const nirf = c.rankings?.find((r) => r.agency === "NIRF")?.rank;
                  return `${c.naac || "—"} / ${nirf || "—"}`;
                })}
              />
              <Row
                label="Contact"
                values={selected.map((c) => {
                  const email = c.contact?.email || "—";
                  const phone = c.contact?.phone || "—";
                  return `${email} | ${phone}`;
                })}
              />
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 p-4 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl">
          <h3 className="text-green-800 font-semibold mb-1">Pro Tip</h3>
          <p className="text-sm text-gray-700">
            Look beyond ranks—check ROI, average packages, and accreditation history. Use alumni Q&A to verify claims.
          </p>
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
};

export default CompareColleges;
