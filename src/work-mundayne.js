import './style.css'
import fallbackImg from './assets/mundayne-cover.png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'Mundayne',
  category: 'Habit Tracker / Task Management App',
  summary: 'A mobile app designed and built to help users manage habits, tasks, routines, and personal daily progress.',
  liveLink: 'https://mundayne.vercel.app',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Design + Development' },
    { label: 'Focus', value: 'Productivity' },
    { label: 'Platform', value: 'Mobile App' },
    { label: 'Tool', value: 'Flutter + Figma' }
  ],
  overviewTitle: 'Helping users manage daily progress with more structure.',
  overview: [
    'Mundayne was created as a habit tracking and task management app for people who want a clearer view of their daily actions.',
    'The app combines habits, tasks, routines, and progress into one focused experience.',
    'The design direction focused on simplicity, consistency, and daily usability.'
  ],
  screens: [
    { title: 'Today dashboard' },
    { title: 'Habit tracking' },
    { title: 'Task management' },
    { title: 'Progress overview' }
  ],
  outcome: 'A personal productivity app designed around daily focus, routine building, and simple progress tracking.'
})