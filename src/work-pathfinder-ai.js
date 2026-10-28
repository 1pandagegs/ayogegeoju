import './style.css'
import coverImg from './assets/pathfinder-ai-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "Pathfinder AI",
  "category": "AI Product / Designed + Built",
  "summary": "A private career intelligence tool I designed and built to find international roles a Nigerian professional can actually get, through visa sponsorship or remote work, with the evidence behind every conclusion and AI that only writes from verified facts.",
  "meta": [
    {
      "label": "Role",
      "value": "Product design + full-stack build"
    },
    {
      "label": "Type",
      "value": "AI web app"
    },
    {
      "label": "Stack",
      "value": "Next.js 15, TypeScript, Postgres"
    },
    {
      "label": "AI",
      "value": "Grounded agents, multi-provider"
    }
  ],
  "overviewTitle": "Job search with receipts.",
  "overview": [
    "Most job boards cannot tell you whether you are allowed to take a role. Pathfinder reads employer job boards directly, then checks every posting for remote-from-Nigeria and visa sponsorship signals, quoting the posting's own words as evidence.",
    "For relocation roles it checks published work-permit rules for the UK, Germany, the Netherlands, Ireland and Spain, including salary thresholds and official sponsor registers, each linked to its official source.",
    "AI drafts cover letters, role briefs and tailored CVs, but only from facts on my profile. Every fact carries where it came from, and nothing AI suggests becomes a fact until I accept it."
  ],
  "sections": [
    {
      "title": "Explainable match score",
      "desc": "A 100-point score split into skills, eligibility, pay, seniority and credibility, with a plain-language note for each part."
    },
    {
      "title": "Evidence-first eligibility",
      "desc": "Remote and sponsorship checks quote the posting. Unknown stays unknown; eligibility is never assumed."
    },
    {
      "title": "Grounded AI agents",
      "desc": "Cover letters and CV facts are checked against my own profile and CV text before they are shown."
    },
    {
      "title": "Immigration research",
      "desc": "Work-permit routes and official sponsor registers for five countries, with a recheck that flags when official pages change."
    },
    {
      "title": "Tracking + analytics",
      "desc": "Applications board, follow-ups, scheduled searches, an inbox, and analytics on replies, skill gaps and board yield."
    },
    {
      "title": "Tested and shipped",
      "desc": "TypeScript throughout, unit and integration tests with Vitest, light and dark themes, responsive to phone width, deployed on Vercel."
    }
  ],
  "screens": [
    {
      "title": "Dashboard: open roles, best match and the match funnel",
      "image": "/assets/projects/pathfinder-ai-1.webp"
    },
    {
      "title": "Jobs list with match scores and eligibility",
      "image": "/assets/projects/pathfinder-ai-2.webp"
    },
    {
      "title": "Role detail: score breakdown and evidence",
      "image": "/assets/projects/pathfinder-ai-3.webp"
    },
    {
      "title": "Immigration: work-permit routes by country",
      "image": "/assets/projects/pathfinder-ai-4.webp"
    }
  ],
  "screensTitle": "Every conclusion shows its evidence.",
  "screensNote": "Screens from a demo account with fictional companies and postings.",
  "stack": [
    "Next.js 15",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "PostgreSQL",
    "Drizzle ORM",
    "Auth.js",
    "Zod",
    "Vitest",
    "LLM agents",
    "Vercel"
  ],
  "outcome": "An AI product that is careful about what it claims, designed and engineered from schema to interface.",
  "slug": "pathfinder-ai"
},
  image: coverImg
})
