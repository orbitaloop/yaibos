// 🤖 Shared profiles. Check primary sources before changing names, claims or figures.
export interface Inspiration {
  id: string;
  name: string;
  role: string;
  avatar: string;
  isLogo?: boolean;
  link: string;
  framework: string;
  summary: string;
  contribution: string;
  yaibosConnection: string;
  sources: { label: string; url: string }[];
}

export const inspirationsReviewedOn = '2026-10-08';
export const inspirationsReviewedLabel = '8 October 2026';

export const inspirations: Inspiration[] = [
  {
    id: 'tiago-forte',
    name: 'Tiago Forte',
    role: "Author of 'Building a Second Brain' & Founder of Forte Labs",
    // Portrait: https://fortelabs.com/wp-content/uploads/2022/01/tiago-forte-300x300.jpg
    avatar: '/images/inspirations/tiago-forte.webp',
    link: 'https://fortelabs.com',
    framework: 'PARA & CODE',
    summary: 'Developed PARA for organizing information by projects, areas, resources and archives, and CODE for turning captured information into useful work.',
    contribution: 'Building a Second Brain teaches personal knowledge management through PARA and CODE (Capture, Organize, Distill, Express). These methods work across different note-taking tools; they do not require local Markdown files.',
    yaibosConnection: 'YAIBOS uses PARA to organize business context by active projects and ongoing responsibilities. Open Markdown storage is a separate YAIBOS design choice.',
    sources: [
      { label: 'The PARA method', url: 'https://fortelabs.com/blog/para/' },
      { label: 'Building a Second Brain & CODE', url: 'https://fortelabs.com/blog/basboverview/' },
      { label: 'Forte Labs team & biography', url: 'https://fortelabs.com/about-forte-labs/' },
    ],
  },
  {
    id: 'nick-milo',
    name: 'Nick Milo',
    role: 'Founder of Linking Your Thinking',
    avatar: '/images/inspirations/nick-milo.jpg',
    link: 'https://www.linkingyourthinking.com',
    framework: 'Linked notes & Maps of Content',
    summary: 'Teaches note-making with linked notes and Maps of Content: notes that help gather, develop and navigate related ideas.',
    contribution: 'Linking Your Thinking focuses on developing ideas through connected notes. Its Maps of Content provide entry points into a collection of notes, supporting exploration as well as navigation.',
    yaibosConnection: 'README maps and links between notes help people and agents find the relevant context without loading the whole second brain.',
    sources: [
      { label: 'Maps of Content', url: 'https://blog.linkingyourthinking.com/maps/' },
      { label: 'Linking Your Thinking', url: 'https://www.linkingyourthinking.com/' },
    ],
  },
  {
    id: 'eliott-meunier',
    name: 'Eliott Meunier',
    role: "Author of 'Arrêtez d'oublier ce que vous lisez !' & Co-Founder of Audeon",
    // Portrait: https://eliottmeunier.com/content/images/2024/09/Screenshot-2024-04-15-at-09.04.19-2.png
    avatar: '/images/inspirations/eliott-meunier.webp',
    link: 'https://eliottmeunier.com',
    framework: 'IPCRA & AI-assisted second brains',
    summary: 'Shows how an IPCRA second brain in Obsidian can provide context to Claude Code, which reads, organizes and updates the underlying files.',
    contribution: 'His book covers personal knowledge management. His March 2026 demonstration with Jean-Charles Kurdali connects an Obsidian second brain to Claude Code and explains IPCRA, project context and inbox processing. Prisme One became Audeon in September 2026.',
    yaibosConnection: 'Business context and procedures live in files that an agent can read and update. Obsidian is the current viewer and editor; the files remain usable through other tools.',
    sources: [
      { label: 'Second brain + Claude Code demonstration', url: 'https://eliottmeunier.com/youtube-xfo9fmx6pla/' },
      { label: 'Book at Éditions Eyrolles', url: 'https://www.editions-eyrolles.com/livre/arretez-d-oublier-ce-que-vous-lisez' },
      { label: 'Prisme One becomes Audeon', url: 'https://audeon.fr/articles/prisme-one-devient-audeon' },
    ],
  },
  {
    id: 'nate-herk',
    name: 'Nate Herk',
    role: 'AI Automation Educator & Creator of the AIS-OS Starter Kit',
    // Portrait: https://www.nateherk.com/scroll/assets/portrait-speaking.webp
    avatar: '/images/inspirations/nate-herk.webp',
    link: 'https://www.nateherk.com',
    framework: 'The Four Cs of an AI OS',
    summary: 'Teaches Context, Connections, Capabilities and Cadence, with a starter kit for building an AI operating system in Claude Code and Codex.',
    contribution: 'His AIS-OS starter kit describes four layers: business context, connections to live data, reusable capabilities and recurring execution. It puts cadence last: a workflow should work reliably before it runs unattended.',
    yaibosConnection: 'Company context, a tools registry, reusable skills and authorized schedules cover similar needs in YAIBOS. The Four Cs framework is credited to Nate Herk.',
    sources: [
      { label: 'AIS-OS starter kit & Four Cs', url: 'https://github.com/nateherkai/AIS-OS#two-frameworks' },
      { label: 'Nate Herk', url: 'https://www.nateherk.com/' },
    ],
  },
  {
    id: 'meta-analytics',
    name: 'Analytics at Meta',
    role: 'Authors of the AI Second Brain Case Study',
    avatar: '/images/inspirations/meta-logo.svg',
    isLogo: true,
    link: 'https://medium.com/@AnalyticsAtMeta/how-we-built-an-ai-second-brain-for-60k-knowledge-workers-78c507dd795b',
    framework: 'PARA, progressive disclosure & skills',
    summary: 'Reports an internal second brain built from PARA folders, context loaded on demand, connected tools and reusable Markdown skills.',
    contribution: 'The April 2026 case study describes a PARA workspace, project context files, internal tool connections and shared skills. It reports over 63,000 installs and roughly 10,000 daily active users. These are adoption figures, not a controlled benchmark against other chatbots.',
    yaibosConnection: 'Load a small amount of root context first, then open project details when needed. Document useful workflows as reusable skills.',
    sources: [
      { label: 'How We Built an AI Second Brain for 60K Knowledge Workers', url: 'https://medium.com/@AnalyticsAtMeta/how-we-built-an-ai-second-brain-for-60k-knowledge-workers-78c507dd795b' },
    ],
  },
  {
    id: 'andrej-karpathy',
    name: 'Andrej Karpathy',
    role: 'AI Researcher & Educator, Former Tesla AI Director & OpenAI Founding Member',
    avatar: '/images/inspirations/andrej-karpathy.jpg',
    link: 'https://karpathy.ai',
    framework: 'LLM Wiki',
    summary: 'Describes an LLM-maintained wiki that turns curated sources into linked Markdown pages, with workflows for ingestion, questions and maintenance.',
    contribution: 'His April 2026 LLM Wiki idea file separates raw sources, a maintained wiki and a schema that guides the agent. It describes ingest, query and lint operations. It is a pattern to adapt, including to business and team contexts, rather than a released application.',
    yaibosConnection: 'Keep original sources, preserve useful findings in durable notes and periodically check links and stale claims. YAIBOS extends this to business procedures and role-agent context.',
    sources: [
      { label: 'LLM Wiki original idea file', url: 'https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f' },
      { label: 'Biography', url: 'https://karpathy.ai/' },
    ],
  },
  {
    id: 'iwo-szapar',
    name: 'Iwo Szapar',
    role: 'Creator of MemoryOS & AI Adoption Educator',
    avatar: '/images/inspirations/iwo-szapar.jpg',
    link: 'https://www.iwoszapar.com',
    framework: 'MemoryOS & workspace health checks',
    summary: 'Offers MemoryOS: workspace health checks and persistent agent memory stored in an owner-controlled SQL database.',
    contribution: 'MemoryOS distinguishes a local workspace scanner from a persistent memory layer. Its documentation describes configuration checks, health scores and stale-knowledge detection, with memory stored in a local SQL database or the owner’s Supabase project.',
    yaibosConnection: 'Recurring maintenance is part of the Living Second Brain pillar. MemoryOS is a reference for that concern; it is not an integrated YAIBOS dependency or evidence that YAIBOS implements its monitoring features.',
    sources: [
      { label: 'MemoryOS architecture & health checks', url: 'https://www.iwoszapar.com/memory-os' },
      { label: 'Background & projects', url: 'https://www.iwoszapar.com/about' },
    ],
  },
];
