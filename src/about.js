import './style.css'
import portraitImg from './assets/portrait-placeholder.jpg'

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white relative overflow-x-hidden">

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
          <a href="/about.html" class="relative text-white transition-colors duration-200">
            About
            <span class="absolute left-0 -bottom-[18px] h-px w-full bg-[#3082BE]"></span>
          </a>
          <a href="/contact.html" class="text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
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
          <a href="/about.html" class="text-white transition-colors duration-200">About</a>
          <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <!-- HERO -->
        <section class="mb-24">
          <div class="grid md:grid-cols-[1.15fr_400px] gap-10 items-end">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
                About
              </p>

              <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl mb-6">
                I design digital experiences that feel clear, credible, and easy to move through.
              </h1>

              <p class="text-lg md:text-[21px] text-slate-400 max-w-3xl leading-[1.8] mb-8">
                I work at the intersection of product thinking, interface design, and visual clarity. My goal is to make digital products easier to understand, easier to trust, and stronger in the way they communicate value.
              </p>

              <div class="grid sm:grid-cols-3 gap-4 max-w-3xl">
                <div class="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Focus</p>
                  <p class="text-sm text-slate-300 leading-relaxed">
                    Product design, UX clarity, and digital trust
                  </p>
                </div>

                <div class="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Strength</p>
                  <p class="text-sm text-slate-300 leading-relaxed">
                    Turning complex experiences into simpler journeys
                  </p>
                </div>

                <div class="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">Approach</p>
                  <p class="text-sm text-slate-300 leading-relaxed">
                    Structure first, polish second
                  </p>
                </div>
              </div>
            </div>

            <div class="md:justify-self-end w-full max-w-[380px]">
              <div class="rounded-[32px] border border-white/8 bg-slate-900 p-3">
                <div class="aspect-[4/5] w-full rounded-[26px] border border-white/6 bg-[#0b1220] overflow-hidden flex flex-col">
                  <div class="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                    <span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-white/10"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-white/10"></span>
                  </div>

                  <div class="flex-1 overflow-hidden">
                    <img
                      src="${portraitImg}"
                      alt="Portrait of Ayo Gegeoju"
                      class="h-full w-full object-cover"
                    />
                  </div>

                  <div class="border-t border-white/5 px-4 py-4">
                    <p class="text-white text-sm font-medium mb-1">Ayo Gegeoju</p>
                    <p class="text-slate-500 text-xs uppercase tracking-[0.18em]">
                      Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- INTRO -->
        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Introduction
              </p>
            </div>

            <div class="max-w-3xl space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I’m a product designer with a strong interest in systems, product strategy, and user experiences that need more clarity than decoration. I care about the way interfaces guide people, the way information is structured, and the way design shapes trust.
              </p>

              <p>
                My work is usually driven by the same question: how can this experience become easier to understand without losing depth? That question shapes the way I think about layout, navigation, hierarchy, decision-making, and the overall feeling a product leaves behind.
              </p>
            </div>
          </div>
        </section>

        <!-- WHAT I CARE ABOUT -->
        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                What I care about
              </p>
            </div>

            <div class="max-w-4xl">
              <h2 class="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-8">
                Design should reduce friction, not add to it
              </h2>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Clarity</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I value interfaces that explain themselves quickly and make people feel oriented instead of overwhelmed.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Trust</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I pay close attention to how design can make a product feel more credible, more intentional, and more dependable.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Flow</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I think carefully about what people need to see first, what they need next, and how each screen supports movement.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Usefulness</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Good design should help users do something better, faster, or with more confidence than before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- HOW I THINK -->
        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                How I think
              </p>
            </div>

            <div class="max-w-4xl">
              <div class="grid md:grid-cols-3 gap-6">
                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">01</p>
                  <h3 class="text-xl font-semibold mb-3">Understand the problem</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Before I move into screens, I try to understand what is actually broken, confusing, or missing in the experience.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">02</p>
                  <h3 class="text-xl font-semibold mb-3">Create structure</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Once the problem is clearer, I focus on hierarchy, navigation, layout, and how the content should be arranged.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-3">03</p>
                  <h3 class="text-xl font-semibold mb-3">Refine the feel</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Visual polish matters, but only after the experience already feels coherent, intentional, and usable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- WORKING STYLE -->
        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Working style
              </p>
            </div>

            <div class="max-w-3xl space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I tend to work best on products and digital experiences that need stronger direction, cleaner interface systems, and more thoughtful user journeys. That could mean product dashboards, service platforms, web experiences, or concept-driven digital tools.
              </p>

              <p>
                I’m especially drawn to work where the design challenge is not just aesthetic, but structural. The kind of work where the product needs to feel more intentional, more legible, and more aligned with what people are actually trying to do.
              </p>
            </div>
          </div>
        </section>

        <!-- SKILLS / TOOLS -->
        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Tools & strengths
              </p>
            </div>

            <div class="max-w-4xl">
              <div class="flex flex-wrap gap-3">
                ${[
                  'Product Design',
                  'UX Strategy',
                  'Interface Design',
                  'Design Systems',
                  'Wireframing',
                  'High-Fidelity UI',
                  'Web Design',
                  'Prototyping',
                  'Figma',
                  'Visual Direction'
                ].map(item => `
                  <span class="px-4 py-3 rounded-full border border-white/8 bg-white/[0.02] text-sm text-slate-300">
                    ${item}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="border-t border-white/5 pt-16">
          <div class="max-w-3xl">
            <h2 class="text-3xl md:text-5xl font-bold leading-[1.02] tracking-[-0.03em] mb-6">
              If you need a product to feel clearer, sharper, and easier to trust, we should talk.
            </h2>

            <p class="text-lg text-slate-400 leading-relaxed mb-10">
              I’m open to selected freelance work, product collaborations, and design opportunities where clarity and thoughtful execution matter.
            </p>

            <a href="/contact.html"
               class="group inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:border-white/30 transition">
              Get in touch
              <span class="transition group-hover:translate-x-1">→</span>
            </a>
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