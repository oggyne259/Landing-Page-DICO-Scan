# DICO Scan Landing Page
## AI Product Safety Scanner Landing Page using Next.js 15, TypeScript and Tailwind CSS
### Project Documentation – Business, UI/UX, Frontend Architecture and Development Guide

---

# 1. Project Overview

## 1.1 Introduction

DICO Scan Landing Page is a conversion-focused web page for introducing **DICO Scan**, an AI-powered mobile application that helps users scan product barcodes/QR codes, analyze ingredients, detect risky substances, and receive safety recommendations based on personal or family profiles.

The landing page is designed to communicate one clear promise:

> “Scan faster, understand clearer, and choose safer products.”

It is not a full product web dashboard. Its role is to explain the mobile app value, build trust, educate visitors, and guide them to download the app.

---

# 1.2 Business Vision

DICO Scan aims to reduce confusion when users read product labels. Instead of forcing users to manually interpret technical ingredient names, the product converts ingredient information into simple safety scores, warnings, and personalized recommendations.

Core philosophy:

- Safety over blind purchase
- Clarity over technical complexity
- Personalization over generic product information
- Family protection over individual-only decisions
- Fast decision-making over long research

---

# 1.3 Objectives

- Build a modern landing page for DICO Scan
- Present the AI scanning value proposition clearly
- Explain how scanning, analysis, and recommendation work
- Show why DICO Scan is different from normal barcode apps
- Build credibility through statistics and testimonials
- Convert visitors through App Store / Google Play CTA buttons
- Use reusable React components for each section
- Maintain a consistent Tailwind CSS design system
- Support responsive desktop and mobile layouts

---

# 1.4 Target Users

| User Type | Description |
|---|---|
| General Consumers | Users checking products before buying |
| Parents | Users caring about family and children safety |
| Health-conscious Users | Users avoiding harmful or controversial ingredients |
| Allergy-sensitive Users | Users needing warnings based on personal profiles |
| Smart Shoppers | Users comparing products before purchase |
| Marketing Visitors | Users arriving from ads, campaigns, or search |
| Product Team | Team maintaining product positioning and content |
| Frontend Developers | Team extending UI and codebase |

---

# 2. Case Study

## 2.1 Business Context

Many barcode scanner apps only show product names or general information. They usually do not explain whether a product is suitable for a specific user, child, allergy profile, or family need.

DICO Scan solves this by combining:

- barcode / QR scanning
- ingredient analysis
- AI explanation
- safety scoring
- risky ingredient warning
- personalized profile matching
- alternative product suggestions

---

## 2.2 Business Problems

| Problem | Description |
|---|---|
| Technical labels | Ingredient lists are hard to understand quickly |
| Generic scanning | Normal scanner apps show basic product information only |
| Weak personalization | Results often ignore allergy, health, and family context |
| Slow decision-making | Users must research ingredients manually |
| Low trust | Users need simple explanations, not raw technical data |
| Family safety concern | A product may be safe for one person but unsuitable for another |

---

## 2.3 Proposed Solution

The DICO Scan landing page communicates that the mobile app can:

- scan product barcodes or QR codes
- identify the product
- analyze ingredients using AI
- show a clear safety score
- warn about risky ingredients
- explain the reason behind the warning
- personalize results by user or family profile
- suggest safer alternatives
- guide users to download the app

---

# 3. Business Architecture

## 3.1 Core Business Modules

### Product Scan Module

Handles barcode/QR scanning, product lookup, and instant result display.

### Ingredient Analysis Module

Handles ingredient interpretation, safety score generation, and risky substance warning.

### Personal Profile Module

Handles allergy information, health preferences, and family member context.

### Recommendation Module

Handles alternative product suggestions and product suitability ranking.

### Trust & Education Module

Handled by the landing page through comparison, outcomes, testimonials, and product explanation sections.

### Conversion Module

Handled by CTA buttons, download anchors, App Store button, and Google Play button.

---

# 3.2 System Actors

| Actor | Responsibilities |
|---|---|
| Visitor | Views landing page and learns about the product |
| Potential User | Clicks download CTA after reading benefits |
| Mobile App User | Uses DICO Scan to scan and evaluate products |
| Parent / Family User | Uses family profiles for safer product choices |
| Marketing Team | Uses the page for campaigns and product promotion |
| Developer | Maintains components, styles, and deployment |
| Product Owner | Defines messaging, section order, and conversion goals |

---

# 4. Functional Requirements

## 4.1 Header Navigation

- Fixed top navigation
- Scroll-aware header state
- Mobile menu toggle
- Anchor links to key sections
- Primary CTA: “Tải miễn phí”

## 4.2 Hero Section

