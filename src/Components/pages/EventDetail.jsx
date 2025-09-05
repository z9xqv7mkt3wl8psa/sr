import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../data/events";
import Footer from "../footer/Footer";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) return <p className="text-center mt-10">Event not found!</p>;

  return (
    <div className="flex flex-col min-h-screen"> {/* 👈 Make full-height layout */}
      <div className="container mx-auto px-4 py-8 flex-1"> {/* 👈 flex-1 makes this area grow */}
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full lg:w-1/3 h-auto rounded"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
            <p className="text-gray-700 mb-2">Category: {event.category}</p>
            <p className="text-gray-700 mb-2">Date: {event.date}</p>
            <p className="text-gray-700 mb-2">Venue: {event.venue}</p>
            <p className="mt-4">{event.description}</p>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>

      <Footer /> {/* 👈 Footer sticks to bottom even when content is short */}
    </div>
  );
};

export default EventDetail;
