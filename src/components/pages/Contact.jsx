export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="p-3 border rounded-lg" rows="5"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
        <div className="text-center text-gray-600 mt-6">
          📍 Dhaka, Bangladesh | 📞 +880 01746446008 | ✉️ mdnoyanmia22@gmail.com
        </div>
      </div>
    </section>
  );
}
