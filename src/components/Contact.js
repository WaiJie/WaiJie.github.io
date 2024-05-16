import React from 'react';

// Create a new component for the contact information
const ContactInfo = () => {
  return (
    <div className="contact-info">
      <ul>
        <li>Email: waijiechua@gmail.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/chuawaijie/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/chuawaijie/</a></li>
      </ul>
    </div>
  );
};

// The main Contact component
const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <ContactInfo />
    </section>
  );
};

export default Contact;