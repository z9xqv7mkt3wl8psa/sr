import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../footer/Footer.jsx";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later you can connect with backend or API here
    console.log(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
     <>
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Contact Us - Prasunet Sarkari Result
        </h2>

   {/* Contact Info */}
<div className="grid md:grid-cols-2 gap-8 mb-8">
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-700">
      Get in Touch
    </h3>
    <p className="text-gray-600">
      Have questions or need help? Reach out to us, and we’ll get back
      to you as soon as possible.
    </p>

    <div>
      <p className="font-medium"> Address:</p>
      <p className="text-gray-600">
        Chandigarh, India
      </p>
    </div>
    
    <div>
      <p className="font-medium"> Email:</p>
      <p className="text-gray-600">prasunetcompany@gmail.com</p>
    </div>

    {/* Social Icons */}
    <div>
      <p className="font-medium">Follow Us:</p>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://www.facebook.com/prasunet"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://x.com/prasunet"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/prasunet_company/"
          target="_blank"
          rel="noreferrer"
          className="text-pink-500 hover:text-pink-600"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/prasunet-company/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>


          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-900 transition"
            >
              Send Message
            </button>
            {success && (
              <p className="text-green-600 font-medium text-center">
                 Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.446378103502!2d76.572548!3d30.768921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec4c918239c1%3A0x6a54b8f7b0b98d57!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1689839049219!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
        
    </div> <Footer />
  </>
  );
};

export default ContactPage;
