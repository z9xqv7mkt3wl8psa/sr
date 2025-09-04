import React from "react";
import NewspaperCard from "../ui/NewspaperCard";
import { newspapers } from "../../data/newspapers";

const NewspaperPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Daily Newspapers for Current Affairs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newspapers.map((paper) => (
          <NewspaperCard key={paper.id} newspaper={paper} />
        ))}
      </div>
    </div>
  );
};

export default NewspaperPage;
