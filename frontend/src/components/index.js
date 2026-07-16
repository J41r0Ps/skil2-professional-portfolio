/**
 * Barrel file for all page components.
 * Import from "./components" instead of reaching into individual files.
 */
// NOTE: CanvasLoader is deliberately NOT exported here — it imports
// @react-three/drei, and exposing it through this barrel would drag the
// whole three.js stack into the main bundle. It is only used inside the
// lazy-loaded canvas chunk (canvas/Laptop.jsx).
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  Footer,
  ScrollProgress,
  SectionHeader,
  SpotlightCard,
};
