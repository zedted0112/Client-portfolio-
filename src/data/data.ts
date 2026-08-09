import { SiteData } from '../types';

export const siteData: SiteData = {
  personal: {
    name: "Nitesh M. Gangaramani",
    title: "Managing Director, Nyshaa Realty · Executive Director, Sukoon Stays",
    shortTitle: "Boutique Real Estate Developer & Entrepreneur",
    location: "Mumbai, Maharashtra, India"
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Ventures", href: "#ventures" },
    { label: "Work Portfolio", href: "#portfolio" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Achievements", href: "#achievements" },
    { label: "Media & Press", href: "#media" },
    { label: "Insights & Videos", href: "#insights" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "Managing Director, Nyshaa Realty · Executive Director, Sukoon Stays",
    headline: "Build Trust. Create Value. Leave a Legacy.",
    subheadline: "Over two decades of experience driving ground-zero real estate businesses into landmark portfolios across Dubai, India, and Mumbai's premium redevelopment landscape.",
    primaryCta: {
      text: "Explore Nyshaa Realty",
      href: "#ventures"
    },
    secondaryCta: {
      text: "View Work Portfolio",
      href: "#portfolio"
    },
    tertiaryCta: {
      text: "Get in touch",
      href: "#contact"
    },
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
  },

  stats: [
    {
      id: "years",
      value: "20+",
      label: "Years of Experience",
      description: "In real estate, construction, and infrastructure"
    },
    {
      id: "projects",
      value: "52",
      label: "Projects Delivered",
      description: "Delivered across India"
    },
    {
      id: "dubai-portfolio",
      value: "$2B+",
      label: "Dubai Portfolio",
      description: "Built and delivered in Dubai"
    },
    {
      id: "total-value",
      value: "₹5,000+ Cr",
      label: "Total Project Value",
      description: "Total value of projects delivered across India"
    }
  ],

  about: {
    sectionHeading: "Building Things That Outlast the Deal",
    eyebrow: "BIOGRAPHY & LEADERSHIP",
    quote: "Real estate execution is not merely about constructing structures; it is about taking ownership, reducing risk through meticulous design, and leaving an enduring legacy of trust.",
    qualifications: [
      {
        degree: "B.E. in Civil Engineering",
        institution: "Mumbai University",
        badge: "Engineering Core"
      },
      {
        degree: "PG Diploma in Construction Management",
        institution: "NICMAR",
        badge: "Management"
      },
      {
        degree: "MBA in Construction & Finance",
        institution: "Manchester University (UK)",
        badge: "International Business"
      },
      {
        degree: "PMP® Certification",
        institution: "Project Management Institute (USA)",
        badge: "Professional PMP"
      }
    ],
    bioParagraphs: [
      "I am a Boutique Real Estate developer with over two decades of experience spanning construction, infrastructure, redevelopment, and commercial real estate projects. I hold a Bachelor's in Civil Engineering from Mumbai University, a Post Graduate Diploma in Construction Management from NICMAR, an MBA in Construction and Finance from Manchester University (UK), and a PMP certification from the USA.",
      "My journey began in Mumbai, coming from a middle-class background where my father served as a Senior Banker at the Reserve Bank of India. Since childhood, reading business magazines instilled a deep ambition to continuously aim higher and embrace challenges. This drive took me from managing live residential projects on-ground in India to co-founding and directing one of Dubai's largest real estate development companies.",
      "Throughout my career, I have been privileged to contribute to landmark developments, managing every stage of the project lifecycle from land acquisition and project finance to customer experience and long-term asset creation."
    ],
    lifestyleParagraph: [
      "Beyond the boardroom and construction sites, I believe in maintaining a strong work-life balance. I run and sprint 10 kilometers every morning to keep my adrenaline high, and I am an active member of the MCA Club in Bandra where I play badminton and squash.",
      "A dedicated family man, I am grounded by spiritual practices, starting my day with meditation to ensure focused decision-making."
    ],
    personalHighlights: [
      {
        title: "Morning Discipline",
        detail: "10 km daily morning run and sprint routine",
        icon: "Activity"
      },
      {
        title: "Sports & Club",
        detail: "Active badminton & squash player at MCA Club, Bandra",
        icon: "Trophy"
      },
      {
        title: "Mindfulness",
        detail: "Daily morning meditation practice for clarity & focus",
        icon: "Sun"
      },
      {
        title: "Values",
        detail: "Grounded family life and ethics-first leadership",
        icon: "Heart"
      }
    ],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
  },

  journey: [
    {
      id: "j-2004",
      year: "2004",
      location: "Mumbai",
      title: "The Foundation",
      description: "Graduated with a B.E. in Civil Engineering and immediately started as a Site Engineer for a private real estate developer, successfully navigating the intense pressure of delivering residential flats directly to buyers.",
      highlights: [
        "Hands-on site engineering and execution",
        "Direct buyer handovers and site management",
        "Ground-zero exposure to construction realities"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "j-2005",
      year: "2005–2006",
      location: "UAE",
      title: "The Training Ground",
      description: "Relocated to Dubai to join a Middle East headquartered multidisciplinary construction conglomerate. Underwent rigorous hands-on training across contracting, ready-mix concrete, precast, electromechanical, and steel structures under the direct mentorship of the group's Chairman.",
      highlights: [
        "Multidisciplinary training in precast & MEP",
        "Direct mentorship under Chairman",
        "Cross-functional construction exposure"
      ],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "j-2006",
      year: "2006–2011",
      location: "Dubai",
      title: "Scaling to the Top 5",
      description: "Co-founded the conglomerate's real estate development arm, growing it into a top-five developer in Dubai within three years. We scaled the portfolio to 27 projects valued at over $2 Billion, spanning 15 million square feet. During the 2008 financial crisis, I led a consolidation strategy that reduced liabilities by over 75% while successfully delivering 7 ongoing projects.",
      highlights: [
        "Scaled portfolio to 27 projects ($2B+ value)",
        "Top-5 developer status in Dubai within 3 years",
        "Led 2008 crisis consolidation: 75% liability reduction"
      ],
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "j-2011",
      year: "2011–2018",
      location: "India",
      title: "Building an Empire from Scratch",
      description: "Returned to India to establish the conglomerate's operations. Started with a single ₹36 Crore contract and scaled the order book to ₹4,500 Crores with a staff of over 1,200. Delivered 52 prestigious projects valued over ₹5,000 Crores within 11 years.",
      highlights: [
        "Scaled order book from ₹36 Cr to ₹4,500 Cr",
        "Managed 1,200+ team members across nationwide sites",
        "Delivered 52 major infrastructure & building projects"
      ],
      image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "j-2021",
      year: "2021",
      location: "Mumbai",
      title: "The Lifestyle Shift",
      description: "Founded Sukoon Stays, pioneering premium student accommodation and luxury co-living in Juhu and Vile Parle.",
      highlights: [
        "Pioneered premium student co-living in Juhu & Vile Parle",
        "Technology-enabled modern student living ecosystems",
        "Expansion into premium co-working spaces"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "j-present",
      year: "Present",
      location: "Mumbai",
      title: "The Legacy Phase",
      description: "Leading Nyshaa Realty as Managing Director, focusing on boutique redevelopment, commercial IT parks, and mixed-use developments across Mumbai.",
      highlights: [
        "Prime Mumbai redevelopment focus",
        "Commercial IT parks and mixed-use destinations",
        "Fast-execution construction techniques"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    }
  ],

  ventures: [
    {
      id: "nyshaa-realty",
      company: "Nyshaa Realty",
      role: "Managing Director",
      focus: "Leading the strategic vision for premium redevelopment, commercial real estate, and mixed-use developments. We specialize in transforming urban spaces through land acquisition, meticulous design management, and fast execution construction techniques.",
      vision: "Our goal extends beyond construction; we aim to create destinations that generate long-term value for investors and communities alike.",
      websiteUrl: "https://nyshaarealty.com",
      tags: ["Urban Redevelopment", "Commercial Real Estate", "Mixed-Use", "Fast Execution"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "sukoon-stays",
      company: "Sukoon Stays",
      role: "Executive Director & Founder",
      focus: "A trusted brand in premium student accommodation and luxury co-living across Juhu, Vile Parle, and Andheri. We are now expanding into next-generation co-working spaces in Andheri East and Wagle Estate, Thane, designed to be entrepreneurial ecosystems for start-ups and innovators.",
      vision: "To provide safe, technology-enabled living and workspace solutions that foster innovation, personal growth, and professional success.",
      websiteUrl: "https://sukoonstays.com",
      tags: ["Student Housing", "Luxury Co-Living", "Co-Working Hubs", "Tech-Enabled Living"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1200"
    }
  ],

  projects: [
    {
      id: "jnpt-sez",
      title: "Jawaharlal Nehru Port Trust (JNPT) SEZ",
      location: "Uran, Navi Mumbai",
      category: "Infrastructure & Industrial SEZ",
      value: "₹570 Crore",
      description: "A monumental ₹570 Crore infrastructure project spanning 700 acres in Uran, Navi Mumbai, involving land leveling, storm water drains, and road building, inaugurated by Hon'ble Prime Minister Shri Narendra Modi.",
      highlights: [
        "700 acres comprehensive SEZ infrastructure",
        "Inaugurated by Hon'ble PM Shri Narendra Modi",
        "Major land leveling, stormwater drains & arterial road network"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "pune-metro",
      title: "Pune Metro",
      location: "Pune, Maharashtra",
      category: "Transit & Urban Infrastructure",
      value: "₹1,200+ Crores",
      description: "Executed a massive turnkey contract for all 18 stations across Phase 1 and Phase 2, valued at over ₹1,200 Crores.",
      highlights: [
        "Turnkey execution of 18 stations across Phase 1 & 2",
        "Precast and heavy structural engineering",
        "Crucial urban transit infrastructure for Pune city"
      ],
      image: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "gujarat-bhavan",
      title: "NBCC Gujarat Bhavan",
      location: "Lutyens Delhi",
      category: "Institutional & Civic Landmark",
      value: "Civic Landmark",
      description: "Delivered the prestigious Lutyens Delhi project, inaugurated by the Prime Minister.",
      highlights: [
        "High-profile diplomatic & state building in Lutyens Delhi",
        "Inaugurated by the Prime Minister of India",
        "Premium architectural finish and heritage alignment"
      ],
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "le-grand-chateau",
      title: "Le Grand Chateau",
      location: "Jumeirah Village South, Dubai",
      category: "Luxury Residential Development",
      value: "$120M+ Value",
      description: "Our flagship project in Jumeirah Village South, delivered a full year ahead of schedule.",
      highlights: [
        "Flagship residential community in Dubai",
        "Delivered a full 12 months ahead of scheduled commitment",
        "Won CNBC Award for Best Property of the Year"
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "signature-square",
      title: "Signature Square",
      location: "Mumbai, Maharashtra",
      category: "Boutique Commercial Redevelopment",
      value: "Flagship Boutique",
      description: "Nyshaa Realty's flagship boutique development.",
      highlights: [
        "Flagship boutique commercial space",
        "Modern architectural design with premium amenities",
        "Prime location redevelopment in Mumbai"
      ],
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1200"
    }
  ],

  philosophy: [
    {
      number: 1,
      title: "Ethics",
      description: "Integrity and honesty in all that we do.",
      iconName: "ShieldCheck"
    },
    {
      number: 2,
      title: "Exceeding Expectations",
      description: "Delivering beyond the client's brief is our primary resolution.",
      iconName: "TrendingUp"
    },
    {
      number: 3,
      title: "Excellence",
      description: "Excellence is not an act, but a consistent habit.",
      iconName: "Award"
    },
    {
      number: 4,
      title: "Entrepreneurship",
      description: "Taking absolute ownership of entrusted projects.",
      iconName: "Briefcase"
    },
    {
      number: 5,
      title: "Empowering Employees",
      description: "Recognizing that our people are our greatest asset.",
      iconName: "Users"
    },
    {
      number: 6,
      title: "Emphasis on Quality",
      description: "A deep passion for delivering flawless results.",
      iconName: "CheckCircle2"
    },
    {
      number: 7,
      title: "Ensuring Safety",
      description: "Maintaining a hazard-free workplace as an absolute priority.",
      iconName: "HardHat"
    },
    {
      number: 8,
      title: "Environmental and Social Responsibility",
      description: "Remaining sensitive to local environments, communities, and stakeholders.",
      iconName: "Leaf"
    }
  ],

  awards: [
    {
      id: "award-cnbc",
      title: "Best Property of the Year",
      organization: "CNBC International Property Awards",
      year: "Dubai",
      description: "Awarded for Le Grand Chateau development in Jumeirah Village South, Dubai.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "award-young-entrepreneur",
      title: "Young Entrepreneur of the Year",
      organization: "Estate Awards",
      year: "2012",
      description: "Conferred in recognition of rapid business scaling and real estate development leadership.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "award-best-executive",
      title: "Best Construction Executive of the Year",
      organization: "Estate Awards",
      year: "2013",
      description: "Honored for outstanding operational management and execution of mega contracts.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "award-indian-leadership",
      title: "Indian Leadership Award for Industrial Development",
      organization: "All India Achiever's Foundation (AIAF)",
      year: "Conferred",
      description: "Presented for significant contributions to national infrastructure and industrial scaling.",
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "award-tata-housing",
      title: "Best Contracting Firm of the Year",
      organization: "Tata Housing",
      year: "2013",
      description: "Awarded by Tata Housing for exceptional delivery of the La Montana project.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "award-facade",
      title: "Façade Contractor of the Year (Runner-Up)",
      organization: "Construction Week India Awards",
      year: "2014, 2015, 2016",
      description: "Recognized three consecutive years for excellence in structural glazing and building envelope engineering.",
      image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=1000"
    }
  ],

  media: [
    {
      id: "media-navabharat-2025",
      title: "Navabharat Infrastructure and Real Estate Conclave 2025",
      publication: "Navabharat Conclave",
      date: "2025",
      description: "Honored as Young Entrepreneur of the Year for contributions to urban redevelopment and sustainable infrastructure.",
      category: "Conclave Honor",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "media-bw-future-design",
      title: "BW Businessworld's Future of Design",
      publication: "BW Businessworld",
      date: "Design Summit",
      description: "Associate Partner, Nyshaa Realty — Discussing modern architectural design, space optimization, and luxury urban aesthetics.",
      category: "Feature Article",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "media-tribune-ani",
      title: "The Tribune / ANI Coverage — Insights into Nyshaa Realty's Vision 2035",
      publication: "The Tribune / ANI",
      date: "Vision Special",
      description: "Detailing our roadmap toward data-centre parks, green-certified commercial developments, and sustainable urban renewal across Mumbai.",
      category: "National Press",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "media-plast-wall",
      title: "Interviews & Press Publications — Rapid Construction Tech",
      publication: "Construction Week & Industry Publications",
      date: "Tech Insight",
      description: "Covering our shift towards affordable housing technologies, including the Plast Wall Building System for accelerated structural delivery.",
      category: "Tech Interview",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
    }
  ],

  socialPosts: [
    {
      id: "post-redevelopment",
      title: "Redevelopment Insights & Transforming Mumbai",
      description: "Urban planning, real estate trends, and how boutique redevelopment elevates living standards in key Mumbai hubs.",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/niteshgangaramani",
      date: "Recent Insight",
      tags: ["Redevelopment", "Mumbai Real Estate", "Urban Planning"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "post-2008-crisis",
      title: "Leadership Lessons from the 2008 Financial Crisis",
      description: "Reflections on navigating real estate downturns, cutting liabilities by 75%, and delivering projects during market volatility.",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/niteshgangaramani",
      date: "Leadership Series",
      tags: ["Crisis Leadership", "Risk Mitigation", "Real Estate"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    }
  ],

  videos: [
    {
      id: "video-signature-square",
      title: "Behind-the-scenes site visit at Signature Square",
      description: "Exclusive walkthrough showcasing structural milestones, architectural elevation details, and quality controls.",
      youtubeUrl: "https://www.youtube.com/watch?v=M5QY2_8704o",
      duration: "04:15",
      thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "video-construction-tech",
      title: "Construction updates & tech integration in active projects",
      description: "Exploring fast execution construction techniques, safety protocols, and sustainable building systems.",
      youtubeUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      duration: "06:30",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "video-naredco-speaking",
      title: "NAREDCO Keynote — The Future of Urban Infrastructure",
      description: "Keynote address on redevelopment frameworks, public-private partnerships, and transit-oriented urban growth.",
      youtubeUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
      duration: "12:40",
      thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
    }
  ],

  gallery: [
    {
      id: "gal-1",
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
      caption: "Receiving the NDTV Award for execution excellence.",
      category: "Awards & Recognition",
      aspectRatio: "aspect-[4/3]"
    },
    {
      id: "gal-2",
      src: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1000",
      caption: "On-site construction crane silhouette against the Mumbai skyline.",
      category: "Site Execution",
      aspectRatio: "aspect-[16/9]"
    },
    {
      id: "gal-3",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      caption: "Signature Square architectural renders and façade engineering details.",
      category: "Architectural Renders",
      aspectRatio: "aspect-[4/3]"
    },
    {
      id: "gal-4",
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000",
      caption: "Award photographs from the Estate Awards and CNBC events.",
      category: "Ceremonies",
      aspectRatio: "aspect-[3/2]"
    },
    {
      id: "gal-5",
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      caption: "Speaking engagements alongside industry leaders and policy makers.",
      category: "Keynotes & Industry",
      aspectRatio: "aspect-[16/9]"
    }
  ],

  contact: {
    sectionHeading: "Let's Build Something That Lasts",
    subheading: "I am always open to conversations with developers, investors, architects, consultants, and professionals who share a passion for transforming cities and creating meaningful impact.",
    email: "nitesh.gm@gmail.com",
    phone: "+91 9833888888",
    linkedIn: "https://www.linkedin.com/in/niteshgangaramani",
    officeAddress: "B/1, Flat No. 191, Sneha Dhara CHSL, Vile Parle West, Mumbai – 400056",
    googleMapsUrl: "https://maps.google.com/?q=Sneha+Dhara+CHSL+Vile+Parle+West+Mumbai"
  }
};
