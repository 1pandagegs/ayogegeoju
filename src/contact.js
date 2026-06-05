import './style.css'
import logoImg from './assets/logo.png'

const contactOptions = [
  {
    label: 'Email',
    value: 'aogegeoju0@gmail.com',
    href: 'mailto:aogegeoju0@gmail.com',
    desc: 'Best for project inquiries, freelance work, collaborations, and opportunities.'
  },
  {
    label: 'GitHub',
    value: '1pandagegs',
    href: 'https://github.com/1pandagegs',
    desc: 'See code, experiments, and development work.'
  },
  {
    label: 'Portfolio',
    value: 'ayogegeoju.com.ng',
    href: 'https://www.ayogegeoju.com.ng/',
    desc: 'View my design and product work.'
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
          <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-white transition-colors duration-200">Contact</a>
        </div>

        <a href="mailto:aogegeoju0@gmail.com" class="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
          Email me
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
          <a href="/contact.html" class="text-white transition-colors duration-200">Contact</a>
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
                  Contact
                </p>
                <p class="text-sm text-slate-300">
                  Product design / Web design / Brand identity / Frontend work
                </p>
              </div>

              <div class="hidden lg:block max-w-[340px]">
                <p class="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  The best projects usually start with a clear conversation.
                </p>
              </div>
            </div>

            <div class="relative z-10 max-w-6xl">
              <p class="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                Let’s talk
              </p>

              <h1 class="text-5xl md:text-7xl lg:text-[104px] font-extrabold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                Let’s build something useful, clear, and memorable.
              </h1>

              <p class="mt-8 text-lg md:text-[21px] text-slate-300 max-w-4xl leading-[1.8]">
                If you’re working on a product, platform, website, brand identity, or digital experience and need stronger clarity, better structure, or sharper execution, I’d love to hear about it.
              </p>

              <div class="mt-10 flex flex-wrap gap-4">
                <a href="mailto:aogegeoju0@gmail.com?subject=Project%20Inquiry" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                  Send an email
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>

                <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-white/35 transition">
                  View work
                  <span class="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              ${[
                ['Product Design', 'Enterprise systems, dashboards, and SaaS products'],
                ['Web Experiences', 'Websites for brands, businesses, and products'],
                ['Brand & Marketing', 'Identity, campaign, and visual design support']
              ].map(item => `
                <div class="rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-xl p-5">
                  <p class="text-sm font-semibold text-white mb-2">${item[0]}</p>
                  <p class="text-sm text-slate-400">${item[1]}</p>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-8">
        <div class="grid lg:grid-cols-3 gap-5">
          ${contactOptions.map(option => `
            <a
              href="${option.href}"
              target="${option.href.startsWith('http') ? '_blank' : '_self'}"
              rel="${option.href.startsWith('http') ? 'noopener noreferrer' : ''}"
              class="group rounded-[34px] border border-white/8 bg-white/[0.03] p-7 md:p-8 hover:bg-white/[0.05] transition"
            >
              <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-5">
                ${option.label}
              </p>

              <h2 class="text-2xl md:text-3xl font-bold tracking-[-0.04em] break-all mb-4 group-hover:text-[#3082BE] transition">
                ${option.value}
              </h2>

              <p class="text-slate-400 leading-relaxed">
                ${option.desc}
              </p>
            </a>
          `).join('')}
        </div>
      </section>

      <section class="max-w-[1600px] mx-auto mt-28">
        <div class="rounded-[40px] border border-white/8 bg-white/[0.03] p-6 md:p-10">
          <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                What to include
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                Help me understand what you’re building.
              </h2>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              ${[
                ['Project overview', 'What are you building, redesigning, or trying to improve?'],
                ['Your goal', 'What should the product, website, or brand experience help you achieve?'],
                ['Timeline', 'When do you want to start, and when would you like to launch?'],
                ['Current assets', 'Send any existing links, screenshots, Figma files, references, or notes.']
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

      <section class="max-w-[1600px] mx-auto mt-28 mb-6">
        <div class="rounded-[40px] border border-white/8 bg-[#3082BE]/10 p-8 md:p-12">
          <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">
                Quick action
              </p>

              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                Ready to start the conversation?
              </h2>
            </div>

            <div class="flex flex-wrap gap-4 lg:justify-end">
              <a href="mailto:aogegeoju0@gmail.com?subject=Project%20Inquiry" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
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
          <a href="/work.html" class="text-slate-400 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-400 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-white">Contact</a>
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