import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="page-root" class="page-enter bg-[#020617] text-white selection:bg-[#3082BE] selection:text-black relative overflow-x-hidden">

    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute left-[-10%] top-[120px] h-[320px] w-[320px] rounded-full bg-[#3082BE]/10 blur-[120px]"></div>
      <div class="absolute right-[-10%] top-[520px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[140px]"></div>
      <div class="absolute left-[35%] bottom-[120px] h-[280px] w-[280px] rounded-full bg-white/5 blur-[120px]"></div>
    </div>

    <!-- NAV -->
    <nav class="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <a href="/index.html" class="inline-flex items-center gap-2 text-white">
          <span class="text-[#3082BE]">AG.</span>
        </a>

        <div class="hidden md:flex gap-8 text-sm">
          <a href="/work.html" class="text-white">Work</a>
          <a href="/about.html" class="text-slate-400 hover:text-white">About</a>
          <a href="/contact.html" class="text-slate-400 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>

    <main class="px-6 pt-32 pb-24">
      <div class="max-w-6xl mx-auto">

        <a href="/work.html" class="text-sm text-slate-400 hover:text-white mb-8 inline-block">
          ← Back to work
        </a>

        <h1 class="text-5xl font-bold mb-6">
          Home and Abroad
        </h1>

        <p class="text-lg text-slate-400 max-w-3xl mb-12">
          A diaspora-focused property platform designed to make remote property discovery feel more trustworthy and easier to navigate.
        </p>

        <div class="grid grid-cols-2 gap-6">
          <div class="h-[260px] bg-slate-800 rounded-xl"></div>
          <div class="h-[260px] bg-slate-800 rounded-xl"></div>
          <div class="h-[260px] bg-slate-800 rounded-xl"></div>
          <div class="h-[260px] bg-slate-800 rounded-xl"></div>
        </div>

      </div>
    </main>
  </div>
`