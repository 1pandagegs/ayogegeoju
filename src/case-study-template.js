import logoImg from './assets/logo.png'
import fallbackImg from './assets/coverage-trackr-cover.png'

export function renderCaseStudy(project) {
  const image = project.image || fallbackImg

  document.querySelector('#app').innerHTML = `
    <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-hidden">

      <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute left-[-12%] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3082BE]/20 blur-[150px]"></div>
        <div class="absolute right-[-12%] top-[480px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[160px]"></div>
      </div>

      <nav class="fixed top-0 w-full z-50 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div class="max-w-[1600px] mx-auto px-6 md:px-8 h-[76px] flex items-center justify-between">
          <a href="/index.html">
            <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-6 w-auto" />
          </a>

          <div class="hidden md:flex items-center gap-8 text-[13px]">
            <a href="/work.html" class="text-white">Work</a>
            <a href="/about.html" class="text-slate-300 hover:text-white">About</a>
            <a href="/contact.html" class="text-slate-300 hover:text-white">Contact</a>
          </div>

          ${project.liveLink ? `
            <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
              Live project <span>↗</span>
            </a>
          ` : ''}
        </div>
      </nav>

      <main class="px-6 md:px-8 pt-24 pb-10">

        <section class="w-full max-w-[1600px] mx-auto fade-up">
          <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
            <div class="relative min-h-[calc(100vh-120px)] p-6 md:p-10 lg:p-14 flex flex-col justify-between">

              <div class="absolute inset-0">
                <img src="${image}" alt="${project.title}" class="h-full w-full object-cover opacity-35 scale-105" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/45"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/25"></div>
              </div>

              <div class="relative z-10 flex items-start justify-between gap-8">
                <div>
                  <a href="/work.html" class="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-5">
                    <span class="transition-transform group-hover:-translate-x-1">←</span>
                    Back to work
                  </a>

                  <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                    ${project.category}
                  </p>
                </div>
              </div>

              <div class="relative z-10 max-w-6xl">
                <p class="text-sm uppercase tracking-[0.25em] text-white/50 mb-5">
                  Case Study
                </p>

                <h1 class="text-5xl md:text-7xl lg:text-[104px] font-extrabold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                  ${project.title}
                </h1>

                <p class="mt-8 text-lg md:text-[21px] text-slate-300 max-w-4xl leading-[1.8]">
                  ${project.summary}
                </p>

                <div class="mt-10 flex flex-wrap gap-4">
                  ${project.liveLink ? `
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                      Visit live project
                      <span class="transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  ` : ''}

                  <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-white/35 transition">
                    More projects
                    <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
                ${project.meta.map(item => `
                  <div class="rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-xl p-5">
                    <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">${item.label}</p>
                    <p class="text-sm text-slate-200">${item.value}</p>
                  </div>
                `).join('')}
              </div>

            </div>
          </div>
        </section>

        <section class="max-w-[1600px] mx-auto mt-28">
          <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">Overview</p>
              <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em]">
                ${project.overviewTitle}
              </h2>
            </div>

            <div class="rounded-[34px] border border-white/8 bg-white/[0.03] p-7 md:p-8">
              <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
                ${project.overview.map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          </div>
        </section>

        <section class="max-w-[1600px] mx-auto mt-28">
          <div class="grid lg:grid-cols-2 gap-5">
            ${project.screens.map(screen => `
              <div class="group rounded-[34px] border border-white/8 bg-white/[0.03] overflow-hidden">
                <div class="h-[320px] md:h-[460px] overflow-hidden bg-slate-900">
                  <img src="${screen.image || image}" alt="${screen.title}" class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                </div>
                <div class="p-6">
                  <p class="text-sm text-slate-400">${screen.title}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="max-w-[1600px] mx-auto mt-28 mb-6">
          <div class="rounded-[40px] border border-white/8 bg-[#3082BE]/10 p-8 md:p-12">
            <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">Outcome</p>
                <h2 class="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                  ${project.outcome}
                </h2>
              </div>

              <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full bg-white text-[#020617] px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                More work
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer class="px-6 md:px-8 py-10 border-t border-white/10 bg-[#020617]">
        <div class="max-w-[1600px] mx-auto rounded-[28px] border border-white/8 bg-white/[0.03] px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p class="text-sm text-slate-500">© 2026 Ayo Gegeoju</p>

          <div class="flex items-center gap-6 text-sm">
            <a href="/work.html" class="text-white">Work</a>
            <a href="/about.html" class="text-slate-400 hover:text-white">About</a>
            <a href="/contact.html" class="text-slate-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  `

  const pageRoot = document.querySelector('#page-root')
  if (pageRoot) {
    requestAnimationFrame(() => {
      pageRoot.classList.add('page-enter-active')
    })
  }
}