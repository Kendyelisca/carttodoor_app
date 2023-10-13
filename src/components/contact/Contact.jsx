import { useState } from "react";

import "./contact.css";
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
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>
            Do you have questions, feedback, or need assistance with your order?
            Feel free to get in touch with us! We're here to help.
          </p>
          <form onSubmit={handleSubmit} className="form-content">
            <div className="form-group">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name..."
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email..."
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
                placeholder="Your Message..."
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
    </>
  );
}

export default ContactSection;
