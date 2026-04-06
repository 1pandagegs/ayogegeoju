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
      <span class="text-lg leading-none">☰</span>
    </button>
  </div>

  <div id="mobile-menu" class="md:hidden hidden border-t border-white/5 px-6 pb-6 pt-4">
    <div class="flex flex-col gap-4 text-sm">
      <a href="/work.html" class="text-slate-300 hover:text-white transition-colors duration-200">Work</a>
      <a href="/about.html" class="text-slate-300 hover:text-white transition-colors duration-200">About</a>
      <a href="/contact.html" class="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
    </div>
  </div>
</nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <div class="mb-12 fade-up">
          <a href="/index.html#work" class="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-8">
            <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back to work
          </a>

          <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-4">
            Operations / Planning Tool
          </p>

          <h1 class="text-4xl md:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl mb-6">
            Coverage Trackr
          </h1>

          <p class="text-lg md:text-[21px] text-slate-400 max-w-3xl leading-[1.8]">
            A planning and monitoring tool created to support smarter operational decisions, better resource allocation, and clearer coverage visibility.
          </p>
        </div>

        <section class="mb-20 fade-up fade-delay-1">
  <div class="w-full rounded-[32px] border border-white/5 bg-slate-900 p-4 md:p-5">
    <div class="rounded-[26px] border border-white/5 bg-[#0b1220] overflow-hidden">
      <div class="flex items-center gap-2 px-5 py-4 border-b border-white/5">
        <span class="h-3 w-3 rounded-full bg-white/20"></span>
        <span class="h-3 w-3 rounded-full bg-white/10"></span>
        <span class="h-3 w-3 rounded-full bg-white/10"></span>
        <div class="ml-4 h-2.5 w-28 rounded-full bg-white/10"></div>
      </div>

      <div class="p-5 md:p-6">
        <div class="grid md:grid-cols-[260px_1fr] gap-4 min-h-[320px] md:min-h-[520px]">
          <div class="rounded-[20px] bg-white/[0.03] border border-white/5 p-4">
            <div class="h-3 w-24 rounded-full bg-[#3082BE]/70 mb-6"></div>
            <div class="space-y-3">
              <div class="h-2 w-full rounded-full bg-white/10"></div>
              <div class="h-2 w-5/6 rounded-full bg-white/10"></div>
              <div class="h-2 w-4/6 rounded-full bg-white/10"></div>
            </div>
            <div class="mt-6 h-28 rounded-[16px] bg-white/[0.04] border border-white/5"></div>
          </div>

          <div class="rounded-[20px] bg-white/[0.03] border border-white/5 p-4 flex flex-col">
            <div class="flex items-center justify-between mb-5">
              <div class="h-3 w-32 rounded-full bg-white/15"></div>
              <div class="h-10 w-10 rounded-full bg-[#3082BE]/20 border border-[#3082BE]/20"></div>
            </div>

            <div class="grid grid-cols-2 gap-4 flex-1">
              <div class="rounded-[16px] bg-white/[0.04] border border-white/5"></div>
              <div class="rounded-[16px] bg-white/[0.04] border border-white/5"></div>
              <div class="col-span-2 rounded-[16px] bg-white/[0.04] border border-white/5"></div>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <div class="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Coverage Trackr Hero Preview
              </div>
              <div class="h-2.5 w-24 rounded-full bg-white/10"></div>
            </div>
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
                Overview
              </p>
            </div>

            <div class="max-w-3xl fade-up fade-delay-1">
              <p class="text-lg text-slate-400 leading-relaxed mb-6">
                Coverage Trackr was conceived as a planning and visibility tool for teams that needed a clearer understanding of where resources were going, what areas were covered, and where gaps still existed.
              </p>

              <p class="text-lg text-slate-400 leading-relaxed">
                The aim was to create a calmer, more readable experience that could support faster coordination and more informed operational decisions.
              </p>
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Problem
              </p>
            </div>

            <div class="max-w-3xl fade-up fade-delay-2">
              <h2 class="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                Visibility was fragmented, and planning suffered because of it
              </h2>

              <p class="text-lg text-slate-400 leading-relaxed mb-6">
                When teams cannot clearly see distribution, coverage status, or resource gaps, planning becomes slower, coordination becomes less efficient, and important decisions become harder to make with confidence.
              </p>

              <p class="text-lg text-slate-400 leading-relaxed">
                The challenge was to design a system that simplified complexity without oversimplifying the work teams actually needed to do.
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
                Make complexity readable
              </h2>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Coverage clarity</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Structured information to help teams quickly understand status, progress, and areas needing attention.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Planning support</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Designed screens that made allocation and planning decisions feel more manageable and less fragmented.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Operational visibility</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Focused on surfacing the information that teams would need most often to coordinate effectively.
                  </p>
                </div>

                <div class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold mb-3">Readable interface system</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Reduced visual clutter and improved hierarchy so the experience could support decision-making more clearly.
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
                Screens
              </p>
            </div>

            <div class="fade-up fade-delay-3">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="h-[280px] rounded-[28px] bg-slate-800 border border-white/5 flex items-center justify-center text-slate-500">
                  Dashboard placeholder
                </div>
                <div class="h-[280px] rounded-[28px] bg-slate-800 border border-white/5 flex items-center justify-center text-slate-500">
                  Planning screen placeholder
                </div>
                <div class="h-[280px] rounded-[28px] bg-slate-800 border border-white/5 flex items-center justify-center text-slate-500">
                  Coverage map placeholder
                </div>
                <div class="h-[280px] rounded-[28px] bg-slate-800 border border-white/5 flex items-center justify-center text-slate-500">
                  Resource view placeholder
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="border-t border-white/5 py-16">
          <div class="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                Outcome
              </p>
            </div>

            <div class="max-w-3xl fade-up fade-delay-3">
              <p class="text-lg text-slate-400 leading-relaxed mb-6">
                The result was a product direction focused on clearer oversight, better planning confidence, and a more structured way to interpret operational complexity.
              </p>

              <p class="text-lg text-slate-400 leading-relaxed">
                Rather than overwhelming users with data, the experience aimed to make important information easier to understand and act on.
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