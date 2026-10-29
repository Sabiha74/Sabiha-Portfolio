# Sabiha Mashruha Dipita - Full Stack Developer Portfolio

A modern, accessible, and high-performance personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Featuring **Sabiha Mashruha Dipita**, Full Stack Developer and Computer Science & Engineering graduate from **Daffodil International University (DIU), Bangladesh**, highlighting competitive programming achievements as an **ICPC 2024 Dhaka Regional Contestant** and **NGPC 2022 Finalist**.

---

## 🚀 Quick Start

### 1. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Type & Lint Check
Validate TypeScript types across all components, routes, and data models:
```bash
npm run lint
```

### 3. Production Build
Compile optimized static production bundle:
```bash
npm run build
```

### 4. Production Preview
To serve the production build locally:
```bash
npm run start
```

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router with SSG static page pre-rendering)
- **UI Library**: React 19
- **Type Safety**: TypeScript 5 (Strict Mode enabled)
- **Styling**: Tailwind CSS (Tailwind v3 with responsive utilities and CSS variables)
- **Icons**: Authentic vector SVGs for all technology logos + Lucide React UI icons
- **Theme**: Dark Navy / Charcoal primary mode (`#070B14`, `#0B1120`) with light mode toggle and `localStorage` persistence
- **Security**: Direct, client-side email dispatch (`mailto:`) eliminating credential exposure or unauthorized mail relaying

---

## 📂 Project Structure

```text
MY_Portfolio/
├── public/
│   ├── profile.png               # Real profile photo (Sabiha Mashruha Dipita)
│   └── resume.pdf                # Genuine resume PDF file
├── src/
│   ├── app/
│   │   ├── globals.css           # Global Tailwind CSS, theme tokens, reduced-motion rules
│   │   ├── layout.tsx            # Root layout with metadata and ThemeProvider
│   │   ├── not-found.tsx         # Root 404 page with return navigation
│   │   ├── page.tsx              # Assembled homepage
│   │   └── projects/
│   │       └── [slug]/
│   │           ├── page.tsx      # Dynamic project details page (SSG with generateStaticParams)
│   │           └── loading.tsx   # Loading skeleton state
│   ├── components/
│   │   ├── About.tsx             # CSE journey, DIU foundation, NGPC 2022 & ICPC 2024
│   │   ├── Contact.tsx           # Secure direct email contact, copy action, LinkedIn, GitHub
│   │   ├── Education.tsx         # Daffodil International University credentials & contest honors
│   │   ├── Experience.tsx        # ICPC 2024 & NGPC 2022 milestones & career readiness
│   │   ├── Footer.tsx            # Footer navigation, copyright, and social links
│   │   ├── Hero.tsx              # Name, designation, real photo, resume download, social links
│   │   ├── Icons.tsx             # Authentic SVG vectors for GitHub and LinkedIn
│   │   ├── Navbar.tsx            # Sticky responsive navigation with mobile drawer & theme toggle
│   │   ├── Projects.tsx          # Project showcase cards (Dev Stack, Fit Log, DevConf)
│   │   ├── ProjectThumbnail.tsx  # Reusable project screenshot/mockup visual component
│   │   ├── TechIcons.tsx         # Genuine technology logos (HTML5, CSS3, JS, TS, React, Next, etc.)
│   │   ├── ThemeProvider.tsx     # Theme context manager (Dark / Light)
│   │   └── ThemeToggle.tsx       # Sun / Moon toggle button
│   ├── data/
│   │   └── portfolioData.ts      # Central data configuration
│   └── types/
│       └── portfolio.ts          # TypeScript interfaces for projects, skills, education, etc.
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration with theme tokens
├── tsconfig.json                 # TypeScript compiler options
└── package.json                  # Dependencies and scripts
```

---

## 🔒 Email Security Architecture

To protect email privacy and prevent spam:
- **No Private Credentials**: No email password, app password, SMTP credentials, API keys, or private tokens are stored in frontend code.
- **Client-Side Dispatch**: The contact section provides a direct `mailto:` link that opens the visitor's default email client addressed to `sabihamashruha74@gmail.com`.
- **Server-Side Roadmap**: If a web form submission is requested in the future, it should be connected via a secure, rate-limited backend API service (e.g. Resend, SendGrid) with server-side environment variables and anti-spam verification.
