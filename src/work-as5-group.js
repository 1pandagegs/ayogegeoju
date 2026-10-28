import './style.css'
import coverImg from './assets/as5-group-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "AS5 Group",
  "category": "Real Estate / Hand-coded Website",
  "summary": "The website for AS5 Group, a real estate development and construction company in Abuja. Plain HTML, CSS and JavaScript with no framework, a monochrome identity, and a small build pipeline for images, pre-rendering and the sitemap.",
  "meta": [
    {
      "label": "Role",
      "value": "Design + development"
    },
    {
      "label": "Client",
      "value": "AS5 Group"
    },
    {
      "label": "Stack",
      "value": "HTML, CSS, JavaScript"
    },
    {
      "label": "Pages",
      "value": "Home, services, portfolio, insights, careers"
    }
  ],
  "liveLink": "https://as5group.com",
  "repoLink": "https://github.com/1pandagegs/as5-website",
  "overviewTitle": "A construction brand that feels as solid as its buildings.",
  "overview": [
    "AS5 needed a site that presents its developments, services and track record with the same confidence as its brand: bold, monochrome and precise.",
    "I designed and hand-coded every page as static HTML with a single CSS design system, scroll-triggered reveals that respect reduced-motion settings, and project pages for each development.",
    "Node scripts compress every image to WebP, generate favicons and share images, pre-render portfolio and insight cards so they load without JavaScript, and rebuild the sitemap."
  ],
  "screens": [
    {
      "title": "Homepage",
      "image": "/assets/projects/as5-group-1.webp"
    },
    {
      "title": "Portfolio",
      "image": "/assets/projects/as5-group-2.webp"
    },
    {
      "title": "Project page",
      "image": "/assets/projects/as5-group-3.webp"
    },
    {
      "title": "Services",
      "image": "/assets/projects/as5-group-4.webp"
    },
    {
      "title": "Mobile homepage",
      "image": "/assets/projects/as5-group-5.webp",
      "contain": true
    }
  ],
  "screensTitle": "Monochrome, bold, fast.",
  "stack": [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js scripts",
    "WebP pipeline",
    "Vercel"
  ],
  "slug": "as5-group"
},
  outcome: 'Designed and built end to end.',
  image: coverImg
})
