import './style.css'
import fallbackImg from './assets/a-message-for-her-cover.png'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  title: 'A Message For Her',
  category: 'Podcast Website',
  summary: 'A podcast website designed and developed to present episodes, media, and brand storytelling.',
  liveLink: 'https://a-message-for-her.vercel.app/index.html',
  image: fallbackImg,
  meta: [
    { label: 'Role', value: 'Design + Development' },
    { label: 'Focus', value: 'Podcast Website' },
    { label: 'Industry', value: 'Media' },
    { label: 'Stack', value: 'HTML / CSS / JS' }
  ],
  overviewTitle: 'Creating a warmer web presence for a podcast brand.',
  overview: [
    'A Message For Her was designed as a podcast website for presenting episodes, brand story, and media content.',
    'The site needed to feel simple, intimate, and easy to navigate.',
    'The design direction focused on storytelling, media access, and a soft digital presence.'
  ],
  screens: [
    { title: 'Homepage' },
    { title: 'Episode section' },
    { title: 'Media embeds' },
    { title: 'Contact section' }
  ],
  outcome: 'A podcast website designed to present episodes and brand storytelling in a simple, accessible way.'
})