import './style.css'
import fallbackImg from './assets/swiftentry-cover.png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'SwiftEntry',
  category: 'Visitor Management System',
  summary: 'A visitor management system designed to improve check-in flows, visitor tracking, access control, and operational visibility.',
  liveLink: 'https://theswiftentry.com/',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Product Design' },
    { label: 'Focus', value: 'Visitor Flow' },
    { label: 'Industry', value: 'Operations' },
    { label: 'Output', value: 'Platform Interface' }
  ],
  overviewTitle: 'Making visitor management clearer and easier to control.',
  overview: [
    'SwiftEntry was designed to help organizations and estates manage visitor entry, tracking, and movement from a unified platform.',
    'The design focused on making check-in flows feel easier, reducing manual coordination, and giving teams clearer visibility over visitor activity.',
    'The product direction prioritized speed, control, and operational clarity.'
  ],
  screens: [
    { title: 'Visitor dashboard' },
    { title: 'Check-in flow' },
    { title: 'Visitor records' },
    { title: 'Access control overview' }
  ],
  outcome: 'A clearer visitor management experience built around access, tracking, and operational confidence.'
})