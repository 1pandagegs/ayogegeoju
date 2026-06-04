import './style.css'

const projects = [
  {
    number: '01',
    title: 'Home and Abroad',
    type: 'PropTech / Real Estate',
    desc: 'A diaspora-focused property platform designed to make remote property discovery feel more trustworthy, structured, and easier to navigate.',
    href: '/work-home-and-abroad.html',
    category: 'design'
  },
  {
    number: '02',
    title: 'Hemo Trackr',
    type: 'HealthTech / System Design',
    desc: 'A blood inventory and donor management experience built to improve visibility, speed up coordination, and support faster response in urgent situations.',
    href: '/work-hemo-trackr.html',
    category: 'design'
  },
  {
    number: '03',
    title: 'Coverage Trackr',
    type: 'Operations / Planning Tool',
    desc: 'A planning and monitoring tool created to support smarter operational decisions, better resource allocation, and clearer coverage visibility.',
    href: '/work-coverage-trackr.html',
    category: 'design'
  },
  {
    number: '04',
    title: 'AI Workflow Experiments',
    type: 'AI / Automation',
    desc: 'Explorations focused on using AI-assisted workflows to improve ideation, research direction, content generation, and faster design support.',
    href: '#',
    category: 'ai'
  },
  {
    number: '05',
    title: 'AI Product Concepts',
    type: 'AI / Product Thinking',
    desc: 'Concept-driven work exploring how AI can be shaped into clearer, more useful digital experiences rather than noisy feature additions.',
    href: '#',
    category: 'ai'
  },
  {
    number: '06',
    title: 'Brand & Campaign Direction',
    type: 'Marketing / Creative Strategy',
    desc: 'Creative and marketing-focused work centered on messaging clarity, campaign structure, and stronger visual storytelling across digital touchpoints.',
    href: '#',
    category: 'marketing'
  },
  {
    number: '07',
    title: 'Content System Thinking',
    type: 'Marketing / Content Experience',
    desc: 'Work exploring how brands can communicate more clearly through structured content, stronger visual rhythm, and more intentional audience flow.',
    href: '#',
    category: 'marketing'
  }
]

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

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <section class="mb-20 fade-up">
          <a href="/index.html" class="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors duration-200">
            <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back home
          </a>

          <div class="grid lg:grid-cols-[1.15fr_380px] gap-10 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
                Work
              </p>

              <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] mb-6">
                Selected projects, experiments, and creative direction.
              </h1>

              <p class="text-lg md:text-[21px] text-slate-400 max-w-3xl leading-[1.8]">
                A broader look at product design, AI-driven exploration, and marketing work focused on clarity, trust, structure, and stronger digital communication.
              </p>
            </div>

            <div class="rounded-[28px] border border-white/8 bg-white/[0.02] p-6">
              <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">
                Categories
              </p>
              <div class="space-y-3 text-sm text-slate-300">
                <div class="flex items-center justify-between border-b border-white/5 pb-3">
                  <span>Design</span>
                  <span class="text-slate-500">03</span>
                </div>
                <div class="flex items-center justify-between border-b border-white/5 pb-3">
                  <span>AI</span>
                  <span class="text-slate-500">02</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Marketing</span>
                  <span class="text-slate-500">02</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 pt-12">
          <div class="flex flex-wrap items-center gap-3 mb-12">
            <button data-tab="all" class="work-tab active-tab px-5 py-3 rounded-full border border-white/10 text-sm font-medium transition">
              All
            </button>
            <button data-tab="design" class="work-tab px-5 py-3 rounded-full border border-white/10 text-sm font-medium transition">
              Design
            </button>
            <button data-tab="ai" class="work-tab px-5 py-3 rounded-full border border-white/10 text-sm font-medium transition">
              AI
            </button>
            <button data-tab="marketing" class="work-tab px-5 py-3 rounded-full border border-white/10 text-sm font-medium transition">
              Marketing
            </button>
          </div>

          <div id="work-grid" class="space-y-0"></div>
        </section>

      </div>
    </main>
  </div>
