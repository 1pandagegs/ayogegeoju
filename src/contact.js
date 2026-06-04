import './style.css'

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
          <a href="/work.html" class="text-slate-400 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-400 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="relative text-white transition-colors duration-200">
            Contact
            <span class="absolute left-0 -bottom-[18px] h-px w-full bg-[#3082BE]"></span>
          </a>
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
          <a href="/work.html" class="text-slate-300 hover:text-white transition-colors duration-200">Work</a>
          <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <section class="mb-24 fade-up">
          <div class="grid lg:grid-cols-[1.1fr_420px] gap-10 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
                Contact
              </p>

              <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl mb-6">
                Let’s build something clear, useful, and memorable.
              </h1>

              <p class="text-lg md:text-[21px] text-slate-400 max-w-3xl leading-[1.8]">
                If you’re working on a product, platform, or website and need stronger clarity, better structure, or a more thoughtful interface direction, I’d love to hear about it.
              </p>
            </div>

            <div class="rounded-[28px] border border-white/8 bg-white/[0.02] p-6 lg:p-7">
              <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">
                Best way to reach me
              </p>

              <a
                href="mailto:aogegeoju0@gmail.com"
                class="block text-xl md:text-2xl font-semibold tracking-[-0.03em] text-white hover:text-[#3082BE] transition-colors duration-200 break-all"
              >
                aogegeoju0@gmail.com
              </a>

              <p class="text-sm text-slate-400 leading-relaxed mt-4">
                Email is the best way to reach me for freelance work, collaborations, product design opportunities, and website design projects.
              </p>
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Reach out
              </p>
            </div>

            <div class="max-w-4xl fade-up fade-delay-1">
              <div class="grid md:grid-cols-2 gap-6">

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <p class="text-sm uppercase tracking-[0.22em] text-slate-500 mb-3">Email</p>
                  <a
                    href="mailto:aogegeoju0@gmail.com"
                    class="text-xl md:text-2xl font-semibold tracking-[-0.03em] hover:text-[#3082BE] transition-colors duration-200 break-all"
                  >
                    aogegeoju0@gmail.com
                  </a>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <p class="text-sm uppercase tracking-[0.22em] text-slate-500 mb-3">Availability</p>
                  <p class="text-lg text-slate-400 leading-relaxed">
                    Available for selected freelance projects, product design collaborations, and website design work.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6 md:col-span-2">
                  <p class="text-sm uppercase tracking-[0.22em] text-slate-500 mb-3">What to include</p>
                  <p class="text-lg text-slate-400 leading-relaxed">
                    A short overview of what you’re building, the kind of help you need, your timeline, and any goals or problems you already want the design to solve.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Quick action
              </p>
            </div>

            <div class="max-w-3xl fade-up fade-delay-2">
              <a
                href="mailto:aogegeoju0@gmail.com?subject=Project%20Inquiry"
                class="group inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:border-white/30 transition"
              >
                Send an email
                <span class="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
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