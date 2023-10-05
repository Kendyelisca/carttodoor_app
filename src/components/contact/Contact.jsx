import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function ContactSection() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic here to send the contact form data to your server or handle it as needed

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Do you have questions, feedback, or need assistance with your order?
            Feel free to get in touch with us! We're here to help.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>
            We typically respond to inquiries within 24 hours. For urgent
            matters, please call our customer support at{" "}
            <strong>+123-456-7890</strong>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactSection;
