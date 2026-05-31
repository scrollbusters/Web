import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://scrollbusters.tech";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": true,
};

const display: DisplayConfig = {
  location: false,
  time: false,
  themeSwitcher: true,
};

// Password-protect specific routes if needed
const protectedRoutes: ProtectedRoutesConfig = {};

// Fonts: Barlow Condensed (headings) + Barlow (body) — Swiss/SF Pro feel
import { Barlow_Condensed } from "next/font/google";
import { Barlow } from "next/font/google";

const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const label = Barlow({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const code = Barlow({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// Dark, minimal, premium — Apple billboard aesthetic
// brand/accent overridden to gray via custom.css CSS variables
const style: StyleConfig = {
  theme: "dark",
  neutral: "gray",
  brand: "cyan",      // overridden to gray in custom.css
  accent: "cyan",     // overridden to gray in custom.css
  solid: "contrast",
  solidStyle: "flat",
  border: "conservative",  // closest to sharp/Apple style
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const dataStyle: DataStyleConfig = {
  variant: "flat",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 20,
    x: 50,
    y: 0,
    width: 100,
    height: 40,
    tilt: 0,
    colorStart: "neutral-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 20,
    size: "2",
    color: "neutral-alpha-weak",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: false,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

const schema: SchemaConfig = {
  logo: "/images/sb-logo-light.png",
  type: "Organization",
  name: "ScrollBusters",
  description: home.description,
  email: "scrollbusters@gmail.com",
};

const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "",
  discord: "",
};

const socialSharing: SocialSharingConfig = {
  display: false,
  platforms: {
    x: false,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: true,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
