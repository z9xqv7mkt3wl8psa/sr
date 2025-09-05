// src/pages/EventsPage.jsx
import React, { useState } from "react";
import EventCard from "../ui/EventCard";
import Footer from "../footer/Footer";

import { events } from "../../data/events"; // your events data

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(events.map((e) => e.category))];
  const filteredEvents = events.filter((e) => e.category === selectedCategory);

  const featuredEvents = [
    {
      "id": "apru_tech_policy_hackathon_2025",
      "title": "APRU Tech Policy Hackathon 2025",
      "organizer": "Association of Pacific Rim Universities (APRU)",
      "category": "Hackathon",
    "date": "2025-09-30",
    "venue": "Bangkok, Thailand",
    "mode": "Hybrid",
    "image": "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    "description": "The APRU Tech Policy Hackathon 2025, organized by the Association of Pacific Rim Universities, is a dynamic coding marathon held from September 30 to October 2 in Bangkok, Thailand. Designed for university students from APRU member universities and Southeast Asia, this hackathon challenges teams to create AI and data-driven policy solutions addressing social issues like sustainability and healthcare. Participants develop functional prototypes, such as web or mobile apps, guided by mentors from Google and NUS. The event offers fully funded travel and accommodation for selected teams, fostering inclusivity. With virtual participation options, it ensures global access. Expect workshops, networking with policymakers, and a final policy brief presentation. Join to showcase your coding skills, collaborate on innovative solutions, and shape the future of tech-driven policy.",
    "link": "https://www.apru.org/event/apru-tech-policy-hackathon-2025"
  },
  {
    "id": "nasa_space_apps_challenge_2025",
    "title": "NASA International Space Apps Challenge 2025",
    "organizer": "NASA",
    "category": "Competition",
    "date": "2025-10-04",
    "venue": "Global (Boston event highlighted)",
    "mode": "Hybrid",
    "image": "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
    "description": "The NASA International Space Apps Challenge 2025, organized by NASA, is a global competition held on October 4–5, 2025, inviting coders, scientists, and innovators to solve real-world challenges for space and Earth. With a highlighted event in Boston, participants collaborate in teams to develop solutions using NASA’s open data, competing for recognition and potential project advancement. Open to all skill levels, the hybrid format supports in-person and virtual participation, ensuring global accessibility. Winners gain visibility through NASA’s platforms and networking with industry experts. The event includes mentorship, live-streamed talks, and a vibrant community on Discord. Join to create impactful solutions, earn prestigious awards, and contribute to space exploration and sustainability.",
    "link": "https://www.spaceappschallenge.org/2025"
  },
  {
    "id": "fab_city_awards_roundtable_2025",
    "title": "Fab City Awards Winners Roundtable 2025",
    "organizer": "Fab City Foundation",
    "category": "Webinar",
    "date": "2025-06-26",
    "venue": "Virtual",
    "mode": "Online",
    "image": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    "description": "The Fab City Awards Winners Roundtable 2025, organized by the Fab City Foundation, is a virtual webinar on June 26, 2025, showcasing innovative urban solutions from award-winning projects. Industry leaders and innovators discuss sustainable city designs, leveraging technologies like IoT and AI. This event is open to all, with no prior expertise required, and is accessible globally via a live-streamed platform. Attendees will engage in expert-led panels, Q&A sessions, and interactive discussions, gaining insights into smart city trends. The webinar fosters networking through virtual breakout rooms and offers recordings for flexible learning. Join to learn from global experts, explore cutting-edge urban innovations, and connect with a community dedicated to sustainable development.",
    "link": "https://www.hackster.io/events/fab-city-awards-2025"
  },

    {
      id: "design_sprint",
      title: "Global Design Sprint",
      organizer: "DesignHub",
      category: "Workshop",
      mode: "Offline",
      image: "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg",
      description: "Participate in creative design sprints and innovation workshops.",
      link: "#",
    },
  ];

  const categoryContentMap = {
    "Hackathon": "Join coding marathons to showcase your skills and creativity.",
    "Competition": "Participate in competitions to gain recognition and rewards.",
    "Workshop": "Hands-on workshops to learn new skills from experts.",
    "Seminar": "Attend seminars and webinars with industry leaders.",
    "Webinar": "Online sessions to expand your knowledge from anywhere.",
  };

  const imageMap = {
    "Hackathon": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "Competition": "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    "Workshop": "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg",
    "Seminar": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    "Webinar": "https://images.pexels.com/photos/3862639/pexels-photo-3862639.jpeg",
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center mb-16 rounded-3xl overflow-hidden mt-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white px-6 sm:px-12">
          <h1 className="text-5xl font-bold mb-4">Showcase Your Talent</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Participate in competitions, events, and workshops to win awards & recognition.
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition"
          >
            Explore Events
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16">
        {/* Categories */}
        {!selectedCategory && (
          <div className="my-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Engage with Events that Inspire
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {categories.map((cat) => {
                const bgImage = imageMap[cat] || "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg";
                return (
                  <div
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="h-48 bg-cover bg-center rounded-lg shadow-lg flex items-end p-6 cursor-pointer transition transform hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${bgImage}?auto=compress&cs=tinysrgb&dpr=2&w=800')`,
                    }}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white">{cat}</h3>
                      <p className="text-sm text-white mt-1">
                        {categoryContentMap[cat] || "Explore events in this category."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Filtered Events */}
        {selectedCategory && (
          <div className="my-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              ← Back to Categories
            </button>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              {selectedCategory} Events
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Featured Events */}
        {!selectedCategory && (
          <section className="my-16">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Featured Events</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event) => (
                <div key={event.id} className="transform hover:scale-105 transition duration-300">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Advantages */}
        {!selectedCategory && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Power Up Your Learning & Recognition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                ["Skill Showcase", "Demonstrate your talents to a global audience"],
                ["Networking", "Connect with experts and peers"],
                ["Awards & Recognition", "Win prizes and certificates"],
                ["Learning Experience", "Gain hands-on exposure and knowledge"]
              ].map(([title, desc], i) => (
                <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-purple-700">{title}</h3>
                  <p className="text-gray-600 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        {!selectedCategory && (
          <section className="text-center bg-purple-600 text-white p-8 rounded-xl shadow-lg mb-20">
            <h3 className="text-2xl font-bold mb-2">Ready to Compete?</h3>
            <p className="mb-4">Join exciting events and gain global recognition!</p>
            <a
              href="/contact"
              className="px-6 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition"
            >
              Register Now
            </a>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
