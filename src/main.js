import './style.css'
import logoImg from './assets/logo.png'

import project1 from './assets/home-abroad.png'
import project2 from './assets/hemo-trackr.png'
import project3 from './assets/coverage-trackr.png'
import project4 from './assets/more-projects (2).png'

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
          <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-6 w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8 text-[13px]">
          <a href="#work" class="relative text-white transition-colors duration-200">
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

    <section class="min-h-screen flex items-center px-6 pt-24">
      <div class="max-w-6xl mx-auto w-full fade-up">

        <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-6">
          Product Designer
        </p>

        <h1 class="text-5xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.98] tracking-[-0.04em] mb-8 max-w-5xl">
          I design products and websites that feel simple, sharp, and easy to trust.
        </h1>

        <p class="text-lg md:text-[21px] text-slate-400 max-w-2xl mb-12 leading-[1.8]">
          I help founders and businesses turn ideas into thoughtful digital experiences with clarity, usability, and visual direction that actually holds attention.
        </p>

        <div class="flex flex-wrap items-center gap-6 mb-12">
          <a href="#work"
             class="group inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:border-white/30 transition">
            Selected Work
            <span class="transition group-hover:translate-x-1">→</span>
          </a>

          <a href="/contact.html"
             class="group inline-flex items-center gap-2 text-sm font-medium text-[#3082BE] transition-colors duration-200 hover:text-white">
            Start a conversation
            <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 max-w-3xl">
          <div class="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4">
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Focus</p>
            <p class="text-sm text-slate-300 leading-relaxed">
              Product design, web experience, and interface clarity
            </p>
          </div>

          <div class="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4">
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Approach</p>
            <p class="text-sm text-slate-300 leading-relaxed">
              Clear structure, visual restraint, and stronger usability
            </p>
          </div>

          <div class="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4">
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Availability</p>
            <p class="text-sm text-slate-300 leading-relaxed">
              Open to selected freelance and collaborative work
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="work" class="px-6 py-32 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">

          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
              Work
            </p>
          </div>

          <div class="fade-up fade-delay-1">
            <div class="mb-14 max-w-3xl">
              <h2 class="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] mb-4">
                Selected work and product thinking
              </h2>

              <p class="text-lg text-slate-400 leading-relaxed">
                A selection of product, platform, and interface work focused on clarity, trust, usability, and stronger digital experiences.
              </p>
            </div>

            <div class="space-y-0">

              ${[
                {
                  number: "01",
                  title: "Home and Abroad",
                  type: "PropTech / Real Estate",
                  desc: "A diaspora-focused property platform designed to make remote property discovery feel more trustworthy, structured, and easier to navigate.",
                  href: "/work-home-and-abroad.html",
                  image: project1
                },
                {
                  number: "02",
                  title: "Hemo Trackr",
                  type: "HealthTech / System Design",
                  desc: "A blood inventory and donor management experience built to improve visibility, speed up coordination, and support faster response in urgent situations.",
                  href: "/work-hemo-trackr.html",
                  image: project2
                },
                {
                  number: "03",
                  title: "Coverage Trackr",
                  type: "Operations / Planning Tool",
                  desc: "A planning and monitoring tool created to support smarter operational decisions, better resource allocation, and clearer coverage visibility.",
                  href: "/work-coverage-trackr.html",
                  image: project3
                },
                {
                  number: "04",
                  title: "More Projects",
                  type: "Product Design / Digital Experience",
                  desc: "Additional work across digital products, web experiences, interface systems, and design thinking for different industries and use cases.",
                  href: "/work.html",
                  image: project4
                }
              ].map(p => `
                <article class="group border-t border-white/10 py-10 md:py-12">
                  <div class="grid md:grid-cols-[72px_minmax(0,1fr)_180px] gap-6 md:gap-8 items-start">

                    <div class="pt-1 text-[11px] text-slate-500 tracking-[0.22em] uppercase">
                      ${p.number}
                    </div>

                    <div class="max-w-2xl">
                      <div class="mb-5 w-full rounded-[24px] border border-white/5 bg-slate-900 overflow-hidden">
                        <img 
                          src="${p.image}" 
                          alt="${p.title}" 
                          class="w-full h-[200px] md:h-[240px] object-cover"
                        />
                      </div>

                      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                        <h3 class="text-2xl md:text-[34px] leading-tight font-semibold tracking-[-0.03em] text-white group-hover:text-[#3082BE] transition">
                          ${p.title}
                        </h3>

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
              `).join("")}

            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="about" class="px-6 py-32 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">

          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
              About
            </p>
          </div>

          <div class="max-w-3xl fade-up fade-delay-2">
            <h2 class="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
              I care about making digital experiences feel obvious in the best way.
            </h2>

            <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I’m Ayo Gegeoju, a product designer focused on shaping interfaces that are clear, thoughtful, and easy to move through.
              </p>

              <p>
                My approach combines visual direction with product thinking, so the work does not just look refined, it also helps people understand, trust, and use what is in front of them.
              </p>

              <p>
                I’m especially drawn to products and websites that need stronger clarity, better structure, and a more intentional user experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="contact" class="px-6 py-32 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">

          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
              Contact
            </p>
          </div>

          <div class="max-w-3xl fade-up fade-delay-3">
            <h2 class="text-3xl md:text-5xl font-bold leading-[1.02] tracking-[-0.03em] mb-6">
              Let’s build something that feels clear and memorable.
            </h2>

            <p class="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              If you need help shaping a product, refining a user experience, or designing a website that feels more intentional, I’d love to hear about it.
            </p>

            <a href="mailto:your@email.com"
               class="group inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:border-white/30 transition">
              Send an email
              <span class="transition group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <footer class="px-6 py-8 border-t border-white/5">
      <div class="max-w-6xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-slate-500">
          © 2026 Ayo Gegeoju
        </p>

        <div class="flex items-center gap-6 text-sm">
          <a href="/work.html" class="text-slate-400 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-400 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-500 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>

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