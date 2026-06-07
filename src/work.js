import './style.css'
import logoImg from './assets/logo.png'

import coverageTrackrCover from './assets/coverage-trackr-cover.png'
import swiftEntryCover from './assets/swiftentry-cover.png'
import homeAndAbroadCover from './assets/home-and-abroad-cover.png'
import resourceTrackrCover from './assets/resource-trackr-cover.png'
import sydaarLmsCover from './assets/sydaar-lms-cover.png'
import mundayneCover from './assets/mundayne-cover.png'
import nuellizCover from './assets/nuelliz-launch-tracker-cover.png'
import gojuDesignCover from './assets/goju-design-cover.png'
import sabaliCover from './assets/sabali-limited-cover.png'
import manorrCover from './assets/manorr-cover.png'
import amfhCover from './assets/a-message-for-her-cover.png'

const projects = [
  {
    title: 'Coverage Trackr',
    category: 'enterprise',
    featured: true,
    label: 'Public Health / Micro-Planning',
    desc: 'A micro-planning platform designed to support intervention planning, data collection, and coverage visibility across different country contexts.',
    href: '/work-coverage-trackr.html',
    image: coverageTrackrCover,
    external: false
  },
  {
    title: 'Home and Abroad',
    category: 'product',
    featured: true,
    label: 'PropTech / Government Platform',
    desc: 'A NIDCOM-backed real estate listing platform helping Nigerians in Diaspora explore property opportunities with more trust and clarity.',
    href: '/work-home-and-abroad.html',
    image: homeAndAbroadCover,
    external: false
  },
  {
    title: 'SwiftEntry',
    category: 'enterprise',
    featured: true,
    label: 'Visitor Management System',
    desc: 'A visitor management product designed to improve check-in, tracking, access control, and operational visibility.',
    href: '/work-swiftentry.html',
    image: swiftEntryCover,
    external: false
  },
  {
    title: 'SYDAAR LMS',
    category: 'enterprise',
    featured: true,
    label: 'Learning Management System',
    desc: 'A gamified LMS for internal organizational training across large institutions and teams.',
    href: '/work-sydaar-lms.html',
    image: sydaarLmsCover,
    external: false
  },
  {
    title: 'Resource Trackr',
    category: 'enterprise',
    featured: false,
    label: 'Partner Resource Management Tracker',
    desc: 'A partner resource tracking platform designed to help teams monitor resources, partners, allocation, and operational movement.',
    href: '/work-prmt.html',
    image: resourceTrackrCover,
    external: false
  },
  {
    title: 'Hemo Trackr',
    category: 'enterprise',
    featured: false,
    label: 'HealthTech / System Design',
    desc: 'A blood inventory and donor management system built to improve visibility, coordination, and faster response across healthcare workflows.',
    href: '/work-hemo-trackr.html',
    image: hemoTrackrImg,
    external: false
  },
  {
    title: 'Manorr',
    category: 'enterprise',
    featured: false,
    label: 'Real Estate / Estate Operations',
    desc: 'A unified platform for managing estate occupants, visitors, and operational movement within real estate communities.',
    href: '/work-manorr.html',
    image: manorrCover,
    external: false
  },
  {
    title: 'Mundayne',
    category: 'product',
    featured: false,
    label: 'Habit Tracker / Task Management App',
    desc: 'A mobile app designed and built to help users manage habits, tasks, routines, and personal daily progress.',
    href: '/work-mundayne.html',
    image: mundayneCover,
    external: false
  },
  {
    title: 'Nuelliz Launch Tracker',
    category: 'product',
    featured: false,
    label: 'Dashboard / Web App',
    desc: 'A React and Vite dashboard designed and developed to help track launch tasks, progress, and execution planning.',
    href: '/work-nuelliz.html',
    image: nuellizCover,
    external: false
  },
  {
    title: 'Goju Design Website',
    category: 'website',
    featured: false,
    label: 'Studio Website',
    desc: 'A digital studio website for presenting design services, creative direction, and brand positioning.',
    href: '/work-goju-design.html',
    image: gojuDesignCover,
    external: false
  },
  {
    title: 'Sabali Limited',
    category: 'website',
    featured: false,
    label: 'Agro / Corporate Website',
    desc: 'An agro-focused business website designed and built with HTML, CSS, and JavaScript.',
    href: '/work-sabali.html',
    image: sabaliCover,
    external: false
  },
  {
    title: 'A Message For Her',
    category: 'website',
    featured: false,
    label: 'Podcast Website',
    desc: 'A podcast website designed and developed to present episodes, media, and brand storytelling.',
    href: '/work-amfh.html',
    image: amfhCover,
    external: false
  }
]

