import React from "react";
import news from "../../data/news";
import NewsCard from "../ui/NewsCard";

const NewsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Government Job & Exam News Updates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
