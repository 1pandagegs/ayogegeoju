import './style.css'
import coverImg from './assets/paytrack-sme-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "PayTrack SME",
  "category": "Fintech / Designed + Built",
  "summary": "A lightweight digital payment management system for small businesses. I designed it in Figma and built it with HTML, CSS, JavaScript and Supabase as the final project for my Postgraduate Diploma (PGD) in Information Technology, using two real Abuja SMEs as the case studies.",
  "meta": [
    {
      "label": "Role",
      "value": "Product design + development"
    },
    {
      "label": "Project",
      "value": "IT PGD final project"
    },
    {
      "label": "Users",
      "value": "Small business admins"
    },
    {
      "label": "Stack",
      "value": "HTML, CSS, JS, Supabase"
    }
  ],
  "liveLink": "https://paytrack-sme.vercel.app",
  "overviewTitle": "Helping small businesses know who has paid, and who has not.",
  "overview": [
    "Many SMEs track customer payments across bank alerts, WhatsApp and spreadsheets, which makes it hard to know what is outstanding or to match a transfer to the right invoice.",
    "PayTrack gives a business one place to raise payment requests, record transactions, reconcile them against bank references and report on what has been collected.",
    "I designed every flow in Figma first, from onboarding to settings, then built the working app step by step with vanilla JavaScript and a Supabase database, deployed on Vercel."
  ],
  "sections": [
    {
      "title": "Payment requests",
      "desc": "Create a request for a customer with a purpose and amount, then track it from pending to partially paid to paid."
    },
    {
      "title": "Reconciliation",
      "desc": "Match each recorded payment to an external bank reference and flag the ones that need review."
    },
    {
      "title": "Overview + reports",
      "desc": "Totals received, outstanding and overdue at a glance, with a collections chart and a needs-attention list."
    },
    {
      "title": "Multi-business",
      "desc": "Switch between businesses from the sidebar, each with its own customers and records."
    },
    {
      "title": "Built, not just designed",
      "desc": "Implemented in HTML, CSS and vanilla JavaScript on Supabase, one confirmed step at a time."
    }
  ],
  "screens": [
    {
      "title": "Overview dashboard",
      "image": "/assets/projects/paytrack-sme-1.webp"
    },
    {
      "title": "Sign in",
      "image": "/assets/projects/paytrack-sme-2.webp"
    },
    {
      "title": "Customers",
      "image": "/assets/projects/paytrack-sme-3.webp"
    },
    {
      "title": "Payment requests",
      "image": "/assets/projects/paytrack-sme-4.webp"
    },
    {
      "title": "Reconciliation",
      "image": "/assets/projects/paytrack-sme-5.webp"
    }
  ],
  "screensTitle": "Every flow designed before it was built.",
  "screensNote": "Figma screens with sample data.",
  "stack": [
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "Supabase",
    "Vercel",
    "GitHub"
  ],
  "outcome": "A working payment system for small businesses, designed and built end to end by one person.",
  "slug": "paytrack-sme"
},
  image: coverImg
})
