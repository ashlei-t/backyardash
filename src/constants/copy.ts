export const siteConfig = {
  name: "Ash's Portfolio",
  title: "Ash - Developer & Systems Thinker",
  description: "Developer and systems thinker with a designer's eye and 10 years of tech experience."
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#experience" },
  { label: "Socials", href: "#contact" }
];

export const intro = {
  greeting: "🌊 hi, i'm Ashhhhhhh",
  tagline: "Developer and systems thinker with a designer's eye and 10 years of tech experience. I architect intuitive technical solutions to complex business challenges, delivering measurable impact through analytical precision and creative problem-solving."
};

export const projects = [
  {
    id: "pokebudz",
    title: "PokeBudz",
    description: "Poké Budz is a playful, adoption-style app I designed and built as a solo project, inspired by the nostalgic charm of retro gaming and collectible toys. The interface—styled in vibrant, pixel-art-inspired colors—mimics a Pokédex-like feel, immersing users in an experience that feels both modern and reminiscent of classic handheld games. Users take a personality-based quiz and are matched with their ideal Pokémon buddy, displayed in a UI that blends bold 90s aesthetics with intuitive interactivity. Built with React, Vite, Node/Express, and MySQL, this project showcases my ability to craft engaging, immersive frontend experiences while integrating full-stack functionality.",
    image: "/images/pokebudz.png",
    technologies: ["React", "Vite", "Node", "Express", "MySQL"],
    theme: {
      primary: "#ff5252",
      secondary: "#3d7dca",
      background: "#111111"
    }
  },
  {
    id: "favorite-things",
    title: "All My Favorite Things",
    description: "All My Favorite Things is a sleek, interactive web app for curating and managing personalized lists of books, movies, TV shows, and music. Originally created by Frank Nav, I extended its functionality with a feature upgrade that enhances organization and interactivity. Users can create, edit, and delete lists while searching for items via external APIs like Open Library, IMDB, TVMaze, and Apple Music. The app features secure authentication, ensuring data is safely stored. My extension focused on refining the user experience and UI, incorporating a bold, 90s-inspired aesthetic to make list-building fun and visually engaging.",
    image: "/images/favorite-things.png",
    technologies: ["React", "APIs", "Authentication"],
    theme: {
      primary: "#e91e63",
      secondary: "#2196f3",
      background: "#f5f5f5"
    }
  },
  {
    id: "peluditos",
    title: "Peluditos",
    description: "Peluditos is a dynamic pet finder and matching service I contributed to as part of a group project in my full-stack program. I focused on crafting a seamless user experience and designing the adopter and agency dashboards. I utilized React and Vite to build a responsive, intuitive interface, ensuring smooth user interactions from pet browsing to adoption management. On the backend, we worked with Node/Express and MySQL, integrating efficient data handling. This project showcases my ability to create clean, interactive UIs while collaborating in a full-stack environment.",
    image: "/images/peluditos.png",
    technologies: ["React", "Vite", "Node", "Express", "MySQL"],
    theme: {
      primary: "#8bc34a",
      secondary: "#ff9800",
      background: "#ffffff"
    }
  }
];

