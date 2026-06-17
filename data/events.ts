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
    category: "Bootcamp",
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
  }
];
