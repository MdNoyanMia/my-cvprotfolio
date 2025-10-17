const projects = [
  {
    title: "E-commerce Website",
    description: "React + Tailwind",
    image: "/image.png",
    link: "https://project-e-commarce-ig4z.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "React + Tailwind",
    image: "/poppppng.png",
    link: "https://my-cvprotfolio-zd19.vercel.app/",
  },
  {
    title: "Blog Platform",
    description: "Next.js + Tailwind",
    image: "/image2.png",
    link: "https://exampractice-qb2o.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-white">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
