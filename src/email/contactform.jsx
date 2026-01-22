import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      .then(
        () => {
          setResult("Message sent successfully!");
          setSending(false);
          e.target.reset();
        },
        () => {
          setResult("Failed to send. Try again.");
          setSending(false);
        },
      );
  };

  return (
    <form className="contact-box1" onSubmit={sendMessage}>
      <h3>Contact Me</h3>

      <input
        className="contact-input"
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        className="contact-input"
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        className="contact-textarea"
        name="message"
        placeholder="Your Message"
        required
      ></textarea>

      <button className="contact-send-btn" type="submit">
        {sending ? "Sending..." : "Send Message"}
      </button>

      {result && <p style={{ marginTop: "12px", color: "#bbb" }}>{result}</p>}
    </form>
  );
};

export default ContactForm;
