export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  venue?: string;
  shortDesc: string;
  longDesc: string;
  coverImage: string;
  galleryImages: string[];
}

export const eventsData: EventItem[] = [
  {
    id: "zero-day-2026",
    title: "ZERO DAY 2026",
    category: "Competition",
    date: "April 27th, 2026",
    time: "11:00 AM – 4:00 PM",
    venue: "Lab 116, Block II, AITR",
    shortDesc: "Inter College Capture The Flag (CTF) Challenge. Step into the world of cybersecurity and real-world hacking.",
    longDesc: "✨ ZERO DAY 2026 ✨\n\nInter College Capture The Flag (CTF) Challenge.\n\nStep into the world of cybersecurity and real-world hacking challenges. Presenting one of the biggest CTF events in Indore ⚡\n\n4 hours. 120 spots. 1 question: Can you hack it before time runs out? ⏳\n\n🧠 Challenges: Web Exploits, Cryptography, Forensics, Reverse Engineering, Steganography\n\n🎁 Perks:\n- 💼 Internship Opportunities\n- 💰 Prizes worth $200\n- 🎉 Goodies & Sticker Packs\n- 📜 Industry-Recognized Certificate\n- ✨ ChakraVue Pro Access\n- 🥤 Refreshments Included\n\n🎯 No experience needed | Solo participation | Bring your own laptop with tools installed\n\n🔗 Register: https://ctf.chakravue.io",
    coverImage: "/events/image4.png",
    galleryImages: ["/events/image4.png"]
  },
  {
    id: "hacking-101-workshop",
    title: "ZERODAY WORKSHOP: HACKING 101",
    category: "Workshop",
    date: "April 24th, 2026",
    time: "10:30 AM onwards",
    venue: "Lab 116, Block II, AITR",
    shortDesc: "Exclusive hands-on warm-up workshop for ZERO DAY CTF. Learn real attacks and defenses.",
    longDesc: "⚡ Heads up Acropolis! This Friday is your exclusive 'Hacking 101' hands-on workshop. This is the official warm-up before the ZERO DAY CTF on the 27th, giving AITR students a competitive head start.\n\n🔥 What to expect:\n- ✅ 100% Free\n- ✅ Real terminals, real attacks, real defenses\n- ✅ Hands-on cybersecurity training\n\n⚠️ Requirements:\n- 💻 Bring your laptop (fully charged) + charger\n- 📚 Show up prepped! Start the 'Hacking 101' course online to skip the basics and save 2 hours of workshop time.\n\n🔗 Start the course: https://labs.chakravue.io/courses/69e249edae1536c71d16b8c1/content\n\n👤 Speaker: Mr. Rohit Singh (Founder, ChakraVue)\n📍 Venue: Lab 116, Block II, AITR",
    coverImage: "/events/image1.png",
    galleryImages: ["/events/image1.png"]
  },
  {
    id: "kernel-x-os",
    title: "KERNEL-X: WRITE YOUR OWN OS",
    category: "Seminar",
    date: "April 21st, 2026",
    time: "11:00 AM onwards",
    venue: "Dhairya Prabha Auditorium, AITR",
    shortDesc: "AITR ACM Eminent Speaker Program featuring Prof. Abhijath Vichare. Explore OS kernel structures and abstractions.",
    longDesc: "The Department of Computer Science and Engineering, in collaboration with the AITR ACM, AITR ACM-W, and SIGAI Student Chapters, organized an AITR ACM Eminent Speaker Program (ESP) featuring Prof. (Dr.) Abhijath Vichare.\n\nThis session focused on exposing students to advanced concepts in operating systems and system-level programming. Key highlights included:\n- Understanding core architecture of operating systems\n- Introduction to kernel design and system-level abstraction\n- Step-by-step approach to building a basic operating system\n- Insights into memory management, process handling, and hardware interaction\n- Real-world challenges in OS development and debugging\n\nThe speaker emphasized hands-on learning and system-level thinking, encouraging students to explore how software interacts directly with hardware.",
    coverImage: "/events/image3.png",
    galleryImages: ["/events/image3.png"]
  },
  {
    id: "acroset-2025",
    title: "ACROSET 2025",
    category: "Seminar",
    date: "September 27th, 2025",
    time: "Duration: 90 minutes",
    venue: "Kamal Prabha Auditorium, AITR",
    shortDesc: "IEEE International Conference keynote session on the future of Artificial General Intelligence (AGI).",
    longDesc: "🌟 Event Highlights\n📅 Event Date: 27, September 2025\n🏛 Venue: Kamal Prabha Auditorium, AITR\n⏰ Duration: 90 minutes\n\nJoin us on 27 September at Acropolis Institute of Technology and Research for an IEEE International Conference keynote session with Dr. Mehdi Bahrami (Santa Clara, USA).\n\nDiscover the future of Artificial General Intelligence (AGI) — from training and fine-tuning large models to developing interactive agents capable of autonomous reasoning, multimodal integration, and safe deployment.\n\nGain insights into cutting-edge AI, human-computer interaction, and societal challenges shaping the path toward fully autonomous AGI.",
    coverImage: "/events/image10.png",
    galleryImages: ["/events/image10.png"]
  },
  {
    id: "mindmorph-2025",
    title: "MINDMORPH",
    category: "Workshop",
    date: "September 26th, 2025",
    time: "Duration: 120 minutes",
    venue: "Kamal Prabha Auditorium, AITR",
    shortDesc: "AITR ACM DSP hands-on workshop on building AI applications and intelligent agents using LLMs and VLMs.",
    longDesc: "🌟 Event Highlights\n📅 Event Date: 26, September 2025\n🏛 Venue: Kamal Prabha Auditorium, AITR\n⏰ Duration: 120 minutes\n\nAttend MindMorph on 26 September at Acropolis Institute of Technology and Research, an AITR ACM DSP session with Dr. Mehdi Bahrami (Santa Clara, USA).\n\nThis hands-on workshop guides participants in building advanced AI applications and intelligent agents using Large Language Models (LLMs) and Vision Language Models (VLMs).\n\nExplore model fine-tuning, data integration, task automation, and ethical considerations while gaining practical skills to design, optimize, and deploy full-stack AI solutions in real-world scenarios.",
    coverImage: "/events/image9.png",
    galleryImages: ["/events/image9.png"]
  },
  {
    id: "prayatna-2.0",
    title: "PRAYATNA 2.0",
    category: "Hackathon",
    date: "March 4th, 2025",
    time: "36 Hours",
    venue: "Acropolis Institute of Technology and Research, Indore",
    shortDesc: "National-level 36-hour hackathon where student innovation meets pure coding excitement.",
    longDesc: "🌟 Event Highlights\n📅 Event Date: 4th, 5th and 6th March, 2025\n🏛 Venue: Acropolis Institute of Technology and Research, Indore\n⏰ Duration: 36 Hours of non-stop coding action\n💰 Prize Pool: ₹1 Lakh+ (and growing!)\n\n🚀🌟 Prayatna se sabkuch mumkin hai! 🌟🚀\n\nAITR ACM and AITR ACM-W are thrilled to bring you the most electrifying coding extravaganza – Prayatna! 🎉\n\nA national-level 36-hour hackathon on 4th, 5th and 6th March, 2025, where innovation sparks pure excitement! 💻✨",
    coverImage: "/events/image8.png",
    galleryImages: ["/events/image8.png", "/events/image12.png"]
  },
  {
    id: "fun-with-algorithms",
    title: "FUN WITH ALGORITHMS",
    category: "Seminar",
    date: "May 18th, 2024",
    time: "3:00 PM – 4:30 PM",
    venue: "Google Meet",
    shortDesc: "AITR ACM Eminent Speaker Series featuring TCS Research Chief Scientist, Mr. Sachin Lodha.",
    longDesc: "🎉 Get ready to dive into the world of algorithms with AITR ACM and AITR ACM-W! 🎉\n\nWe proudly present AITR ACM Eminent speaker, Mr. Sachin Lodha, Chief Scientist at TCS Research, who will be unraveling the mysteries of algorithms in our session titled \"Fun with Algorithms\"! 🧩💻\n\nHere's what you can expect:\n1️⃣ Introduction to various types of algorithms and their real-world applications.\n2️⃣ Engaging puzzles that play a crucial role in modern algorithm design.\n\n🎖 Participation Certificates for everyone!!",
    coverImage: "/events/image11.png",
    galleryImages: ["/events/image11.png"]
  },
  {
    id: "web3-and-blockchain",
    title: "WEB3 AND BLOCKCHAIN",
    category: "Seminar",
    date: "May 7th, 2024",
    time: "2:00 PM",
    venue: "Acropolis Institute of Technology and Research",
    shortDesc: "Dive into the decentralized future of the web with guest speaker Mr. Amit Singh Rathore.",
    longDesc: "🔗 Ready to explore the future of the web?\n\n💭 How can blockchain revolutionize your online experience?\n\nJoin us for ‘WEB3 AND BLOCKCHAIN’: Where innovation meets decentralization. 🚀\n\nFeaturing an exclusive speaker session by the visionary Mr. Amit Singh Rathore.\n\nLet’s unlock the potential of Web3 together! 💡",
    coverImage: "/events/image7.png",
    galleryImages: ["/events/image7.png"]
  },
  {
    id: "drift-mania",
    title: "DRIFT MANIA: SMASH KART SHOWDOWN",
    category: "Competition",
    date: "May 6th, 2024",
    time: "08:30 AM – 10:30 AM",
    venue: "Acropolis Institute of Technology and Research, Indore",
    shortDesc: "The ultimate gaming event where speed, strategy, and drift skills collide for a cash prize pool.",
    longDesc: "🎮 Attention all Gamers! 🎮\n\n🌟Brace yourselves for the ultimate clash of champions, Drift Mania: The Ultimate Smash Kart Showdown organized by AITR ACM and AITR ACM-W Student Chapter, where skills collide and champions are crowned! 🏆\n\n💰 Prize Pool: ₹5000 and growing.\n\n📋 Guidelines:\n• Registration: ₹150/- per team\n• Team Size: 1-5 Members\n• Open to All: Participants from any college are welcome.\n\n📆 Registration Deadline: May 3rd, 2024",
    coverImage: "/events/image2.png",
    galleryImages: ["/events/image2.png"]
  },
  {
    id: "smartsculpt-2.0",
    title: "SMARTSCULPT 2.0: IoT WORKSHOP",
    category: "Workshop",
    date: "April 1st, 2024",
    time: "8:30 AM to 10:30 AM",
    venue: "Lab 120, Block 2, AITR",
    shortDesc: "A hands-on workshop focused on developing internet-of-things devices, microcontrollers, and automation projects.",
    longDesc: "AITR ACM and AITR ACM-W student chapter in collaboration with UiPath Student Community AITR proudly presents SmartSculpt 2.0: A Hands-on Workshop on IoT\n\n𝗘𝘃𝗲𝗻𝘁 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝘀:\nHands-on Projects ✨\nInteractive Sessions 🏅\n\n💰 𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻 𝗙𝗲𝗲: Only ₹50! (Limited seats available)\n🍲 𝗥𝗲𝗳𝗿𝗲𝘀𝗵𝗺𝗲𝗻𝘁𝘀 𝗜𝗻𝗰𝗹𝘂𝗱𝗲𝗱!\n\nDon't miss this opportunity to gain knowledge and have some fun while learning! 🌐",
    coverImage: "/events/image6.png",
    galleryImages: ["/events/image6.png"]
  },
  {
    id: "prayatna-1.0",
    title: "PRAYATNA 1.0",
    category: "Hackathon",
    date: "March 18th, 2024",
    time: "36 Hours",
    venue: "Acropolis Institute of Technology and Research, Indore",
    shortDesc: "36-hour national-level hackathon. Accommodation, transport, food, and massive prize pools included.",
    longDesc: "🚀🌟 Prayatna se sabkuch mumkin hai! 🌟🚀\n\nAITR ACM and AITR ACM-W Student Chapter are thrilled to bring you the most electrifying coding extravaganza – \"Prayatna\"🎉\n\nA national-level 36-hour hackathon on 18th March 2024🗓, where innovation sparks pure excitement! 💻✨\n\nEvent Highlights:\n- 🏛 Venue: Acropolis Institute of Technology and Research, Indore\n- ⏰ Duration: 36 Hours\n- 👫 Team Size: Up to four members (1 Female member mandatory)\n- 💰 Prize Pool: A whopping ₹50,000!\n- 📆 Last Date to Register: 10th February 2024\n- 🚌 Transportation: To and fro transportation provided\n- 🏫 Accommodation: Provided\n- 🍴 Food: Meals taken care of",
    coverImage: "/events/image5.png",
    galleryImages: ["/events/image5.png"]
  }
];
