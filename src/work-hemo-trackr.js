import './style.css'
import logoImg from './assets/logo.png'
import hemoTrackrImg from './assets/hemo-trackr.png'
import fallbackImg from './assets/more-projects (2).png'

const roleItems = [
  'Product Design',
  'HealthTech System',
  'Dashboard Design',
  'Donor Management',
  'Inventory Visibility',
  'Interface Direction'
]

const challengeItems = [
  {
    title: 'Critical information needed clarity',
    desc: 'Blood inventory and donor information needed to be easier to understand, monitor, and act on in time-sensitive healthcare contexts.'
  },
  {
    title: 'Multiple stakeholders',
    desc: 'The system had to support visibility across donors, blood banks, healthcare facilities, and teams coordinating urgent requests.'
  },
  {
    title: 'Operational pressure',
    desc: 'The product needed to reduce confusion and help teams move faster when availability, requests, and coordination mattered most.'
  }
]

const solutionItems = [
  {
    title: 'Inventory-first structure',
    desc: 'The interface prioritized availability, status, and important system signals so users could quickly understand current blood supply conditions.'
  },
  {
    title: 'Clear donor coordination',
    desc: 'The experience considered how donor activity, records, and follow-up actions could be managed in a more organized way.'
  },
  {
    title: 'Dashboard-led visibility',
    desc: 'The design direction used dashboard hierarchy and simplified system states to make complex healthcare information easier to read.'
  }
]

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-12%] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3082BE]/20 blur-[150px]"></div>
      <div class="absolute right-[-12%] top-[480px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[160px]"></div>
      <div class="absolute left-[30%] bottom-[120px] h-[360px] w-[360px] rounded-full bg-white/5 blur-[140px]"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
      <div class="max-w-[1600px] mx-auto px-6 md:px-8 h-[76px] flex items-center justify-between">
        <a href="/index.html" class="inline-flex items-center">
          <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-6 w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8 text-[13px]">
          <a href="/work.html" class="text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <a href="/work.html" class="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
          More work
          <span>→</span>
        </a>

        <button id="mobile-menu-toggle" type="button" aria-label="Open menu" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition">
          ☰
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

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1600px] mx-auto fade-up">
        <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
          <div class="relative min-h-[calc(100vh-120px)] p-6 md:p-10 lg:p-14 flex flex-col justify-between">

            <div class="absolute inset-0">
              <img src="${hemoTrackrImg}" alt="Hemo Trackr preview" class="h-full w-full object-cover opacity-35 scale-105" />
              <div class="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/45"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/25"></div>
            </div>

            <div class="relative z-10 flex items-start justify-between gap-8">
              <div>
                <a href="/work.html" class="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-5">
                  <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                  Back to work
                </a>

                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                  HealthTech / System Design
                </p>
              </div>

              <div class="hidden lg:block max-w-[360px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  A health-tech system shaped around blood inventory visibility, donor management, and faster coordination.
                </p>
              </div>
            </div>

            <div class="relative z-10 max-w-6xl">
              <p class="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                Case Study
              </p>

              <h1 class="text-5xl md:text-7xl lg:text-[104px] font-extrabold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                Hemo Trackr
              </h1>

              <p class="mt-8 text-lg md:text-[21px] text-slate-300 max-w-4xl leading-[1.8]">
                A blood inventory and donor management system designed to improve visibility, coordination, and response across healthcare workflows.
              </p>

              <div class="mt-10 flex flex-wrap gap-4">
                <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                  More projects
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>

                <a href="/contact.html" class="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-white/35 transition">
                  Discuss a project
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              ${[
                ['Role', 'Product Design'],
                ['Focus', 'HealthTech System'],
                ['Area', 'Inventory + Donors'],
                ['Output', 'Platform Interface']
              ].map(item => `
                <div class="rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-xl p-5">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">${item[0]}</p>
                  <p class="text-sm text-slate-200">${item[1]}</p>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-8">
        <div class="rounded-[36px] bg-[#05070c] border border-white/5 px-6 md:px-10 py-8">
          <div class="grid gap-6 md:grid-cols-[220px_1fr] items-center">
            <p class="text-sm text-slate-500 leading-relaxed">
              Responsibilities
            </p>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-slate-300">
              ${roleItems.map(item => `
                <div class="rounded-full border border-white/8 bg-white/[0.02] px-4 py-3 text-center">
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

            <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
              Improving visibility for blood inventory and donor coordination.
            </h2>
          </div>

          <div class="rounded-[34px] border border-white/8 bg-white/[0.03] p-7 md:p-8">
            <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Hemo Trackr was designed as a health-tech product for improving how blood inventory, donor information, and urgent requests could be viewed and coordinated.
              </p>

              <p>
                The product direction focused on making important health system information easier to scan, understand, and act on in moments where clarity matters.
              </p>

              <p>
                The goal was to create a calmer interface system for teams managing supply, donor activity, and operational response across healthcare touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-white/[0.03] p-6 md:p-10">
          <div class="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Problem
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                Healthcare coordination becomes harder when critical data is fragmented.
              </h2>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              ${challengeItems.map(item => `
                <article class="rounded-[30px] border border-white/8 bg-[#020617]/70 p-6">
                  <h3 class="text-xl font-semibold mb-3">${item.title}</h3>
                  <p class="text-slate-400 leading-relaxed">${item.desc}</p>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mb-10 items-end">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
              Screens
            </p>

            <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
              Interface direction and system screens.
            </h2>
          </div>

          <p class="text-lg text-slate-400 leading-relaxed max-w-xl lg:justify-self-end">
            Placeholder visuals for now. These will later be replaced with stronger screenshots from the design frames.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-5">
          ${[
            ['Inventory dashboard', hemoTrackrImg],
            ['Donor management', fallbackImg],
            ['Request flow', hemoTrackrImg],
            ['System overview', fallbackImg]
          ].map(item => `
            <div class="group rounded-[34px] border border-white/8 bg-white/[0.03] overflow-hidden">
              <div class="h-[320px] md:h-[460px] overflow-hidden bg-slate-900">
                <img src="${item[1]}" alt="${item[0]}" class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
              </div>

              <div class="p-6">
                <p class="text-sm text-slate-400">${item[0]}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-[#05070c] overflow-hidden">
          <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div class="min-h-[520px] bg-[#3082BE]/10 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                  Solution
                </p>

                <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                  A clearer system for inventory, donors, and healthcare response.
                </h2>
              </div>

              <p class="text-lg text-slate-300 leading-relaxed max-w-xl">
                The product direction focused on making key healthcare information more visible, structured, and easier to act on.
              </p>
            </div>

            <div class="p-8 md:p-12">
              <div class="space-y-5">
                ${solutionItems.map(item => `
                  <div class="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                    <h3 class="text-2xl font-semibold mb-3">${item.title}</h3>
                    <p class="text-slate-400 leading-relaxed">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28 mb-6">
        <div class="rounded-[40px] border border-white/8 bg-[#3082BE]/10 p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Outcome
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                A product direction centered on speed, visibility, and health system coordination.
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                More work
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a href="/contact.html" class="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold hover:border-white/30 transition">
                Discuss a project
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="px-6 md:px-8 py-10 border-t border-white/10 bg-[#020617]">
      <div class="max-w-[1600px] mx-auto rounded-[28px] border border-white/8 bg-white/[0.03] px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-slate-500">© 2026 Ayo Gegeoju</p>

        <div class="flex items-center gap-6 text-sm">
          <a href="/work.html" class="text-white">Work</a>
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
