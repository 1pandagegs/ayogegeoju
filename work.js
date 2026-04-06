import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-x-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-10%] top-[120px] h-[320px] w-[320px] rounded-full bg-[#3082BE]/10 blur-[120px]"></div>
      <div class="absolute right-[-10%] top-[520px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[140px]"></div>
      <div class="absolute left-[35%] bottom-[120px] h-[280px] w-[280px] rounded-full bg-white/5 blur-[120px]"></div>
    </div>

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

    <button
      id="mobile-menu-toggle"
      type="button"
      aria-label="Open menu"
      class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition"
    >
      <span class="text-lg leading-none">☰</span>
    </button>
  </div>

  <div id="mobile-menu" class="md:hidden hidden border-t border-white/5 px-6 pb-6 pt-4">
    <div class="flex flex-col gap-4 text-sm">
      <a href="/work.html" class="text-white transition-colors duration-200">Work</a>
      <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
      <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
    </div>
  </div>
</nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <div class="mb-16 fade-up">
          <a href="/index.html" class="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-8">
            <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back home
          </a>

          <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
            Work
          </p>

          <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl mb-6">
            Selected projects and design explorations
          </h1>

          <p class="text-lg md:text-[21px] text-slate-400 max-w-3xl leading-[1.8]">
            A broader look at product, platform, and interface work focused on clarity, trust, usability, and more intentional digital experiences.
          </p>
        </div>

        <section class="border-t border-white/5">
          <div class="space-y-0">

            ${[
              {
                number: "01",
                title: "Home and Abroad",
                type: "PropTech / Real Estate",
                desc: "A diaspora-focused property platform designed to make remote property discovery feel more trustworthy, structured, and easier to navigate.",
                href: "/work-home-and-abroad.html"
              },
              {
                number: "02",
                title: "Hemo Trackr",
                type: "HealthTech / System Design",
                desc: "A blood inventory and donor management experience built to improve visibility, speed up coordination, and support faster response in urgent situations.",
                href: "/work-hemo-trackr.html"
              },
              {
                number: "03",
                title: "Coverage Trackr",
                type: "Operations / Planning Tool",
                desc: "A planning and monitoring tool created to support smarter operational decisions, better resource allocation, and clearer coverage visibility.",
                href: "/work-coverage-trackr.html"
              },
              {
                number: "04",
                title: "Interface Explorations",
                type: "UI / Visual Systems",
                desc: "A collection of interface studies, layout experiments, and visual direction work across different product ideas and digital contexts.",
                href: "#"
              },
              {
                number: "05",
                title: "Web Experience Concepts",
                type: "Web Design / Experience",
                desc: "Concept work focused on sharper storytelling, clearer structure, and more intentional page experiences for modern brands and digital products.",
                href: "#"
              }
            ].map(p => `
              <article class="group border-t border-white/10 py-10 md:py-12 fade-up">
                <div class="grid md:grid-cols-[72px_minmax(0,1fr)_180px] gap-6 md:gap-8 items-start">

                  <div class="pt-1 text-[11px] text-slate-500 tracking-[0.22em] uppercase">
                    ${p.number}
                  </div>

                  <div class="max-w-2xl">
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <h2 class="text-2xl md:text-[34px] leading-tight font-semibold tracking-[-0.03em] text-white group-hover:text-[#3082BE] transition">
                        ${p.title}
                      </h2>

                      <span class="text-[11px] uppercase tracking-[0.22em] text-slate-500 md:hidden">
                        ${p.type}
                      </span>
                    </div>

                    <p class="text-slate-400 text-[17px] leading-[1.8]">
                      ${p.desc}
                    </p>
                  </div>

                  <div class="flex flex-col items-start md:items-end gap-4 pt-1">
                    <p class="hidden md:block text-[11px] text-slate-500 uppercase tracking-[0.22em] leading-5 text-right max-w-[180px]">
                      ${p.type}
                    </p>

                    <a href="${p.href}" class="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200">
                      View project
                      <span class="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                    </a>
                  </div>

                </div>
              </article>
            `).join('')}

          </div>
        </section>

      </div>
    </main>
  </div>
`
const mobileMenuToggle = document.querySelector('#mobile-menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a')

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
    })
  })
}
const pageRoot = document.querySelector('#page-root')

if (pageRoot) {
  requestAnimationFrame(() => {
    pageRoot.classList.add('page-enter-active')
  })
}