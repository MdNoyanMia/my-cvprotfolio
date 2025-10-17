// src/components/Contact.jsx
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme(); // Global dark mode
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: fromEmail, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setName("");
        setFromEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Unknown error, check server logs.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error");
    }
  }

  return (
    <section
      className={`min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div
        className={`max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl shadow-md transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className={`p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "dark" ? "bg-gray-700 border-gray-600 text-gray-100" : ""
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "dark" ? "bg-gray-700 border-gray-600 text-gray-100" : ""
            }`}
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className={`p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
              theme === "dark" ? "bg-gray-700 border-gray-600 text-gray-100" : ""
            }`}
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-600 transition disabled:opacity-50"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <div className="text-green-500 text-center mt-4">
            ✅ Message sent — I will check my email soon.
          </div>
        )}
        {status === "error" && (
          <div className="text-red-500 text-center mt-4">
            ❌ Failed to send. {errorMsg ? `Reason: ${errorMsg}` : ""}
          </div>
        )}

        <div
          className={`text-center mt-8 text-sm sm:text-base leading-relaxed ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          📍 Dhaka, Bangladesh <br className="sm:hidden" />
          📞 +880 01746446008 <br className="sm:hidden" />
          ✉️ mdnoyanmia22@gmail.com
        </div>
      </div>
    </section>
  );
}
