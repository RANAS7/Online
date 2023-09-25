import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-contact", {
        // Update the endpoint to match your backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success, you can show a success message to the user
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-container">
      <div>
        <div>
          <h3 className="heading">Contact Us</h3>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone_number">Phone number</label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  placeholder="Phone number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message"
                  onChange={handleChange}
                  cols={3}
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <img
          alt="Contact us"
          src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
        />
      </div>
    </div>
  );
};

export default Contact;
