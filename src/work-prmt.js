import './style.css'
import fallbackImg from './assets/resource-trackr-cover.png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'PRMT',
  category: 'Partner Resource Management Tracker',
  summary: 'A partner resource tracking platform designed to help teams monitor partners, resources, allocation, and operational movement.',
  liveLink: 'https://resourcetrackr.com/',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Product Design' },
    { label: 'Focus', value: 'Resource Tracking' },
    { label: 'Industry', value: 'Operations' },
    { label: 'Output', value: 'Tracking Platform' }
  ],
  overviewTitle: 'Helping teams track partner resources with more clarity.',
  overview: [
    'PRMT was designed to support partner resource monitoring and operational tracking.',
    'The product needed to make resource movement, allocation, and partner visibility easier to manage.',
    'The design direction focused on simplifying operational complexity through clearer dashboard and tracking patterns.'
  ],
  screens: [
    { title: 'Partner overview' },
    { title: 'Resource tracking' },
    { title: 'Allocation dashboard' },
    { title: 'Operational reporting' }
  ],
  outcome: 'A resource tracking experience designed to improve visibility, coordination, and operational control.'
})