export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* ================= HERO / PORTADA PRO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Grid principal del hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= COLUMNA IZQUIERDA ================= */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-cyan-400">Emilio Barreto</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              I build real-world web applications, practical digital tools and
              full-stack projects focused on usability, backend logic and
              structured data.
            </p>

            {/* Botones principales */}
            <div className="flex flex-wrap gap-4 mb-10">
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

            {/* Mini stats / etiquetas */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              <span className="px-4 py-2 rounded-full border border-gray-700">
                React
              </span>
              <span className="px-4 py-2 rounded-full border border-gray-700">
                Node.js
              </span>
              <span className="px-4 py-2 rounded-full border border-gray-700">
                PostgreSQL
              </span>
              <span className="px-4 py-2 rounded-full border border-gray-700">
                Automation
              </span>
            </div>
          </div>

          {/* ================= COLUMNA DERECHA ================= */}
          <div className="relative">
            
            {/* Glow de fondo decorativo */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Tarjeta principal */}
            <div className="relative bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 shadow-2xl">

              {/* Status */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Current Status</p>
                  <h3 className="text-xl font-semibold">Open to opportunities</h3>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Available
                </div>
              </div>

              {/* Bloques internos */}
              <div className="space-y-5">

                <div className="bg-[#0b0f19] border border-gray-800 rounded-2xl p-5">
                  <p className="text-sm text-cyan-400 mb-2">Currently Building</p>
                  <h4 className="text-lg font-semibold mb-2">Business-focused web tools</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Practical full stack applications with real workflows,
                    structured data and automation.
                  </p>
                </div>

                <div className="bg-[#0b0f19] border border-gray-800 rounded-2xl p-5">
                  <p className="text-sm text-cyan-400 mb-2">Main Stack</p>
                  <p className="text-gray-300 leading-relaxed">
                    React · Node.js · Express · PostgreSQL · TailwindCSS · Make · n8n
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0b0f19] border border-gray-800 rounded-2xl p-5">
                    <p className="text-sm text-gray-400 mb-2">Location</p>
                    <p className="font-semibold">Spain</p>
                  </div>

                  <div className="bg-[#0b0f19] border border-gray-800 rounded-2xl p-5">
                    <p className="text-sm text-gray-400 mb-2">Focus</p>
                    <p className="font-semibold">Full Stack</p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* ================= PROJECTS PRO ================= */}
      <section
  id="projects"
  className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800"
>
  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
      Projects
    </p>

    <h2 className="text-3xl md:text-4xl font-bold">
      Selected work
    </h2>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* PROJECT CARD */}
    <div className="group relative bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden transition hover:border-cyan-400">

      {/* TOP FAKE IMAGE / VISUAL */}
      <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center text-sm text-gray-400">
        Frontend Interface
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* TAG */}
        <span className="text-xs text-cyan-400 uppercase tracking-widest">
          Frontend
        </span>

        {/* TITLE */}
        <h3 className="text-2xl font-bold mt-2 mb-3">
          Impulsa CEE Frontend
        </h3>

        {/* DESC */}
        <p className="text-gray-400 leading-relaxed mb-5">
          Interface for technical inspection workflows, designed for efficient
          data collection and real-world usage in the energy certification process.
        </p>

        {/* STACK BADGES */}
        <div className="flex flex-wrap gap-2 mb-6 text-xs">
          <span className="px-3 py-1 rounded-full border border-gray-700">
            React
          </span>
          <span className="px-3 py-1 rounded-full border border-gray-700">
            Tailwind
          </span>
          <span className="px-3 py-1 rounded-full border border-gray-700">
            Vite
          </span>
        </div>

        {/* BUTTON */}
        <a
          href="https://github.com/BARRETO019/impulsa-cee-frontend"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
        >
          View project →
        </a>
      </div>
    </div>

    {/* PROJECT CARD */}
    <div className="group relative bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden transition hover:border-cyan-400">

      {/* TOP VISUAL */}
      <div className="h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center text-sm text-gray-400">
        Backend API
      </div>

      <div className="p-6">

        <span className="text-xs text-cyan-400 uppercase tracking-widest">
          Backend
        </span>

        <h3 className="text-2xl font-bold mt-2 mb-3">
          Impulsa CEE Backend
        </h3>

        <p className="text-gray-400 leading-relaxed mb-5">
          REST API managing authentication, business logic and PostgreSQL data,
          with integrations to external services and cloud storage.
        </p>

        <div className="flex flex-wrap gap-2 mb-6 text-xs">
          <span className="px-3 py-1 rounded-full border border-gray-700">
            Node.js
          </span>
          <span className="px-3 py-1 rounded-full border border-gray-700">
            Express
          </span>
          <span className="px-3 py-1 rounded-full border border-gray-700">
            PostgreSQL
          </span>
        </div>

        <a
          href="https://github.com/BARRETO019/impulsa-cee-backend"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
        >
          View project →
        </a>
      </div>
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