- AI badge
- Main headline
- Product value description
- Primary download CTA
- Secondary “how it works” CTA
- Product mockup image
- Scan result preview card
- Safety score preview
- Ingredient warning floating card
- Alternative suggestion floating card

## 4.3 Trust Bar Section

- Quick credibility indicators
- Scan volume
- Rating
- User count
- AI accuracy indicator

## 4.4 Comparison Section

- Compare normal barcode apps with DICO Scan AI
- Highlight ingredient analysis
- Highlight personalized safety warning
- Explain why DICO Scan is more useful at purchase time

## 4.5 Outcomes Section

- Show what users know after one scan
- Safety level
- Risk explanation
- Alternative suggestion
- Family profile suitability

## 4.6 How It Works Section

Three-step flow:

```text
Scan code
→ View AI analysis
→ Receive personalized recommendation
```

## 4.7 Testimonials Section

- User quote cards
- Star ratings
- Avatar images
- Social proof statistics
- Gradient background emphasis

## 4.8 About Section

- Explain DICO Scan mission
- Present core pillars: transparency, personalization, easy understanding
- Include secondary CTA

## 4.9 Final CTA Section

- Final persuasive download message
- App Store button
- Google Play button
- Gradient CTA container

## 4.10 Footer

- Product summary
- Brand logo
- Product links
- Policy links
- Support link
- Copyright
- System status indicator

---

# 5. Non-Functional Requirements

## 5.1 Performance

| Requirement | Target |
|---|---|
| Page load | Fast landing-page loading |
| Image handling | Fallback and optimized image wrapper |
| Scrolling | Smooth anchor scrolling |
| Responsiveness | No horizontal overflow on mobile |
| Interaction | Fast menu and CTA response |

## 5.2 Security

- Do not collect sensitive user data directly on the landing page
- Replace placeholder app links with official store URLs before production
- Review external image sources before deployment
- Do not rely permanently on ignored TypeScript/ESLint build errors
- Use `NEXT_PUBLIC_SITE_URL` correctly for production metadata

## 5.3 Scalability

- Section-based component structure
- Shared UI components
- Tailwind theme extension
- CSS variables for color and fonts
- Easy addition of new landing sections

## 5.4 Accessibility

- Use meaningful alt text
- Keep CTA labels clear
- Maintain visible focus states
- Review color contrast on gradient backgrounds
- Keep mobile tap targets large enough

---

# 6. System Architecture

## 6.1 Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Frontend framework and App Router |
| React 19 | UI rendering |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Custom CSS Variables | Brand tokens and global theme |
| next/font/google | Font loading |
| Heroicons | UI icons |
| Recharts | Chart-ready dependency if needed |
| Netlify Plugin Next.js | Netlify deployment support |
| Prettier / ESLint | Code formatting and linting |

---

## 6.2 Architecture Style

```text
Next.js App Router
→ Page Composition
→ Section Components
→ Shared UI Components
→ Tailwind Theme
→ Global CSS Tokens
```

---

## 6.3 Repository Structure

```text
Landing-Page-DICO-Scan/
 ├── public/
 │   ├── favicon.ico
 │   └── assets/images/
 │       ├── app_logo.png
 │       └── no_image.png
 │
 ├── src/
 │   ├── app/
 │   │   ├── layout.tsx
 │   │   ├── icon.png
 │   │   ├── apple-icon.png
 │   │   └── home/
 │   │       ├── page.tsx
 │   │       └── components/
 │   │           ├── HeroSection.tsx
 │   │           ├── TrustBarSection.tsx
 │   │           ├── ComparisonSection.tsx
 │   │           ├── OutcomesSection.tsx
 │   │           ├── HowItWorksSection.tsx
 │   │           ├── TestimonialsSection.tsx
 │   │           ├── AboutSection.tsx
 │   │           └── FinalCtaSection.tsx
 │   │
 │   ├── components/
 │   │   ├── Header.tsx
 │   │   ├── Footer.tsx
 │   │   └── ui/
 │   │       ├── AppImage.tsx
 │   │       ├── AppLogo.tsx
 │   │       └── AppIcon.tsx
 │   │
 │   └── styles/
 │       ├── index.css
 │       └── tailwind.css
 │
 ├── image-hosts.config.mjs
 ├── next.config.mjs
 ├── tailwind.config.js
 ├── package.json
 └── README.md
```

---

# 7. Page Flow Strategy

## 7.1 Landing Page Flow

```text
Header
→ Hero
→ Trust Bar
→ Comparison
→ Outcomes
→ How It Works
→ Testimonials
→ About
→ Final CTA
→ Footer
```

## 7.2 Conversion Purpose by Section