export const workExperience = {
  credibleLabs: {
    company: "Credible Labs",
    location: "San Francisco, CA",
    positions: [
      {
        title: "Business Systems Analyst",
        period: "August 2019 - January 2024",
        achievements: [
          "Engineered a sophisticated multi-vendor API integration ecosystem for student loan marketplace",
          "Developed complex rate-matching algorithm processing financial eligibility across 10+ lenders",
          "Implemented secure data cross-referencing protocols for sensitive financial information",
          "Optimized API-driven eligibility engine, increasing application conversion rates by 15% (from 35% to 50%)",
          "Conducted comprehensive API testing using Postman, identifying and resolving critical integration challenges",
          "Translated intricate business requirements into precise technical specifications",
          "Designed data validation workflows that enhanced cross-platform financial data exchange"
        ]
      }
    ]
  },
  calAcademy: {
    company: "California Academy of Sciences",
    location: "San Francisco, CA",
    positions: [
      {
        title: "Business Systems Analyst",
        period: "February 2014 - August 2019",
        achievements: [
          "Revamped a high-traffic e-commerce platform for 200,000+ monthly visitors, integrating Tessitura APIs to streamline ticketing and improve user experience",
          "Led 23 revenue-generating projects in a single year, including system-wide enhancements to reservations and accessibility",
          "Migrated legacy website to modern frameworks (Sass, HTML5, Drupal) while maintaining system integrity"
        ]
      },
      {
        title: "Quality Assurance Support Technician",
        period: "Prior to February 2014",
        achievements: [
          "Developed and executed QA processes that reduced the bug escape rate by 40%, implementing both manual and automated testing for improved platform stability",
          "Earned promotion to Business Systems Analyst based on exceptional technical aptitude and problem-solving ability",
          "Self-taught front-end development to bridge the gap between engineering and business teams, leading to a promotion to Business Systems Analyst",
          "Created documentation standards that improved cross-team collaboration and issue resolution efficiency"
        ]
      }
    ]
  }
};

export const education = [
  {
    degree: "Full-Stack Development",
    institution: "CodeOp, Barcelona, Spain",
    year: "2025"
  },
  {
    degree: "Front End Development",
    institution: "General Assembly",
    year: "2018"
  },
  {
    degree: "Bachelor of Arts in Communications, Digital Media Concentration",
    institution: "California State University of Sacramento",
    year: "2010"
  }
];

export const skills = {
  frontend: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "API Integration", "SQL"],
  testing: ["Postman", "API Validation", "Test Planning", "QA Methodologies"],
  design: ["Responsive UI/UX", "Wireframing", "Figma", "Adobe Suite"],
  projectTools: ["Git", "GitHub", "JIRA", "Confluence", "Agile Methodologies"]
};

// interface WorkExperienceItem {
//   company: string;
//   location: string;
//   positions: {
//     title: string;
//     period: string;
//     sections?: {
//       title: string;
//       bullets: string[];
//     }[];
//     bullets?: string[];
//   }[];
// }

// interface Education {
//   degree: string;
//   institution: string;
//   location?: string;
//   year: number;
// }

// interface Skill {
//   category: string;
//   items: string[];
// }

// interface Project {
//     name: string;
//     class: string;
//     description: string;
//     image: string;
//     items: string[];
//   }

// export const workExperience: WorkExperienceItem[] = [
//   {
//     company: "Credible Labs",
//     location: "San Francisco, CA",
//     positions: [
//       {
//         title: "Business Systems Analyst",
//         period: "August 2019 - January 2024",
//         sections: [
//           {
//             title: "Financial Data Integration & Performance Optimization",
//             bullets: [
//               "Engineered a sophisticated multi-vendor API integration ecosystem for student loan marketplace",
//               "Developed complex rate-matching algorithm processing financial eligibility across 10+ lenders",
//               "Implemented secure data cross-referencing protocols for sensitive financial information",
//               "Optimized API-driven eligibility engine, increasing application conversion rates by 15% (from 35% to 50%)"
//             ]
//           },
//           {
//             title: "Technical Achievements",
//             bullets: [
//               "Conducted comprehensive API testing using Postman, identifying and resolving critical integration challenges",
//               "Translated intricate business requirements into precise technical specifications",
//               "Designed data validation workflows that enhanced cross-platform financial data exchange"
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     company: "California Academy of Sciences",
//     location: "San Francisco, CA",
//     positions: [
//       {
//         title: "Business Systems Analyst",
//         period: "February 2014 - August 2019",
//         bullets: [
//           "Revamped a high-traffic e-commerce platform for 200,000+ monthly visitors, integrating Tessitura APIs to streamline ticketing and improve user experience",
//           "Led 23 revenue-generating projects in a single year, including system-wide enhancements to reservations and accessibility",
//           "Migrated legacy website to modern frameworks (Sass, HTML5, Drupal) while maintaining system integrity"
//         ]
//       },
//       {
//         title: "Quality Assurance Support Technician",
//         period: "Prior to February 2014",
//         bullets: [
//           "Developed and executed QA processes that reduced the bug escape rate by 40%, implementing both manual and automated testing for improved platform stability",
//           "Earned promotion to Business Systems Analyst based on exceptional technical aptitude and problem-solving ability",
//           "Self-taught front-end development to bridge the gap between engineering and business teams, leading to a promotion to Business Systems Analyst",
//           "Created documentation standards that improved cross-team collaboration and issue resolution efficiency"
//         ]
//       }
//     ]
//   }
// ];

