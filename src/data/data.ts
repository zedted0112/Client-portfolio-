import { SiteData } from '../types';
import { images, galleryItems } from './images';

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
    image: images.hero
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
    image: images.about
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
      image: images.journey.foundation
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
      image: images.journey.uaeTraining
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
      image: images.journey.dubaiScaling
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
      image: images.journey.indiaEmpire
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
      image: images.journey.sukoonStays
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
      image: images.journey.nyshaaPresent
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
      image: images.ventures.nyshaa
    },
    {
      id: "sukoon-stays",
      company: "Sukoon Stays",
      role: "Executive Director & Founder",
      focus: "A trusted brand in premium student accommodation and luxury co-living across Juhu, Vile Parle, and Andheri. We are now expanding into next-generation co-working spaces in Andheri East and Wagle Estate, Thane, designed to be entrepreneurial ecosystems for start-ups and innovators.",
      vision: "To provide safe, technology-enabled living and workspace solutions that foster innovation, personal growth, and professional success.",
      websiteUrl: "https://sukoonstays.com",
      tags: ["Student Housing", "Luxury Co-Living", "Co-Working Hubs", "Tech-Enabled Living"],
      image: images.ventures.sukoon
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
      image: images.projects.jnpt
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
      image: images.projects.puneMetro
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
      image: images.projects.gujaratBhavan
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
      image: images.projects.leGrandChateau
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
      image: images.projects.signatureSquare
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
      image: images.awards.cnbc
    },
    {
      id: "award-young-entrepreneur",
      title: "Young Entrepreneur of the Year",
      organization: "Estate Awards",
      year: "2012",
      description: "Conferred in recognition of rapid business scaling and real estate development leadership.",
      image: images.awards.youngEntrepreneur
    },
    {
      id: "award-best-executive",
      title: "Best Construction Executive of the Year",
      organization: "Estate Awards",
      year: "2013",
      description: "Honored for outstanding operational management and execution of mega contracts.",
      image: images.awards.bestExecutive
    },
    {
      id: "award-indian-leadership",
      title: "Indian Leadership Award for Industrial Development",
      organization: "All India Achiever's Foundation (AIAF)",
      year: "Conferred",
      description: "Presented for significant contributions to national infrastructure and industrial scaling.",
      image: images.awards.indianLeadership
    },
    {
      id: "award-tata-housing",
      title: "Best Contracting Firm of the Year",
      organization: "Tata Housing",
      year: "2013",
      description: "Awarded by Tata Housing for exceptional delivery of the La Montana project.",
      image: images.awards.tataHousing
    },
    {
      id: "award-facade",
      title: "Façade Contractor of the Year (Runner-Up)",
      organization: "Construction Week India Awards",
      year: "2014, 2015, 2016",
      description: "Recognized three consecutive years for excellence in structural glazing and building envelope engineering.",
      image: images.awards.facadeContractor
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
      image: images.media.navabharat
    },
    {
      id: "media-bw-future-design",
      title: "BW Businessworld's Future of Design",
      publication: "BW Businessworld",
      date: "Design Summit",
      description: "Associate Partner, Nyshaa Realty — Discussing modern architectural design, space optimization, and luxury urban aesthetics.",
      category: "Feature Article",
      image: images.media.businessworld
    },
    {
      id: "media-tribune-ani",
      title: "The Tribune / ANI Coverage — Insights into Nyshaa Realty's Vision 2035",
      publication: "The Tribune / ANI",
      date: "Vision Special",
      description: "Detailing our roadmap toward data-centre parks, green-certified commercial developments, and sustainable urban renewal across Mumbai.",
      category: "National Press",
      image: images.media.tribune
    },
    {
      id: "media-plast-wall",
      title: "Interviews & Press Publications — Rapid Construction Tech",
      publication: "Construction Week & Industry Publications",
      date: "Tech Insight",
      description: "Covering our shift towards affordable housing technologies, including the Plast Wall Building System for accelerated structural delivery.",
      category: "Tech Interview",
      image: images.media.constructionTech
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
      image: images.social.redevelopment
    },
    {
      id: "post-2008-crisis",
      title: "Leadership Lessons from the 2008 Financial Crisis",
      description: "Reflections on navigating real estate downturns, cutting liabilities by 75%, and delivering projects during market volatility.",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/niteshgangaramani",
      date: "Leadership Series",
      tags: ["Crisis Leadership", "Risk Mitigation", "Real Estate"],
      image: images.social.crisisLeadership
    }
  ],

  videos: [
    {
      id: "video-signature-square",
      title: "Behind-the-scenes site visit at Signature Square",
      description: "Exclusive walkthrough showcasing structural milestones, architectural elevation details, and quality controls.",
      videoUrl: "/videos/site-visit-signature-square.mp4",
      duration: "04:15",
      thumbnail: images.videos.signatureSquare
    },
    {
      id: "video-construction-tech",
      title: "Construction updates & tech integration in active projects",
      description: "Exploring fast execution construction techniques, safety protocols, and sustainable building systems.",
      videoUrl: "/videos/construction-updates.mp4",
      duration: "06:30",
      thumbnail: images.videos.constructionTech
    },
    {
      id: "video-naredco-speaking",
      title: "NAREDCO Keynote — The Future of Urban Infrastructure",
      description: "Keynote address on redevelopment frameworks, public-private partnerships, and transit-oriented urban growth.",
      youtubeUrl: "https://www.youtube.com/watch?v=L_LUpnjgPso",
      duration: "12:40",
      thumbnail: images.videos.naredcoKeynote
    }
  ],

  gallery: galleryItems,

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
