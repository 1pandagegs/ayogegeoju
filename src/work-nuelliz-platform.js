import './style.css'
import coverImg from './assets/nuelliz-platform-cover.webp'
import { renderCaseStudy } from './case-study-template.js'

// TODO (GOJU): once the Figma prototype is shared as "anyone with the link can view",
// paste the prototype URL into liveLink below so the "Live project" button appears.

renderCaseStudy({
  slug: 'nuelliz-platform',
  title: 'Nuelliz Platform',
  category: 'Product Design / 0 to 1 platform',
  summary:
    'Nuelliz Support places vetted nannies, caregivers, drivers and housekeepers with families in Abuja. I designed the MVP for its first pilot: an ops console where staff verify workers and match them to families, a mobile app for families, a low-data intake for workers, and a small offline app for the officers who do home visits.',
  liveLink: '',
  image: coverImg,
  meta: [
    { label: 'Role', value: 'Product designer (sole designer)' },
    { label: 'Client', value: 'Nuelliz Support, with founder approval' },
    { label: 'Scope', value: '4 surfaces · 40+ screens · design system' },
    { label: 'Status', value: 'Build next (Next.js) · Abuja pilot Apr–Jul 2027' }
  ],

  overviewTitle: 'When you hire someone into your home, trust is the product.',
  overview: [
    'A family hiring a nanny is letting a stranger look after their child. The hard part is not finding people; it is proving that the person is who they say they are and has been checked properly.',
    'Nuelliz does that checking by hand today: identity (NIN), two guarantors, a visit to the candidate’s home, an interview and a police check, run by a small team. The founder’s plan for the pilot is around 100 candidates and 3 to 5 client families, with placement fees and monthly wages paid through the platform in naira via Paystack.',
    'I started from the founder’s business plan and a kickoff where she answered my questions on the pilot, the team, payments and checks. From that I wrote the product brief, cut the scope down to an MVP, and designed every surface end to end.'
  ],

  chapters: [
    {
      label: 'Users and constraints',
      title: 'Four people, four very different days.',
      body: [
        'The same placement passes through four sets of hands. Each one needed a different surface, and the constraints were as important as the users.'
      ],
      list: [
        { title: 'Ops staff (founder and team)', desc: 'Run checks, match candidates to families, handle payroll and incidents. They live in dense tables all day, so the console is desktop-first and keyboard friendly, with role-based access.' },
        { title: 'Families (clients)', desc: 'Want a safe person quickly and want to see the proof. Mostly on phones, so the client app is mobile-first web.' },
        { title: 'Workers', desc: 'Most have a smartphone, but many will not. Data costs money. So no app to download: a light web form, staff-assisted intake, and SMS.' },
        { title: 'Field officers', desc: 'Visit candidates’ homes and guarantors across Abuja, often with weak signal. They need the camera, proof of location, and a way to finish a visit offline.' },
        { title: 'Constraints', desc: 'Small team, fixed pilot window, payments in naira through Paystack, English first with local languages as a matching plus, and sensitive data (NIN, bank details) that only some roles may see.' }
      ]
    },
    {
      label: 'MVP scope',
      title: 'What I cut, and why.',
      body: [
        'The pilot is small, so I cut anything that only pays off at scale and kept everything that makes a placement safe. Each cut has a cheaper stand-in so the job still gets done.'
      ],
      list: [
        { title: 'Native worker app → web form, staff intake and SMS', desc: 'The most expensive surface to build for the least certain use. Workers apply on any browser or in person with staff, and every status change and wage payment arrives by SMS.' },
        { title: 'Self-serve browsing for families → a shortlist of three', desc: 'Families do not scroll a marketplace. Staff run Match and send three verified candidates, which keeps quality high while the pool is small.' },
        { title: 'Automatic background-check integrations → a tracked manual process', desc: 'Staff run checks and record results in the verification tracker. I listed the providers to evaluate (Youverify, QoreID, Identigo, POSSAP) for after the pilot.' },
        { title: 'Automatic payouts → ops approves each payout', desc: 'A worker is paid only after the family’s payment clears, and a person presses the button. Slower, but safe while money flows are new.' }
      ]
    },
    {
      label: 'Match',
      title: 'A shortlist staff can explain.',
      body: [
        'Match runs in two steps. First, must-haves remove anyone who does not fit: checks not passed, wrong role, live-in or not, language, distance. Then each remaining candidate gets a score out of 100.',
        'The weights (experience 25, personality fit 20, past performance 15, distance 15, pay within budget 10, training 10, languages 5) are a starting point set by an admin. Each score is broken down so staff can see why someone ranks where they do, and when they remove a candidate they give a reason. Those reasons are logged so the weights can be tuned after the pilot.',
        'Families never see scores. They see a first name, photo, experience, languages and a Verified badge, and the badge opens the list of checks behind it.'
      ],
      image: '/assets/projects/nuelliz-platform-match.webp',
      caption: 'Ops · Match review: must-haves, score breakdown, shortlist and what the family will see.'
    },
    {
      label: 'Verification',
      title: 'Every check, every candidate, one table.',
      body: [
        'The tracker shows each check as a pip with its own shape as well as colour, so “failed” and “overdue” never rely on red alone. Staff can filter to what is overdue or assigned to them and act on several candidates at once, such as sending guarantor reminders.',
        'The order of checks changed during the project: the police check moved to the end, after the interview (decision 03 below).'
      ],
      image: '/assets/projects/nuelliz-platform-verification.webp',
      caption: 'Ops · Verification tracker.'
    },
    {
      label: 'Decisions',
      title: 'Decisions, with the trade-offs written down.',
      body: [
        'I kept a decision log: the problem, the options, what we chose and what it cost. Two of them changed the money flows the most.'
      ],
      list: [
        { title: '01 · Families see one monthly total, not the fee split', desc: 'Showing the wage and Nuelliz’s fee separately invited fee negotiation and off-platform hiring. Families see the total and what it covers; the split lives in ops payroll.' },
        { title: '02 · Police check paid by the candidate at a discounted rate, refunded on placement', desc: 'The founder’s first idea was for Nuelliz to pay and deduct it from the first wage. With far more workers than families, most of that money would never come back. Placed workers still end up paying nothing.' },
        { title: '03 · Police check runs last', desc: 'Only candidates who have passed every cheaper check are asked to pay for the most expensive one.' },
        { title: '04 · No worker app in the MVP (my proposal)', desc: 'Web form, staff-assisted intake and SMS instead.' },
        { title: '05 · A native, offline-first app for field officers (my proposal)', desc: 'The one place a native app earns its cost: camera, GPS and no signal.' },
        { title: '06 · Pay for days worked, measured by pay period', desc: 'Raised by the founder: wages build up daily from the start date and skip the day off. Dividing by calendar-month days would make full months come out wrong, so we divide by working days in the pay period.' }
      ],
      image: '/assets/projects/nuelliz-platform-decision-02.webp',
      caption: 'Decision log · 02: before and after on a worker’s first wage. Amounts are placeholders pending final pricing.'
    },
    {
      label: 'Paying for days worked',
      title: 'A first wage nobody has to argue about.',
      body: [
        'Workers rarely start on a pay day. The founder asked for wages to build up daily from the start date, skip the agreed day off for live-out workers, and warn both sides before pay day with a way to see why the amount is lower than the monthly figure.',
        'The obvious rule, dividing the monthly amount by the days in the calendar month, breaks every full month after the first: a pay period that crosses two months would pay ₦115,727 instead of ₦120,000. So the daily amount is the monthly total divided by the working days in the pay period, from the day after one pay day to the next. Full periods always equal the agreed amount; only the first and last are pro-rated.',
        'In the example, Chika starts on Wed 16 Jun with Sundays off and is paid on the 29th. The period has 26 working days, she works 12 of them, so the family pays ₦55,385. Three days before, the family sees the amount and a calendar breakdown in the app. Chika gets an SMS with a no-login link showing her own wage, the days, and her police check refund. Ops see the whole schedule, the maths and every notice sent.'
      ],
      image: '/assets/projects/nuelliz-platform-prorated.webp',
      caption: 'Family: wage due and breakdown. Worker: SMS and secure breakdown link, no app needed.'
    },
    {
      label: 'Field app',
      title: 'Built for no signal.',
      body: [
        'Home and guarantor visits are where trust is actually earned, and where connectivity is worst. The field app is five screens: today’s visits, an offline checklist, photo evidence stamped with GPS and time, sign-off, and a sync queue.',
        'Nothing is deleted from the phone until the office confirms it was received, and a failed upload says what happened and offers a retry.'
      ],
      image: '/assets/projects/nuelliz-platform-field.webp',
      caption: 'Native field app (iOS / Android): Today, offline checklist, camera, sign-off, sync.'
    },
    {
      label: 'States',
      title: 'Designing for when things go wrong.',
      body: [
        'Every screen has empty, loading, error and offline versions. Errors say what happened and what to do next, and never throw away what someone has typed. A declined card offers a bank transfer. A worker who loses signal mid-form keeps their answers.'
      ],
      image: '/assets/projects/nuelliz-platform-states.webp',
      caption: 'Waiting for a shortlist, payment failed, and offline with field errors.'
    },
    {
      label: 'Design system',
      title: 'Tokens first, so a fix lands everywhere.',
      body: [
        'The system has two layers of tokens: primitives (raw values) and semantic tokens (what a value is for). Components only use semantic tokens. Buttons and inputs have hover, focus and disabled states, and every component has usage notes in Figma.',
        'I ran a contrast audit on every token pair. Two failed: grey caption text on muted backgrounds (4.27:1) and input borders (1.47:1, below the 3:1 needed for controls). I fixed both in the tokens, so every screen picked up the fix at once. Gold is only allowed on plum.',
        'The tokens are exported as CSS variables with a Tailwind v4 theme, so engineering uses the same names as Figma.'
      ],
      image: '/assets/projects/nuelliz-platform-contrast.webp',
      caption: 'Contrast audit with before and after ratios.'
    },
    {
      label: 'How I used AI',
      title: 'Research and planning partner; the design calls stayed with us.',
      body: [
        'I used Claude to research (for example, which identity and police check providers operate in Nigeria), to compare ideas side by side, and to plan: turning the founder’s business plan into a brief, scoping the MVP and working out edge cases like pro-rated wages.',
        'I designed the screens in Figma with the founder actively involved. She set the money rules and reviewed the flows with me; when something was wrong, such as an early payment screen that showed families the fee split, we changed it. The pilot is where we will learn whether these decisions hold.'
      ]
    }
  ],

  screensTitle: 'More from the product.',
  screensNote: 'Designed in Figma with shared components and variables. Prototype covers request → Match → shortlist → payment.',
  screens: [
    { title: 'Client app · shortlist, candidate profile and payment', image: '/assets/projects/nuelliz-platform-client.webp', span: 'full' },
    { title: 'Ops · Pay schedule: every pay period, the maths, and the notices sent', image: '/assets/projects/nuelliz-platform-pay-schedule.webp', span: 'full' },
    { title: 'Ops · Payroll: workers are paid only after the family’s payment clears', image: '/assets/projects/nuelliz-platform-payroll.webp', span: 'half' },
    { title: 'Decision log · 01: families see one total', image: '/assets/projects/nuelliz-platform-decision-01.webp', span: 'half' }
  ],

  stackLabel: 'Tools',
  stack: ['Figma (variables, components, prototyping)', 'Design tokens: CSS + Tailwind v4', 'Next.js (planned build)', 'Paystack', 'SMS', 'Claude'],

  outcome: 'A pilot-ready MVP design, brief and handoff spec, ready for a Next.js build ahead of the Abuja pilot.'
})
