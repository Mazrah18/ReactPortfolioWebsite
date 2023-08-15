import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set your email.js service ID, template ID, and user ID here
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';

    // Send the form data using email.js
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
