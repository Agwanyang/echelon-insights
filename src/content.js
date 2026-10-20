export const company = {
  name: "Echelon Insights",
  tagline: "A group that moves like the most important company in the world.",
  email: "info@c25groups.com",
};

export const nav = [
  { label: "What we are", href: "#about" },
  { label: "How we think", href: "#think" },
  { label: "What we build", href: "#build" },
  { label: "Working with us", href: "#work" },
];

export const hero = {
  headline: "We build what needs to exist.",
  sub: "Not what sells. Not what's safe. What's missing.",
};

export const about = {
  title: "What we are",
  paragraphs: [
    `${company.name} is a data driven group. Every decision we make traces back to a number, a signal, or a measured outcome — not a hunch, not a hierarchy, not a hope.`,
    "We are not a vendor. We are not for hire in the usual sense. We build the things we believe the world is short on, ship them, and let the results argue on our behalf.",
  ],
  closing: "If what we've built is useful to you, the door is open.",
  closingNote: "We don't chase. But you can reach out.",
};

export const principles = {
  title: "How we think",
  items: [
    {
      title: "Data over opinion.",
      body: "The loudest voice doesn't win. The clearest evidence does. We instrument everything, measure honestly, and change our minds in public when the data says so.",
    },
    {
      title: "Build first.",
      body: "We'd rather have a working thing than a perfect deck. Prototypes beat promises. Shipping is the only proof that counts.",
    },
    {
      title: "Necessity, not demand.",
      body: 'We don\'t start from "what will people pay for." We start from "what should already exist and doesn\'t." The market catches up to things that are true.',
    },
    {
      title: "Move like it matters.",
      body: "Speed, precision, and seriousness — the posture of a company the world can't afford to get wrong. We hold ourselves to that bar whether anyone is watching or not.",
    },
  ],
};

export const build = {
  title: "What we build",
  quote: "Systems that are inevitable in hindsight.",
  items: [
    "Infrastructure other people will one day depend on without noticing.",
    "Tools that collapse ten steps into one.",
    "Data products that turn noise into a decision.",
  ],
  closing:
    "Each one earns its place by being needed — measured by whether its absence would be felt.",
};

export const measure = {
  title: "The long view",
  headline: ["Success measured in", "centuries"],
  contrast: "Not quarters.",
  paragraphLabels: ["The debt we leave", "Decisions made today"],
  paragraphs: [
    "We build things meant to outlast the moment that made them. A product is not finished when it ships; its real test is whether it remains useful, understandable, and dependable years from now.",
    "That creates a debt. Every shortcut in the systems we build — unclear data, brittle tools, decisions no one can explain — leaves someone else to maintain, work around, or pay for it later. Our responsibility is to the people who inherit those choices, and to the places their consequences reach.",
    "So we ask what will still hold, what can be repaired, and who carries the cost if we get it wrong. We choose durable foundations over quick wins, and treat evidence as something to revisit, not a reason to stop thinking.",
  ],
  timeline: ["Today", "What we leave", "What lasts"],
};

export const work = {
  title: "Working with us",
  paragraphs: [
    "We build independently. We're not looking for clients, roadmaps-for-hire, or projects to fill a pipeline.",
    "But if you've seen what we make and there's something real to build together — reach out. We answer serious messages seriously.",
  ],
};

export const footer = `${company.name} — building what's needed to exist.`;
