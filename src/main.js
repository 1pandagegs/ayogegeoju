import './style.css'
import logoImg from './assets/logo.png'

import coverageTrackrImg from './assets/coverage-trackr-cover.png'
import homeAbroadImg from './assets/home-and-abroad-cover.png'
import hemoTrackrImg from './assets/hemotrackr-cover.png'
import moreProjectsImg from './assets/resource-trackr-cover.png'

const selectedProducts = [
  {
    title: 'Coverage Trackr',
    label: 'Public Health / Micro-Planning',
    desc: 'A micro-planning platform designed to support intervention planning, data collection, and coverage visibility across different country contexts.',
    href: '/work-coverage-trackr.html',
    image: coverageTrackrImg
  },
  {
    title: 'Home and Abroad',
    label: 'PropTech / Government Platform',
    desc: 'A NIDCOM-backed real estate listing platform helping Nigerians in Diaspora explore property opportunities with more trust and clarity.',
    href: '/work-home-and-abroad.html',
    image: homeAbroadImg
  },
  {
    title: 'SwiftEntry',
    label: 'Visitor Management System',
    desc: 'A visitor management product designed to improve check-in, tracking, and operational visibility for organizations and estates.',
    href: 'https://theswiftentry.com/',
    image: moreProjectsImg,
    external: true
  },
  {
    title: 'SYDAAR LMS',
    label: 'Learning Management System',
    desc: 'A gamified learning management system for internal organizational training across large institutions and teams.',
    href: 'https://sydaar.com/',
    image: hemoTrackrImg,
    external: true
  }
]

