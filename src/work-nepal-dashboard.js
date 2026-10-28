import './style.css'
import coverImg from './assets/nepal-dashboard-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "Nepal Immunization Dashboard",
  "category": "Public Health / Government Dashboard",
  "summary": "A national dashboard for the Government of Nepal that tracks the Immunization Accountability Framework: governance, finance and programme indicators, each scored against its target and colour-coded by how far on or off track it is.",
  "meta": [
    {
      "label": "Role",
      "value": "Lead Product Designer"
    },
    {
      "label": "Organisation",
      "value": "Sydani Group"
    },
    {
      "label": "Client",
      "value": "Government of Nepal"
    },
    {
      "label": "Platform",
      "value": "Web dashboard + data collection"
    }
  ],
  "overviewTitle": "Making national accountability readable at a glance.",
  "overview": [
    "The Immunization Accountability Framework tracks dozens of indicators across three pillars: Governance and Coordination, Finance and Budgeting, and Programmatic Performance. Before this dashboard, that picture lived in reports and spreadsheets.",
    "I designed a public-facing dashboard where every indicator shows its target, what was achieved, and a clear status from On Track to Severely Off Track, so officials can see where to act without reading a full report.",
    "Each indicator opens into a detail view with a performance gauge, quarterly history, recommended actions and the data source and calculation method behind the number, plus a data collector view for the people submitting the forms."
  ],
  "sections": [
    {
      "title": "Three-pillar structure",
      "desc": "Governance, Finance and Programmatic indicators grouped into scannable rows of cards, each with its own landing page."
    },
    {
      "title": "Status you can read instantly",
      "desc": "A consistent target vs achieved bar and a four-level status scale (On Track, Slightly Off, Off, Severely Off Track) used across every view."
    },
    {
      "title": "Evidence behind every number",
      "desc": "Indicator pages show quarterly history, the recommended action for the current status, and where the data comes from and how it is calculated."
    },
    {
      "title": "Data collection side",
      "desc": "A simple workspace for field collectors with assigned forms, submission counts and approval status."
    },
    {
      "title": "Downloadable reports",
      "desc": "Report downloads and resource pages for strategy documents, so the dashboard doubles as the reference library."
    }
  ],
  "screens": [
    {
      "title": "Dashboard home: all three pillars at a glance",
      "image": "/assets/projects/nepal-dashboard-1.webp"
    },
    {
      "title": "Governance & Coordination indicators",
      "image": "/assets/projects/nepal-dashboard-2.webp"
    },
    {
      "title": "Indicator detail: gauge, history, actions and data source",
      "image": "/assets/projects/nepal-dashboard-3.webp"
    },
    {
      "title": "Data collector workspace",
      "image": "/assets/projects/nepal-dashboard-4.webp"
    }
  ],
  "screensTitle": "From national overview to a single indicator.",
  "screensNote": "Real design screens. Personal names are blurred.",
  "stack": [
    "Figma",
    "Dashboard design",
    "Data visualisation",
    "Design system",
    "Government / public health"
  ],
  "stackLabel": "Focus",
  "outcome": "A dashboard that turns a national accountability framework into something officials can read, act on and verify.",
  "slug": "nepal-dashboard"
},
  image: coverImg
})
