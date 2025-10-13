import { FaCode, FaMobileAlt, FaPalette, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Frontend Development",
    description:
      "Building responsive, fast, and modern web applications using React, TailwindCSS, and modern JavaScript frameworks.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive & Mobile Design",
    description:
      "Creating mobile-friendly web applications that work perfectly on all devices, including smartphones, tablets, and desktops.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "UI/UX Design",
    description:
      "Designing clean, user-friendly, and visually appealing interfaces to provide the best user experience.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "React Component Development",
    description:
      "Developing reusable and scalable React components for fast and maintainable codebases.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition"
          >
            <div className="mb-4 text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