| Section | Purpose |
|---|---|
| Header | Keeps navigation and download CTA available |
| Hero | Communicates value immediately |
| Trust Bar | Builds quick credibility |
| Comparison | Differentiates product from normal scanner apps |
| Outcomes | Shows clear benefits after one scan |
| How It Works | Makes the product easy to understand |
| Testimonials | Adds social proof |
| About | Explains mission and product principles |
| Final CTA | Pushes final download action |
| Footer | Provides closure and supporting links |

---

# 8. Component Architecture

## 8.1 Home Page Composition

```text
HomePage
 ├── Header
 ├── HeroSection
 ├── TrustBarSection
 ├── ComparisonSection
 ├── OutcomesSection
 ├── HowItWorksSection
 ├── TestimonialsSection
 ├── AboutSection
 ├── FinalCtaSection
 └── Footer
```

## 8.2 Shared Components

| Component | Purpose |
|---|---|
| Header | Navigation, mobile menu, sticky CTA |
| Footer | Brand closure, links, footer CTA |
| AppImage | Image rendering with loading state and fallback |
| AppLogo | Logo rendering |
| AppIcon | Icon rendering |

---

# 9. Design System

## 9.1 Design Philosophy

DICO Scan uses a bright, clean, trustworthy, healthcare-adjacent visual style. The design should feel modern and safe, not overly technical.

Core principles:

- clean spacing
- soft gradients
- rounded cards
- readable typography
- high trust visual tone
- friendly AI/product safety positioning

---

## 9.2 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | `#8A5CFF` | Brand purple |
| Primary Light | `#B8A4FF` | Soft highlight |
| Primary Deep | `#4A8CFF` | Blue brand tone |
| Accent Light | `#7FB3FF` | Gradient and glow |
| Background | `#F7F8FF` | Main page background |
| Background Alt | `#EEF3FF` | Section contrast |
| Text Primary | `#1F2554` | Heading text |
| Text Muted | `#4D5780` | Body text |
| Border | `#D9E2FF` | Card borders |
| Warning Red | `#F32B2B` | Risk warning |
| Safe Green | `#33CD1A` | Safety signal |
| Yellow | `#FFE957` | Star/rating highlight |
| Orange | `#FF9F6E` | Secondary accent |

---

## 9.3 Typography

| Role | Font |
|---|---|
| Display / Heading | Montserrat, Roboto |
| Sub heading / Label | Lato, Inter, Roboto |
| Body | Inter, Roboto, Open Sans |

---

## 9.4 Visual Elements

- Glassmorphism cards
- Soft radial backgrounds
- Blue-purple gradients
- Rounded section cards
- Mobile mockup frame
- Floating feature cards
- Star ratings
- Gradient CTA blocks

---

# 10. Routing and Configuration

## 10.1 Main Route

```text
/home
```

Default root path redirects to:

```text
/ → /home
```

## 10.2 Development Port

```text
http://localhost:4028
http://localhost:4028/home
```

## 10.3 Important Config Notes

- `next.config.mjs` enables redirect from `/` to `/home`
- Remote image patterns are loaded from `image-hosts.config.mjs`
- TypeScript build errors are currently ignored during build
- ESLint errors are currently ignored during build

Recommendation:

> Before production, remove or carefully review `ignoreBuildErrors` and `ignoreDuringBuilds` to avoid shipping hidden issues.

---

# 11. Development Guide

## 11.1 Requirements

- Node.js 18+
- npm

Node.js 20+ is recommended for better compatibility with modern Next.js projects.

## 11.2 Install Dependencies

```bash
npm install
```

## 11.3 Run Development Server

```bash
npm run dev
```

## 11.4 Build Production

```bash
npm run build
```

## 11.5 Run Production Server

```bash
npm run serve
```

---

# 12. Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Run Next.js dev server on port 4028 |
| `npm run build` | Build production app |
| `npm run start` | Currently runs dev server on port 4028 |
| `npm run serve` | Run production server after build |
| `npm run lint` | Run Next lint command |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Format source files with Prettier |
| `npm run type-check` | Run TypeScript check with `tsc --noEmit` |

---

# 13. Content Editing Guide

## 13.1 Change Section Order

Edit:

```text
src/app/home/page.tsx
```

## 13.2 Change Hero Copy

Edit:

```text
src/app/home/components/HeroSection.tsx
```

## 13.3 Change Navigation Links

Edit:

```text
src/components/Header.tsx
```

## 13.4 Change Footer Links

Edit:

```text
src/components/Footer.tsx
```

## 13.5 Change Design Tokens

Edit:

```text
tailwind.config.js
src/styles/tailwind.css
```

## 13.6 Change CTA Store Links

Edit:

```text
src/app/home/components/FinalCtaSection.tsx
```

Current App Store and Google Play links are placeholders and should be replaced before launch.

---

# 14. Testing Strategy

