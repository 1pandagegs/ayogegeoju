import './style.css'
import fallbackImg from './assets/sydaar-lms-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  slug: 'sydaar-lms',
  title: 'SYDAAR LMS',
  category: 'Learning Management System',
  summary: 'A gamified learning app and admin dashboard for organisational training, with courses, quizzes, badges and leaderboards. The design system was also adapted into a white-label version for Amref.',
  liveLink: 'https://sydaar.com/',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Product Design' },
    { label: 'Focus', value: 'Learning System' },
    { label: 'Industry', value: 'EdTech' },
    { label: 'Output', value: 'Mobile app, admin, white-label' }
  ],
  overviewTitle: 'Designing a learning system for structured organizational training.',
  overview: [
    'SYDAAR LMS was designed to help organizations manage internal training, learning progress, and course engagement.',
    'The product needed to support institutions such as NICRAT with a structured and scalable learning experience.',
    'The design direction focused on clarity, progress visibility, and a more engaging learning system.',
    'The same component system was re-themed into a green white-label version for Amref, showing how the product could carry another organisation\'s brand without a redesign.'
  ],
  sections: [
    { title: 'Courses and units', desc: 'Course library with filters, unit-by-unit content in articles and video, and a clear mark-complete flow.' },
    { title: 'Quizzes with feedback', desc: 'Quizzes that explain the correct answer, with points earned for each attempt.' },
    { title: 'Badges and leaderboards', desc: 'Consistency badges, perfect-score rewards and weekly or monthly leaderboards to keep learners coming back.' },
    { title: 'Admin dashboard', desc: 'A web dashboard for managing users, content and learning analytics.' },
    { title: 'White-label for Amref', desc: 'The full mobile app re-themed in Amref\'s brand from the same design system.' }
  ],
  screens: [
    { title: 'Mobile home: stats, a daily AI quiz and quick actions', image: '/assets/projects/sydaar-lms-1.webp', contain: true }
  ],
  screensTitle: 'The learner app.',
  screensNote: 'More screens from the app, admin dashboard and Amref version coming soon.',
  outcome: 'A structured LMS experience designed to make organizational training easier to manage and more engaging.'
})