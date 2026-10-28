import './style.css'
import coverImg from './assets/claude-skills-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "Custom Claude Skills",
  "category": "AI Tooling",
  "summary": "A set of skills I wrote to extend Claude, Anthropic's AI assistant: watching videos, building 3D scenes in Blender, and studying tutorials so what it learns is saved as new reusable skills.",
  "meta": [
    {
      "label": "Role",
      "value": "Design + authoring"
    },
    {
      "label": "Type",
      "value": "AI skills / plugins"
    },
    {
      "label": "Works in",
      "value": "Claude app + Claude Code"
    },
    {
      "label": "Skills",
      "value": "3"
    }
  ],
  "overviewTitle": "Teaching an AI assistant new abilities.",
  "overview": [
    "Skills are packaged instructions and scripts that tell Claude how to do a specific kind of task well. I build them for the gaps in my own workflow as a designer and developer.",
    "Each one ships as an installable plugin for Claude Code and as an uploadable skill for the Claude app."
  ],
  "sectionsLabel": "The skills",
  "sections": [
    {
      "title": "video-watcher",
      "desc": "Pulls timestamped frames and contact sheets from an uploaded video and transcribes the speech, so Claude can summarise it, answer questions and cite timestamps."
    },
    {
      "title": "blender-builder",
      "desc": "Builds high-quality Blender scenes from a text prompt through Blender MCP, for 3D work like character models."
    },
    {
      "title": "learn-from-video",
      "desc": "Takes a link to a tutorial or talk, studies it, and saves what it learned into a skill library across design, marketing, money, career, 3D and academics."
    }
  ],
  "screens": [],
  "screensTitle": "What the skills do.",
  "stack": [
    "Claude Code plugins",
    "Agent skills",
    "Python",
    "Blender MCP",
    "Prompt engineering"
  ],
  "slug": "claude-skills"
},
  outcome: 'Designed and built end to end.',
  image: coverImg
})
