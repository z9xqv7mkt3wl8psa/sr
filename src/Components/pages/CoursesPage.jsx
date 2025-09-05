import React, { useState } from "react";
import CourseCard from "../ui/CourseCard";
import { courses } from "../../data/courses";
import Footer from '../footer/Footer'


const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(courses.map((c) => c.category))];
  const filteredCourses = courses.filter((c) => c.category === selectedCategory);

 
  const upcomingBatches = [
    { date: "Sep 10, 2025", course: "Full Stack Dev Bootcamp" },
    { date: "Sep 14, 2025", course: "Advanced Data Science with Python" },
    { date: "Sep 18, 2025", course: "UX/UI Masterclass" },
  ];
  const featuredCourses = [
  {
    id: "featured_full_stack",
    title: "Full Stack Web Development",
    provider: "CodeAcademy",
    class: "UG",
    subject: "Computer Science",
    category: "Featured",
    mode: "Online",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    description: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to build dynamic web apps.",
    link: "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
  },
  {
    id: "featured_ai_ml",
    title: "AI & Machine Learning Bootcamp",
    provider: "DeepLearning.AI",
    class: "PG",
    subject: "AI & ML",
    category: "Featured",
    mode: "Online",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    description: "Master Python, ML algorithms, and real-world AI projects with hands-on learning.",
    link: "https://www.deeplearning.ai/short-courses/"
  },
  {
    id: "featured_data_science",
    title: "Data Science with Python",
    provider: "Coursera",
    class: "PG",
    subject: "Data Science",
    category: "Featured",
    mode: "Online",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    description: "Analyze data, build models, and visualize insights using pandas, NumPy, and scikit-learn.",
    link: "https://www.coursera.org/specializations/data-science-python"
  }

  ];
  const categoryContentMap = {
  "Class 1-5": "Basic concepts and fun learning for young students.",
  "Class 6-8": "Build strong foundations in science, math, and languages.",
  "Class 9-10": "Prepare for board exams and competitive foundation courses.",
  "Class 11-12": "Advanced subjects and career guidance for senior students.",
  "Engineering (UG/PG)": "Comprehensive engineering courses for UG & PG students.",
  "Medical (UG/PG)": "In-depth medical studies for future doctors and health professionals.",
  "Civil Services": "Prepare for UPSC & state civil service exams with expert guidance.",
  "JEE / Engineering Entrance": "Crack engineering entrance exams with high-quality courses.",
  "NEET / Medical Entrance": "Medical entrance preparation for NEET and related exams.",
  "Law & Legal Studies": "Study law, legal processes, and entrance prep for law schools.",
  "Arts & Humanities": "Explore literature, history, philosophy, and creative arts.",
  "Science & Research": "Courses for aspiring scientists and research enthusiasts.",
  "Commerce & Business": "Accounting, finance, and business studies for UG/PG students.",
  "Computer Science & IT": "Learn coding, software development, and IT skills.",
  "AI & Machine Learning": "Hands-on AI/ML courses for professionals and students.",
  "Digital Marketing": "Master SEO, social media, and online marketing strategies.",
  "Design & UX/UI": "Learn graphic, UI/UX, and creative design skills.",
  "Psychology & Social Sciences": "Understand human behavior and social dynamics.",
  "Finance & Economics": "Economics, investment, and finance courses.",
  "Languages & Literature": "Enhance language skills and literary understanding.",
  "Music & Performing Arts": "Learn instruments, vocal training, and performing arts.",
  "Health & Fitness": "Courses on nutrition, fitness, and healthy living.",
  "Environment & Sustainability": "Learn about sustainability and environmental sciences.",
  "Architecture & Planning": "Courses on building design, planning, and architecture.",
  "Professional Certifications": "Gain globally recognized professional certificates."
};

  const imageMap = {
 "Class 1-5": "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg",
"Class 6-8": "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
"Class 9-10": "https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg",
"Class 11-12": "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg",
"Engineering (UG/PG)": "https://images.pexels.com/photos/3862639/pexels-photo-3862639.jpeg",
"Medical (UG/PG)": "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg",
"Civil Services": "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
"JEE / Engineering Entrance": "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
"NEET / Medical Entrance": "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",

"Law & Legal Studies": "https://images.pexels.com/photos/5668483/pexels-photo-5668483.jpeg",
"Arts & Humanities": "https://images.pexels.com/photos/3747462/pexels-photo-3747462.jpeg",
"Science & Research": "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
"Commerce & Business": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
"Computer Science & IT": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
"AI & Machine Learning": "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
"Digital Marketing": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
"Design & UX/UI": "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
"Psychology & Social Sciences": "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
"Finance & Economics": "https://images.pexels.com/photos/4386395/pexels-photo-4386395.jpeg",
"Languages & Literature": "https://images.pexels.com/photos/159711/books-book-pages-read-literature-159711.jpeg",
"Music & Performing Arts": "https://images.pexels.com/photos/164711/pexels-photo-164711.jpeg",
"Health & Fitness": "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
"Environment & Sustainability": "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
"Architecture & Planning": "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
"Professional Certifications": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"

  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      
      {/* Hero Banner */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-center mb-16 rounded-3xl overflow-hidden mt-10"
        style={{ backgroundImage: "url('/images/coursesbackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-6 sm:px-12">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Skills, Anywhere</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Discover professionally curated courses with expert instructors, flexible learning, and community support.
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
          >
            Start Learning Today
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16">
  {/* Categories */}
  {!selectedCategory && (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        All Courses at a Glance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => {
          const fallbackImage = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg";
          const bgImage =
            imageMap[cat] || `https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg`;

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
    {categoryContentMap[cat] || "Explore courses in this category."}
  </p>
</div>

            </div>
          );
        })}
      </div>
    </div>
  )}




        {/* Filtered Courses */}
        {selectedCategory && (
          <div className="my-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              ← Back to Categories
            </button>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              {selectedCategory} Courses
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* Additional Sections */}
        {!selectedCategory && (
          <>
            {/* Trending Topics */}
            

            {/* Featured Courses */}
            <section className="my-16">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Featured Courses</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredCourses.map((course) => (
                  <div key={course.id} className="transform hover:scale-105 transition duration-300">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </section>

            

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">The Advantage of Learning With Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  ["Expert Mentors", "Guidance from industry leaders"],
                  ["Live Projects", "Hands‑on assignments"],
                  ["Career Support", "Mock interviews & resumes"],
                  ["Flexible Learning", "Courses on your schedule"]
                ].map(([title, desc], i) => (
                  <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
                    <p className="text-gray-600 mt-2">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Instructors */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Top Instructors</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    name: "Dr. Arjun Mehta",
                    experience: "12+ years experience | 4.9★",
                    subject: "Computer Science",
                    img: "https://randomuser.me/api/portraits/men/31.jpg",
                  },
                  {
                    id: 2,
                    name: "Prof. Ethan Walker",
                    experience: "10+ years experience | 4.8★",
                    subject: "Mathematics",
                    img: "https://randomuser.me/api/portraits/men/32.jpg",
                  },
                  {
                    id: 3,
                    name: "Ms. Olivia Martinez",
                    experience: "9+ years experience | 4.7★",
                    subject: "Artificial Intelligence",
                    img: "https://randomuser.me/api/portraits/women/33.jpg",
                  },
                ].map((instructor) => (
                  <div
                    key={instructor.id}
                    className="bg-white rounded-lg p-5 shadow-md text-center hover:shadow-lg transition"
                  >
                    <img
                      src={instructor.img}
                      alt={instructor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{instructor.name}</h3>
                    <p className="text-sm text-gray-600">{instructor.subject}</p>
                    <p className="text-sm text-gray-500">{instructor.experience}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Testimonials</h2>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Emma Johnson",
                    img: "https://randomuser.me/api/portraits/women/41.jpg",
                    quote: "This course transformed my career—clear content and amazing instructors!",
                    course: "Full Stack Web Development",
                  },
                  {
                    name: "Sophia Lee",
                    img: "https://randomuser.me/api/portraits/women/42.jpg",
                    quote: "The AI & ML Bootcamp was super insightful and hands-on. Highly recommend!",
                    course: "AI & Machine Learning Bootcamp",
                  },
                  {
                    name: "Isabella Garcia",
                    img: "https://randomuser.me/api/portraits/women/43.jpg",
                    quote: "Fantastic experience! The mentors were helpful and the curriculum was top-notch.",
                    course: "Data Science with Python",
                  },
                ].map((student, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                  >
                    <p className="text-gray-600 italic mb-3">“{student.quote}”</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={student.img}
                        alt={student.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">{student.name}</h4>
                        <p className="text-xs text-gray-500">Completed: {student.course}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            

           

            {/* Global Stats */}
            <section className="mb-20 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Global Learning Community</h3>
              <div className="flex justify-center gap-8 mt-4 flex-wrap text-gray-700">
                <div><span className="font-bold text-blue-700 text-2xl">100K+</span> Students</div>
                <div><span className="font-bold text-blue-700 text-2xl">120+</span> Countries</div>
                <div><span className="font-bold text-blue-700 text-2xl">95%</span> Satisfaction</div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center bg-blue-600 text-white p-8 rounded-xl shadow-lg mb-20">
              <h3 className="text-2xl font-bold mb-2">Ready to Upskill?</h3>
              <p className="mb-4">Join 100K+ learners worldwide—start now!</p>
              <a
                href="/contact"
                className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-100 transition"
              >
                Learn Now
              </a>
            </section>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
