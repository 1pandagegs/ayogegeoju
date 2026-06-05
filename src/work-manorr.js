import './style.css'
import fallbackImg from './assets/more-projects (2).png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'Manorr',
  category: 'Real Estate / Estate Operations',
  summary: 'A real estate operations platform for managing estate occupants, visitors, and community-level movement from a unified system.',
  liveLink: 'https://www.themanorr.com/',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Product Design' },
    { label: 'Focus', value: 'Estate Operations' },
    { label: 'Industry', value: 'Real Estate' },
    { label: 'Output', value: 'Platform Interface' }
  ],
  overviewTitle: 'Supporting estate operations with clearer digital management.',
  overview: [
    'Manorr was designed to support estate-level operations, occupant management, visitor control, and community administration.',
    'The platform needed to unify different operational needs into a cleaner digital experience.',
    'The design direction focused on usability, control, and a more structured management flow.'
  ],
  screens: [
    { title: 'Estate dashboard' },
    { title: 'Occupant management' },
    { title: 'Visitor flow' },
    { title: 'Operations overview' }
  ],
  outcome: 'A unified estate operations experience designed for better visibility, control, and management.'
})