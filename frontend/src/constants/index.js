/**
 * Site content data: nav links, services, technologies, work experience,
 * and projects.
 *
 * Text fields hold i18n KEYS (resolved by components via `t()`), never
 * final copy — the actual strings live in src/locales/*.json in all four
 * languages. Icons/images are imported through the assets barrel.
 */
import {
  agile,
  backend,
  ai,
  fullstack,
  html,
  css,
  javascript,
  react,
  tailwind,
  alpinejs,
  csharp,
  dotnet,
  java,
  springboot,
  python,
  php,
  laravel,
  livewire,
  scikitlearn,
  pandas,
  numpy,
  matplotlib,
  mysql,
  mongodb,
  docker,
  githubActions,
  linux,
  powershell,
  owasp,
  woonboog,
  figma,
  bAndbChezNatalie,
  feestOpTafel,
  evently,
  tourDeFrance,
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
  // {
  //   id: "contact",
  //   title: "navbar.contact", 
  // },
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
  // Frontend
  { name: "HTML 5", icon: html, category: "frontend" },
  { name: "CSS 3", icon: css, category: "frontend" },
  { name: "JavaScript", icon: javascript, category: "frontend" },
  { name: "React JS", icon: react, category: "frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "frontend" },
  { name: "Alpine.js", icon: alpinejs, category: "frontend" },

  // Backend
  { name: "C#", icon: csharp, category: "backend" },
  { name: ".NET Core", icon: dotnet, category: "backend" },
  { name: "Java", icon: java, category: "backend" },
  { name: "Spring Boot", icon: springboot, category: "backend" },
  { name: "Python", icon: python, category: "backend" },
  { name: "PHP", icon: php, category: "backend" },
  { name: "Laravel", icon: laravel, category: "backend" },
  { name: "Livewire", icon: livewire, category: "backend" },

  // Data and AI
  { name: "Machine Learning", icon: scikitlearn, category: "data" },
  { name: "Pandas", icon: pandas, category: "data" },
  { name: "NumPy", icon: numpy, category: "data" },
  { name: "Matplotlib", icon: matplotlib, category: "data" },
  { name: "MySQL", icon: mysql, category: "data" },
  { name: "MongoDB", icon: mongodb, category: "data" },

  // Devops, OS and Security
  { name: "Docker", icon: docker, category: "devops" },
  { name: "GitHub Actions", icon: githubActions, category: "devops" },
  { name: "Linux", icon: linux, category: "devops" },
  { name: "PowerShell", icon: powershell, category: "devops" },
  { name: "Security (OWASP)", icon: owasp, category: "devops" },
];

/** Display order and i18n label keys for the skill groups in Tech.jsx. */
const techCategories = [
  { id: "frontend", label: "tech.categories.frontend" },
  { id: "backend", label: "tech.categories.backend" },
  { id: "data", label: "tech.categories.data" },
  { id: "devops", label: "tech.categories.devops" },
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


const projects = [
  {
    name: "projects.list.chez_natalie.name",
    description: "projects.list.chez_natalie.description",
    tags: [
      { name: "Figma", icon: figma },
      { name: "SQL", icon: mysql }, 
      { name: "Agile", icon: agile },
    ],
    image: bAndbChezNatalie, 
    source_code_link: "https://github.com/J41r0Ps/bb-chez-natalie-system-analysis",
    live_demo_link: null, 
  },
  {
    name: "projects.list.feest_op_tafel.name",
    description: "projects.list.feest_op_tafel.description",
    tags: [
      { name: "Tailwind", icon: tailwind },
      { name: "Alpine.js", icon: alpinejs },
      { name: "Laravel", icon: laravel },
      { name: "Livewire", icon: livewire },
    ],
    image: feestOpTafel, 
    source_code_link: "https://github.com/itfactory-tm/2026-ProjectSKIL2-401",
    live_demo_link: "https://krea.feestoptafel.be/",
  },
  {
    name: "projects.list.evently.name",
    description: "projects.list.evently.description",
    tags: [
      { name: "Tailwind", icon: tailwind },
      { name: "Alpine.js", icon: alpinejs },
      { name: "Laravel", icon: laravel },
      { name: "Livewire", icon: livewire },
    ],
    image: evently, 
    source_code_link: "https://github.com/itfactory-tm/2appai02-2025-2026-webdev-personal-project-J41r0Ps",
    live_demo_link: "https://itf.evently-jan.be/",
  },
  {
    name: "projects.list.tour_de_france.name",
    description: "projects.list.tour_de_france.description",
    tags: [
      { name: "Python", icon: python },
      { name: "NumPy", icon: numpy },
      { name: "Matplotlib", icon: matplotlib },
      { name: "Pandas", icon: pandas },
    ],
    image: tourDeFrance, 
    source_code_link: "https://github.com/J41r0Ps/Project_DataScience_2025-2026",
    live_demo_link: null, 
  },
];

export { services, technologies, techCategories, experiences, projects };
