import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

// ─────────────────────────────────────────
// AGENCY IDENTITY
// ─────────────────────────────────────────
const person: Person = {
  firstName: "ScrollBusters",
  lastName: "",
  name: "ScrollBusters",
  role: "Content · Video · Design",
  avatar: "/images/sb-logo-light.png",
  email: "scrollbusters@gmail.com",
  location: "Asia/Karachi",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Work with ScrollBusters</>,
  description: <>Get your all-in-one social media solution.</>,
};

// ─────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────
const social: Social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/scrollbusters",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:scrollbusters@gmail.com",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/923130804405",
    essential: true,
  },
];

// ─────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────
const home: Home = {
  path: "/",
  image: "/images/sb-cover.png",
  label: "Home",
  title: "ScrollBusters — Content · Video · Design",
  description:
    "Shariah-compliant social media content, video production, brand identity, and Shopify development that stops the scroll and drives real results.",
  headline: (
    <>
      We stop<br />the scroll.
    </>
  ),
  featured: {
    display: false,
    title: "Featured Work",
    href: "/work",
  },
  subline: (
    <>
      <Text as="span" onBackground="neutral-weak">
        Content · Video · Design
      </Text>
      <br />
      Built for brands that want attention — and results.
    </>
  ),
};

// ─────────────────────────────────────────
// ABOUT PAGE — Agency focused, not personal CV
// ─────────────────────────────────────────
const about: About = {
  path: "/about",
  label: "About",
  title: "About — ScrollBusters",
  description:
    "ScrollBusters is a shariah-compliant content and design agency specialising in social media, video, brand identity, and Shopify development.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/923130804405",
  },
  intro: {
    display: true,
    title: "The Agency",
    description: (
      <>
        ScrollBusters is a Lahore-based content and creative agency built for brands that want to
        cut through the noise. Our name says it all — we create content that stops people mid-scroll
        and compels them to pay attention.
        <br />
        <br />
        Everything we make is shariah-compliant, goal-oriented, and built to perform — not just to
        look good. From organic social media and short-form video to full brand identities and
        Shopify stores, we handle the full creative stack.
      </>
    ),
  },
  work: {
    display: true,
    title: "What We Do",
    experiences: [
      {
        company: "Social Media Content",
        timeframe: "Organic & Paid",
        role: "Reels · Carousels · Stories · Thumbnails",
        achievements: [
          <>
            Scroll-stopping content crafted for Instagram, TikTok, Facebook, and YouTube — designed
            to grow audiences and drive engagement organically.
          </>,
          <>
            Every post is strategy-first: we align content with your brand voice, audience
            behaviour, and platform algorithm to maximise reach and retention.
          </>,
        ],
        images: [],
      },
      {
        company: "Video Production",
        timeframe: "Short & Long Form",
        role: "Ads · Reels · Brand Films · Product Videos",
        achievements: [
          <>
            From concept to final cut — we handle scripting, direction, editing, and motion
            graphics for social ads, product showcases, and brand films.
          </>,
          <>
            Our video content is built to hold attention from the first frame, with hooks,
            pacing, and visual storytelling calibrated for each platform.
          </>,
        ],
        images: [],
      },
      {
        company: "Brand Identity & Design",
        timeframe: "Logo · Guidelines · Packaging",
        role: "Visual Identity Systems",
        achievements: [
          <>
            Complete brand identity systems — logo design, typography, colour palettes, and usage
            guidelines that give your brand a clear, consistent visual language.
          </>,
          <>
            Packaging design that stands out on shelf and screen, built with the same attention to
            detail and strategic intent as the rest of your brand.
          </>,
        ],
        images: [],
      },
      {
        company: "Shopify Development",
        timeframe: "Store Design & Build",
        role: "E-commerce · Custom Themes · Conversion Optimised",
        achievements: [
          <>
            Custom Shopify stores designed for conversion — clean UX, fast load times, and a visual
            identity that matches your brand from first click to checkout.
          </>,
          <>
            We handle everything from store setup and product page design to full custom theme
            development and ongoing support.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Tools & Capabilities",
    skills: [
      {
        title: "Creative & Design",
        description: (
          <>
            Adobe Premiere Pro, After Effects, Photoshop, Illustrator, Figma — full creative
            production stack for video, motion, and static design work.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Development",
        description: (
          <>
            Shopify, custom theme development, Liquid, HTML/CSS — we build e-commerce experiences
            that look the part and convert.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Strategy",
        description: (
          <>
            Social media strategy, content calendars, paid ad management, audience research — we
            approach every brief with a results-first mindset, not just aesthetics.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

// ─────────────────────────────────────────
// BLOG — disabled
// ─────────────────────────────────────────
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog — ScrollBusters",
  description: "Insights on content, design, and social media from the ScrollBusters team.",
};

// ─────────────────────────────────────────
// WORK / PORTFOLIO
// ─────────────────────────────────────────
const work: Work = {
  path: "/work",
  label: "Work",
  title: "Our Work — ScrollBusters",
  description:
    "A selection of content, video, branding, and development work by ScrollBusters.",
};

// ─────────────────────────────────────────
// GALLERY — Design assets, stills, graphics
// ─────────────────────────────────────────
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery — ScrollBusters",
  description: "A visual archive of design work, content stills, and brand assets by ScrollBusters.",
  // ─── SWAP THESE WITH YOUR OWN IMAGES ───
  // Drop your files into /public/images/gallery/
  // Supported: horizontal (16:9) and vertical (9:16 or 4:5) orientations
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Social media content",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Brand identity design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Video production still",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Packaging design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Ad campaign creative",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Logo design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Shopify store design",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Content design",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
