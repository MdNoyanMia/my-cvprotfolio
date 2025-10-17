export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex items-center justify-center py-20 md:py-36">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Noyan Mia</h1>
          <p className="text-lg sm:text-xl md:text-2xl">Frontend Developer with React</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition transform hover:scale-105"
            >
              GitHub Profile
            </a>
            <a
              href="/assets/NoyanMia_CV.pdf"
              download
              className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-500 transition transform hover:scale-105"
            >
              Download My CV
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/noyan.png"
            alt="Noyan Mia"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
