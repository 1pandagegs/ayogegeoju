// One list of every project, shared by the homepage and the Work page.
// `tags` decide which Work tabs a project appears in; `featured` puts it on the homepage.

import coverageTrackrCover from './assets/coverage-trackr-cover.webp'
import swiftEntryCover from './assets/swiftentry-cover.webp'
import homeAndAbroadCover from './assets/home-and-abroad-cover.webp'
import resourceTrackrCover from './assets/resource-trackr-cover.webp'
import sydaarLmsCover from './assets/sydaar-lms-cover.webp'
import mundayneCover from './assets/mundayne-cover.webp'
import nuellizCover from './assets/nuelliz-launch-tracker-cover.webp'
import gojuDesignCover from './assets/goju-design-cover.webp'
import sabaliCover from './assets/sabali-limited-cover.webp'
import manorrCover from './assets/manorr-cover.webp'
import amfhCover from './assets/a-message-for-her-cover.webp'
import hemoTrackrCover from './assets/hemotrackr-cover.webp'
import nepalCover from './assets/nepal-dashboard-cover.webp'
import paytrackCover from './assets/paytrack-sme-cover.webp'
import pathfinderCover from './assets/pathfinder-ai-cover.webp'
import babylonCover from './assets/babylon-purse-cover.webp'
import gmptCover from './assets/gmpt-cover.webp'
import as5Cover from './assets/as5-group-cover.webp'
import skillsCover from './assets/claude-skills-cover.webp'
import jonzeeCover from './assets/jonzee-world-cover.webp'

export const workTabs = [
  { label: 'Featured', value: 'featured' },
  { label: 'Product Design', value: 'product' },
  { label: 'Design + Code', value: 'code' },
  { label: 'AI Projects', value: 'ai' },
  { label: 'Brand & Illustration', value: 'brand' }
]