const tabs = [
  { label: 'Featured', value: 'featured' },
  { label: 'Enterprise Systems', value: 'enterprise' },
  { label: 'Product Design', value: 'product' },
  { label: 'Websites', value: 'website' },
  { label: 'Brand & Marketing', value: 'brand' }
]

const brandTabs = [
  { label: 'All', value: 'all' },
  { label: 'Logos', value: 'logos' },
  { label: 'Brand Identity', value: 'brand-identity' },
  { label: 'Flyers', value: 'flyers' },
  { label: 'Social Media', value: 'social-media' },
  { label: 'Illustrations', value: 'illustrations' }
]

const brandGallery = [
  {
    title: 'Logo Exploration',
    type: 'logos',
    image: fallbackImg
  },
  {
    title: 'Brand Identity System',
    type: 'brand-identity',
    image: fallbackImg
  },
  {
    title: 'Event Flyer Design',
    type: 'flyers',
    image: fallbackImg
  },
  {
    title: 'Social Media Campaign',
    type: 'social-media',
    image: fallbackImg
  },
  {
    title: 'Illustration Study',
    type: 'illustrations',
    image: fallbackImg
  },
  {
    title: 'Hospitality Campaign Visual',
    type: 'social-media',
    image: fallbackImg
  },
  {
    title: 'Product Launch Flyer',
    type: 'flyers',
    image: fallbackImg
  },
  {
    title: 'Brand Mark Direction',
    type: 'logos',
    image: fallbackImg
  }
]

function getProjects(tab = 'featured') {
  if (tab === 'featured') {
    return projects.filter(project => project.featured)
  }

  return projects.filter(project => project.category === tab)
}

function projectCard(project, index) {
  return `
    <article class="group rounded-[34px] border border-white/8 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition duration-300 hover:-translate-y-1">
      <div class="h-[300px] md:h-[420px] overflow-hidden bg-slate-900">
        <img
          src="${project.image}"
          alt="${project.title}"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />
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
          ${project.external ? 'View live project' : project.href === '#' ? 'Coming soon' : 'View project'}
          <span class="transition-transform group-hover/link:translate-x-1">↗</span>
        </a>
      </div>
    </article>
  `
}

