import './style.css'
import coverImg from './assets/jonzee-world-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

renderCaseStudy({
  ...{
  "title": "Jonzee World",
  "category": "Original Characters / Collectibles",
  "summary": "My own collectible universe, in progress. Low-poly, monochrome characters built almost entirely from straight lines, where contemporary art meets fashion and Gen Z culture, released as numbered physical trading cards.",
  "meta": [
    {
      "label": "Role",
      "value": "Creator, illustration + systems"
    },
    {
      "label": "Status",
      "value": "In development"
    },
    {
      "label": "First series",
      "value": "Neon Street"
    },
    {
      "label": "Tools",
      "value": "Figma, Blender"
    }
  ],
  "overviewTitle": "A Nigerian collectible universe.",
  "overview": [
    "Jonzee World starts with Adam, the original character, and grows into a crew of characters who can change skin tone, outfits, hairstyles and colours. The dreadlock heads double as variations of the brand logo.",
    "Each series has its own themed background, starting with Neon Street. Cards come in five rarity tiers with fixed edition sizes, and every card is numbered within its edition.",
    "Behind the cards is a registry I designed: each card's QR code opens its own verification page, collectors claim cards, certificates are issued, and transfers void the old certificate."
  ],
  "sections": [
    {
      "title": "Straight-line style",
      "desc": "A low-poly, monochrome look built from individual polygons with as few curves as possible, outlined for definition."
    },
    {
      "title": "Pose library",
      "desc": "A 16-pose master library in Figma, each pose its own component system: body, head, expression, hair, outfit, hands, prop, pet and shadow."
    },
    {
      "title": "Rarity + editions",
      "desc": "Common to Grail in five tiers, holographic finishes for the top two, and special editions like a Neon Street Gold Edition."
    },
    {
      "title": "Verification registry",
      "desc": "Card IDs, serial numbers, QR verification, claims, certificates and ownership transfers, defined before a single card is printed."
    },
    {
      "title": "Original companions",
      "desc": "Original pet characters, a French bulldog and a bird, designed to give the crew personality."
    }
  ],
  "screens": [
  {
    "title": "The crew so far: 19 characters from one component system",
    "image": "/assets/projects/jonzee-world-3.webp",
    "span": "full"
  },
  {
    "title": "Version history: every iteration kept in its own frame",
    "image": "/assets/projects/jonzee-world-5.webp",
    "span": "full"
  },
  {
    "title": "JONZEE #001, the live master character",
    "image": "/assets/projects/jonzee-world-4.webp",
    "contain": true,
    "span": "third"
  },
  {
    "title": "The first series: Neon Street",
    "image": "/assets/projects/jonzee-world-7.webp",
    "contain": true,
    "span": "third"
  },
  {
    "title": "Physical trading cards with variants and rarity levels",
    "image": "/assets/projects/jonzee-world-8.webp",
    "contain": true,
    "span": "third"
  },
  {
    "title": "Card rarity system",
    "image": "/assets/projects/jonzee-world-1.webp",
    "span": "full"
  },
  {
    "title": "Verification and ownership flow",
    "image": "/assets/projects/jonzee-world-2.webp",
    "span": "full"
  }
],
  "screensTitle": "From one character to a collectible universe.",
  "screensNote": "Artwork from the Jonzee World Figma file.",
  "stack": [
    "Figma",
    "Illustration",
    "Component systems",
    "Blender",
    "Brand identity"
  ],
  "stackLabel": "Tools",
  "outcome": "An original IP with the brand, the characters and the systems designed together.",
  "slug": "jonzee-world"
},
  image: coverImg
})
