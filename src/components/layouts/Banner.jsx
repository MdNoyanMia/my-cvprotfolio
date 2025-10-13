export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Noyan Mia
          </h1>
          <p className="text-xl md:text-2xl mb-6">Frontend Developer with React</p>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              // UPDATED STYLES FOR GITHUB BUTTON
              className="bg-yellow-400 text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-2xl shadow-yellow-500/50 hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 uppercase tracking-widest border-4 border-white"
            >
              GitHub Profile
            </a>
            <a
              href="/assets/NoyanMia_CV.pdf"
              download
              // UPDATED STYLES FOR DOWNLOAD CV BUTTON
              className="bg-red-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-2xl shadow-red-600/50 hover:bg-red-500 transform hover:scale-105 transition-all duration-300 uppercase tracking-widest border-4 border-white"
            >
              download My CV
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 animate-fadeIn">
          <img
            src="/src/assets/picture.png"
            alt="Noyan Mia"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}