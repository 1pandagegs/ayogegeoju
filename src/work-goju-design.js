import './style.css'
import fallbackImg from './assets/more-projects (2).png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'Goju Design Website',
  category: 'Studio Website',
  summary: 'A digital studio website for presenting design services, creative direction, and brand positioning.',
  liveLink: 'https://gojudesign.com',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Product Design' },
    { label: 'Focus', value: 'Studio Website' },
    { label: 'Industry', value: 'Design Agency' },
    { label: 'Output', value: 'Website' }
  ],
  overviewTitle: 'Positioning a design studio with clearer digital presence.',
  overview: [
    'Goju Design Website was created to present the studio’s creative services, visual direction, and design capability.',
    'The site supports credibility, service clarity, and a more polished brand presence.',
    'The design direction focused on strong positioning, clear communication, and premium digital presentation.'
  ],
  screens: [
    { title: 'Homepage' },
    { title: 'Service section' },
    { title: 'Portfolio preview' },
    { title: 'Contact flow' }
  ],
  outcome: 'A digital studio website designed to communicate services, credibility, and creative direction more clearly.'
})