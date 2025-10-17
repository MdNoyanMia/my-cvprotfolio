import { FaCode, FaMobileAlt, FaPalette, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Frontend Development",
    description:
      "Building responsive, fast, and modern web applications using React, TailwindCSS, and JavaScript.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive Design",
    description:
      "Designing websites that work perfectly on mobile, tablet, and desktop devices.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "UI/UX Design",
    description: "Creating beautiful, clean, and user-friendly interfaces.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "React Components",
    description: "Reusable, scalable React components for modern web apps.",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-xl transition"
          >
            <div className="mb-4 text-blue-500 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