`

const workGrid = document.querySelector('#work-grid')

function renderProjects(category = 'all') {
  const filtered = category === 'all'
    ? projects
    : projects.filter(project => project.category === category)

  workGrid.innerHTML = filtered.map(project => `
    <article class="group border-t border-white/10 py-10 md:py-12 transition-all duration-300 hover:bg-white/[0.02] hover:rounded-[24px] hover:px-4">
      <div class="grid md:grid-cols-[72px_minmax(0,1fr)_190px] gap-6 md:gap-8 items-start">

        <div class="pt-1 text-[11px] text-slate-500 tracking-[0.22em] uppercase">
          ${project.number}
        </div>

        <div class="max-w-2xl transition-transform duration-300 group-hover:translate-x-1">
          <div class="mb-5 w-full rounded-[24px] border border-white/5 bg-slate-900 p-3">
            <div class="rounded-[18px] border border-white/5 bg-[#0b1220] overflow-hidden">
              <div class="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-white/10"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-white/10"></span>
                <div class="ml-3 h-2 w-24 rounded-full bg-white/10"></div>
              </div>

              <div class="p-4 md:p-5">
                <div class="grid grid-cols-12 gap-3 min-h-[170px] md:min-h-[190px]">
                  <div class="col-span-4 rounded-[14px] bg-white/[0.03] border border-white/5 p-3">
                    <div class="h-3 w-16 rounded-full bg-[#3082BE]/70 mb-4"></div>
                    <div class="space-y-2">
                      <div class="h-2 w-full rounded-full bg-white/10"></div>
                      <div class="h-2 w-5/6 rounded-full bg-white/10"></div>
                      <div class="h-2 w-4/6 rounded-full bg-white/10"></div>
                    </div>
                  </div>

                  <div class="col-span-8 rounded-[14px] bg-white/[0.03] border border-white/5 p-3 flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                      <div class="h-3 w-24 rounded-full bg-white/15"></div>
                      <div class="h-8 w-8 rounded-full bg-[#3082BE]/20 border border-[#3082BE]/20"></div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 flex-1">
                      <div class="rounded-[12px] bg-white/[0.04] border border-white/5"></div>
                      <div class="rounded-[12px] bg-white/[0.04] border border-white/5"></div>
                      <div class="col-span-2 rounded-[12px] bg-white/[0.04] border border-white/5"></div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 flex items-center justify-between">
                  <div class="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    ${project.category}
                  </div>
                  <div class="h-2 w-20 rounded-full bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
            <h2 class="text-2xl md:text-[34px] leading-tight font-semibold tracking-[-0.03em] text-white transition group-hover:text-[#3082BE]">
              ${project.title}
            </h2>

            <span class="text-[11px] uppercase tracking-[0.22em] text-slate-500 md:hidden">
              ${project.type}
            </span>
          </div>

          <p class="text-slate-400 text-[17px] leading-[1.8]">
            ${project.desc}
          </p>
        </div>

        <div class="flex flex-col items-start md:items-end gap-4 pt-1">
          <p class="hidden md:block text-[11px] text-slate-500 uppercase tracking-[0.22em] leading-5 text-right max-w-[190px]">
            ${project.type}
          </p>

          <a href="${project.href}" class="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200">
            View project
            <span class="transition-transform duration-200 group-hover:translate-x-1">↗</span>
          </a>
        </div>

      </div>
    </article>
  `).join('')
}

renderProjects()

const tabs = document.querySelectorAll('.work-tab')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(button => {
      button.classList.remove('active-tab', 'text-white', 'border-white/30', 'bg-white/[0.04]')
      button.classList.add('text-slate-300')
    })

    tab.classList.add('active-tab', 'text-white', 'border-white/30', 'bg-white/[0.04]')
    tab.classList.remove('text-slate-300')

    renderProjects(tab.dataset.tab)
  })
})

const mobileMenuToggle = document.querySelector('#mobile-menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')

mobileMenuToggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

const pageRoot = document.querySelector('#page-root')

if (pageRoot) {
  requestAnimationFrame(() => {
    pageRoot.classList.add('page-enter-active')
  })
}