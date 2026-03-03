/**
 * Portfolio Projects Data
 * Centralized data source for all projects
 */

const PROJECTS = [
  // ── COMPLETED ──────────────────────────────────────────────────
  {
    id: "salary-calculator",
    title: "Salary Calculator",
    tagline: "Kenya's go-to payroll & PAYE tax calculator",
    description:
      "A comprehensive online salary and PAYE tax calculator designed for Kenyan employers and employees. It handles NHIF, NSSF, housing levy, and all statutory deductions, giving instant net-pay breakdowns. Widely used by HR professionals and SMEs across Kenya.",
    status: "completed",
    liveUrl: "https://salarycalculator.co.ke/",
    image: "images/salary-calculator.svg",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    price: 350000,
    currency: "KES",
    features: [
      "PAYE, NHIF, NSSF & Housing Levy calculations",
      "Gross-to-net and net-to-gross modes",
      "Downloadable payslip PDF",
      "Multi-employee batch processing",
      "Mobile-responsive design",
    ],
  },
  {
    id: "boinvit",
    title: "Boinvit",
    tagline: "Smart event management & RSVP platform",
    description:
      "Boinvit is a full-featured event creation, invitation, and RSVP management platform. Organizers can create beautiful event pages, send digital invitations, track attendance, and collect payments — all in one place.",
    status: "completed",
    liveUrl: "https://boinvit.com",
    image: "images/boinvit.svg",
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe", "M-Pesa"],
    price: 500000,
    currency: "KES",
    features: [
      "Custom event landing pages",
      "Digital RSVP management",
      "M-Pesa & card ticketing",
      "QR code check-in system",
      "Real-time analytics dashboard",
    ],
  },
  {
    id: "quickbill",
    title: "QuickBill Kenya",
    tagline: "Invoicing & receipt platform for Kenyan SMEs",
    description:
      "QuickBill Kenya is a lightweight invoicing and receipt generation tool purpose-built for small and medium enterprises. It produces KRA-compliant invoices, tracks payments, and integrates with M-Pesa for instant settlement.",
    status: "completed",
    liveUrl: "#",
    image: "images/quickbill.svg",
    tech: ["Node.js", "React", "MongoDB", "M-Pesa API"],
    price: 280000,
    currency: "KES",
    features: [
      "KRA-compliant invoice generation",
      "M-Pesa STK push integration",
      "Client & product catalogue",
      "Expense tracking",
      "PDF & email delivery",
    ],
  },
  {
    id: "agri-connect",
    title: "AgriConnect",
    tagline: "Digital marketplace connecting farmers to buyers",
    description:
      "AgriConnect bridges the gap between Kenyan smallholder farmers and urban buyers. Farmers list produce with real-time pricing, buyers place orders, and logistics is coordinated through the platform reducing post-harvest losses.",
    status: "completed",
    liveUrl: "#",
    image: "images/agriconnect.svg",
    tech: ["Django", "React Native", "PostgreSQL", "Firebase"],
    price: 420000,
    currency: "KES",
    features: [
      "Farmer & buyer marketplace",
      "Real-time price discovery",
      "Mobile app (Android & iOS)",
      "Logistics coordination",
      "SMS notifications",
    ],
  },
  {
    id: "learn-ke",
    title: "LearnKE",
    tagline: "E-learning platform for Kenyan students",
    description:
      "LearnKE is an affordable e-learning platform that delivers CBC-aligned digital content to Kenyan secondary and primary school students. Teachers can upload lessons, set assignments, and track student progress.",
    status: "completed",
    liveUrl: "#",
    image: "images/learnke.svg",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    price: 390000,
    currency: "KES",
    features: [
      "CBC-aligned curriculum",
      "Video & PDF lesson delivery",
      "Assignment & grading system",
      "Parent progress reports",
      "Offline-capable mobile app",
    ],
  },
  {
    id: "nairobi-rides",
    title: "Nairobi Rides",
    tagline: "Peer-to-peer ride-booking for Nairobi",
    description:
      "Nairobi Rides is a lightweight ride-hailing web app that connects passengers with registered boda-boda and tuk-tuk operators in Nairobi. Lower commission rates than major competitors make it attractive to drivers.",
    status: "completed",
    liveUrl: "#",
    image: "images/nairobirides.svg",
    tech: ["Node.js", "React", "Socket.io", "Google Maps API", "M-Pesa"],
    price: 460000,
    currency: "KES",
    features: [
      "Real-time ride matching",
      "Live GPS tracking",
      "In-app M-Pesa payments",
      "Driver ratings & reviews",
      "SOS safety feature",
    ],
  },

  // ── ONGOING ────────────────────────────────────────────────────
  {
    id: "anyhire",
    title: "AnyHire",
    tagline: "Hire any equipment or service, instantly",
    description:
      "AnyHire is an equipment & services rental marketplace for Kenya. Individuals and businesses can list anything from construction machinery to photography equipment, and renters can book by the hour, day, or week with M-Pesa payments.",
    status: "ongoing",
    liveUrl: "https://anyhire.co.ke/",
    image: "images/anyhire.svg",
    tech: ["Laravel", "React", "MySQL", "M-Pesa", "Google Maps"],
    price: 600000,
    currency: "KES",
    features: [
      "Equipment & services marketplace",
      "Hourly, daily, and weekly rentals",
      "M-Pesa & card payments",
      "Insurance & damage waiver",
      "Owner verification system",
    ],
  },
  {
    id: "meetnmingle",
    title: "MeetNMingle",
    tagline: "Social discovery & networking platform",
    description:
      "MeetNMingle is a social discovery platform designed to help people find friends, professionals, and romantic connections based on shared interests, location, and life goals. It features smart matching algorithms and live event integrations.",
    status: "ongoing",
    liveUrl: "https://meetnmingle.net",
    image: "images/meetnmingle.svg",
    tech: ["Node.js", "React Native", "MongoDB", "WebSockets", "Firebase"],
    price: 750000,
    currency: "KES",
    features: [
      "AI-powered smart matching",
      "Interest-based communities",
      "Real-time chat & video calls",
      "Live event discovery",
      "Privacy-first profile controls",
    ],
  },
  {
    id: "property-hub",
    title: "PropertyHub Kenya",
    tagline: "Find, list, and manage Kenyan properties",
    description:
      "PropertyHub Kenya is a property listing and management platform targeting landlords, agents, and tenants. It streamlines property discovery, virtual tours, lease management, and rent collection through M-Pesa.",
    status: "ongoing",
    liveUrl: "#",
    image: "images/propertyhub.svg",
    tech: ["Django", "React", "PostgreSQL", "M-Pesa", "Cloudinary"],
    price: 680000,
    currency: "KES",
    features: [
      "Property listing & search",
      "360° virtual tours",
      "Digital tenancy agreements",
      "Automated rent reminders",
      "Maintenance request tracking",
    ],
  },
  {
    id: "jobika",
    title: "Jobika",
    tagline: "AI-matched jobs for Kenya's youth",
    description:
      "Jobika uses AI to match recent graduates and young professionals with suitable job opportunities. Employers post vacancies and receive a ranked shortlist of candidates, while job seekers get personalised career coaching.",
    status: "ongoing",
    liveUrl: "#",
    image: "images/jobika.svg",
    tech: ["Python", "Django", "React", "PostgreSQL", "OpenAI API"],
    price: 550000,
    currency: "KES",
    features: [
      "AI-powered job matching",
      "CV builder & review",
      "Employer applicant tracking",
      "Interview scheduling",
      "Career coaching chatbot",
    ],
  },

  // ── UPCOMING ───────────────────────────────────────────────────
  {
    id: "digiafya",
    title: "DigiAfya",
    tagline: "Digital health records & telemedicine for Kenya",
    description:
      "DigiAfya is a telemedicine and electronic health record (EHR) platform that connects patients with licensed Kenyan healthcare providers. Patients can book virtual consultations, access their medical history, and order prescriptions — all from their phone.",
    status: "upcoming",
    liveUrl: "#",
    image: "images/digiafya.svg",
    tech: ["Node.js", "React Native", "PostgreSQL", "WebRTC", "M-Pesa"],
    price: 900000,
    currency: "KES",
    features: [
      "Telemedicine video consultations",
      "Electronic health records",
      "Prescription management",
      "Lab results delivery",
      "NHIF integration",
    ],
  },
  {
    id: "soko-smart",
    title: "SokoSmart",
    tagline: "AI-powered retail analytics for Kenyan traders",
    description:
      "SokoSmart empowers Kenyan market traders and shop owners with affordable AI-driven inventory management, sales forecasting, and supplier discovery tools — all accessible via a simple smartphone app with offline support.",
    status: "upcoming",
    liveUrl: "#",
    image: "images/sokosmart.svg",
    tech: ["Python", "Flutter", "TensorFlow Lite", "Firebase", "M-Pesa"],
    price: 800000,
    currency: "KES",
    features: [
      "AI sales & inventory forecasting",
      "Supplier marketplace",
      "Offline-first mobile app",
      "WhatsApp sales reports",
      "Micro-credit integration",
    ],
  },
];

// Helper utilities
const STATUS_LABELS = {
  completed: "Completed",
  ongoing: "In Progress",
  upcoming: "Coming Soon",
};

/**
 * Format a price in KES with comma separators.
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
function formatPrice(amount, currency = "KES") {
  return `${currency} ${amount.toLocaleString("en-KE")}`;
}

/**
 * Find a project by its id.
 * @param {string} id
 * @returns {object|undefined}
 */
function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
