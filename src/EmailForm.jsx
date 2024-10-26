import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css"; // Import the CSS file

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_4z5id7m";
    const templateId = "template_g83uzxf";
    const publicKey = "E1f-Sj1bK188XZ3Vq";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: email, // Send to the user's email
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send Email</button>
      </form>
    </>
  );
};

export default EmailForm;
