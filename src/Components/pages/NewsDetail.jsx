import React from "react";
import { useParams, Link } from "react-router-dom";
import news from "../../data/news";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const NewsDetail = () => {
  const { id } = useParams();
  const article = news.find((item) => item.id === id);

  if (!article)
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl text-red-600 font-bold mb-4">News Not Found</h2>
        <Link to="/news" className="text-blue-600 underline">
          ← Back to News Page
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-4">
        <Link
          to="/news"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          Back to News
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {article.date} • {article.organization}
      </p>

      <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
        {article.content}
      </div>

      {article.source && (
        <a
          href={article.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-700 font-semibold hover:underline"
        >
          <FaExternalLinkAlt className="mr-2" />
          Visit Official Source
        </a>
      )}
    </div>
  );
};

export default NewsDetail;
