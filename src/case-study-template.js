import './cursor.js'
import logoImg from './assets/logo.png'
import fallbackImg from './assets/coverage-trackr-cover.webp'

function renderSections(project) {
  if (!project.sections || !project.sections.length) return ''
  return `
    <section class="max-w-[1600px] mx-auto mt-28">
      <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">${project.sectionsLabel || 'What I did'}</p>
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        ${project.sections.map((item, i) => `
          <div class="rounded-[30px] border border-white/80 glass p-7">
            <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-4">${String(i + 1).padStart(2, '0')}</p>
            <h3 class="text-2xl font-bold tracking-[-0.03em] mb-3">${item.title}</h3>
            <p class="text-slate-500 leading-relaxed">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

function renderScreens(project, cover) {
  const shots = (project.screens || []).filter(screen => screen.image)
  const heading = `
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div>
        <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">Screens</p>
        <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">${project.screensTitle || 'Inside the product.'}</h2>
      </div>
      ${project.screensNote ? `<p class="text-sm text-slate-500 max-w-md md:text-right">${project.screensNote}</p>` : ''}
    </div>
  `

  if (!shots.length) return ''

  if (project.screensLayout === 'phone') {
    return `
      <section class="max-w-[1600px] mx-auto mt-28">
        ${heading}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
          ${shots.map(screen => `
            <figure class="rounded-[34px] border border-white/80 glass p-4 md:p-6">
              <img src="${screen.image}" alt="${screen.title}" loading="lazy" class="w-full h-auto rounded-[24px] block" />
              <figcaption class="pt-4 text-sm text-slate-500">${screen.title}</figcaption>
            </figure>
          `).join('')}
        </div>
      </section>
    `
  }

  return `
    <section class="max-w-[1600px] mx-auto mt-28">
      ${heading}
      <div class="grid lg:grid-cols-6 gap-5 items-start">
        ${shots.map((screen, i) => `
          <figure class=" ${screen.span === 'full' || (i === 0 && !screen.span) ? 'lg:col-span-6' : screen.span === 'third' ? 'lg:col-span-2' : 'lg:col-span-3'}  rounded-[34px] border border-white/80 glass p-3">
            <div class="media-frame ${screen.contain ? 'p-6 md:p-10 flex justify-center' : ''} ">
              <img src="${screen.image}" alt="${screen.title}" loading="lazy" class=" ${screen.contain ? 'max-h-[720px] w-auto max-w-full rounded-[20px]' : 'w-full h-auto'}  block" />
            </div>
            <figcaption class="px-3 pt-4 pb-2 text-sm text-slate-500">${screen.title}</figcaption>
          </figure>
        `).join('')}
      </div>
    </section>
  `
}

function renderStack(project) {
  if (!project.stack || !project.stack.length) return ''
  return `
    <section class="max-w-[1600px] mx-auto mt-16">
      <div class="rounded-[30px] border border-white/80 glass p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
        <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] md:w-[180px] shrink-0">${project.stackLabel || 'Built with'}</p>
        <div class="flex flex-wrap gap-3">
          ${project.stack.map(item => `<span class="rounded-full border border-white/80 glass px-4 py-2 text-sm text-slate-700">${item}</span>`).join('')}
        </div>
      </div>
    </section>
  `
}

export function renderCaseStudy(project) {
  const image = project.image || fallbackImg

  document.querySelector('#app').innerHTML = `
    <div id="page-root" class="page-enter bg-transparent text-[#0b1530] selection:bg-[#3082BE] selection:text-white relative overflow-hidden">

      <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute left-[-12%] top-[80px] h-[420px] w-[420px] rounded-full bg-[#3082BE]/20 blur-[150px]"></div>
        <div class="absolute right-[-12%] top-[480px] h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[160px]"></div>
      </div>

      <nav class="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/80">
        <div class="max-w-[1600px] mx-auto px-6 md:px-8 h-[76px] flex items-center justify-between">
          <a href="/index.html" class="inline-flex items-center">
            <img src="${logoImg}" alt="Ayo Gegeoju logo" class="h-8 w-auto" />
          </a>

          <div class="hidden md:flex items-center gap-8 text-[13px]">
            <a href="/index.html" class="text-slate-600 hover:text-[#3082BE] transition-colors duration-200">Home</a>
            <a href="/work.html" class="text-[#0b1530]">Work</a>
            <a href="/about.html" class="text-slate-600 hover:text-[#3082BE]">About</a>
            <a href="/contact.html" class="text-slate-600 hover:text-[#3082BE]">Contact</a>
          </div>

          ${project.liveLink ? `
            <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-5 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
              Live project <span>↗</span>
            </a>
          ` : ''}
        </div>
      </nav>

      <main class="px-6 md:px-8 pt-24 pb-10">

        <section class="w-full max-w-[1600px] mx-auto fade-up">
          <div class="rounded-[36px] md:rounded-[52px] overflow-hidden border border-white/80 glass shadow-2xl">
            <div class="relative p-6 md:p-10 lg:p-14 flex flex-col justify-between">

              <div class="relative z-10 flex items-start justify-between gap-8">
                <div>
                  <a href="/work.html" class="group inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#3082BE] mb-5">
                    <span class="transition-transform group-hover:-translate-x-1">←</span>
                    Back to work
                  </a>

                  <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE]">
                    ${project.category}
                  </p>
                </div>
              </div>

              <div class="relative z-10 max-w-6xl">
                <p class="text-sm uppercase tracking-[0.25em] text-slate-500 mb-5">
                  Case Study
                </p>

                <h1 class="text-5xl md:text-6xl lg:text-[84px] font-bold leading-[0.9] tracking-[-0.06em] max-w-6xl">
                  ${project.title}
                </h1>

                <p class="mt-8 text-lg md:text-[21px] text-slate-600 max-w-4xl leading-[1.8]">
                  ${project.summary}
                </p>

                <div class="mt-10 flex flex-wrap gap-4">
                  ${project.liveLink ? `
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                      Visit live project
                      <span class="transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  ` : ''}

                  ${project.repoLink ? `
                    <a href="${project.repoLink}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                      View code on GitHub
                      <span class="transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  ` : ''}

                  <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                    More projects
                    <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              <div class="relative z-10 mt-12 rounded-[32px] border border-white/90 glass p-3">
                <div class="media-frame">
                  <img src="${image}" alt="${project.title}" class="w-full h-auto block" />
                </div>
              </div>

              <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
                ${project.meta.map(item => `
                  <div class="rounded-[22px] border border-white/80 glass backdrop-blur-xl p-5">
                    <p class="text-[11px] uppercase tracking-[0.22em] text-[#3082BE] mb-2">${item.label}</p>
                    <p class="text-sm text-slate-700">${item.value}</p>
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
              <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em]">
                ${project.overviewTitle}
              </h2>
            </div>

            <div class="rounded-[34px] border border-white/80 glass p-7 md:p-8">
              <div class="space-y-6 text-lg text-slate-500 leading-relaxed">
                ${project.overview.map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          </div>
        </section>

${renderSections(project)}

${renderScreens(project, image)}

${renderStack(project)}

        <section class="max-w-[1600px] mx-auto mt-28 mb-6">
          <div class="rounded-[40px] border border-white/80 glass-tint p-8 md:p-12">
            <div class="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#3082BE] mb-5">Outcome</p>
                <h2 class="text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.05em] max-w-3xl">
                  ${project.outcome}
                </h2>
              </div>

              <a href="/work.html" class="group inline-flex items-center gap-2 rounded-full bg-[#0b1530] text-white px-6 py-3 text-sm font-semibold hover:bg-[#3082BE] hover:text-white transition">
                More work
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer class="px-6 md:px-8 py-10 border-t border-white/80 bg-transparent">
        <div class="max-w-[1600px] mx-auto rounded-[28px] border border-white/80 glass px-6 md:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p class="text-sm text-slate-500">© 2026 Ayo Gegeoju</p>

          <div class="flex items-center gap-6 text-sm">
            <a href="/work.html" class="text-[#0b1530]">Work</a>
            <a href="/about.html" class="text-slate-500 hover:text-[#3082BE]">About</a>
            <a href="/contact.html" class="text-slate-500 hover:text-[#3082BE]">Contact</a>
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