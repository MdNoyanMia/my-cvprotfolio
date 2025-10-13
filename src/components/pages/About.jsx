import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
       <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">   About Me</span>
      </h2>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center animate-fadeIn delay-100">
        Hi! I'm <span className="font-bold text-blue-500">Noyan Mia</span>, a passionate <span className="text-purple-500 font-semibold">Frontend Developer</span> specializing in <span className="text-pink-500 font-semibold">React.js</span> and modern web technologies.
      </p>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center animate-fadeIn delay-200">
        I build <span className="text-blue-500 font-semibold">responsive</span>, <span className="text-purple-500 font-semibold">interactive</span>, and <span className="text-pink-500 font-semibold">fast</span> web applications that deliver excellent user experiences.
      </p>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center animate-fadeIn delay-300">
        I have experience with <span className="text-blue-500 font-semibold">React, TailwindCSS, JavaScript (ES6+), HTML5, CSS3</span> and love turning creative designs into functional websites. I follow best practices, write clean and maintainable code, and focus on <span className="text-purple-500 font-semibold">performance</span> and <span className="text-pink-500 font-semibold">accessibility</span>.
      </p>
    </section>
  );
}
