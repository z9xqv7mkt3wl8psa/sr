import { useParams } from "react-router-dom";
import resultData from "../../data/resultData";

const ResultDetail = () => {
  const { id } = useParams();
  const result = resultData.find((item) => item.id === id);

  if (!result) return <h2 className="text-center text-red-500 mt-10">❌ Page Not Found</h2>;

  const getHighlightClass = (highlight) => {
    if (highlight === "yellow") return "bg-yellow-200 font-bold";
    if (highlight === "red") return "text-red-600 font-bold";
    return "";
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md border p-6 mt-6 text-sm leading-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center text-pink-600 uppercase">
        {result.organization}
      </h2>
      <h3 className="text-xl font-semibold text-center text-orange-600 mt-1">
        {result.title}
      </h3>
      <p className="text-center text-red-600 font-medium mt-2 underline">
        {result.shortDetail}
      </p>

      {/* Dates & Fees */}
      <div className="grid grid-cols-1 md:grid-cols-2 border mt-6">
        <div className="border p-3">
          <h4 className="text-lg font-semibold text-green-600 underline">Important Dates</h4>
          <ul className="mt-2 space-y-1">
            {result.importantDates.map((item, i) => (
              <li key={i} className={getHighlightClass(item.highlight)}>
                <b>{item.label}:</b> {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="border p-3">
          <h4 className="text-lg font-semibold text-blue-600 underline">Application Fee</h4>
          <ul className="mt-2 space-y-1">
            {result.applicationFees.map((item, i) => (
              <li key={i} className={getHighlightClass(item.highlight)}>
                <b>{item.label}:</b> {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Age Limit */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-purple-600 underline">Age Limit</h4>
        <ul className="mt-2 space-y-1">
          {result.ageLimit.map((item, i) => (
            <li key={i} className={getHighlightClass(item.highlight)}>
              {item.label ? <><b>{item.label}:</b> {item.value}</> : item.note}
            </li>
          ))}
        </ul>
      </div>

      {/* Vacancies */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-green-700 underline">Vacancy Details</h4>
        <table className="w-full border mt-2 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Post Name</th>
              <th className="border p-2">Total Vacancies</th>
            </tr>
          </thead>
          <tbody>
            {result.vacancies.map((v, i) => (
              <tr key={i}>
                <td className="border p-2">{v.post}</td>
                <td className="border p-2">{v.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Qualifications */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-indigo-600 underline">Qualification Details</h4>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {result.qualifications.map((q, i) => (
            <li key={i}><b>{q.post}:</b> {q.eligibility}</li>
          ))}
        </ul>
      </div>

      {/* Required Docs */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-pink-600 underline">Required Documents</h4>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {result.requiredDocs.map((doc, i) => <li key={i}>{doc}</li>)}
        </ul>
      </div>

      {/* Selection Process */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-orange-600 underline">Selection Process</h4>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {result.selectionProcess.map((step, i) => <li key={i}>{step}</li>)}
        </ul>
      </div>

      {/* How to Apply */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-blue-700 underline">How to Apply / Check Result</h4>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          {result.howToApply.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>

     {/* Colorful Sarkari Style Boxes */}
<div className="border p-3 mt-6">
  <h3 className="font-bold text-purple-700 underline mb-3">Some Useful Important Links</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {result.linksBox.map((link, i) => (
      <div
        key={i}
        className="flex justify-between items-center border p-2 bg-gray-50"
      >
        <span className={`font-semibold ${link.color}`}>{link.label}</span>
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-bold underline"
        >
          Click Here
        </a>
      </div>
    ))}
  </div>
</div>


      {/* FAQs */}
      <div className="border p-3 mt-6">
        <h4 className="text-lg font-semibold text-green-600 underline">Frequently Asked Questions</h4>
        {result.faqs.map((faq, i) => (
          <div key={i} className="mt-2">
            <p className="font-semibold">Q: {faq.q}</p>
            <p className="ml-4">A: {faq.a}</p>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        <p>Prasunet © 2025 All Rights Reserved</p>
        <p>Privacy Policy | Terms of Service | Disclaimer</p>
      </div>
    </div>
  );
};

export default ResultDetail;
