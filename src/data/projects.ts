export type Project = {
  slug: string;
  title: string;
  desc: string;            // short description for the card
  stack: string[];
  highlights: string[];    // 2–3 max for the card
  details: {
    bullets: string[];     // fuller list for the modal
    challenges?: string[];
    outcome?: string[];
  };
  links: { demo?: string; code?: string };
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "foodable-grocery-ai",
    title: "Foodable — AI-Generated Grocery Lists",
    desc: "Personalized grocery lists generated from constraints, with validated structured output and persistence.",
    stack: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "Instacart API"],
    highlights: [
      "Schema-validated structured LLM outputs.",
      "Two input modes: constraints or recipes.",
      "Instacart API integration for purchasable items.",
    ],
    details: {
      bullets: [
        "Built an AI-driven grocery list generator from user constraints (diet, budget, household size).",
        "Used schema-validated structured outputs to guarantee predictable, type-safe results before saving.",
        "Implemented two generation modes: free-text constraints and recipe-based list generation.",
        "Persisted request/result records in MongoDB and linked saved lists to authenticated users.",
        "Handled latency, retries, and failure states for long-running AI generation workflows.",
        "Integrated the Instacart Developer Platform API to map generated items to products/inventory.",
      ],
      challenges: [
        "Ensuring deterministic output from an LLM for UI rendering and storage.",
        "Managing long-running requests and graceful failures without breaking UX.",
      ],
      outcome: [
        "Created a reliable AI feature that produces actionable lists and can connect to real grocery inventory.",
      ],
    },
    links: {
    //   code: "https://github.com/your-handle/foodable",
      demo: "https://foodable-taupe.vercel.app/grocery-list"
    },
    image: {
      src: "/projects/foodable-grocery-list.png",
      alt: "Foodable AI-generated grocery list UI",
    },
  },
  {
    slug: "dishquest",
    title: "DishQuest",
    desc: "Database-driven restaurant + dish review app with normalized schema design and end-to-end CRUD in a Flask/Jinja2 UI.",
    stack: ["Python", "Flask", "Jinja2", "MySQL", "SQL (procedures)", "HTML/CSS"],
    highlights: [
        "Designed a normalized relational schema with junction tables for M:N relationships.",
        "Implemented full CRUD flows with server-rendered templates and form validation.",
        "Used stored procedures + constraints to enforce consistency and handle edge cases.",
    ],
    details: {
        bullets: [
        "Modeled restaurants, dishes, cuisines, and reviews using a normalized MySQL schema (incl. M:N via junction tables).",
        "Built Flask routes + Jinja2 templates for create/edit/delete flows with clear UX feedback.",
        "Implemented MySQL stored procedures for core operations and integrated them into server-side routes.",
        "Handled constraint errors (e.g., duplicate keys / unique combos) and surfaced user-friendly alerts.",
        "Supported updates to M:N relationships without breaking dependent review records.",
        ],
        challenges: [
        "Mapping UI form inputs to relational constraints and making failures understandable to users.",
        "Safely updating relationship records while maintaining referential integrity.",
        ],
        outcome: [
        "A complete full-stack CRUD app demonstrating SQL/data modeling, backend routing, and usable UI flows.",
        ],
    },
    links: {
        code: "https://github.com/helloiamcait/dishquest",
        demo: undefined, // add if you have it
    },
    image: {
        src: "/projects/dishquest.png",
        alt: "DishQuest restaurant and dish review UI",
    },
    }
    ,
  {
    slug: "shopify-inventory-monitor",
    title: "Shopify Low Inventory Monitor",
    desc: "Embedded Shopify Admin app that surfaces low-stock products using an adjustable threshold, with a native Polaris UI.",
    stack: ["Remix", "Shopify Admin GraphQL API", "Polaris", "Node.js"],
    highlights: [
      "Built an embedded Shopify Admin experience with a configurable low-inventory threshold.",
      "Queried product inventory via Shopify Admin GraphQL and displayed results in a table with product links.",
      "Added a dynamic refresh workflow after threshold updates.",
    ],
    details: {
      bullets: [
        "Implemented loader/action flows to fetch and refresh low-inventory results inside the Shopify Admin.",
        "Integrated Shopify Admin GraphQL queries to retrieve product inventory and metadata.",
        "Used Polaris components to match Shopify’s native design system and UX patterns.",
      ],
      challenges: [
        "Designing a simple, fast workflow inside an embedded admin context while keeping UI ‘Shopify-native’.",
      ],
      outcome: [
        "A working embedded admin tool that helps merchants quickly identify products needing restock.",
      ],
    },
    links: {
      code: "https://github.com/helloiamcait/shopify-inventory-monitor-app",
      demo: undefined,
    },
    image: {
      src: "/projects/shopify-inventory-monitor.png",
      alt: "Shopify Low Inventory Monitor UI",
    },
  },
  {
    slug: "house-search-helper-program",
    title: "House Search Helper Program (Microservices Orchestrator)",
    desc: "Python CLI app that manages a house list and coordinates microservices through simple file-based pipe contracts.",
    stack: ["Python", "pandas", "Microservices", "CLI UX"],
    highlights: [
        "Built a CLI workflow for managing a house list (view/add/edit/remove) stored in CSV.",
        "Integrated microservices via file-based “pipes” to compute weighted scores and sort results.",
        "Added fuzzy matching for user input to reduce friction in CLI selection flows.",
    ],
    details: {
        bullets: [
        "Implemented CSV-backed CRUD flows for a house list with derived fields like days-on-market (DOM).",
        "Wrote a menu-driven CLI with clear prompts and table output for readability.",
        "Orchestrated scoring by writing requests to a pipe file and reading back computed results (contract-style integration).",
        ],
        challenges: [
        "Designing reliable I/O contracts between the main program and microservices while keeping UX responsive.",
        ],
        outcome: [
        "A working microservices-style program showcasing integration patterns, data handling, and CLI usability.",
        ],
    },
    links: {
        code: "https://github.com/helloiamcait/cs361-main-program",
        demo: undefined,
    },
    image: {
        src: "/projects/house-search-helper.png",
        alt: "CS361 Main Program CLI UI",  
    },
},
{
    slug: "fog-of-war-chess",
    title: "Fog of War Chess",
    desc: "Web-based chess with an optional Fog of War mode where you only see capturable opponent pieces.",
    stack: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Implemented a Fog of War variant that hides opponent pieces unless capturable.",
      "Built move logic + turn handling, with a responsive board UI in the browser.",
      "Added game state reset + game-over overlay for a complete play loop.",
    ],
    details: {
      bullets: [
        "Implemented core chess move logic and state management in Python.",
        "Built a toggleable Fog of War view that updates visibility each turn.",
        "Created a clean web UI with a dynamic board, turn indicator, and resettable state.",
      ],
      challenges: [
        "Keeping game state and visibility rules consistent across turns in Fog of War mode.",
      ],
      outcome: [
        "A playable chess web app with a unique mechanic that showcases backend + frontend integration.",
      ],
    },
    links: {
      code: "https://github.com/helloiamcait/chess_game",
      demo: undefined,
    },
    image: {
      src: "/projects/fog-of-war-chess.png",
      alt: "Fog of War Chess UI",
    },
  },

  {
    slug: "exercise-tracker",
    title: "Exercise Tracker",
    desc: "Full-stack workout logger with CRUD for exercises (name, reps, weight, units, date) and a REST API.",
    stack: ["React", "Vite", "React Router", "Express", "MongoDB", "Mongoose"],
    highlights: [
      "Built full CRUD flows across a React frontend and Express REST API.",
      "Designed a simple exercise schema with validation (units + date format).",
      "Documented endpoints and local setup for a clean developer experience.",
    ],
    details: {
      bullets: [
        "Implemented REST endpoints for create/read/update/delete of exercise entries.",
        "Built React UI with routing to view, add, edit, and delete exercises.",
        "Added validation rules including unit constraints and a date format check.",
      ],
      challenges: [
        "Keeping frontend form validation aligned with backend constraints to prevent bad writes.",
      ],
      outcome: [
        "A complete, documented full-stack CRUD app with a clear API surface.",
      ],
    },
    links: {
      code: "https://github.com/helloiamcait/exercise-tracker",
      demo: undefined,
    },
    image: {
      src: "/projects/exercise-tracker.png",
      alt: "Exercise Tracker UI",
    },
  },

  {
    slug: "low-inventory-microservice",
    title: "Low Inventory Checker Microservice",
    desc: "Python microservice that reads an inventory JSON and outputs a filtered JSON of low-stock items via a simple request/response contract.",
    stack: ["Python", "JSON", "Microservices"],
    highlights: [
      "Defined a simple request/response contract for generating low-inventory reports.",
      "Filtered inventory items where quantity <= restock threshold into a new JSON output.",
      "Included a UML sequence diagram to document the interaction flow.",
    ],
    details: {
      bullets: [
        "Implemented a file-based interface for requesting and receiving generated report paths.",
        "Validated expected inventory keys and produced a filtered JSON report.",
        "Provided example caller code and sample input/output files for integration.",
      ],
      challenges: [
        "Designing a contract that’s easy to integrate and test without heavy dependencies.",
      ],
      outcome: [
        "A documented microservice component suitable for plugging into a larger system.",
      ],
    },
    links: {
      code: "https://github.com/helloiamcait/cs361-microservice",
      demo: undefined,
    },
    image: {
      src: "/projects/low-inventory-microservice.png",
      alt: "Low Inventory Microservice UML Sequence Diagram",
    },
  },