export const projects = [
  {
    title: 'Home and Abroad',
    tags: ['product'],
    featured: true,
    label: 'PropTech / Government Platform',
    desc: 'A NIDCOM-backed real estate platform helping Nigerians in the diaspora buy property at home with more trust and clarity.',
    href: '/work-home-and-abroad.html',
    image: homeAndAbroadCover
  },
  {
    title: 'Nepal Immunization Dashboard',
    tags: ['product'],
    featured: true,
    label: 'Public Health / Government',
    desc: 'An accountability framework dashboard that tracks governance, finance and programme indicators for national immunization in Nepal.',
    href: '/work-nepal-dashboard.html',
    image: nepalCover
  },
  {
    title: 'SYDAAR LMS',
    tags: ['product'],
    featured: true,
    label: 'EdTech / Gamified Learning',
    desc: 'A gamified learning app with courses, quizzes, badges and leaderboards, with a white-label version built for Amref.',
    href: '/work-sydaar-lms.html',
    image: sydaarLmsCover
  },
  {
    title: 'Pathfinder AI',
    tags: ['ai', 'code'],
    featured: true,
    label: 'AI Product / Designed + Built',
    desc: 'A career intelligence tool that finds international roles, checks visa and remote eligibility with evidence, and drafts tailored CVs with AI.',
    href: '/work-pathfinder-ai.html',
    image: pathfinderCover
  },
  {
    title: 'PayTrack SME',
    tags: ['code', 'product'],
    featured: true,
    label: 'Fintech / IT PGD Final Project',
    desc: 'My final project for my IT postgraduate diploma: a payment management system for small businesses, with payment requests, reconciliation and reports.',
    href: '/work-paytrack-sme.html',
    image: paytrackCover
  },
  {
    title: 'Coverage Trackr',
    tags: ['product'],
    featured: true,
    label: 'Public Health / Micro-Planning',
    desc: 'A micro-planning platform for intervention planning, data collection and coverage visibility, localised for Nigeria and Sierra Leone.',
    href: '/work-coverage-trackr.html',
    image: coverageTrackrCover
  },
  {
    title: 'Hemo Trackr',
    tags: ['product'],
    label: 'HealthTech / System Design',
    desc: 'A blood inventory and donor management system linking blood banks, donors and health facilities.',
    href: '/work-hemo-trackr.html',
    image: hemoTrackrCover
  },
  {
    title: 'SwiftEntry',
    tags: ['product'],
    label: 'Visitor Management System',
    desc: 'A visitor management product for check-in, tracking, access control and operational visibility.',
    href: '/work-swiftentry.html',
    image: swiftEntryCover
  },
  {
    title: 'Manorr',
    tags: ['product'],
    label: 'Real Estate / Estate Operations',
    desc: 'A unified platform for managing estate occupants, visitors and movement within residential communities.',
    href: '/work-manorr.html',
    image: manorrCover
  },
  {
    title: 'Resource Trackr',
    tags: ['product'],
    label: 'Partner Resource Management',
    desc: 'A partner resource tracking platform for monitoring resources, partners, allocation and operational movement.',
    href: '/work-prmt.html',
    image: resourceTrackrCover
  },
  {
    title: 'Babylon Purse',
    tags: ['code'],
    label: 'Personal Finance / Next.js + Supabase',
    desc: 'An income and expense ledger built on the money rules of The Richest Man in Babylon: save first, clear debt, control spending.',
    href: '/work-babylon-purse.html',
    image: babylonCover
  },
  {
    title: 'GM-PT',
    tags: ['code'],
    label: 'Mobile App / React Native',
    desc: 'An offline-first project tracker for iOS and Android built around one rule: finish what you are working on before starting something new.',
    href: '/work-gmpt.html',
    image: gmptCover
  },
  {
    title: 'AS5 Group',
    tags: ['code'],
    label: 'Real Estate / Hand-coded Website',
    desc: 'The production website for an Abuja real estate development and construction company, hand-coded with no framework.',
    href: '/work-as5-group.html',
    image: as5Cover
  },
  {
    title: 'Custom Claude Skills',
    tags: ['ai'],
    label: 'AI Tooling',
    desc: 'Skills that teach Claude to watch videos, build Blender scenes and learn from tutorials into a reusable skill library.',
    href: '/work-claude-skills.html',
    image: skillsCover
  },
  {
    title: 'Mundayne',
    tags: ['code', 'product'],
    label: 'Habit Tracker / Mobile App',
    desc: 'A mobile app designed and built to help users manage habits, tasks, routines and daily progress.',
    href: '/work-mundayne.html',
    image: mundayneCover
  },
  {
    title: 'Nuelliz Launch Tracker',
    tags: ['code'],
    label: 'Dashboard / React + Vite',
    desc: 'A React and Vite dashboard designed and developed to track launch tasks, progress and execution planning.',
    href: '/work-nuelliz.html',
    image: nuellizCover
  },
  {
    title: 'Sabali Limited',
    tags: ['code'],
    label: 'Agro / Corporate Website',
    desc: 'An agro-commodities business website, rebuilt from a no-code tool into hand-written HTML, CSS and JavaScript.',
    href: '/work-sabali.html',
    image: sabaliCover
  },
  {
    title: 'A Message For Her',
    tags: ['code'],
    label: 'Podcast Website',
    desc: 'A podcast website designed and developed to present episodes, media and brand storytelling.',
    href: '/work-amfh.html',
    image: amfhCover
  },
  {
    title: 'Goju Design Website',
    tags: ['code'],
    label: 'Studio Website',
    desc: 'A digital studio website presenting design services, creative direction and brand positioning.',
    href: '/work-goju-design.html',
    image: gojuDesignCover
  },
  {
    title: 'Jonzee World',
    tags: ['brand'],
    label: 'Original Characters / Collectibles',
    desc: 'An original low-poly character universe and collectible card system, with rarity tiers, numbered editions and QR verification.',
    href: '/work-jonzee-world.html',
    image: jonzeeCover
  }
]

export function projectsFor(tab) {
  if (tab === 'featured') return projects.filter(p => p.featured)
  return projects.filter(p => p.tags.includes(tab))
}
