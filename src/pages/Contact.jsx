// Contact.jsx
import React from 'react';
import './contactStyles.css';

const Contact = () => {
  return (
    <div className="contactForm">
        <h2>Contact me:</h2>
    <div className="max-w-screen-xl mx-auto p-8">
      <form className="mb-5">
        <label htmlFor="name" className="name formEl block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input-style"
          placeholder="Your Name"
        />
      </form>

      <form className="mb-5">
        <label htmlFor="email" className="email formEl block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <div className="relative">
          <input
            type="text"
            id="email"
            className="input-style"
            placeholder="name@email.com"
          />
        </div>
      </form>

      <form>
        <label htmlFor="message" className="message formEl block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="input-style"
          placeholder="Leave a message..."
        ></textarea>

        <button type="submit" class=" button text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Send Message</button>

      </form>
    </div>
    </div>
  );
};

export default Contact;
