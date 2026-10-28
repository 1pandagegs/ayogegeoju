import './style.css'
import './cursor.js'
import logoImg from './assets/logo.png'
import heroCover from './assets/nepal-dashboard-cover.webp'
import { workTabs as tabs, projectsFor } from './projects-data.js'


// Brand images
import bLogoGoju1 from './assets/brand/brand-logo-goju-design-1.webp'
import bLogoGoju2 from './assets/brand/brand-logo-goju-design-2.webp'
import bLogoGoju3 from './assets/brand/brand-logo-goju-design-3.webp'
import bLogoFloralE1 from './assets/brand/brand-logo-floral-ecstasy-1.webp'
import bLogoFloralE2 from './assets/brand/brand-logo-floral-ecstasy-2.webp'
import bLogoFloralE3 from './assets/brand/brand-logo-floral-ecstasy-3.webp'
import bLogoFloralE4 from './assets/brand/brand-logo-floral-ecstasy-4.webp'
import bLogoAmfh1 from './assets/brand/brand-logo-a-message-for-her-1.webp'
import bLogoAmfh2 from './assets/brand/brand-logo-a-message-for-her-2.webp'
import bLogoMoodillon from './assets/brand/brand-logo-moodillon.webp'
import bLogoIronedge1 from './assets/brand/brand-logo-ironedge-1.webp'
import bLogoEchowaves1 from './assets/brand/brand-logo-echowaves-1.webp'
import bLogoEchowaves2 from './assets/brand/brand-logo-echowaves-2.webp'
import bLogoXu526 from './assets/brand/brand-logo-xu526.webp'
import bLogoAyoG from './assets/brand/brand-logo-ayo-gegeoju.webp'
import bLogoJonzee1 from './assets/brand/brand-logo-jonzee-world-final.webp'
import bLogoGreenSprout1 from './assets/brand/brand-logo-green-sprout-1.webp'
import bLogoGreenSprout2 from './assets/brand/brand-logo-green-sprout-2.webp'
import bLogoBrewBean1 from './assets/brand/brand-logo-brew-n-bean-1.webp'
import bLogoBrewBean2 from './assets/brand/brand-logo-brew-n-bean-2.webp'
import bLogoBrickBeam1 from './assets/brand/brand-logo-brick-a-beam-1.webp'
import bLogoBrickBeam2 from './assets/brand/brand-logo-brick-a-beam-2.webp'
import bSocialAs5_1 from './assets/brand/brand-social-as5-group-1.webp'
import bSocialAs5_2 from './assets/brand/brand-social-as5-group-2.webp'
import bSocialHnA1 from './assets/brand/brand-social-home-and-abroad-1.webp'
import bSocialHnA2 from './assets/brand/brand-social-home-and-abroad-2.webp'
import bSocialHnA3 from './assets/brand/brand-social-home-and-abroad-3.webp'
import bSocialHnA4 from './assets/brand/brand-social-home-and-abroad-4.webp'
import bSocialHnA5 from './assets/brand/brand-social-home-and-abroad-5.webp'
import bSocialHnA6 from './assets/brand/brand-social-home-and-abroad-6.webp'
import bSocialHnA7 from './assets/brand/brand-social-home-and-abroad-7.webp'
import bSocialHnA8 from './assets/brand/brand-social-home-and-abroad-8.webp'
import bSocialHnA9 from './assets/brand/brand-social-home-and-abroad-9.webp'
import bSocialHnA10 from './assets/brand/brand-social-home-and-abroad-10.webp'
import bIdentityCards1 from './assets/brand/brand-identity-cards-1.webp'
import bIdentityCards2 from './assets/brand/brand-identity-cards-2.webp'
import bIdentityCards3 from './assets/brand/brand-identity-cards-3.webp'
import bIdentityCards4 from './assets/brand/brand-identity-cards-4.webp'
import bIdentityPackaging from './assets/brand/brand-identity-packaging.webp'
import bIdentityBackdrops from './assets/brand/brand-identity-backdrops.webp'
import bIdentityOthers1 from './assets/brand/brand-identity-others-1.webp'
import bIdentityOthers2 from './assets/brand/brand-identity-others-2.webp'
import bIdentityOthers3 from './assets/brand/brand-identity-others-3.webp'
import bApparel1 from './assets/brand/brand-apparel-1.webp'
import bApparel2 from './assets/brand/brand-apparel-2.webp'
import bApparel3 from './assets/brand/brand-apparel-3.webp'
import bApparel4 from './assets/brand/brand-apparel-4.webp'
import { arrow } from './icons.js'