const galleryProjects = [
  'PRMT',
  'Manorr',
  'Mundayne',
  'Nuelliz Launch Tracker',
  'Goju Design',
  'Sabali Limited',
  'A Message For Her',
  'Brand & Marketing Design'
]

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-12%] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3082BE]/20 blur-[150px]"></div>
      <div class="absolute right-[-12%] top-[480px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[160px]"></div>
      <div class="absolute left-[30%] bottom-[120px] h-[360px] w-[360px] rounded-full bg-white/5 blur-[140px]"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
      <div class="max-w-[1500px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <a href="/index.html" class="inline-flex items-center">
          <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-6 w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8 text-[13px]">
          <a href="/work.html" class="text-slate-300 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <a href="/contact.html" class="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
          Get in touch
          <span>→</span>
        </a>

        <button id="mobile-menu-toggle" type="button" aria-label="Open menu" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition">
          ☰
        </button>
      </div>

      <div id="mobile-menu" class="md:hidden hidden border-t border-white/5 px-6 pb-6 pt-4">
        <div class="flex flex-col gap-4 text-sm">
          <a href="/work.html" class="text-slate-300 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1600px] mx-auto fade-up min-h-[calc(100vh-96px)] flex items-center">
        <div class="w-full rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
          <div class="relative min-h-[calc(100vh-120px)] p-6 md:p-10 lg:p-14 flex flex-col justify-between">

            <div class="absolute inset-0">
              <img src="${coverageTrackrImg}" alt="Coverage Trackr preview" class="h-full w-full object-cover opacity-35 scale-105" />
              <div class="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/40"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/20"></div>
            </div>

            <div class="relative z-10 flex items-start justify-between gap-8">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-3">
                  Ayo Gegeoju
                </p>
                <p class="text-sm text-slate-300">
                  Product Designer / Systems Designer / Frontend Builder
                </p>
              </div>

              <div class="hidden lg:block max-w-[330px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  Great products feel simple because the complexity has been designed properly.
                </p>
                <p class="mt-4 text-sm text-slate-400 leading-relaxed">
                  I design interfaces for workflows, dashboards, systems, and digital experiences that need to feel clear, credible, and useful.
                </p>
              </div>
            </div>

            <div class="relative z-10 max-w-6xl">
              <p class="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                Product systems for real-world operations
              </p>

              <h1 class="text-5xl md:text-7xl lg:text-[104px] font-extrabold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                Designing enterprise systems, digital products, and platforms people trust.
              </h1>

              <p class="mt-8 text-lg md:text-[21px] text-slate-300 max-w-3xl leading-[1.8]">
                From public-health platforms and government-backed products to SaaS tools, real-estate ecosystems, dashboards, websites, and brand experiences.
              </p>

              <div class="mt-10 mb-14 flex flex-wrap gap-4">
                <a href="#work" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                  View work
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>

                <a href="/contact.html" class="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-white/35 transition">
                  Get in touch
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              ${[
                ['#01', 'Public Health Systems'],
                ['#02', 'Government Platforms'],
                ['#03', 'SaaS & Dashboards'],
                ['#04', 'Web & Brand Experiences']
              ].map(item => `
                <div class="rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-xl p-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">${item[0]}</p>
                  <p class="text-sm text-slate-200">${item[1]}</p>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-8">
        <div class="rounded-[36px] bg-[#05070c] border border-white/5 px-6 md:px-10 py-8">
          <div class="grid gap-6 md:grid-cols-[220px_1fr] items-center">
            <p class="text-sm text-slate-500 leading-relaxed">
              Selected products and platforms I’ve helped shape
            </p>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-slate-300">
              ${['Coverage Trackr', 'Home & Abroad', 'SwiftEntry', 'SYDAAR LMS', 'Manorr', 'PRMT'].map(item => `
                <div class="rounded-full border border-white/8 bg-white/[0.02] px-4 py-3 text-center">
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="max-w-[1500px] mx-auto mt-28">
        <div class="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-end mb-10">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
              Selected Products
            </p>

            <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
              Products designed to simplify complex workflows.
            </h2>
          </div>

          <div class="lg:justify-self-end max-w-xl">
            <p class="text-lg text-slate-400 leading-relaxed mb-6">
              A focused selection of systems, platforms, and digital products across public health, government, real estate, healthcare, and enterprise operations.
            </p>

            <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold hover:border-white/30 transition">
              See all projects
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-5">
          ${selectedProducts.map((project, index) => `
            <article class="group rounded-[34px] border border-white/8 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition">
              <div class="h-[280px] md:h-[360px] overflow-hidden bg-slate-900">
                <img src="${project.image}" alt="${project.title}" class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
              </div>

              <div class="p-6 md:p-8">
                <div class="flex items-center justify-between gap-5 mb-5">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE]">
                    ${String(index + 1).padStart(2, '0')}
                  </p>

                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 text-right">
                    ${project.label}
                  </p>
                </div>

                <h3 class="text-3xl md:text-4xl font-bold tracking-[-0.04em] mb-4">
                  ${project.title}
                </h3>

                <p class="text-slate-400 leading-relaxed mb-7">
                  ${project.desc}
                </p>

                <a
                  href="${project.href}"
                  ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                  class="group/link inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition"
                >
                  ${project.external ? 'View live project' : 'View case study'}
                  <span class="transition-transform group-hover/link:translate-x-1">↗</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-white/[0.03] p-6 md:p-10">
          <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                What I Design
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                Products built for real-world operations.
              </h2>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              ${[
                ['Enterprise Platforms', 'Systems that support teams, workflows, operations, and decisions.'],
                ['Public Health Tools', 'Dashboards and platforms for monitoring, interventions, and reporting.'],
                ['Government Products', 'Digital systems where trust, access, and clarity matter.'],
                ['Real Estate Technology', 'Platforms for listings, property discovery, estates, and visitors.'],
                ['Learning Systems', 'Training platforms and LMS products for organizations.'],
                ['Web & Brand Experiences', 'Websites, visual identity, and marketing systems for brands.']
              ].map(item => `
                <div class="rounded-[26px] border border-white/8 bg-[#020617]/70 p-6">
                  <h3 class="text-xl font-semibold mb-3">${item[0]}</h3>
                  <p class="text-slate-400 leading-relaxed">${item[1]}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-28">
        <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mb-10 items-end">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
              Project Gallery
            </p>
            <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
              More systems, websites, and visual work.
            </h2>
          </div>

          <p class="text-lg text-slate-400 leading-relaxed max-w-xl lg:justify-self-end">
            A wider body of work across product design, web development, brand identity, marketing design, dashboards, mobile apps, and product experiments.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${galleryProjects.map((item, index) => `
            <div class="group rounded-[30px] border border-white/8 bg-white/[0.03] overflow-hidden">
              <div class="h-[220px] bg-slate-900 overflow-hidden">
                <img src="${index % 2 === 0 ? moreProjectsImg : hemoTrackrImg}" alt="${item}" class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
              </div>

              <div class="p-5">
                <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">
                  ${index < 3 ? 'Product' : index < 6 ? 'Web Experience' : 'Brand / Marketing'}
                </p>

                <h3 class="text-xl font-semibold tracking-[-0.03em]">
                  ${item}
                </h3>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-[#05070c] overflow-hidden">
          <div class="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div class="min-h-[420px] bg-slate-900">
              <div class="h-full w-full flex items-center justify-center bg-[#3082BE]/10">
                <div class="text-center px-8">
                  <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
                    About Ayo
                  </p>
                  <p class="text-3xl md:text-5xl font-extrabold tracking-[-0.05em]">
                    Systems thinking before interface polish.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-8 md:p-12 flex flex-col justify-center">
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Behind the Work
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] mb-6">
                I help teams simplify complexity.
              </h2>

              <p class="text-lg text-slate-400 leading-relaxed mb-8">
                My work combines product strategy, interface design, visual direction, and frontend implementation. I’m most interested in products where the design challenge is structural, not just aesthetic.
              </p>

              <a href="/about.html" class="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold hover:border-white/30 transition">
                Read more
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-20 mb-6">
        <div class="rounded-[40px] border border-white/8 bg-[#3082BE]/10 p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Contact
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                Let’s build something useful, clear, and memorable.
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="mailto:aogegeoju0@gmail.com" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                Email me
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold hover:border-white/30 transition">
                View work
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="px-6 md:px-8 py-10 border-t border-white/10 bg-[#020617]">
      <div class="max-w-[1500px] mx-auto rounded-[28px] border border-white/8 bg-white/[0.03] px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-slate-500">
          © 2026 Ayo Gegeoju
        </p>

        <div class="flex items-center gap-6 text-sm">
          <a href="/work.html" class="text-slate-400 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-400 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
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