function renderBrandGallery(type = 'all') {
  const filteredItems = type === 'all'
    ? brandGallery
    : brandGallery.filter(item => item.type === type)

  projectGrid.innerHTML = `
    <div class="xl:col-span-3">
      <div class="rounded-[36px] border border-white/8 bg-white/[0.03] p-5 md:p-6 mb-8">
        <div class="flex flex-wrap gap-3">
          ${brandTabs.map((tab, index) => `
            <button
              data-brand-tab="${tab.value}"
              class="brand-tab ${index === 0 ? 'bg-[#3082BE] text-white border-[#3082BE]' : 'bg-white/[0.03] text-slate-300 border-white/10'} h-[48px] px-5 rounded-full border text-sm font-semibold transition hover:border-white/30"
            >
              ${tab.label}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="brand-gallery-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        ${filteredItems.map(item => `
          <article class="group rounded-[28px] border border-white/8 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition duration-300 hover:-translate-y-1">
            <div class="h-[280px] md:h-[340px] overflow-hidden bg-slate-900">
              <img
                src="${item.image}"
                alt="${item.title}"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>

            <div class="p-5">
              <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-3">
                ${item.type.replaceAll('-', ' ')}
              </p>

              <h3 class="text-xl md:text-2xl font-bold tracking-[-0.03em]">
                ${item.title}
              </h3>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `

  const brandTabButtons = document.querySelectorAll('.brand-tab')

  brandTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const activeType = button.dataset.brandTab
      const filtered = activeType === 'all'
        ? brandGallery
        : brandGallery.filter(item => item.type === activeType)

      brandTabButtons.forEach(tab => {
        tab.classList.remove('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
        tab.classList.add('bg-white/[0.03]', 'text-slate-300', 'border-white/10')
      })

      button.classList.add('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
      button.classList.remove('bg-white/[0.03]', 'text-slate-300', 'border-white/10')

      const galleryGrid = document.querySelector('#brand-gallery-grid')
      galleryGrid.innerHTML = filtered.map(item => `
        <article class="group rounded-[28px] border border-white/8 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition duration-300 hover:-translate-y-1">
          <div class="h-[280px] md:h-[340px] overflow-hidden bg-slate-900">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <div class="p-5">
            <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-3">
              ${item.type.replaceAll('-', ' ')}
            </p>

            <h3 class="text-xl md:text-2xl font-bold tracking-[-0.03em]">
              ${item.title}
            </h3>
          </div>
        </article>
      `).join('')
    })
  })
}

function renderProjects(tab = 'featured') {
  if (tab === 'brand') {
    renderBrandGallery()
    return
  }

  const filteredProjects = getProjects(tab)

  projectGrid.innerHTML = filteredProjects
    .map((project, index) => projectCard(project, index))
    .join('')
}

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
          <a href="/work.html" class="text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1600px] mx-auto fade-up">
        <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
          <div class="relative min-h-[620px] p-6 md:p-10 lg:p-14 flex flex-col justify-between">

            <div class="absolute inset-0">
              <img src="${coverageTrackrImg}" alt="Work page hero preview" class="h-full w-full object-cover opacity-30 scale-105" />
              <div class="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/45"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/20"></div>
            </div>

            <div class="relative z-10 flex items-start justify-between gap-8">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-3">
                  Work
                </p>
                <p class="text-sm text-slate-300">
                  Enterprise systems / Products / Websites / Brand experiences
                </p>
              </div>

              <div class="hidden lg:block max-w-[360px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  A portfolio of systems and experiences built around clarity, trust, and usability.
                </p>
              </div>
            </div>

            <div class="relative z-10 max-w-6xl">
              <p class="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                Selected work across real-world products
              </p>

              <h1 class="text-5xl md:text-7xl lg:text-[104px] font-extrabold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                Systems, products, websites, and brand experiences.
              </h1>

              <p class="mt-8 text-lg md:text-[21px] text-slate-300 max-w-4xl leading-[1.8]">
                A broader look at product design, public-sector tools, SaaS products, operational platforms, websites, brand identity, and marketing design.
              </p>
            </div>

            <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              ${[
                ['01', 'Enterprise Systems'],
                ['02', 'Product Design'],
                ['03', 'Websites'],
                ['04', 'Brand & Marketing']
              ].map(item => `
                <div class="rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-xl p-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">#${item[0]}</p>
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
              Live products and platforms
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

      <section class="max-w-[1600px] mx-auto mt-16">
        <div class="flex flex-wrap gap-3 mb-10">
          ${tabs.map((tab, index) => `
            <button
              data-tab="${tab.value}"
              class="work-tab ${index === 0 ? 'bg-[#3082BE] text-white border-[#3082BE]' : 'bg-white/[0.03] text-slate-300 border-white/10'} h-[52px] px-6 rounded-full border text-sm font-semibold transition hover:border-white/30"
            >
              ${tab.label}
            </button>
          `).join('')}
        </div>

        <div id="project-grid" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5"></div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28 mb-6">
        <div class="rounded-[40px] border border-white/8 bg-[#3082BE]/10 p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Contact
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                Need a product or website to feel clearer and easier to trust?
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="mailto:aogegeoju0@gmail.com" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                Email me
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a href="/about.html" class="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold hover:border-white/30 transition">
                About me
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

const projectGrid = document.querySelector('#project-grid')
const tabButtons = document.querySelectorAll('.work-tab')

renderProjects('featured')

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(tab => {
      tab.classList.remove('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
      tab.classList.add('bg-white/[0.03]', 'text-slate-300', 'border-white/10')
    })

    button.classList.add('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
    button.classList.remove('bg-white/[0.03]', 'text-slate-300', 'border-white/10')

    renderProjects(button.dataset.tab)
  })
})

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