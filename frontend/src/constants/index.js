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
  // Frontend
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Alpine.js", icon: alpinejs }, 

  // Backend
  { name: "C#", icon: csharp }, 
  { name: ".NET Core", icon: dotnet },
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: springboot },
  { name: "Python", icon: python },
  { name: "PHP", icon: php },
  { name: "Laravel", icon: laravel }, 
  { name: "Livewire", icon: livewire }, 

  // Data and AI
  { name: "Machine Learning", icon: scikitlearn }, 
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy }, 
  { name: "Matplotlib", icon: matplotlib },
  { name: "MySQL", icon: mysql }, 
  { name: "MongoDB", icon: mongodb },

  // Devops, OS and Security
  { name: "Docker", icon: docker },
  { name: "GitHub Actions", icon: githubActions },
  { name: "Linux", icon: linux },
  { name: "PowerShell", icon: powershell },
  { name: "Security (OWASP)", icon: owasp },
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
      { name: "Laravel", icon: laravel },
      { name: "Tailwind", icon: tailwind },
      { name: "Alpine.js", icon: alpinejs },
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
      { name: "Laravel", icon: laravel },
      { name: "Tailwind", icon: tailwind },
      { name: "Alpine.js", icon: alpinejs },
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
      { name: "Pandas", icon: pandas },
      { name: "NumPy", icon: numpy },
      { name: "Matplotlib", icon: matplotlib },
    ],
    image: tourDeFrance, 
    source_code_link: "https://github.com/J41r0Ps/Project_DataScience_2025-2026",
    live_demo_link: null, 
  },
];

export { services, technologies, experiences,  projects };
