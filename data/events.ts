export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  shortDesc: string;
  longDesc: string;
  coverImage: string;
  galleryImages: string[];
}

export const eventsData: EventItem[] = [
  {
    id: "codequest-hackathon",
    title: "CodeQuest 2026",
    category: "Hackathon",
    date: "March 12-13, 2026",
    shortDesc: "A 24-hour national hackathon challenging student developers to solve real-world industry problems.",
    longDesc: "CodeQuest is the annual flagship hackathon hosted by our ACM Student Chapter. Over 200 developers gathered to build products ranging from AI-powered health solutions to local store management apps. Sponsored by leading tech companies, this event offered students hands-on mentorship, tech talks, and cash prizes, fostering an intense yet friendly collaborative environment.",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "ai-ml-workshop",
    title: "AI/ML Hands-on Seminar",
    category: "Workshop",
    date: "April 05, 2026",
    shortDesc: "Deep dive into model architectures, convolutional networks, and local LLM deployment workflows.",
    longDesc: "This one-day seminar brought together artificial intelligence experts and eager students. Participants gained practical experience setting up PyTorch environments, fine-tuning pre-trained vision models, and exploring the implications of edge AI. Interactive coding sessions and real-time GPU compute workspaces gave everyone a taste of modern AI engineering.",
    coverImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "cyber-ctf-clash",
    title: "Cyber CTF Clash",
    category: "Competition",
    date: "April 28, 2026",
    shortDesc: "Jeopardy-style cybersecurity contest covering cryptography, reverse engineering, and web exploitation.",
    longDesc: "The ACM CTF Clash simulated real-world penetration scenarios. Competitors worked in teams of three to reverse-engineer binaries, decrypt hidden payloads, and bypass secure authentication protocols. With an active scoreboard dynamically showing ranks, the atmosphere was highly competitive and educational for both beginners and experienced players.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "webdev-bootcamp",
    title: "Modern Web Bootcamp",
    category: "Workshop",
    date: "May 15, 2026",
    shortDesc: "Interactive workshop teaching Next.js, responsive Tailwind CSS layouts, and Framer Motion animations.",
    longDesc: "A complete intensive bootcamp aimed at bringing developers up to speed with modern full-stack web development. The curriculum focused on building fast static sites, managing complex states with React Context, styling fluid components using utility classes, and integrating micro-interactions. Every attendee launched their personal portfolio site by the end of the day.",
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "ui-ux-sprint",
    title: "UI/UX Design Sprint",
    category: "Workshop",
    date: "June 02, 2026",
    shortDesc: "Focusing on wireframing, interactive Figma mockups, user research practices, and feedback cycles.",
    longDesc: "This design-centric sprint was organized to bridge the gap between engineering and visual aesthetics. Mentors walked students through industry standards in Figma layouts, typography scales, accessibility rules (WCAG), and creating fluid components. Team wireframing sessions put these design paradigms to quick tests.",
    coverImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "cloud-devops-summit",
    title: "Cloud & DevOps Summit",
    category: "Seminar",
    date: "June 20, 2026",
    shortDesc: "Understanding Docker containerization, Kubernetes orchestration, and continuous integration pipelines.",
    longDesc: "DevOps Summit focused on scalable architectures. Students learned to containerize Next.js projects, set up GitHub Action pipelines for testing, and deploy workloads onto cloud providers. Industry experts led deep panels about zero-downtime updates and monitoring systems.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "game-dev-hack",
    title: "Game Dev Hackathon",
    category: "Hackathon",
    date: "July 08-09, 2026",
    shortDesc: "A 48-hour build marathon where students create immersive 2D/3D games on Unity and WebGL frameworks.",
    longDesc: "The Game Dev Hackathon challenged students to write play mechanics, compile graphics, and render sounds under strict time constraints. Featuring active testing booths where peer players evaluated mechanics, the final play sessions gathered massive crowds and showcased incredibly clever concepts.",
    coverImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "blockchain-forum",
    title: "Blockchain & Web3 Forum",
    category: "Seminar",
    date: "July 24, 2026",
    shortDesc: "Demystifying smart contracts, Ethereum networks, solidity code architectures, and decentralized apps.",
    longDesc: "A complete panel exploring decentralized ledger solutions. Students got to deploy Solidity contracts onto testnets, configure web3 wallets, and fetch states. Discussions covered security audits, scalable gas models, and practical utility-based dApps.",
    coverImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "coding-arena",
    title: "Coding Arena Clash",
    category: "Competition",
    date: "August 12, 2026",
    shortDesc: "Speed-running algorithmic challenges covering data structures, dynamic programming, and complexity tests.",
    longDesc: "The Coding Arena put students' algorithm mastery to ultimate tests. Competing in individual formats, developers solved complex graph structures, cache scheduling setups, and math puzzles. Winners were determined based on completion accuracy and runtime efficiencies.",
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "iot-home-hack",
    title: "IoT Smart Hackathon",
    category: "Hackathon",
    date: "August 28, 2026",
    shortDesc: "Building smart microcontroller projects using sensors, local dashboard controls, and real-time feeds.",
    longDesc: "IoT Smart Hackathon focused on edge computing interfaces. Students configured ESP32 modules, read sensor values, and mapped states onto responsive local web dashboards. Teams completed prototypes of automated garden feeders, smart alarms, and environmental logs.",
    coverImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557063673-0493e05d49ef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
    ]
  }
];
