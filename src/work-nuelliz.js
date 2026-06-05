import './style.css'
import fallbackImg from './assets/more-projects (2).png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'Nuelliz Launch Tracker',
  category: 'Dashboard / Web App',
  summary: 'A React and Vite dashboard designed and developed to help track launch tasks, progress, and execution planning.',
  liveLink: 'https://nuelliz-launch-tracker.vercel.app/',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Design + Development' },
    { label: 'Focus', value: 'Launch Planning' },
    { label: 'Platform', value: 'Web App' },
    { label: 'Stack', value: 'React + Vite' }
  ],
  overviewTitle: 'Making launch execution easier to monitor.',
  overview: [
    'Nuelliz Launch Tracker was built to help organize launch tasks, progress, and execution planning.',
    'The dashboard supports a clearer way to view what needs to be done, what is completed, and what still needs attention.',
    'The product direction focused on clarity, tracking, and practical execution.'
  ],
  screens: [
    { title: 'Launch dashboard' },
    { title: 'Task tracking' },
    { title: 'Progress view' },
    { title: 'Execution planning' }
  ],
  outcome: 'A launch management dashboard designed to make planning, progress, and execution easier to follow.'
})