const brandTabs = [
  { label: 'All', value: 'all' },
  { label: 'Logos', value: 'logos' },
  { label: 'Social Media', value: 'social-media' },
  { label: 'Brand Identity', value: 'brand-identity' },
  { label: 'Apparel', value: 'apparel' }
]

const fallbackImg = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%230f172a%22/%3E%3C/svg%3E'

// Brand image gallery — all real files imported above
const brandGallery = [
  // Logos
  {
    title: 'Goju Design Solutions',
    type: 'logos',
    images: [bLogoGoju1, bLogoGoju2, bLogoGoju3]
  },
  {
    title: 'Floral Ecstasy',
    type: 'logos',
    images: [bLogoFloralE1, bLogoFloralE2, bLogoFloralE3, bLogoFloralE4]
  },
  {
    title: 'A Message For Her',
    type: 'logos',
    images: [bLogoAmfh1, bLogoAmfh2]
  },
  { title: 'Moodillon', type: 'logos', images: [bLogoMoodillon] },
  { title: 'IronEdge', type: 'logos', images: [bLogoIronedge1] },
  {
    title: 'EchoWaves',
    type: 'logos',
    images: [bLogoEchowaves1, bLogoEchowaves2]
  },
  { title: 'XU526', type: 'logos', images: [bLogoXu526] },
  { title: 'Ayo Gegeoju', type: 'logos', images: [bLogoAyoG] },
  {
    title: 'Brick & Beam',
    type: 'logos',
    images: [bLogoBrickBeam1, bLogoBrickBeam2]
  },
  {
    title: 'Jonzee World (JWI)',
    type: 'logos',
    images: [bLogoJonzee1]
  },
  {
    title: 'Green Sprout',
    type: 'logos',
    images: [bLogoGreenSprout1, bLogoGreenSprout2]
  },
  {
    title: 'Brew & Bean',
    type: 'logos',
    images: [bLogoBrewBean1, bLogoBrewBean2]
  },
  // Social Media
  {
    title: 'AS5 Group',
    type: 'social-media',
    images: [bSocialAs5_1, bSocialAs5_2]
  },
  {
    title: 'Home & Abroad',
    type: 'social-media',
    images: [bSocialHnA1, bSocialHnA2, bSocialHnA3, bSocialHnA4, bSocialHnA5, bSocialHnA6, bSocialHnA7, bSocialHnA8, bSocialHnA9, bSocialHnA10]
  },
  // Brand Identity
  {
    title: 'Business Cards',
    type: 'brand-identity',
    images: [bIdentityCards1, bIdentityCards2, bIdentityCards3, bIdentityCards4]
  },
  { title: 'Packaging', type: 'brand-identity', images: [bIdentityPackaging] },
  { title: 'Backdrops & Banners', type: 'brand-identity', images: [bIdentityBackdrops] },
  {
    title: 'Others',
    type: 'brand-identity',
    images: [bIdentityOthers1, bIdentityOthers2, bIdentityOthers3]
  },
  // Apparel
  {
    title: 'Apparel',
    type: 'apparel',
    images: [bApparel1, bApparel2, bApparel3, bApparel4]
  }
]

function projectCard(project, index) {
  return `
    <article class="group rounded-[34px] border border-white/80 glass overflow-hidden hover:bg-white/85 transition duration-300 hover:-translate-y-1">
      <div class="m-3 mb-0 aspect-[3/2] media-frame">
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

        <p class="text-slate-500 leading-relaxed mb-7">
          ${project.desc}
        </p>

        <a
          href="${project.href}"
          ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
          class="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#3082BE] transition"
        >
          ${project.external ? 'View live project' : project.href === '#' ? 'Coming soon' : 'View project'}
          <span class="inline-flex transition-transform group-hover/link:translate-x-1">${arrow(project.external ? 'up-right' : 'right')}</span>
        </a>
      </div>
    </article>
  `
}

let currentLightboxItems = []
let currentLightboxIndex = 0

function buildBrandCard(item, globalIndex) {
  const coverImg = item.images[0]
  const count = item.images.length
  return `
    <article
      class="group brand-card rounded-[28px] border border-white/80 glass overflow-hidden hover:bg-white/85 transition duration-300 hover:-translate-y-1 cursor-pointer"
      data-index="${globalIndex}"
      role="button"
      tabindex="0"
      aria-label="View ${item.title}"
    >
      <div class="m-2.5 mb-0 h-[260px] md:h-[320px] media-frame relative">
        <img
          src="${coverImg}"
          alt="${item.title}"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
          <div class="rounded-full bg-white/70 backdrop-blur-md border border-white/80 px-4 py-2 text-sm font-semibold text-[#0b1530]">
            View &#8599;
          </div>
        </div>
        ${count > 1 ? `<div class="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/80 px-2.5 py-1 text-[11px] font-semibold text-white">${count} images</div>` : ''}
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
  `
}

