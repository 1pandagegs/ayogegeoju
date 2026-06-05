import './style.css'
import portraitImg from './assets/portrait-placeholder.jpg'
import logoImg from './assets/logo.png'

const proofProjects = [
  'Coverage Trackr',
  'Home & Abroad',
  'SwiftEntry',
  'SYDAAR LMS',
  'Manorr',
  'PRMT',
  'Hemo Trackr',
  'Mundayne'
]

const strengths = [
  {
    title: 'Enterprise Systems',
    desc: 'Designing platforms that support workflows, roles, operations, tracking, reporting, and decision-making.'
  },
  {
    title: 'Public Health Platforms',
    desc: 'Creating tools for visibility, intervention planning, monitoring, learning, and field-level operations.'
  },
  {
    title: 'Government Products',
    desc: 'Designing digital experiences where trust, clarity, access, and structured information matter.'
  },
  {
    title: 'Real Estate Technology',
    desc: 'Building experiences around property discovery, estate operations, visitor flows, and management systems.'
  },
  {
    title: 'Learning Systems',
    desc: 'Designing LMS products and training platforms that make learning, progress, and content easier to manage.'
  },
  {
    title: 'Web & Brand Experiences',
    desc: 'Creating websites, visual systems, brand direction, and marketing visuals for businesses and digital products.'
  }
]

