// src/ui/EventCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  if (!event) return null;

  return (
    <div
      className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4 cursor-pointer"
      onClick={() => navigate(`/events/${event.id}`)}
    >
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.organizer} | {event.mode}</p>
      <p className="text-sm mt-1">{event.description?.substring(0, 100)}...</p>
      <span className="mt-3 inline-block text-purple-600 font-medium hover:underline">
        View Details →
      </span>
    </div>
  );
};

export default EventCard;