function attachBrandCardListeners() {
  const cards = document.querySelectorAll('.brand-card')
  cards.forEach(card => {
    card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index)))
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        openLightbox(parseInt(card.dataset.index))
      }
    })
  })
}

function renderBrandGallery(type = 'all') {
  const filteredItems = type === 'all'
    ? brandGallery
    : brandGallery.filter(item => item.type === type)

  currentLightboxItems = filteredItems

  projectGrid.innerHTML = `
    <div class="xl:col-span-3">
      <div class="rounded-[36px] border border-white/80 glass p-5 md:p-6 mb-8">
        <div class="flex flex-wrap gap-3">
          ${brandTabs.map((tab, index) => `
            <button
              data-brand-tab="${tab.value}"
              class="brand-tab  ${index === 0 ? 'bg-[#3082BE] text-white border-[#3082BE]' : 'glass text-slate-600 border-white/80'}  h-[48px] px-5 rounded-full border text-sm font-semibold transition hover:border-[#3082BE]/40"
            >
              ${tab.label}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="brand-gallery-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        ${filteredItems.map((item, i) => buildBrandCard(item, i)).join('')}
      </div>
    </div>
  `

  attachBrandCardListeners()

  const brandTabButtons = document.querySelectorAll('.brand-tab')

  brandTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const activeType = button.dataset.brandTab
      const filtered = activeType === 'all'
        ? brandGallery
        : brandGallery.filter(item => item.type === activeType)

      currentLightboxItems = filtered

      brandTabButtons.forEach(tab => {
        tab.classList.remove('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
        tab.classList.add('glass', 'text-slate-600', 'border-white/80')
      })

      button.classList.add('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
      button.classList.remove('glass', 'text-slate-600', 'border-white/80')

      const galleryGrid = document.querySelector('#brand-gallery-grid')
      galleryGrid.innerHTML = filtered.map((item, i) => buildBrandCard(item, i)).join('')
      attachBrandCardListeners()
    })
  })
}

function renderProjects(tab = 'featured') {
  if (tab === 'brand') {
    renderBrandGallery()
    const caseStudies = projectsFor('brand')
    if (caseStudies.length) {
      projectGrid.insertAdjacentHTML('afterbegin', caseStudies.map((project, index) => projectCard(project, index)).join(''))
    }
    return
  }

  const filteredProjects = projectsFor(tab)

  projectGrid.innerHTML = filteredProjects
    .map((project, index) => projectCard(project, index))
    .join('')
}

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

        <a href="/contact.html" class="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
          Get in touch
          <span class="inline-flex">${arrow('right')}</span>
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
        </div>
      </div>
    </nav>

    <main class="px-6 md:px-8 pt-24 pb-10">

      <section class="w-full max-w-[1600px] mx-auto fade-up">
        <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/80 glass shadow-2xl">
          <div class="relative p-6 md:p-10 lg:p-14 flex flex-col justify-between">

            <div class="relative z-10 flex items-start justify-between gap-8">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-3">
                  Work
                </p>
                <p class="text-sm text-slate-600">
                  Product design / Design + code / AI / Brand
                </p>
              </div>

              <div class="hidden lg:block max-w-[360px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  Designed with care, and often built by me too.
                </p>
              </div>
            </div>

            <div class="relative z-10 max-w-6xl">
              <p class="text-sm uppercase tracking-[0.25em] text-slate-500 mb-5">
                Selected work across real-world products
              </p>

              <h1 class="text-5xl md:text-6xl lg:text-[84px] font-bold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                Products I've designed, built and shipped.
              </h1>

              <p class="mt-8 text-lg md:text-[21px] text-slate-600 max-w-4xl leading-[1.8]">
                Public-sector dashboards and government platforms, SaaS and fintech products, apps and websites I designed and coded, AI tools, and original brand and character work.
              </p>
            </div>

            <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              ${[
                ['01', 'Product Design'],
                ['02', 'Design + Code'],
                ['03', 'AI Projects'],
                ['04', 'Brand & Illustration']
              ].map(item => `
                <div class="rounded-[22px] border border-white/80 glass backdrop-blur-xl p-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">#${item[0]}</p>
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
              Live products and platforms
            </p>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-slate-600">
              ${['Home & Abroad', 'Nepal Dashboard', 'Coverage Trackr', 'SYDAAR LMS', 'SwiftEntry', 'Manorr'].map(item => `
                <div class="rounded-full border border-white/80 glass px-4 py-3 text-center">
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Figma Showcase Section -->
      <section class="max-w-[1600px] mx-auto mt-14 mb-8">
        <div class="rounded-[28px] border border-white/80 glass p-6 relative overflow-hidden transition hover:bg-white/85 duration-300">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 h-10 w-10 rounded-xl glass border border-white/80 flex items-center justify-center">
                <svg class="h-5 w-auto" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V9.5C19 4.25 14.75 0 9.5 0Z" fill="#F24E1E"/>
                  <path d="M28.5 0C23.25 0 19 4.25 19 9.5V19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0Z" fill="#FF7262"/>
                  <path d="M19 19C19 24.25 23.25 28.5 28.5 28.5C33.75 28.5 38 24.25 38 19C38 13.75 33.75 9.5 28.5 9.5H19V19Z" fill="#1ABC9C"/>
                  <path d="M9.5 19C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38C14.75 38 19 33.75 19 28.5V19H9.5Z" fill="#0ACF83"/>
                  <path d="M9.5 38C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57C14.75 57 19 52.75 19 47.5V38H9.5Z" fill="#18A0FB"/>
                </svg>
              </div>
              <div>
                <h3 class="text-base font-bold text-[#0b1530] tracking-tight">Interactive design workspace</h3>
                <p class="text-sm text-slate-500 mt-1 max-w-2xl">
                  You can explore the actual components, layouts, and UX choices for these projects directly inside the Figma design files.
                </p>
              </div>
            </div>
            <a href="https://www.figma.com/design/BRJZI2BZaML2Mt398bFUfB/Ayo-Gegeoju?node-id=4-2035&t=E6oBKro4XfmUPviI-1" target="_blank" rel="noopener noreferrer" class="group/figma inline-flex items-center gap-2 rounded-full border border-white/80 glass text-slate-700 px-5 py-2.5 text-xs font-semibold hover:bg-[#0b1530] hover:text-black hover:border-[#0b1530] transition duration-300">
              View Figma Workspace
              <span class="inline-flex transition-transform group-hover/figma:translate-x-0.5">${arrow('up-right')}</span>
            </a>
          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-16">
        <div class="flex flex-wrap gap-3 mb-10">
          ${tabs.map((tab, index) => `
            <button
              data-tab="${tab.value}"
              class="work-tab  ${index === 0 ? 'bg-[#3082BE] text-white border-[#3082BE]' : 'glass text-slate-600 border-white/80'}  h-[52px] px-6 rounded-full border text-sm font-semibold transition hover:border-[#3082BE]/40"
            >
              ${tab.label}
            </button>
          `).join('')}
        </div>

        <div id="project-grid" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5"></div>
      </section>



      <section class="max-w-[1600px] mx-auto mt-28 mb-6">
        <div class="rounded-[40px] border border-white/80 glass-tint p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Contact
              </p>

              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                Need a product or website to feel clearer and easier to trust?
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="mailto:aogegeoju0@gmail.com" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                Email me
                <span class="inline-flex transition-transform group-hover:translate-x-1">${arrow('right')}</span>
              </a>

              <a href="/about.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                About me
                <span class="inline-flex transition-transform group-hover:translate-x-1">${arrow('right')}</span>
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

const projectGrid = document.querySelector('#project-grid')
const tabButtons = document.querySelectorAll('.work-tab')

renderProjects(tabs[0].value)

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(tab => {
      tab.classList.remove('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
      tab.classList.add('glass', 'text-slate-600', 'border-white/80')
    })

    button.classList.add('bg-[#3082BE]', 'text-white', 'border-[#3082BE]')
    button.classList.remove('glass', 'text-slate-600', 'border-white/80')

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

// ---- Lightbox ----
let currentSubIndex = 0

const lightboxEl = document.createElement('div')
lightboxEl.id = 'brand-lightbox'
lightboxEl.setAttribute('role', 'dialog')
lightboxEl.setAttribute('aria-modal', 'true')
lightboxEl.setAttribute('aria-label', 'Image lightbox')
lightboxEl.innerHTML = `
  <div id="lightbox-backdrop" class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-300">
    <button id="lightbox-close" aria-label="Close" class="absolute top-5 right-5 z-10 h-11 w-11 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-[#0b1530] text-xl hover:bg-white transition">
      &#10005;
    </button>

    <button id="lightbox-prev" aria-label="Previous entry" class="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-[#0b1530] hover:bg-white transition">
      &#8592;
    </button>

    <button id="lightbox-next" aria-label="Next entry" class="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-[#0b1530] hover:bg-white transition">
      &#8594;
    </button>

    <div class="relative max-w-4xl w-full flex flex-col items-center gap-4">
      <img id="lightbox-img" src="" alt="" class="max-h-[68vh] max-w-full rounded-[20px] object-contain shadow-2xl transition-opacity duration-200" />

      <div class="flex flex-col items-center gap-1">
        <p id="lightbox-type" class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE]"></p>
        <p id="lightbox-title" class="text-xl font-bold text-[#0b1530] tracking-tight"></p>
        <p id="lightbox-counter" class="text-sm text-slate-500"></p>
      </div>

      <div id="lightbox-thumbnails" class="flex gap-2 flex-wrap justify-center max-w-2xl"></div>
    </div>
  </div>
`
document.body.appendChild(lightboxEl)

const backdrop = document.querySelector('#lightbox-backdrop')
const lightboxImg = document.querySelector('#lightbox-img')
const lightboxTitle = document.querySelector('#lightbox-title')
const lightboxType = document.querySelector('#lightbox-type')
const lightboxCounter = document.querySelector('#lightbox-counter')
const lightboxThumbnails = document.querySelector('#lightbox-thumbnails')
const btnClose = document.querySelector('#lightbox-close')
const btnPrev = document.querySelector('#lightbox-prev')
const btnNext = document.querySelector('#lightbox-next')

function renderThumbnails(item) {
  if (item.images.length <= 1) {
    lightboxThumbnails.innerHTML = ''
    return
  }
  lightboxThumbnails.innerHTML = item.images.map((img, i) => `
    <button
      class="lightbox-thumb w-14 h-14 rounded-[10px] overflow-hidden border-2 transition  ${
        i === currentSubIndex ? 'border-[#3082BE] opacity-100 scale-110' : 'border-white/80 opacity-50 hover:opacity-80'
      } "
      data-sub="${i}"
      aria-label="View image ${i + 1}"
    >
      <img src="${img}" alt="" class="w-full h-full object-cover" />
    </button>
  `).join('')

  lightboxThumbnails.querySelectorAll('.lightbox-thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSubIndex = parseInt(btn.dataset.sub)
      updateLightboxImage()
      renderThumbnails(currentLightboxItems[currentLightboxIndex])
    })
  })
}

function updateLightboxImage() {
  const item = currentLightboxItems[currentLightboxIndex]
  lightboxImg.style.opacity = '0'
  setTimeout(() => {
    lightboxImg.src = item.images[currentSubIndex]
    lightboxImg.alt = item.title
    lightboxImg.style.opacity = '1'
  }, 150)
}

function updateLightboxContent() {
  const item = currentLightboxItems[currentLightboxIndex]
  currentSubIndex = 0
  lightboxTitle.textContent = item.title
  lightboxType.textContent = item.type.replaceAll('-', ' ')
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxItems.length}`
  updateLightboxImage()
  renderThumbnails(item)
}

function openLightbox(index) {
  currentLightboxIndex = index
  updateLightboxContent()
  backdrop.classList.remove('opacity-0', 'pointer-events-none')
  backdrop.classList.add('opacity-100')
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  backdrop.classList.add('opacity-0', 'pointer-events-none')
  backdrop.classList.remove('opacity-100')
  document.body.style.overflow = ''
}

btnClose.addEventListener('click', closeLightbox)

btnPrev.addEventListener('click', () => {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length
  updateLightboxContent()
})

btnNext.addEventListener('click', () => {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length
  updateLightboxContent()
})

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeLightbox()
})

document.addEventListener('keydown', e => {
  if (backdrop.classList.contains('opacity-0')) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') {
    const item = currentLightboxItems[currentLightboxIndex]
    if (currentSubIndex > 0) {
      currentSubIndex--
      updateLightboxImage()
      renderThumbnails(item)
    } else {
      currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length
      updateLightboxContent()
    }
  }
  if (e.key === 'ArrowRight') {
    const item = currentLightboxItems[currentLightboxIndex]
    if (currentSubIndex < item.images.length - 1) {
      currentSubIndex++
      updateLightboxImage()
      renderThumbnails(item)
    } else {
      currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length
      updateLightboxContent()
    }
  }
})