const approach = [
  {
    number: '01',
    title: 'Understand the system',
    desc: 'Before designing screens, I try to understand the workflow, the users, the constraints, and the decisions the product needs to support.'
  },
  {
    number: '02',
    title: 'Simplify the workflow',
    desc: 'I focus on hierarchy, navigation, information structure, and user flow so the product becomes easier to move through.'
  },
  {
    number: '03',
    title: 'Design for confidence',
    desc: 'I use clarity, rhythm, visual restraint, and strong interface direction to make products feel credible and usable.'
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
          <a href="/work.html" class="text-slate-300 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-white transition-colors duration-200">About</a>
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
          <a href="/about.html" class="text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1600px] mx-auto fade-up">
        <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
          <div class="relative min-h-[calc(100vh-120px)] p-6 md:p-10 lg:p-14 flex flex-col justify-between">

            <div class="absolute inset-0">
              <div class="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/92 to-[#020617]/65"></div>
              <div class="absolute right-0 top-0 h-full w-full lg:w-[46%] bg-[#3082BE]/10"></div>
            </div>

            <div class="relative z-10 flex items-start justify-between gap-8">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-3">
                  About Ayo
                </p>
                <p class="text-sm text-slate-300">
                  Product Designer / Systems Designer / Frontend Developer
                </p>
              </div>

              <div class="hidden lg:block max-w-[340px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  I care about the structure behind the screen, not just the screen itself.
                </p>
              </div>
            </div>

            <div class="relative z-10 grid lg:grid-cols-[1.05fr_0.75fr] gap-10 items-end">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                  Systems thinking before interface polish
                </p>

                <h1 class="text-5xl md:text-7xl lg:text-[96px] font-extrabold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                  I design systems that help people make better decisions.
                </h1>

                <p class="mt-8 text-lg md:text-[21px] text-slate-300 max-w-4xl leading-[1.8]">
                  I’m Ayo Gegeoju, a Product Designer and Frontend Developer working across enterprise systems, public-sector tools, dashboards, real-estate products, learning platforms, websites, and brand experiences.
                </p>

                <div class="mt-10 flex flex-wrap gap-4">
                  <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                    View work
                    <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>

                  <a href="/contact.html" class="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-white/35 transition">
                    Contact me
                    <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              <div class="relative">
                <div class="rounded-[36px] border border-white/10 bg-black/20 backdrop-blur-xl p-4">
                  <div class="aspect-[4/5] rounded-[28px] overflow-hidden bg-slate-900">
                    <img src="${portraitImg}" alt="Portrait of Ayo Gegeoju" class="h-full w-full object-cover" />
                  </div>

                  <div class="pt-5 px-2 pb-1">
                    <p class="text-white text-lg font-semibold">Ayo Gegeoju</p>
                    <p class="text-sm text-slate-500 mt-1">Product Designer / Systems Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              ${[
                ['10+', 'Products and digital experiences'],
                ['4+', 'Industries and product contexts'],
                ['Full-stack', 'Design, web, and frontend execution']
              ].map(item => `
                <div class="rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-xl p-5">
                  <p class="text-3xl font-extrabold tracking-[-0.04em] text-white mb-2">${item[0]}</p>
                  <p class="text-sm text-slate-400">${item[1]}</p>
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
              Products and systems I’ve worked on
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-sm text-slate-300">
              ${proofProjects.map(item => `
                <div class="rounded-full border border-white/8 bg-white/[0.02] px-4 py-3 text-center">
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-white/[0.03] p-6 md:p-10">
          <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                What I Do
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                I design products where clarity is part of the infrastructure.
              </h2>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              ${strengths.map(item => `
                <div class="rounded-[26px] border border-white/8 bg-[#020617]/70 p-6">
                  <h3 class="text-xl font-semibold mb-3">${item.title}</h3>
                  <p class="text-slate-400 leading-relaxed">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mb-10 items-end">
          <div>
            <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
              My Approach
            </p>
            <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
              Good interfaces come from understanding the system.
            </h2>
          </div>

          <p class="text-lg text-slate-400 leading-relaxed max-w-xl lg:justify-self-end">
            I don’t start with decoration. I start with the workflow, the user’s goal, the information structure, and the decisions the interface needs to support.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          ${approach.map(item => `
            <article class="rounded-[34px] border border-white/8 bg-white/[0.03] p-7 md:p-8">
              <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-6">${item.number}</p>
              <h3 class="text-2xl md:text-3xl font-bold tracking-[-0.04em] mb-4">${item.title}</h3>
              <p class="text-slate-400 leading-relaxed">${item.desc}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-[#05070c] overflow-hidden">
          <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div class="min-h-[520px] bg-[#3082BE]/10 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                  Experience
                </p>

                <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                  Systems, products, websites, and visual work.
                </h2>
              </div>

              <p class="text-lg text-slate-300 leading-relaxed max-w-xl">
                My work spans product design, frontend implementation, brand identity, website design, marketing visuals, and product experiments.
              </p>
            </div>

            <div class="p-8 md:p-12">
              <div class="space-y-5">
                <div class="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">Product Design</p>
                  <h3 class="text-2xl font-semibold mb-3">Sydani Group</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Designed operational systems, public-health tools, learning systems, real-estate products, and enterprise platforms across projects such as Coverage Trackr, Home and Abroad, SwiftEntry, SYDAAR LMS, Manorr, PRMT, and Hemo Trackr.
                  </p>
                </div>

                <div class="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">Studio / Independent Work</p>
                  <h3 class="text-2xl font-semibold mb-3">Goju Design</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Leading product design, website design, brand identity, marketing visuals, and digital product development for startups, businesses, and personal product experiments.
                  </p>
                </div>

                <div class="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">Tools & Strengths</p>
                  <div class="flex flex-wrap gap-3">
                    ${[
                      'Figma',
                      'Product Strategy',
                      'Dashboard Design',
                      'Design Systems',
                      'UX Research',
                      'Frontend Development',
                      'Web Design',
                      'Brand Identity',
                      'Marketing Design',
                      'AI Product Thinking'
                    ].map(item => `
                      <span class="px-4 py-3 rounded-full border border-white/8 bg-[#020617]/80 text-sm text-slate-300">
                        ${item}
                      </span>
                    `).join('')}
                  </div>
                </div>
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
                Contact
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                Need help designing a product people can understand and trust?
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
      <div class="max-w-[1600px] mx-auto rounded-[28px] border border-white/8 bg-white/[0.03] px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-slate-500">© 2026 Ayo Gegeoju</p>

        <div class="flex items-center gap-6 text-sm">
          <a href="/work.html" class="text-slate-400 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-white">About</a>
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