// export const education: Education[] = [
//   {
//     degree: "Full-Stack Development",
//     institution: "CodeOp",
//     location: "Barcelona, Spain",
//     year: 2025
//   },
//   {
//     degree: "Front End Development",
//     institution: "General Assembly",
//     year: 2018
//   },
//   {
//     degree: "Bachelor of Arts in Communications, Digital Media Concentration",
//     institution: "California State University of Sacramento",
//     year: 2010
//   }
// ];

// export const skills: Skill[] = [
//   {
//     category: "Frontend",
//     items: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3"]
//   },
//   {
//     category: "Backend",
//     items: ["Node.js", "Express", "API Integration", "SQL"]
//   },
//   {
//     category: "Testing",
//     items: ["Postman", "API Validation", "Test Planning", "QA Methodologies"]
//   },
//   {
//     category: "Design",
//     items: ["Responsive UI/UX", "Wireframing", "Figma", "Adobe Suite"]
//   },
//   {
//     category: "Project Tools",
//     items: ["Git", "GitHub", "JIRA", "Confluence", "Agile Methodologies"]
//   }
// ];

// export const projects: Project[] = [
//     {
//         name: "PokeBudz",
//         class: "project-one",
//         description: `
//             Poké Budz is a playful, adoption-style app I designed and built as a solo project,
//             inspired by the nostalgic charm of retro gaming and collectible toys.
//             The interface—styled in vibrant, pixel-art-inspired colors—mimics a Pokédex-like feel,
//             immersing users in an experience that feels both modern and reminiscent of classic
//             handheld games.
//             \n\n\n
//             Users take a personality-based quiz and are matched with their ideal Pokémon buddy,
//             displayed in a UI that blends bold 90s aesthetics with intuitive interactivity.
//             Built with React, Vite, Node/Express, and MySQL, this project showcases my ability to
//             craft engaging, immersive frontend experiences while integrating full-stack functionality.`,
//         image: "/src/assets/pokebudz.png",
//         items: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3","Node.js", "Express", "API Integration", "SQL"]
//     },
//     {
//         name: "All My Favorite Things",
//         class: "project-two",
//         description: `
//             All My Favorite Things is a sleek, interactive web app for curating and managing personalized
//             lists of books, movies, TV shows, and music. Originally created by Frank Nav, I extended its
//             functionality with a feature upgrade that enhances organization and interactivity.
//             \n\n\n
//             Users can create, edit, and delete lists while searching for items via external
//             APIs like Open Library, IMDB, TVMaze, and Apple Music. The app features secure authentication,
//             ensuring data is safely stored. My extension focused on refining the user experience and UI,
//             incorporating a bold, 90s-inspired aesthetic to make list-building fun and visually engaging.`,
//         image: "/src/assets/AMFT_Books.png",
//         items: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3","Node.js", "Express", "API Integration", "SQL"]
//     },
//     {
//         name: "Peluditos",
//         class: "project-three",
//         description: `
//             Peluditos is a dynamic pet finder and matching service I contributed to as part of a group project
//             in my full-stack program. I focused on crafting a seamless user experience and designing the adopter
//             and agency dashboards. I utilized React and Vite to build a responsive, intuitive interface,
//             ensuring smooth user interactions from pet browsing to adoption management. On the backend,
//             we worked with Node/Express and MySQL, integrating efficient data handling. This project showcases my
//             ability to create clean, interactive UIs while collaborating in a full-stack environment.`,
//         image: "/src/assets/peluditos_requests.png",
//         items: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3","Node.js", "Express", "API Integration", "SQL"]
//     }
// ]
