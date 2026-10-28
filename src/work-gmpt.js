import './style.css'
import coverImg from './assets/gmpt-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "GM-PT",
  "category": "Mobile App / Designed + Built",
  "summary": "An offline-first project tracker for iOS and Android built around one rule: finish what you are working on before starting something new. If you try to start a second project, the app asks you to think about it first.",
  "meta": [
    {
      "label": "Role",
      "value": "Design + development"
    },
    {
      "label": "Type",
      "value": "Mobile app"
    },
    {
      "label": "Stack",
      "value": "Expo, React Native, TypeScript"
    },
    {
      "label": "Data",
      "value": "On-device, no account"
    }
  ],
  "liveLink": "https://gmpt-ten.vercel.app",
  "repoLink": "https://github.com/1pandagegs/gmpt",
  "overviewTitle": "A tracker that nudges you to finish.",
  "overview": [
    "Creative work often stalls because too many projects are open at once. GM-PT keeps one project in focus on the dashboard with a progress ring, deadline and deliverables.",
    "Projects are grouped by status, filtered by type, duration and status, and finished work moves to an archive. Progress is calculated from deliverables or set by hand.",
    "Everything is stored on the device with no account, backend or sync, so it is fast and private."
  ],
  "screens": [
    {
      "title": "Dashboard: what you are building right now",
      "image": "/assets/projects/gmpt-1.webp"
    },
    {
      "title": "Projects grouped by status",
      "image": "/assets/projects/gmpt-2.webp"
    },
    {
      "title": "Archive of finished work",
      "image": "/assets/projects/gmpt-3.webp"
    }
  ],
  "screensLayout": "phone",
  "screensTitle": "One project in focus.",
  "screensNote": "Screens use demo projects.",
  "stack": [
    "Expo",
    "React Native",
    "TypeScript",
    "React Navigation",
    "AsyncStorage",
    "react-native-svg"
  ],
  "slug": "gmpt"
},
  outcome: 'Designed and built end to end.',
  image: coverImg
})
