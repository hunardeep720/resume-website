"use client";
import Layout from "@/component/Layout";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    if (!message) formErrors.message = "Message is required";
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission (e.g., send data to an API)
      alert("Form submitted");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center mt-10">Contact</h1>
      <form
  className="max-w-lg mx-auto mt-10 px-8 py-6 rounded-lg shadow-md text-black"
  onSubmit={handleSubmit}
>
  <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
  <div className="mb-4">
    <label
      className="block text-white text-lg font-bold mb-2"
      htmlFor="name"
    >
      Name
    </label>
    <input
      id="name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
      placeholder="Your Name"
    />
    {errors.name && (
      <p className="text-red-500 text-sm mt-2">{errors.name}</p>
    )}
  </div>
  <div className="mb-4">
    <label
      className="block text-white text-lg font-bold mb-2"
      htmlFor="email"
    >
      Email
    </label>
    <input
      id="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
      placeholder="your@email.com"
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
    )}
  </div>
  <div className="mb-4">
    <label
      className="block text-white text-lg font-bold mb-2"
      htmlFor="message"
    >
      Message
    </label>
    <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
      placeholder="Your Message"
      rows={5}
    />
    {errors.message && (
      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
    )}
  </div>
  <button
    type="submit"
    className="text-white font-bold text-xl px-4 py-2 rounded hover:bg-white hover:text-black focus:outline-none focus:ring focus:border-blue-500 w-full"
  >
    Submit
  </button>
</form>
    </Layout>
  );
};

export default Contact;
