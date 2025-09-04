import React from "react";

const EventCard = ({ event }) => {
  if (!event) return null;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.category}</p>
      <p className="text-sm mt-1">{event.description.substring(0, 100)}...</p>
      <p className="text-sm text-gray-500 mt-1">Date: {event.date} | Venue: {event.venue}</p>
      <a
        href={`/events/${event.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        View All Events →
      </a>
    </div>
  );
};

export default EventCard;