//   {
//     slug: "quick-book-search",
//     title: "Quick Book Search",
//     desc: "Genre/author discovery tool: search a genre to get top authors, or search an author to see the genres they write.",
//     stack: ["Node.js", "EJS", "JavaScript"],
//     highlights: [
//       "Built a niche discovery workflow for browsing authors by genre and genres by author.",
//       "Deployed a live version for easy recruiter viewing.",
//       "Integrated Open Library as a data source.",
//     ],
//     details: {
//       bullets: [
//         "Implemented server-rendered pages for quick search flows.",
//         "Designed a lightweight UX focused on ‘browse in a bookstore/library’ use cases.",
//         "Integrated Open Library to power the book discovery experience.",
//       ],
//       challenges: [
//         "Keeping results useful and browsable (not overwhelming) for niche sub-genres.",
//       ],
//       outcome: [
//         "A live, focused app that demonstrates product thinking + practical integration.",
//       ],
//     },
//     links: {
//       code: "https://github.com/helloiamcait/quick-book-search-app",
//       demo: "https://book-search.iamcait.com/",
//     },
//   },

//   {
//     slug: "connect-four",
//     title: "Connect Four vs Computer",
//     desc: "Classic Connect Four in the browser with a computer opponent and win detection (horizontal/vertical/diagonal).",
//     stack: ["JavaScript", "HTML", "CSS", "jQuery"],
//     highlights: [
//       "Implemented win detection across horizontal, vertical, and diagonal lines.",
//       "Built the computer-opponent logic as a focused game/algorithm practice project.",
//       "Designed a simple UI flow for quick play in the browser.",
//     ],
//     details: {
//       bullets: [
//         "Implemented board state updates and rules (gravity / stacking).",
//         "Built opponent move logic to automate computer turns.",
//         "Created a clean, playable browser UI with clear rules and feedback.",
//       ],
//       challenges: [
//         "Designing opponent logic that feels reasonable (and extendable to difficulty modes).",
//       ],
//       outcome: [
//         "A compact project that showcases core JS logic and game-state reasoning.",
//       ],
//     },
//     links: {
//       code: "https://github.com/helloiamcait/connect-four",
//       demo: undefined,
//     },
//   },
];
