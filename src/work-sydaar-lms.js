import './style.css'
import fallbackImg from './assets/more-projects (2).png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'SYDAAR LMS',
  category: 'Learning Management System',
  summary: 'A gamified learning management system designed for internal organizational training across large institutions and teams.',
  liveLink: 'https://sydaar.com/',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Product Design' },
    { label: 'Focus', value: 'Learning System' },
    { label: 'Industry', value: 'EdTech' },
    { label: 'Output', value: 'LMS Interface' }
  ],
  overviewTitle: 'Designing a learning system for structured organizational training.',
  overview: [
    'SYDAAR LMS was designed to help organizations manage internal training, learning progress, and course engagement.',
    'The product needed to support institutions such as NICRAT with a structured and scalable learning experience.',
    'The design direction focused on clarity, progress visibility, and a more engaging learning system.'
  ],
  screens: [
    { title: 'Learning dashboard' },
    { title: 'Course overview' },
    { title: 'Progress tracking' },
    { title: 'Gamified learning flow' }
  ],
  outcome: 'A structured LMS experience designed to make organizational training easier to manage and more engaging.'
})