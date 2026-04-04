import {
  agile,
  backend,
  ai,
  fullstack,
  netcore,
  java,
  python,
  laravel,
  react,
  alpinejs,
  tailwind,
  machineLearning,
  pandas,
  sql,
  githubActions,
  linux,
  security,
  docker,
  carrent,
  jobit,
  tripguide,
  woonboog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "navbar.about", 
  },
  {
    id: "work",
    title: "navbar.work", 
  },
  {
    id: "tech",
    title: "navbar.tech",
  },
  {
    id: "projects",
    title: "navbar.projects", 
  },
  {
    id: "contact",
    title: "navbar.contact", 
  },
];

const services = [
  {
    title: "about.services.backend", 
    icon: backend, 
  },
  {
    title: "about.services.fullstack",
    icon: fullstack, 
  },
  {
    title: "about.services.agile",
    icon: agile, 
  },
  {
    title: "about.services.ai",
    icon: ai, 
  },
];

const technologies = [
  // --- BACKEND & ARCHITECTURE ---
  { name: ".NET Core (C#)", icon: netcore },
  { name: "Java (Spring Boot)", icon: java },
  { name: "Python (FastAPI)", icon: python },
  { name: "PHP (Laravel)", icon: laravel },
  
  // --- FRONTEND ---
  { name: "React JS", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Alpine.js", icon: alpinejs },
  
  // --- DATA & AI ---
  { name: "Machine Learning", icon: machineLearning },
  { name: "Data Science (Pandas/NumPy/Matplotlib)", icon: pandas },
  { name: "SQL & Databases", icon: sql },
  
  // --- DEVOPS & SECURITY ---
  { name: "Docker", icon: docker },
  { name: "GitHub Actions (CI/CD)", icon: githubActions },
  { name: "Linux", icon: linux },
  { name: "Security (OWASP)", icon: security },
];

const experiences = [
  {
    title: "experience.woonboog.title",
    company_name: "experience.woonboog.company",
    icon: woonboog,
    iconBg: "#cad2c5",
    date: "experience.woonboog.date",
    points: [
      "experience.woonboog.points.0",
      "experience.woonboog.points.1",
      "experience.woonboog.points.2",
      "experience.woonboog.points.3",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