## 14.1 Manual UI Testing

Test:

- desktop layout
- tablet layout
- mobile layout
- header scroll behavior
- mobile menu open/close
- anchor navigation
- CTA button links
- image fallback behavior
- no horizontal overflow

## 14.2 Code Quality Testing

Run:

```bash
npm run type-check
npm run lint
npm run build
```

## 14.3 Content QA

Check:

- product name consistency: DICO Scan vs ScanBar
- metadata title and description
- CTA copy
- app store links
- testimonial realism
- marketing metrics accuracy
- spelling and Vietnamese tone

---

# 15. SEO and Metadata Strategy

## 15.1 Current SEO Direction

The page should target users searching for:

- app quét mã sản phẩm
- app kiểm tra thành phần sản phẩm
- app kiểm tra độ an toàn sản phẩm
- AI product scanner
- barcode scanner AI
- product safety app

## 15.2 Metadata Recommendation

Current metadata should be aligned fully with DICO Scan branding.

Suggested title:

```text
DICO Scan - Quét sản phẩm, phân tích thành phần bằng AI
```

Suggested description:

```text
DICO Scan giúp bạn quét mã sản phẩm, phân tích thành phần, cảnh báo rủi ro và nhận khuyến nghị an toàn theo hồ sơ cá nhân/gia đình.
```

---

# 16. Deployment Strategy

## 16.1 Recommended Platforms

| Platform | Use Case |
|---|---|
| Vercel | Best fit for Next.js deployment |
| Netlify | Supported through Netlify Next.js plugin |
| Railway | Possible if deployed as Node server |

## 16.2 Deployment Checklist

- Update production environment variable `NEXT_PUBLIC_SITE_URL`
- Replace placeholder App Store / Google Play links
- Verify remote image hosts
- Run type-check
- Run lint
- Run production build
- Test `/` redirect to `/home`
- Check metadata and favicon
- Test mobile layout

---

# 17. Risks and Limitations

| Risk | Impact | Recommendation |
|---|---|---|
| Store links are placeholders | CTA does not convert | Replace with real links |
| Metadata still mentions ScanBar | Brand inconsistency | Update metadata to DICO Scan |
| Build ignores TS/ESLint errors | Hidden technical debt | Enable strict quality before production |
| Marketing numbers may be static | Trust risk if inaccurate | Use verified numbers only |
| Remote generated images | Availability risk | Move key images to local/CDN assets |

---

# 18. Future Improvements

## 18.1 Product Landing Improvements

- Add FAQ section
- Add pricing or free-plan explanation
- Add privacy and data safety explanation
- Add real screenshots from the mobile app
- Add newsletter / waitlist form
- Add campaign tracking parameters
- Add sticky mobile download bar
- Add Vietnamese and English language switch

## 18.2 Technical Improvements

- Add unit tests for shared components
- Add Lighthouse performance audit
- Add sitemap and robots config
- Add Open Graph image
- Add structured data
- Replace placeholder links
- Improve metadata consistency
- Move marketing data to config file

---

# 19. Final RBL Topic

## Official Project Title

DICO Scan – An AI Product Safety Scanner Landing Page using Next.js 15, TypeScript and Tailwind CSS

---

# 20. Conclusion

DICO Scan Landing Page demonstrates a modern product landing page built with Next.js 15, React, TypeScript, and Tailwind CSS.

The project successfully presents the core value of DICO Scan:

- scan product codes
- analyze ingredients
- explain safety risks
- personalize recommendations
- help users make safer purchase decisions

The landing page follows a strong conversion structure:

```text
Problem awareness
→ Product differentiation
→ User outcome
→ Simple workflow
→ Social proof
→ Mission explanation
→ Download CTA
```

This makes the project suitable as a polished frontend landing page for promoting an AI-powered mobile product safety application.

---

# 21. Learning Outcomes Achieved

| Learning Outcome | Achievement |
|---|---|
| LO1 | Business and product analysis |
| LO2 | Landing page architecture design |
| LO3 | Next.js App Router usage |
| LO4 | React component-based UI development |
| LO5 | Tailwind CSS design system implementation |
| LO6 | Responsive UI/UX planning |
| LO7 | Deployment and quality checklist planning |

---

# 22. Final Evaluation

DICO Scan Landing Page is more than a simple promotional website. It applies product thinking, conversion strategy, section-based frontend architecture, and a consistent visual design system.

The strongest parts of the project are:

- clear product positioning
- strong landing page flow
- reusable component structure
- modern blue-purple health-tech visual identity
- responsive design direction
- clear CTA strategy

Before production, the project should improve:

- metadata consistency
- real app store links
- verified marketing statistics
- stricter TypeScript and ESLint build quality
- real product screenshots or controlled CDN assets

