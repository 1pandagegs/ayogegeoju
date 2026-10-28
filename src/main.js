import './style.css'
import './cursor.js'
import logoImg from './assets/logo.png'
import portraitImg from './assets/hero-bg.webp'


import { projects } from './projects-data.js'

const selectedProducts = projects.filter(project => project.featured)
const galleryProjects = projects.filter(project => !project.featured).slice(0, 8)

// Set to the CV's path (e.g. '/Ayo-Gegeoju-CV.pdf') once the file is in /public to show the Download CV button.
const CV_URL = null

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-transparent text-[#0b1530] selection:bg-[#3082BE] selection:text-white relative overflow-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-12%] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3082BE]/20 blur-[150px]"></div>
      <div class="absolute right-[-12%] top-[480px] h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[160px]"></div>
      <div class="absolute left-[30%] bottom-[120px] h-[360px] w-[360px] rounded-full glass blur-[140px]"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/80">
      <div class="max-w-[1500px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <a href="/index.html" class="inline-flex items-center">
          <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-8 w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8 text-[13px]">
          <a href="/index.html" class="text-[#0b1530] transition-colors duration-200">Home</a>
          <a href="/work.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Contact</a>
        </div>

        <a href="/contact.html" class="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
          Get in touch
          <span>→</span>
        </a>

        <button id="mobile-menu-toggle" type="button" aria-label="Open menu" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-[#0b1530] hover:bg-white/85 transition">
          ☰
        </button>
      </div>

      <div id="mobile-menu" class="md:hidden hidden border-t border-white/80 px-6 pb-6 pt-4">
        <div class="flex flex-col gap-4 text-sm">
          <a href="/index.html" class="text-[#0b1530] transition-colors duration-200">Home</a>
          <a href="/work.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1500px] mx-auto fade-up">
        <div class="relative rounded-[36px] md:rounded-[48px] border border-white/80 glass overflow-hidden">
          <div aria-hidden="true" class="orb float-slow absolute -right-10 -bottom-16 h-44 w-44 opacity-70 hidden md:block"></div>
          <div class="relative grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-6 items-center p-6 md:p-10 lg:p-14 min-h-[calc(100vh-140px)]">

            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">Hello, I'm</p>

              <h1 class="text-5xl md:text-6xl lg:text-[78px] font-bold leading-[0.95] tracking-[-0.05em]">
                Ayo Gegeoju
              </h1>
              <p class="mt-3 text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-gradient">
                Product Designer &amp; Design Engineer
              </p>

              <p class="mt-7 text-lg text-slate-600 max-w-xl leading-[1.75]">
                I design products, then build them. 5+ years designing government, health and SaaS platforms, plus apps, websites and AI tools I have coded and shipped myself.
              </p>

              <div class="mt-9 flex flex-wrap gap-3">
                <a href="#work" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition shadow-[0_14px_30px_-14px_rgba(11,21,48,0.6)]">
                  View my work
                  <span class="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                ${CV_URL ? `<a href="${CV_URL}" target="_blank" rel="noopener" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                  Download CV
                  <span class="transition-transform group-hover:translate-y-0.5">↓</span>
                </a>` : ''}

                <a href="/contact.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                  Get in touch
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div class="mt-12">
                <p class="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4">Products designed for</p>
                <div class="flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-semibold text-slate-400">
                  ${['Sydani Group', 'NIDCOM', 'Government of Nepal', 'Amref', 'Brik CRM', 'AS5 Group'].map(name => `<span>${name}</span>`).join('')}
                </div>
              </div>
            </div>

            <div class="relative mx-auto w-full max-w-[520px]">
              <div aria-hidden="true" class="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-[#3082BE]/25 via-violet-300/25 to-transparent blur-2xl"></div>
              <div class="relative rounded-[40px] border border-white/90 glass p-3">
                <div class="media-frame aspect-[4/4.6]">
                  <img src="${portraitImg}" alt="Portrait of Ayo Gegeoju" class="h-full w-full object-cover object-top" />
                </div>
              </div>

              <div class="absolute -right-3 md:-right-8 top-8 rounded-[24px] border border-white/90 glass px-5 py-4 text-center float-slow">
                <p class="text-4xl font-bold tracking-[-0.04em] text-gradient">5+</p>
                <p class="text-xs text-slate-500 leading-tight mt-1">Years of<br/>experience</p>
              </div>

              <div class="hidden sm:block absolute -left-3 md:-left-10 bottom-10 rounded-[24px] border border-white/90 glass px-5 py-4">
                <p class="text-xs text-slate-500">Designs, codes &amp; ships</p>
                <div class="mt-2 flex items-center gap-2">
                  ${['Figma', 'React', 'Next.js', 'AI'].map(tag => `<span class="rounded-full bg-white/80 border border-white px-2.5 py-1 text-[11px] font-semibold text-[#3082BE]">${tag}</span>`).join('')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-8">
        <div class="rounded-[36px] glass border border-white/80 px-6 md:px-10 py-8">
          <div class="grid gap-6 md:grid-cols-[220px_1fr] items-center">
            <p class="text-sm text-slate-500 leading-relaxed">
              Selected products and platforms I’ve helped shape
            </p>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-slate-600">
              ${['Home & Abroad', 'Nepal Dashboard', 'Coverage Trackr', 'SYDAAR LMS', 'Pathfinder AI', 'PayTrack SME'].map(item => `
                <div class="rounded-full border border-white/80 glass px-4 py-3 text-center">
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

            <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] max-w-3xl">
              Designed for real users. Many of them built by me too.
            </h2>
          </div>

          <div class="lg:justify-self-end max-w-xl">
            <p class="text-lg text-slate-500 leading-relaxed mb-6">
              A selection across public health, government, real estate, fintech and AI, from Figma to production code.
            </p>

            <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
              See all projects
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-5">
          ${selectedProducts.map((project, index) => `
            <article class="group rounded-[34px] border border-white/80 glass overflow-hidden hover:bg-white/85 transition">
              <div class="m-3 mb-0 aspect-[3/2] media-frame">
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

                <p class="text-slate-500 leading-relaxed mb-7">
                  ${project.desc}
                </p>

                <a
                  href="${project.href}"
                  ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                  class="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#3082BE] transition"
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
        <div class="rounded-[40px] border border-white/80 glass p-6 md:p-10">
          <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                What I Design
              </p>

              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
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
                <div class="rounded-[26px] border border-white/80 bg-white/70 p-6">
                  <h3 class="text-xl font-semibold mb-3">${item[0]}</h3>
                  <p class="text-slate-500 leading-relaxed">${item[1]}</p>
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
            <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
              More systems, websites, and visual work.
            </h2>
          </div>

          <p class="text-lg text-slate-500 leading-relaxed max-w-xl lg:justify-self-end">
            A wider body of work across product design, web development, brand identity, marketing design, dashboards, mobile apps, and product experiments.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${galleryProjects.map((item, index) => `
            <a href="${item.href}" class="group rounded-[30px] border border-white/80 glass overflow-hidden hover:bg-white/85 transition duration-300 hover:-translate-y-1 block">
              <div class="m-2.5 mb-0 aspect-[3/2] media-frame">
                <img src="${item.image}" alt="${item.title}" class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
              </div>

              <div class="p-5">
                <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">
                  ${item.label}
                </p>

                <h3 class="text-xl font-semibold tracking-[-0.03em]">
                  ${item.title}
                </h3>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/80 glass overflow-hidden">
          <div class="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div class="min-h-[420px] bg-[#e8edf7]">
              <div class="h-full w-full flex items-center justify-center glass-tint">
                <div class="text-center px-8">
                  <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
                    About Ayo
                  </p>
                  <p class="text-3xl md:text-5xl font-bold tracking-[-0.05em]">
                    Systems thinking before interface polish.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-8 md:p-12 flex flex-col justify-center">
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Behind the Work
              </p>

              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] mb-6">
                I help teams simplify complexity.
              </h2>

              <p class="text-lg text-slate-500 leading-relaxed mb-8">
                My work combines product strategy, interface design, visual direction, and frontend implementation. I’m most interested in products where the design challenge is structural, not just aesthetic.
              </p>

              <a href="/about.html" class="group inline-flex w-fit items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                Read more
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1500px] mx-auto mt-20 mb-6">
        <div class="rounded-[40px] border border-white/80 glass-tint p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Contact
              </p>

              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                Let’s build something useful, clear, and memorable.
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="mailto:aogegeoju0@gmail.com" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                Email me
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                View work
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="px-6 md:px-8 py-10 border-t border-white/80 bg-transparent">
      <div class="max-w-[1500px] mx-auto rounded-[28px] border border-white/80 glass px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-slate-500">
          © 2026 Ayo Gegeoju
        </p>

        <div class="flex items-center gap-6 text-sm">
          <a href="/work.html" class="text-slate-500 hover:text-[#3082BE] transition-colors duration-200">Work</a>
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

// ---- Hero Slideshow ----
const slideshowImages = selectedProducts.map(project => project.image)
let currentSlideIndex = 0
const bg1 = document.querySelector('#hero-bg-1')
const bg2 = document.querySelector('#hero-bg-2')

if (bg1 && bg2) {
  let activeBg = bg1
  let inactiveBg = bg2
  
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length
    const nextImgSrc = slideshowImages[currentSlideIndex]
    
    inactiveBg.onload = () => {
      inactiveBg.classList.remove('opacity-0')
      inactiveBg.classList.add('opacity-35')
      
      activeBg.classList.remove('opacity-35')
      activeBg.classList.add('opacity-0')
      
      const temp = activeBg
      activeBg = inactiveBg
      inactiveBg = temp
    }
    inactiveBg.src = nextImgSrc
  }, 5000)
}