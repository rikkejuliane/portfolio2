export type ProjectMetaType = "academic" | "professional" | "personal";

export type ProjectLink = {
  label: "repo" | "live" | string; // feel free to add more later
  url: string;
};

export type Screenshot = {
  src: string; // e.g. "/images/holidaze-hero.jpg"
  alt?: string;
  caption?: string;
};

export type Project = {
  // Routing / identity
  id: string; // internal id if you want; optional to use
  slug: string; // used for /projects/[slug]
  title: string;

  // Meta + categorization
  meta: ProjectMetaType;
  tags?: string[]; // optional: "nextjs", "tailwind", etc.
  // Links (repo/live). If you don't have them yet, leave array empty.
  links?: ProjectLink[];

  // Content
  description: string; // short intro paragraph
  keyFeatures: string[]; // bullet list (any length)
  others?: string[]; // optional list for things like client feedback, notes
  screenshots?: Screenshot[]; // optional gallery
};

// ──────────────────────────────────────────────────────────────────────────────
// TEMPLATE: Copy-paste this block for each project and fill it in.
// Keep slugs unique & url-safe (kebab-case).
// ──────────────────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "holidaze",
    slug: "holidaze",
    title: "Holidaze",
    meta: "academic",
    tags: [
      "next.js",
      "react",
      "typeccript",
      "tailwind",
      "zustand",
      "mapbox gl",
    ],
    links: [
      { label: "repo", url: "https://github.com/yourname/holidaze" },
      { label: "live", url: "https://github.com/rikkejuliane/HOLIDAZE" },
    ],
    description: `
    Holidaze is a modern accommodation booking platform built as my Project Exam 2 at Noroff. 
    It allows users to discover venues, check availability, and make bookings, while venue managers can create and manage their own listings.
    
    The project emphasizes responsive design, accessibility, and a smooth user experience. 
    It integrates the official Holidaze API with a clean Next.js + React frontend, styled with Tailwind CSS, 
    and enhanced with state management (Zustand) and mapping features (Mapbox).
    
    By building Holidaze, I demonstrated my ability to work with real-world API consumption, 
    role-based authentication, and advanced UI features such as calendars, booking flows, and persistent favorites.
    `,
    keyFeatures: [
      "**Venue browsing & search** - Explore a list of venues with keyword search, filters for price, guests, amenities, and dates, plus pagination for performance.",
      "**Bookings** - Availability calendar that blocks booked dates, booking confirmation with pricing breakdown, and conflict handling for overlapping reservations.",
      "**Profiles** - Dashboard with tabs for bookings and favorites. Users can update their avatar, bio, and banner. Any customer can choose to upgrade and become a venue manager.",
      "**Venue management (for managers)** - Create, edit, and delete venues with details like media, ratings, amenities, and location. Managers can also view all bookings for their venues.",
      "**Favorites** - Save venues to a personal list, stored per user and persistent across sessions with Zustand + localStorage.",
      "**Map & media toggle** - Venue pages feature a photo gallery and a Mapbox-powered map view, with fallback geocoding when coordinates are missing.",
      "**Authentication & sessions**- Single-page login/registration with role-based access, token handling, and real-time UI updates for login state changes.",
    ],
    others: [
      // Optional — only include if relevant
      // "Client feedback: Loved the instant search and clean UX.",
    ],
    screenshots: [
      { src: "/holidazeBig.jpg", alt: "Home", caption: "Landing page" },
    ],
  },
  {
    id: "biddy",
    slug: "biddy-auction",
    title: "Biddy",
    meta: "academic",
    tags: ["html", "tailwind", "javascript", "vite"],
    links: [
      { label: "repo", url: "https://github.com/rikkejuliane/SP2-BIDDY" },
      { label: "live", url: "https://biddy-sp2.netlify.app/" },
    ],
    description: `
    Biddy is a modern auction platform where users can list items, place bids, and track auctions in real-time. Each user starts with 1000 credits that can be used to bid on listings or earned back through successful sales.

    The platform is designed to be intuitive, accessible, and fully responsive, with role-based views for logged-in users vs visitors. Built as my Semester Project 2 at Noroff, it highlights my skills in frontend development, API consumption, CRUD functionality, and responsive UI design.

    Biddy combines a straightforward user experience with robust functionality: from managing listings and placing bids, to live search and category filtering. The project emphasizes accessibility, responsive design, and WCAG compliance, ensuring it is usable across all devices and for all audiences.
    `,
    keyFeatures: [
      "**Auth** - Single authentication page for login and registration with animations.",
      "**Auction Listings** - Create, read, update, and delete (CRUD) listings with media, descriptions, and bidding deadlines.",
      "**Bidding System** - Place bids on active auctions, view bid history with avatars and usernames, and prevent users from bidding against themselves.",
      "**Dynamic UI Elements** - Real-time search bar, category tags with icons, and clear logged-in vs logged-out views.",
      "**Admin / User Profiles** - Edit profile details securely, manage personal listings, and view auction outcomes.",
    ],
    screenshots: [
      { src: "/biddyBig.jpg", alt: "Home", caption: "Landing page" },
    ],
  },
  {
    id: "roots",
    slug: "roots-street-food",
    title: "ROOTS Street Food",
    meta: "professional",
    tags: ["nextjs", "react", "typescript", "tailwind"],
    links: [
      {
        label: "repo",
        url: "https://github.com/rikkejuliane/roots_streetfood",
      },
      { label: "live", url: "https://rootsff.hr/" },
    ],
    description: `
    Roots Street Food is a modern restaurant website built for a family business in Posedarje, Croatia. The site showcases opening hours, menu highlights, reviews, and contact details in a clean and mobile-friendly design.

    This project was especially meaningful as it was my first custom domain deployment — delivering a live, production-ready site that’s accessible to real customers. Beyond its visual appeal, the site emphasizes performance, accessibility, SEO optimization, and multilingual readiness to ensure both usability and discoverability.
    `,
    keyFeatures: [
      "**Opening hours** - Easy-to-read schedule for customers.",
      "**Menu** - Highlights the available food options in a simple layout.",
      "**Contact section** - Direct communication details for customers.",
      "**Reviews** - Displays customer feedback for social proof (google reviews).",
      "**Multilingual Support** -	Implemented using a Language Context Provider for potential multi-language support.",
    ],
    others: [
      `**Client Feedback:**
     «I had such a great experience working with Rikke Juliane! From the beginning, she were super easy to talk to and really took the time to understand what I wanted for my website. I had a rough vision in mind, and she brought it to life way better than I expected. 
     
     The whole process was smooth and stress-free. She kept me updated along the way, were super patient with my questions and feedback, and made everything look so professional without making it complicated.The final site looks amazing it’s clean, modern, and works great on both desktop and mobile. I've already had a bunch of compliments on it! If you're looking for someone creative, reliable, and just really great to work with, I totally recommend Rikke. I’m so happy with how everything turned out!» 
     - Marjan Bolic, Resturant Owner
     `,
    ],
    screenshots: [
      { src: "/rootsBig.jpg", alt: "Home", caption: "Landing page" },
    ],
  },

  // ── Archive items (examples) ────────────────────────────────────────────────

  {
    id: "everlyst",
    slug: "everlyst",
    title: "Everlyst.shopping",
    meta: "academic",
    tags: ["nextjs", "react", "typescript", "tailwind", "zustand", "jest"],
    links: [
      {
        label: "repo",
        url: "https://github.com/rikkejuliane/everlyst.shopping",
      },
      { label: "live", url: "https://everlystshopping.vercel.app/" },
    ],
    description: `
    Everlyst.shopping is a fully functional e-commerce store built as part of the JavaScript Frameworks course at Noroff. The project demonstrates my ability to build real-world shopping functionality with API integration, state management, TypeScript architecture, and automated testing.

    Users can browse and search products, add and update items in a persistent cart, and complete purchases with a checkout confirmation flow. The site is designed to be responsive, accessible, and user-friendly, with clean error handling and dynamic UI elements like toasts and form validation.
    `,
    keyFeatures: [
      "**Product system** - Products fetched from API with discount logic, badges, and detailed product pages.",
      "**Shopping cart** - Global cart state via Zustand, with add/remove/update logic, quantity control, and persistence across sessions.",
      "**Checkout flow** -  Success page with confirmation and cleared cart state.",
      "**Search & sort** - Real-time search input plus sort dropdown (price, title).",
      "**Contact form** - TypeScript-validated form with full name, email, subject, and message fields, including toast feedback and accessible error messages.",
      "**Testing** -  Unit and integration tests with Jest + React Testing Library, including mocked Zustand and router, plus cart state edge cases tested.",
    ],

    screenshots: [
      { src: "/everlystShopping.jpg", alt: "Home", caption: "Landing page" },
    ],
  },
  {
    id: "postly",
    slug: "postly",
    title: "Postly",
    meta: "academic",
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  {
    id: "",
    slug: "",
    title: "",
    meta: "academic", // or "personal" | "professional"
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  {
    id: "",
    slug: "",
    title: "",
    meta: "academic", // or "personal" | "professional"
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  {
    id: "",
    slug: "",
    title: "",
    meta: "academic", // or "personal" | "professional"
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  {
    id: "",
    slug: "",
    title: "",
    meta: "academic", // or "personal" | "professional"
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  {
    id: "",
    slug: "",
    title: "",
    meta: "academic", // or "personal" | "professional"
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  {
    id: "",
    slug: "",
    title: "",
    meta: "academic", // or "personal" | "professional"
    tags: [],
    links: [
      { label: "repo", url: "" },
      { label: "live", url: "" },
    ],
    description: `
    `,
    keyFeatures: ["", ""],
    others: [
      `
      `,
    ],
    screenshots: [{ src: "", alt: "", caption: "" }],
  },

  // ...add all the rest of your archive entries here
];

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

export const bySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const featuredProjects = () =>
  PROJECTS.filter((p) => p.featured).sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? "")
  );

export const archiveProjects = () =>
  PROJECTS.filter((p) => !p.featured).sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? "")
  );

export function getPrevNext(slug: string) {
  // Prev/next in the order of PROJECTS (you can sort by date if you prefer)
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : null,
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null,
  };
}

// If you want static generation support:
// export function generateStaticParams() {
//   return PROJECTS.map(p => ({ slug: p.slug }));
// }
