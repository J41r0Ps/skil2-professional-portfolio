/**
 * Barrel for every static asset (logos, icons, photos, screenshots).
 * Import from "../assets" so Vite fingerprints the files and components
 * never hardcode paths. Heavy images are pre-optimized WebP — run
 * `npm run optimize:images` when adding new screenshots or photos.
 */
import logo from "./logo.svg";
import backend from "./backend.png";
import ai from "./ai.png";
import agile from "./agile.png";
import fullstack from "./fullstack.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";
import profile from "./profile.webp";
import figma from './figma.png';
import website from './website.png';
import linkedin from './linkedin.png';
import hobby from './hobby.webp';

// tech icons
import html from "./tech/html.png";
import css from "./tech/css.png";
import javascript from "./tech/javascript.png";
import react from "./tech/react.png";
import tailwind from "./tech/tailwind.png";
import alpinejs from "./tech/alpinejs.png";
import csharp from "./tech/csharp.png";
import dotnet from "./tech/dotnet.png";
import java from "./tech/java.png";
import springboot from "./tech/springboot.png";
import python from "./tech/python.png";
import php from "./tech/php.png";
import laravel from "./tech/laravel.png";
import livewire from "./tech/livewire.svg";
import scikitlearn from "./tech/scikitlearn.png";
import pandas from "./tech/pandas.png";
import numpy from "./tech/numpy.png";
import matplotlib from "./tech/matplotlib.png";
import mysql from "./tech/mysql.png";
import mongodb from "./tech/mongodb.png";
import docker from "./tech/docker.png";
import githubActions from "./tech/github.png";
import linux from "./tech/linux.png";
import powershell from "./tech/powershell.png";
import owasp from "./tech/owasp.png";

// company logos
import woonboog from "./company/woonboog.png";


// project images (WebP — see scripts/optimize-images.mjs)
import bAndbChezNatalie from "./projects/bAndbChezNatalie.webp";
import feestOpTafel from "./projects/feestOpTafel.webp";
import evently from "./projects/evently.webp";
import tourDeFrance from "./projects/tourDeFrance.webp";

export {
  logo,
  backend,
  ai,
  agile,
  fullstack,
  github,
  website,
  linkedin,
  menu,
  close,
  html,
  css,
  javascript,
  tailwind,
  react,
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
  profile,
  woonboog,
  figma,
  bAndbChezNatalie,
  feestOpTafel,
  evently,
  tourDeFrance,
  hobby,
};
