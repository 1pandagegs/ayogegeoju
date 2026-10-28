import './style.css'
import './cursor.js'
import logoImg from './assets/logo.png'
import coverageTrackrImg from './assets/coverage-trackr-cover.webp'
import fallbackImg from './assets/coverage-trackr-cover.webp'

const roleItems = [
  'Product Design',
  'Dashboard Design',
  'Information Architecture',
  'UX Strategy',
  'Interface System',
  'Data Visibility'
]

const challengeItems = [
  {
    title: 'Complex field operations',
    desc: 'The product needed to support planning, intervention tracking, reporting, and operational visibility across different contexts.'
  },
  {
    title: 'Data had to feel usable',
    desc: 'The challenge was not just showing information, but making it easier for teams to understand what needed attention.'
  },
  {
    title: 'One system, many users',
    desc: 'Different stakeholders needed to see progress, coverage, and gaps without being overwhelmed by unnecessary complexity.'
  }
]

const solutionItems = [
  {
    title: 'Clearer dashboard hierarchy',
    desc: 'Important metrics, planning activity, and operational signals were arranged to support faster scanning and better decisions.'
  },
  {
    title: 'Structured workflows',
    desc: 'The experience was shaped around how teams plan, collect data, manage interventions, and monitor execution.'
  },
  {
    title: 'Reusable product direction',
    desc: 'The interface system was designed to scale across different countries, programs, and implementation environments.'
  }
]

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-transparent text-[#0b1530] selection:bg-[#3082BE] selection:text-white relative overflow-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-12%] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3082BE]/20 blur-[150px]"></div>
      <div class="absolute right-[-12%] top-[480px] h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[160px]"></div>
      <div class="absolute left-[30%] bottom-[120px] h-[360px] w-[360px] rounded-full glass blur-[140px]"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/80">
      <div class="max-w-[1600px] mx-auto px-6 md:px-8 h-[76px] flex items-center justify-between">
        <a href="/index.html" class="inline-flex items-center">
          <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-8 w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8 text-[13px]">
          <a href="/index.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Home</a>
          <a href="/work.html" class="text-[#0b1530] transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Contact</a>
        </div>

        <a href="https://coveragetrackr.com/" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
          Live project
          <span>→</span>
        </a>

        <button id="mobile-menu-toggle" type="button" aria-label="Open menu" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-[#0b1530] hover:bg-white/85 transition">
          ☰
        </button>
      </div>

      <div id="mobile-menu" class="md:hidden hidden border-t border-white/80 px-6 pb-6 pt-4">
        <div class="flex flex-col gap-4 text-sm">
          <a href="/index.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Home</a>
          <a href="/work.html" class="text-[#0b1530] transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Contact</a>
          <a href="https://coveragetrackr.com/" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Live project</a>
        </div>
      </div>
    </nav>

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1600px] mx-auto fade-up">
        <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/80 glass shadow-2xl">
          <div class="relative p-6 md:p-10 lg:p-14 flex flex-col justify-between">

            <div class="relative z-10 flex items-start justify-between gap-8">
              <div>
                <a href="/work.html" class="group inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#3082BE] transition-colors duration-200 mb-5">
                  <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                  Back to work
                </a>

                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                  Public Health / Micro-Planning
                </p>
              </div>

              <div class="hidden lg:block max-w-[360px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  A platform designed around operational visibility, planning clarity, and better decision-making.
                </p>
              </div>
            </div>

            <div class="relative z-10 max-w-6xl">
              <p class="text-sm uppercase tracking-[0.25em] text-slate-500 mb-5">
                Case Study
              </p>

              <h1 class="text-5xl md:text-6xl lg:text-[84px] font-bold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                Coverage Trackr
              </h1>

              <p class="mt-8 text-lg md:text-[21px] text-slate-600 max-w-4xl leading-[1.8]">
                A micro-planning and monitoring platform designed to help public-health teams collect data, manage interventions, track progress, and see coverage more clearly across different implementation contexts.
              </p>

              <div class="mt-10 flex flex-wrap gap-4">
                <a href="https://coveragetrackr.com/" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                  Visit live project
                  <span class="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                  More projects
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div class="relative z-10 mt-12 rounded-[32px] border border-white/90 glass p-3">
                <div class="media-frame">
                  <img src="${coverageTrackrImg}" alt="Coverage Trackr preview" class="w-full h-auto block" />
                </div>
              </div>

              <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              ${[
                ['Role', 'Product Design'],
                ['Focus', 'Planning & Visibility'],
                ['Industry', 'Public Health'],
                ['Output', 'Platform Interface']
              ].map(item => `
                <div class="rounded-[22px] border border-white/80 glass backdrop-blur-xl p-5">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">${item[0]}</p>
                  <p class="text-sm text-slate-700">${item[1]}</p>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-8">
        <div class="rounded-[36px] glass border border-white/80 px-6 md:px-10 py-8">
          <div class="grid gap-6 md:grid-cols-[220px_1fr] items-center">
            <p class="text-sm text-slate-500 leading-relaxed">
              Responsibilities
            </p>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-slate-600">
              ${roleItems.map(item => `
                <div class="rounded-full border border-white/80 glass px-4 py-3 text-center">
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
              Overview
            </p>

            <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
              Making complex public-health operations easier to see and manage.
            </h2>
          </div>

          <div class="rounded-[34px] border border-white/80 glass p-7 md:p-8">
            <div class="space-y-6 text-lg text-slate-500 leading-relaxed">
              <p>
                Coverage Trackr was designed as a micro-planning and monitoring tool for teams managing public-health activities across different locations and implementation contexts.
              </p>

              <p>
                The design challenge was to make operational information easier to understand without reducing the depth of what teams needed to plan, monitor, and act on.
              </p>

              <p>
                The direction focused on dashboard clarity, information architecture, workflow visibility, and a product experience that could support planning and decision-making at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/80 glass p-6 md:p-10">
          <div class="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Problem
              </p>

              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
                Planning becomes harder when visibility is fragmented.
              </h2>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              ${challengeItems.map(item => `
                <article class="rounded-[30px] border border-white/80 bg-white/70 p-6">
                  <h3 class="text-xl font-semibold mb-3">${item.title}</h3>
                  <p class="text-slate-500 leading-relaxed">${item.desc}</p>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/80 glass overflow-hidden">
          <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div class="min-h-[520px] glass-tint p-8 md:p-12 flex flex-col justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                  Solution
                </p>

                <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
                  A calmer system for understanding coverage and action.
                </h2>
              </div>

              <p class="text-lg text-slate-600 leading-relaxed max-w-xl">
                The product direction centered on making operational complexity more readable through hierarchy, structured workflows, and clearer dashboard logic.
              </p>
            </div>

            <div class="p-8 md:p-12">
              <div class="space-y-5">
                ${solutionItems.map(item => `
                  <div class="rounded-[30px] border border-white/80 glass p-6">
                    <h3 class="text-2xl font-semibold mb-3">${item.title}</h3>
                    <p class="text-slate-500 leading-relaxed">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28 mb-6">
        <div class="rounded-[40px] border border-white/80 glass-tint p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Outcome
              </p>

              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                A product direction built around visibility, structure, and operational confidence.
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="https://coveragetrackr.com/" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                Visit live project
                <span class="transition-transform group-hover:translate-x-1">↗</span>
              </a>

              <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                More work
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="px-6 md:px-8 py-10 border-t border-white/80 bg-transparent">
      <div class="max-w-[1600px] mx-auto rounded-[28px] border border-white/80 glass px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-slate-500">© 2026 Ayo Gegeoju</p>

        <div class="flex items-center gap-6 text-sm">
          <a href="/work.html" class="text-[#0b1530]">Work</a>
          <a href="/about.html" class="text-slate-500 hover:text-[#3082BE] transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-500 hover:text-[#3082BE] transition-colors duration-200">Contact</a>
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