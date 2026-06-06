import './style.css'
import fallbackImg from './assets/sabali-limited-cover.png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'Sabali Limited',
  category: 'Agro / Corporate Website',
  summary: 'An agro-focused business website designed and built with HTML, CSS, and JavaScript.',
  liveLink: 'https://sabalilimited.com',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Design + Development' },
    { label: 'Focus', value: 'Corporate Website' },
    { label: 'Industry', value: 'Agriculture' },
    { label: 'Stack', value: 'HTML / CSS / JS' }
  ],
  overviewTitle: 'Creating a clearer digital presence for an agro business.',
  overview: [
    'Sabali Limited was designed as a corporate website for an agro-focused company.',
    'The goal was to present products, services, and business information in a clean and credible way.',
    'The design direction focused on structure, product communication, and simple navigation.'
  ],
  screens: [
    { title: 'Homepage' },
    { title: 'Product section' },
    { title: 'About section' },
    { title: 'Contact section' }
  ],
  outcome: 'A clean corporate website designed to make the company’s agro services and products easier to understand.'
})