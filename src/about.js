import './style.css'
import portraitImg from './assets/portrait-placeholder.jpg'

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-x-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-10%] top-[120px] h-[320px] w-[320px] rounded-full bg-[#3082BE]/10 blur-[120px]"></div>
      <div class="absolute right-[-10%] top-[520px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[140px]"></div>
      <div class="absolute left-[35%] bottom-[120px] h-[280px] w-[280px] rounded-full bg-white/5 blur-[120px]"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
    <a href="/" class="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-white">
      <span class="text-[#3082BE]">AG.</span>
    </a>

    <div class="hidden md:flex items-center gap-8 text-[13px]">
      <a href="/work" class="text-slate-400 hover:text-white transition-colors duration-200">Work</a>
      <a href="/about" class="relative text-white transition-colors duration-200">
        About
        <span class="absolute left-0 -bottom-[18px] h-px w-full bg-[#3082BE]"></span>
      </a>
      <a href="/contact" class="text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
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
      <a href="/work" class="text-slate-300 hover:text-white transition-colors duration-200">Work</a>
<a href="/about" class="text-white transition-colors duration-200">About</a>
<a href="/contact" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
    </div>
  </div>
</nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

            <section class="mb-20 fade-up">
  <div class="grid md:grid-cols-[1.2fr_420px] gap-10 items-end">

    <div>
      <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
        About
      </p>

      <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl mb-6">
        I design digital experiences that feel clear, thoughtful, and easy to trust.
      </h1>

      <p class="text-lg md:text-[21px] text-slate-400 max-w-3xl leading-[1.8]">
        My work sits between product thinking and visual design, with a focus on creating experiences that make sense to people and support real business goals.
      </p>
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

        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Introduction
              </p>
            </div>

            <div class="max-w-3xl fade-up fade-delay-1">
              <p class="text-lg text-slate-400 leading-relaxed mb-6">
                I’m Ayo Gegeoju, a product designer with an interest in interfaces, systems, and digital experiences that need stronger clarity and more intentional structure.
              </p>

              <p class="text-lg text-slate-400 leading-relaxed">
                I care about helping products feel easier to understand, easier to move through, and more aligned with the people using them.
              </p>
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Approach
              </p>
            </div>

            <div class="max-w-4xl fade-up fade-delay-2">
              <h2 class="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-8">
                Clarity first, polish second
              </h2>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Product thinking</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I try to understand the problem behind the interface so the design solves something real, not just something visual.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Structure</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I care a lot about hierarchy, flow, and the way information is arranged, because that is often where clarity begins.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Visual direction</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I aim for visual systems that feel calm, intentional, and supportive of the experience rather than distracting from it.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Usability</h3>
                  <p class="text-slate-400 leading-relaxed">
                    I want the final experience to feel easy to understand, easy to trust, and easier to use than what came before it.
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
                Focus
              </p>
            </div>

            <div class="max-w-3xl fade-up fade-delay-3">
              <p class="text-lg text-slate-400 leading-relaxed mb-6">
                I’m especially drawn to digital products, platforms, and websites that need stronger trust, cleaner structure, and a more considered user journey.
              </p>

              <p class="text-lg text-slate-400 leading-relaxed">
                That could mean product dashboards, operational tools, health systems, real estate platforms, or modern web experiences that need clearer design direction.
              </p>
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