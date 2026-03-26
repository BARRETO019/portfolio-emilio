export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* ================= HERO / PORTADA ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I’m <span className="text-cyan-400">Emilio Barreto</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            I build real-world web applications, practical digital tools and
            full-stack projects focused on usability, backend logic and
            structured data.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/BARRETO019"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/emilio-david-villalba-barreto-5633a1321"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ME ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building practical software while learning by doing
            </h2>
          </div>

          <div>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              I’m a junior full stack developer focused on building useful web
              applications with modern technologies.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              I enjoy creating projects that combine frontend usability,
              backend structure, APIs, automation and real-world workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
            Tech Stack
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Tools and technologies I work with
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-cyan-400 transition">
            <h3 className="font-semibold text-lg mb-2">Frontend</h3>
            <p className="text-gray-400">React, Vite, TailwindCSS, JavaScript</p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-cyan-400 transition">
            <h3 className="font-semibold text-lg mb-2">Backend</h3>
            <p className="text-gray-400">Node.js, Express, REST APIs, JWT</p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-cyan-400 transition">
            <h3 className="font-semibold text-lg mb-2">Database</h3>
            <p className="text-gray-400">PostgreSQL, Neon</p>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 hover:border-cyan-400 transition">
            <h3 className="font-semibold text-lg mb-2">Automation</h3>
            <p className="text-gray-400">Make, n8n, Airtable, Google Drive API</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800"
      >
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Some of the projects I’ve been building
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:border-cyan-400 transition">
            <p className="text-sm text-cyan-400 mb-3">Frontend</p>

            <h3 className="text-2xl font-bold mb-4">Impulsa CEE Frontend</h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Frontend application for managing technical inspection workflows,
              data collection and user interaction for energy certification processes.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              React · Vite · TailwindCSS · JavaScript
            </p>

            <a
              href="https://github.com/BARRETO019/impulsa-cee-frontend"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              View Repository
            </a>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:border-cyan-400 transition">
            <p className="text-sm text-cyan-400 mb-3">Backend</p>

            <h3 className="text-2xl font-bold mb-4">Impulsa CEE Backend</h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Backend API responsible for business logic, authentication,
              PostgreSQL data persistence and external service integrations.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Node.js · Express · PostgreSQL · JWT · APIs
            </p>

            <a
              href="https://github.com/BARRETO019/impulsa-cee-backend"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              View Repository
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="max-w-3xl">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s connect
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            If you’d like to connect, collaborate or just check out my work,
            feel free to reach out through GitHub or LinkedIn.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/BARRETO019"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/emilio-david-villalba-barreto-5633a1321"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Emilio Barreto</p>
          <p>Built with React + TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}