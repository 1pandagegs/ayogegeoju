import { arrow } from './icons.js'

// The CV lives in /public, so it is served from the site root.
export const CV_URL = '/Ayo-Gegeoju-CV.pdf'

export function cvButton() {
  return `<a href="${CV_URL}" target="_blank" rel="noopener" class="group inline-flex items-center gap-2 rounded-full glass border border-white/80 px-6 py-3 text-sm font-semibold hover:border-[#3082BE]/40 transition">
                  Download CV
                  <span class="inline-flex transition-transform group-hover:translate-y-0.5">${arrow('down')}</span>
                </a>`
}
