# ScrollBusters Portfolio — Deployment Guide

## Quick Deploy to Vercel (Recommended)

**Option A — GitHub (easiest)**
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import from GitHub
3. Vercel auto-detects Next.js — just click Deploy
4. Set your custom domain: `scrollbusters.tech`

**Option B — Vercel CLI**
```bash
npm i -g vercel
cd scrollbusters
vercel
```

## Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Swapping in Your Content

### 📁 Project Portfolio (`src/app/work/projects/`)
Each `.mdx` file = one project card. To add a real project:
1. Open the relevant `.mdx` file (e.g. `social-media-content.mdx`)
2. Replace the `images` array paths with your real image paths
3. Update the text content with real client/project details
4. Drop your images into `public/images/projects/[project-folder]/`

### 🖼️ Gallery (`public/images/gallery/`)
Drop your design stills and content images here:
- Horizontal images (16:9 or wider): `horizontal-1.jpg` through `horizontal-4.jpg`
- Vertical images (9:16 or 4:5): `vertical-1.jpg` through `vertical-4.jpg`
The gallery page auto-renders whatever images are referenced in `src/resources/content.tsx`.

### 🏠 Home Page
Edit `src/resources/content.tsx` → `home` object:
- `headline`: the big text (currently "We stop the scroll.")
- `subline`: secondary line below headline

### ℹ️ About Page
Edit `src/resources/content.tsx` → `about` object:
- `intro.description`: agency intro paragraph
- `work.experiences`: services list (company = service name)
- `technical.skills`: tools and capabilities

### 🎨 Logo
Your logos are already in `public/images/`:
- `sb-logo-light.png` — icon mark on white bg (used as avatar)
- `sb-logo-dark.png` — icon mark on black bg
- `sb-cover.png` — full wordmark cover

To replace: just overwrite the files in `public/images/` keeping the same filenames.

### 📱 Social Links
Edit `src/resources/content.tsx` → `social` array:
- Update Instagram handle, WhatsApp number, email

### 🌐 Domain & SEO
Edit `src/resources/once-ui.config.ts`:
- `baseURL`: update to your live domain (already set to `scrollbusters.tech`)

---

## Adding More Projects

1. Create a new `.mdx` file in `src/app/work/projects/`
2. Follow the same frontmatter format (title, publishedAt, summary, images, team)
3. Create a matching image folder in `public/images/projects/[your-slug]/`
4. Drop in `cover-01.jpg`, `cover-02.jpg`, `cover-03.jpg`

Project slugs (URL) = filename without `.mdx`

---

## Design Customisation
- **Colors**: `src/resources/custom.css` — all color overrides at the top
- **Fonts**: `src/resources/once-ui.config.ts` — currently Barlow Condensed (headings) + Barlow (body)
- **Theme/Style**: `src/resources/once-ui.config.ts` → `style` object

