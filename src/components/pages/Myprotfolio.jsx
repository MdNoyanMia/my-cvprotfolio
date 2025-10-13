import React from "react";

const projects = [
  {
    title: "E-commerce Website",
    description: "React + Tailwind ",
    // FIX: '/src' remove kora holo. Shothik path: /assets/image.png
    image: "/src/assets/image.png",
    link: "https://project-e-commarce-ig4z.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "React + Tailwind ",
    // Ei path-ti shothik thaklo (jodi public/assets/project2.png file-ti thake)
    image: "/assets/project2.png",
    link: "#portfolio",
  },
  {
    title: "Blog Platform",
    description: "Next.js + Tailwind ",
    // FIX: '/src' remove kora holo. Shothik path: /assets/image2.png
    image: "/src/assets/image2.png",
    link: "https://exampractice-qb2o.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-6 py-24 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => {
          const isExternal = project.link.startsWith("http");

          return (
            <a
              key={i}
              href={project.link}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="relative group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            >
              {/* Project Image */}
              <img
                src={project.image} // Ekhane shothik path use hobe
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Colorful Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-opacity-80">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-center px-4">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}