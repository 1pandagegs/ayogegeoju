import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-x-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-10%] top-[120px] h-[320px] w-[320px] rounded-full bg-[#3082BE]/10 blur-[120px]"></div>
      <div class="absolute right-[-10%] top-[520px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[140px]"></div>
      <div class="absolute left-[35%] bottom-[120px] h-[280px] w-[280px] rounded-full bg-white/5 blur-[120px]"></div>
    </div>

    <!-- NAV -->
    <nav class="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <a href="/index.html" class="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-white">
          <span class="text-[#3082BE]">AG.</span>
        </a>

        <div class="hidden md:flex items-center gap-8 text-[13px]">
          <a href="/work.html" class="relative text-white transition-colors duration-200">
            Work
            <span class="absolute left-0 -bottom-[18px] h-px w-full bg-[#3082BE]"></span>
          </a>
          <a href="/about.html" class="text-slate-400 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <button id="mobile-menu-toggle" type="button" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition">
          ☰
        </button>
      </div>

      <div id="mobile-menu" class="md:hidden hidden border-t border-white/5 px-6 pb-6 pt-4">
        <div class="flex flex-col gap-4 text-sm">
          <a href="/work.html" class="text-white">Work</a>
          <a href="/about.html" class="text-slate-300 hover:text-white">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <div class="mb-16 fade-up">
          <a href="/index.html" class="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8">
            ← Back home
          </a>

          <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
            Work
          </p>

          <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] mb-6">
            Selected projects and design explorations
          </h1>

          <p class="text-lg text-slate-400 max-w-3xl leading-[1.8]">
            A broader look at product, platform, and interface work focused on clarity, trust, usability, and more intentional digital experiences.
          </p>
        </div>

        <section class="border-t border-white/5">
          ${[
            {
              number: "01",
              title: "Home and Abroad",
              desc: "Diaspora-focused property platform.",
              href: "/work-home-and-abroad.html"
            },
            {
              number: "02",
              title: "Hemo Trackr",
              desc: "Blood inventory and donor system.",
              href: "/work-hemo-trackr.html"
            },
            {
              number: "03",
              title: "Coverage Trackr",
              desc: "Planning and operations tool.",
              href: "/work-coverage-trackr.html"
            }
          ].map(p => `
            <article class="border-t border-white/10 py-10">
              <div class="flex justify-between items-center">
                <div>
                  <h2 class="text-2xl font-semibold">${p.title}</h2>
                  <p class="text-slate-400">${p.desc}</p>
                </div>

                <a href="${p.href}" class="text-sm text-white/70 hover:text-white">
                  View →
                </a>
              </div>
            </article>
          `).join('')}
        </section>

      </div>
    </main>
  </div>
`

const toggle = document.querySelector('#mobile-menu-toggle')
const menu = document.querySelector('#mobile-menu')

toggle?.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})