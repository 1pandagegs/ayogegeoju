import './style.css'
import coverImg from './assets/babylon-purse-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "Babylon Purse",
  "category": "Personal Finance / Designed + Built",
  "summary": "A personal income and expense ledger built around the money rules of The Richest Man in Babylon. Every bit of income is split into savings, debt repayment and living money before anything is spent.",
  "meta": [
    {
      "label": "Role",
      "value": "Design + development"
    },
    {
      "label": "Type",
      "value": "Personal web app"
    },
    {
      "label": "Stack",
      "value": "Next.js 15, Supabase"
    },
    {
      "label": "Hosting",
      "value": "Vercel"
    }
  ],
  "overviewTitle": "Turning old money rules into a daily tool.",
  "overview": [
    "The book's rules are simple: pay yourself first, clear debts steadily, control your spending and protect your savings. Following them by hand is the hard part.",
    "Babylon Purse applies them automatically. While debt remains, income splits 10% savings, 20% debt and 70% living by default, and debt repayment is suggested proportionally across creditors.",
    "Spending is logged as necessary or unplanned, savings live in a locked vault and a flexible reserve, and every past month has its own history page."
  ],
  "sections": [
    {
      "title": "Automatic allocation",
      "desc": "Each income entry is divided by the rules, with adjustable percentages on the Rules page."
    },
    {
      "title": "Fair debt repayment",
      "desc": "The debt share is split across creditors in proportion to what is owed, so every debt shrinks."
    },
    {
      "title": "Two savings vaults",
      "desc": "A locked, goal-based vault that asks for a deliberate override, and a flexible reserve."
    },
    {
      "title": "Monthly history",
      "desc": "Each month shows income, spending, savings and debt paid on its own page."
    }
  ],
  "screens": [
    {
      "title": "The purse: this month's allocation",
      "image": "/assets/projects/babylon-purse-1.webp"
    },
    {
      "title": "Debts and suggested repayment split",
      "image": "/assets/projects/babylon-purse-2.webp"
    },
    {
      "title": "Savings vaults",
      "image": "/assets/projects/babylon-purse-3.webp"
    },
    {
      "title": "Monthly history",
      "image": "/assets/projects/babylon-purse-4.webp"
    },
    {
      "title": "Mobile view",
      "image": "/assets/projects/babylon-purse-5.webp",
      "contain": true
    }
  ],
  "screensTitle": "A calm, focused ledger.",
  "screensNote": "Screens use made-up demo data.",
  "stack": [
    "Next.js 15",
    "React",
    "Server Actions",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
    "Vercel"
  ],
  "slug": "babylon-purse"
},
  outcome: 'Designed and built end to end.',
  image: coverImg
})
