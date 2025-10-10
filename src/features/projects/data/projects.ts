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
      { label: "repo", url: "https://github.com/rikkejuliane/HOLIDAZE" },
      { label: "live", url: "https://holidaze-rikkejuliane.netlify.app/" },
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
    screenshots: [{ src: "/holidazeBig.jpg", alt: "Home" }],
  },
  {
    id: "biddy",
    slug: "biddy",
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
    screenshots: [{ src: "/biddyBig.jpg", alt: "Home" }],
  },
  {
    id: "roots",
    slug: "roots",
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
     
     The whole process was smooth and stress-free. She kept me updated along the way, were super patient with my questions and feedback, and made everything look so professional without making it complicated. The final site looks amazing it’s clean, modern, and works great on both desktop and mobile. I've already had a bunch of compliments on it! If you're looking for someone creative, reliable, and just really great to work with, I totally recommend Rikke. I’m so happy with how everything turned out!» 
     
     **- Marjan Bolic, Resturant Owner**
     `,
    ],
    screenshots: [{ src: "/rootsBig.jpg", alt: "Home" }],
  },

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

    screenshots: [{ src: "/everlystShopping.jpg", alt: "Home" }],
  },
  {
    id: "postly",
    slug: "postly",
    title: "Postly",
    meta: "academic",
    tags: ["javascript", "html", "tailwind", "vite"],
    links: [
      { label: "repo", url: "https://github.com/rikkejuliane/postly-public" },
      { label: "live", url: "https://postly-rikkejuliane.netlify.app/" },
    ],
    description: `
    Postly is a collaborative social media application developed as part of the JavaScript 2 course assignment at Noroff. Built together with Nikolas Bishop, I worked on both frontend functionality and the styling/design of the application.

    The project was later extended in the CSS Frameworks course, where I took full responsibility for styling the app using Tailwind CSS — my first experience with the framework. This allowed me to shape the entire visual identity and ensure the UI was responsive, consistent, and accessible.

    The app connects to the Noroff Social Media API and focuses on core CRUD functionality, error handling, and social interactivity. Users can create, edit, and delete posts, react and comment on content, and build a personalized feed by following other users.
    `,
    keyFeatures: [
      "**Posts** - Create, edit, delete, and view posts with support for tags, media, and comments.",
      "**Social features** - Follow/unfollow users, react to posts with emojis, leave comments.",
      "**Search & filter** - Find posts via keywords or tags.",
      "**Error handling** - Clear error messages for invalid logins, failed requests, or bad inputs.",
    ],
    screenshots: [{ src: "/postly.jpg", alt: "Home" }],
  },

  {
    id: "nyewyears2025",
    slug: "newyears2025",
    title: "New years resolutions 2025",
    meta: "personal",
    tags: ["html", "css", "javascript"],
    links: [
      {
        label: "repo",
        url: "https://github.com/rikkejuliane/newyearsresolution-shecodes",
      },
      {
        label: "live",
        url: "https://rikkejuliane.github.io/newyearsresolution-shecodes/",
      },
    ],
    description: `
    This project was built for the SheCodes.io January 2025 New Year’s Resolutions Challenge. The goal was to create a fun landing page to showcase my personal resolutions for the year — but I ended up turning it into a fully interactive goal-tracking app that I actually use every day.

    Everything is coded in a single HTML file with embedded CSS and JavaScript. While it’s desktop-only and intentionally kept simple, it’s become a tool I keep open in a browser tab to stay motivated and track progress on my goals throughout the year.
    `,
    keyFeatures: [
      "**Goal 1: Read 15 books** - A form to add finished books (title, rating, comments, cover image). Completed books appear in a styled card list, while a progress bar fills as I get closer to my 15-book goal.",
      "**Goal 2: Work out 100 times** - A grid of 100 colorful squares that I fill in as I work out. Each workout also gets logged in a notes list (e.g. “Played tennis,” “Leg day”), helping me track both progress and variety.",
      "**Goal 3: Spend less money** - A counter that tracks “no-spend days.” Each day saved fills a gradient jar with color, giving me a visual reward for better habits.",
      "Goal 4: Mood tracker → A yearly calendar where I can record my daily mood with one of six emojis. Over time, the tracker gives me insight into emotional patterns and balance.",
    ],
    screenshots: [{ src: "/nye25.jpg", alt: "Home" }],
  },

  {
    id: "first-portfolio",
    slug: "first-portfolio",
    title: "My First Portfolio",
    meta: "personal",
    tags: ["html", "css", "javascript"],
    links: [
      {
        label: "repo",
        url: "https://github.com/rikkejuliane/portfolio1", // update if you have the actual repo
      },
      {
        label: "live",
        url: "https://rikkeja-old.netlify.app/",
      },
    ],
    description: `
    This was my very first portfolio website — the starting point of my front-end journey. 
    It was built with basic HTML, CSS, and a touch of JavaScript before I learned frameworks 
    like React and Next.js. 
  
    The design focused on clean simplicity and accessibility, showing my early projects and 
    a short introduction about me. Looking back, it represents the foundation of how far I’ve come, 
    and I still love how it captured my enthusiasm for learning and creating web experiences from scratch.
    `,
    keyFeatures: [],
    screenshots: [{ src: "/Firstportfolio.jpg", alt: "My first portfolio" }],
  },

  {
    id: "tmd",
    slug: "tmd",
    title: "The Mediterranean Dream",
    meta: "academic",
    tags: ["html", "css", "javascript", "tinymce"],
    links: [
      {
        label: "repo",
        url: "https://github.com/rikkejuliane/PE1-rikkejuliane",
      },
      { label: "live", url: "https://pe1-rikkejuliane.netlify.app/" },
    ],
    description: `
    The Mediterranean Dream is a responsive blogging platform built for my Project Exam 1 at Noroff. The goal was to create a modern, user-friendly website where readers can explore travel posts, while the admin (blog owner) has full control over managing content.

    The site was designed in Figma, developed with semantic HTML, CSS, and JavaScript, and deployed via Netlify. It integrates the Noroff Blog API and the TinyMCE rich text editor to give the blog owner a seamless post creation and editing experience.

    This project taught me how to combine API integration, CRUD functionality, responsive layouts, accessibility standards, and admin authentication into one cohesive product.
    `,
    keyFeatures: [
      "**Blog feed** - Interactive hero carousel with the latest posts and a responsive grid layout to browse, search, and filter posts by tags. Pagination supports browsing beyond the initial 12 posts.",
      "**Single post view** - Dedicated post pages display the title, author, date, banner image, and full content, with shareable URLs containing the post ID.",
      "**Admin dashboard** - Secure login system with full CRUD functionality (create, edit, delete posts). Integrated with TinyMCE for rich text editing.",
    ],
    screenshots: [{ src: "/tmd.jpg", alt: "Home" }],
  },

  {
    id: "csm",
    slug: "csm",
    title: "Community science museum ",
    meta: "academic",
    tags: ["html", "css"],
    links: [
      {
        label: "repo",
        url: "https://github.com/rikkejuliane/sp1-rikkejuliane",
      },
      {
        label: "live",
        url: "https://rikkejuliane.github.io/sp1-rikkejuliane/",
      },
    ],
    description: `
    The Community Science Museum website was developed as my Semester Project 1 at Noroff. The goal was to design and build a modern, accessible, and engaging website tailored to the museum’s target audience: children aged 7–15 and families with young children.

    The site combines playful visuals, clear navigation, and informative content to inspire curiosity about science and encourage museum visits. It includes pages for exhibitions, contributions, visitor info, and legal documents, all built with semantic HTML and responsive CSS.
    `,
    keyFeatures: [
      "**Homepage** - Impactful imagery and messaging designed to capture children’s attention and highlight the museum’s mission.",
      "**Exhibitions & Contributions** - Dedicated sections outlining current events and opportunities for visitors to support or participate.",
      "**Contact page** - Includes opening hours, address, phone number, and a simple inquiry form.",
      "**Custom visuals** - Many images generated with ChatGPT, providing a unique creative touch.",
    ],

    screenshots: [{ src: "/csm.jpg", alt: "Home" }],
  },

  {
    id: "rainydays",
    slug: "rainydays",
    title: "Rainydays",
    meta: "academic",
    tags: ["html", "css", "javascript"],
    links: [
      { label: "repo", url: "https://github.com/rikkejuliane/rainydays-js" },
      {
        label: "live",
        url: "https://rikkejuliane.github.io/rainydays-js/index.html",
      },
    ],
    description: `
    Rainy Days is an e-commerce website developed across two course assignments at Noroff: HTML & CSS and JavaScript 1.

    The project began as a static, responsive site built with semantic HTML and CSS. In the second phase, I extended it by integrating the Rainy Days API, turning it into a dynamic online store with interactive product listings, basket functionality, and checkout flow.

    This is my first ever project and website.
    `,
    keyFeatures: [
      "**Accessibility (WCAG)** - Semantic HTML, unique meta descriptions, structured headings, and validation with WAVE.",
      "**Dynamic product system** - Products fetched from the Rainy Days API and displayed asynchronously, with detailed product pages.",
      "**Basket functionality** - Add/remove items, view live cart summary, and complete checkout with confirmation screen.",
      "**Filter & sort** - Users can filter products by category or gender for easier navigation.",
    ],
    screenshots: [{ src: "/rainydays.jpg", alt: "Home" }],
  },
];

export const bySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export function getPrevNext(slug: string) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : null,
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null,
  };
}

