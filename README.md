# Mateo Falco — Portfolio

### A complete guide to this project, written for anyone — no programming experience required.

---

## 1. What Is This Project?

### What is a portfolio website?

A portfolio website is like a digital business card — but much richer. Instead of just a name and a phone number, a portfolio website shows who you are, what you've done, what skills you have, and how to contact you.

Think of it like a resume, but instead of a piece of paper you hand someone, it's a page on the internet anyone can visit from anywhere in the world.

### What does this specific portfolio do?

This is the personal portfolio website of **Mateo Falco**, a Junior Developer from Montevideo, Uruguay.

When someone visits this website, they see:
- A **Hero section**: the first thing you see — name, role, and a brief description
- An **About section**: background, work experience, education, languages, and a personal note
- A **Contact section**: email address, links to GitHub and LinkedIn, and a button to download the CV

The website also has a **language toggle** in the top navigation bar. Visitors can switch between **English** and **Spanish** and every word on the page updates instantly.

### Who is it for?

This website is for anyone who wants to learn more about Mateo — recruiters, companies, collaborators, or curious visitors. The goal is to give a clear, honest picture of who he is and make it easy to get in touch.

---

## 2. How Does a Website Work?

### What happens when someone types a URL?

Imagine a URL (like `www.mateofalco.com`) as a postal address. When you type it into your browser (Chrome, Safari, Firefox), your browser sends a message to the internet saying: "Hey, I need the files for this address."

A **server** somewhere in the world receives that request, finds the right files, and sends them back to your browser. Your browser then reads those files and displays the website on your screen.

The whole process happens in under a second.

### What is a server?

A server is just a computer — but one that runs 24 hours a day, 7 days a week, and its only job is to store files and send them to people who ask for them. You never see it. It's usually in a large building called a **data center**, often far from where you live.

### What is the difference between frontend and backend?

Think of a restaurant:
- The **frontend** is everything the customer sees: the menu, the tables, the decor, the food on the plate. In websites, this is what appears on your screen — text, images, buttons, colors.
- The **backend** is the kitchen: the chef, the recipes, the ingredients storage. In websites, this is the code that runs on the server, processes data, talks to databases, etc.

### Does this project have a backend?

**No.** This portfolio has no backend.

Why? Because it doesn't need one. The website only displays information — it doesn't need to save anything, process payments, or handle user accounts. All the content (name, text, links) is written directly in the code. There's nothing dynamic that requires a server to compute.

This makes the website simpler, faster, cheaper to host, and more secure.

### Does this project have a database?

**No.** A database is like a giant organized spreadsheet where you store and retrieve data — user accounts, blog posts, orders, etc. Since this portfolio just shows static information, there's nothing to store. The text lives directly in the code files.

---

## 3. What Technologies Were Used and Why?

### Next.js — The Framework

Imagine you want to build a house. You could start from scratch — dig the foundation, pour concrete, lay every brick. Or you could buy a pre-designed kit that handles the foundation and structure for you, so you can focus on the design and finishing touches.

**Next.js is that kit for websites.** It's a tool that takes care of the boring, repetitive technical work — like organizing files, optimizing images, and preparing the website to be fast — so the developer can focus on what the website actually shows and does.

Next.js was chosen because it works perfectly with the hosting service used (Vercel), it handles image optimization automatically, and it makes the website fast out of the box.

### React — The Building Blocks

Next.js is built on top of **React**. React is the system that lets developers build a website out of reusable pieces called **components** (more on those later).

Think of React like LEGO. Each component is a LEGO block — a button, a card, a navigation bar. You build each block once and you can use it anywhere. If you change the block, it changes everywhere it's used.

Next.js is the instruction manual that tells you how to assemble those LEGO blocks into a finished website.

### TypeScript — Smarter JavaScript

Websites run on a programming language called **JavaScript**. JavaScript is what makes websites interactive — buttons that do things, text that changes, animations, etc.

**TypeScript** is JavaScript with extra rules. Those rules catch mistakes before the code runs. Imagine writing a recipe and having an editor who immediately flags it if you write "add 2 cups of sugar" when you meant "2 teaspoons." TypeScript does the same for code — it finds errors early so they don't cause problems later.

### Tailwind CSS — Styling Made Fast

**CSS** (Cascading Style Sheets) is the language that controls how a website looks. Colors, fonts, spacing, layout — all CSS. Without CSS, a website is just plain black text on a white background.

**Tailwind CSS** is a tool that provides a huge library of pre-written CSS shortcuts. Instead of writing a full style rule from scratch, you just add a short word to your code. For example, instead of writing `color: white; font-size: 18px; font-weight: bold;`, you write `text-white text-lg font-bold`. It's faster and keeps everything consistent.

### Framer Motion — Animations

**Framer Motion** is a library (a pre-written set of tools) for creating animations. Animations are things like elements fading in, sliding up, or moving smoothly when you interact with them.

Writing animations from scratch is complex math. Framer Motion handles all that complexity — you just say "fade this in over 0.6 seconds" and it does it.

*Note: the core animations in this project now use the browser's built-in tools directly (more on that in the animations section), but Framer Motion is still used for the initial entrance animations in the Hero section.*

### lucide-react — Icons

**Icons** are those small visual symbols you see everywhere on websites — a magnifying glass for search, an envelope for email, an arrow pointing right. Drawing icons from scratch is tedious. **lucide-react** is a library of thousands of ready-made, clean icons. You just pick the one you need and use it.

### Node.js — The Engine Behind the Scenes

**Node.js** is what allows JavaScript (normally a browser language) to also run on a computer or server. Next.js needs Node.js to run its development tools and to build the final website files.

You never interact with Node.js directly. It runs in the background, like the engine of a car — you don't think about it, but without it, nothing moves.

---

## 4. What Is the File Structure?

### What is a file structure?

Every project is just a collection of files and folders on a computer, organized in a specific way. The file structure is the map of where everything lives.

Here's what this project looks like:

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── FadeIn.tsx
│
├── contexts/
│   └── LanguageContext.tsx
│
├── public/
│   ├── MyPhoto.PNG
│   ├── Resume Mateo Falco.pdf
│   └── CV Mateo Falco.pdf
│
├── package.json
└── README.md
```

### The `/app` folder — The Pages

This folder controls what the website actually shows. Think of it as the "main room" of the project.

- **`layout.tsx`** — This is the outer frame of the website. It sets things that are the same on every page: the font, the browser tab title, and the analytics tracker. Think of it as the picture frame — the content changes but the frame stays the same.

- **`page.tsx`** — This is the actual homepage. It's very simple: it just lists all the sections (Nav, Hero, About, Contact) in order, like a table of contents that says "show this, then this, then this."

- **`globals.css`** — This file sets the default visual rules for the entire website: the background color, the font, how smooth scrolling works, and how the scrollbar looks.

### The `/components` folder — The Building Blocks

A **component** is a self-contained piece of the website. Each component is responsible for one specific part of the page. If you want to change how the navigation bar looks, you only touch `Nav.tsx`. If you want to change the hero section, you only touch `Hero.tsx`.

This keeps the project organized. Instead of one giant messy file, you have small focused files, each with a clear purpose.

- **`Nav.tsx`** — The navigation bar at the top
- **`Hero.tsx`** — The main section at the top of the page
- **`About.tsx`** — The About section with cards
- **`Contact.tsx`** — The Contact section
- **`FadeIn.tsx`** — A reusable animation tool (not a visible section — just a helper)

### The `/contexts` folder — Shared Information

- **`LanguageContext.tsx`** — This file manages which language the website is in (English or Spanish) and makes that information available to every component. More on this below.

### The `/public` folder — Static Files

**Static files** are files that don't change and are served exactly as they are — images, PDFs, icons. The browser can download them directly.

- **`MyPhoto.PNG`** — The profile photo shown in the Hero section
- **`Resume Mateo Falco.pdf`** — The CV in English
- **`CV Mateo Falco.pdf`** — The CV in Spanish

### `package.json` — The Ingredients List

This file lists every external tool the project uses and which version of each. It's like the ingredients list for a recipe. When someone new downloads the project, they run one command and `package.json` tells the computer exactly what to install.

---

## 5. How Does Each Component Work?

### Hero.tsx — The First Impression

The **Hero section** is the first thing visitors see when they land on the website. The term "hero" comes from graphic design — it means the big, bold, attention-grabbing section at the top of a page.

This component shows:
- A circular profile photo (loaded and optimized automatically by Next.js)
- Mateo's name in a very large font
- His role and location
- A short headline and description
- A "Contact me" button

The text in this section changes based on the language selected — English or Spanish.

### About.tsx — The Full Story

This component builds the entire About section. It contains:
- A centered text block with a large headline and paragraph
- Three cards side by side: Experience, Education, Languages
- One full-width card: Beyond the Screen

Each piece of text is stored in the language system and switches when the visitor changes the language toggle.

### Contact.tsx — How to Reach Me

This component shows a centered card with three things:

1. **Email address with a copy button** — When you click the copy icon next to the email, the browser copies the email address to your clipboard silently. The icon briefly turns into a checkmark to confirm it worked, then switches back after 2 seconds. This is done with a simple on/off switch in the code (`true` = show checkmark, `false` = show copy icon).

2. **GitHub and LinkedIn buttons** — Clicking these opens the respective profiles in a new browser tab.

3. **CV download button** — This opens the PDF file directly in the browser. Which PDF it opens depends on the selected language: English shows the English CV, Spanish shows the Spanish CV.

### Nav.tsx — The Navigation Bar

The **navbar** is the horizontal bar fixed at the top of the page. It stays visible as you scroll — you can always click a link to jump to a section.

This component does two things:

1. **Navigation links** — Home, About, Contact. Clicking each one smoothly scrolls the page to that section. The labels switch language when you toggle.

2. **Language toggle** — A small pill-shaped button on the right side of the navbar with "EN" and "ES" options. Clicking one sets the active language for the entire website. The active option has a dark background; the inactive one is transparent. This is powered by the Language Context (explained below).

The navbar also detects when you scroll down more than 32 pixels and adds a white frosted-glass background so it stays readable over any content.

### FadeIn.tsx — The Animation Helper

This is not a visible section — it's a tool that other components use to animate their content.

Here's how it works: imagine you're at a magic show. Before the magician reveals something, it's hidden. Then at the right moment — poof — it appears. `FadeIn` does the same thing. It wraps around any piece of content, hides it, and reveals it with a smooth fade + upward slide when the user scrolls to it.

Technically, it uses something called an **Intersection Observer** — a built-in browser tool that watches whether an element is visible on screen. When the element enters the viewport (the visible area of the browser), the observer fires and triggers the animation. Once it fires, it disconnects — so the animation only plays once, never again.

The `delay` option lets you stagger animations. For example, the first card appears immediately, the second card 100ms later, the third 200ms later — creating a cascade effect.

### LanguageContext.tsx — The Language System

A **context** in programming is shared information that any part of the application can access — without having to pass it manually from one component to the next.

Here's an analogy: imagine a radio station broadcasting the current song. Every radio in every room can tune in and hear the same song, without anyone carrying the information from room to room. The language context works the same way.

It stores one piece of information: the current language (`"en"` or `"es"`). It also stores all the translations — every text string for both languages. When you switch the language in the navbar, the context updates, and every component that uses it automatically re-renders with the new language.

---

## 6. How Is the Website Styled?

### What is CSS?

CSS stands for Cascading Style Sheets. It's the language that tells the browser how things should look. Without CSS, you'd have black text on a white background with no layout at all. CSS is what adds colors, fonts, spacing, borders, shadows, animations, and layout.

Think of HTML (the structure of a page) as the skeleton of a building. CSS is the paint, the furniture, the lighting, and the decoration.

### How does Tailwind CSS work?

Tailwind provides hundreds of small, pre-named style rules called **utility classes**. Instead of writing separate style files, you add these class names directly to your elements.

For example, instead of writing:
```css
.my-button {
  padding: 12px 24px;
  background-color: black;
  color: white;
  border-radius: 8px;
}
```

With Tailwind you just write: `className="py-3 px-6 bg-black text-white rounded-lg"` — right next to the button in the code.

This keeps styles right next to the content they affect, making it easy to see and change both at once.

### What is the color palette?

A **color palette** is the set of colors used throughout the design. Using a consistent set of colors makes the website look professional and coherent. This project uses:

| Purpose | Color | How it looks |
|---|---|---|
| Background | `#f8f9fa` | Very light gray, almost white |
| Main text | `#0f0f0f` | Near black |
| Accent / blue | `#1d4ed8` | Deep blue, used for highlights |
| Secondary text | `#64748b` | Medium gray |
| Cards | `#ffffff` | Pure white |
| Card borders | `#e2e8f0` | Very light gray border |

### What is responsive design?

**Responsive design** means the website looks good and works properly on any screen size — a large desktop monitor, a laptop, a tablet, or a small phone.

Without responsive design, a website built for a desktop would appear tiny and unreadable on a phone. With responsive design, the layout adapts: columns stack vertically, font sizes scale down, and images resize.

This project uses responsive font sizes (`clamp()`) that automatically scale between a minimum and maximum size based on the screen width.

---

## 7. How Do the Animations Work?

### What is an animation on a website?

An **animation** is any visual change that happens over time rather than instantly. A button that smoothly changes color when you hover over it — that's an animation. A section that fades in as you scroll down — that's an animation.

Animations make a website feel alive and polished. Done well, they guide the visitor's attention naturally.

### What is a scroll-triggered animation?

A **scroll-triggered animation** starts playing when you scroll the page down to a specific element. Instead of everything loading at once (which can feel overwhelming), elements appear one by one as you reach them.

### How does the browser know when you scroll to a section?

The browser has a built-in tool called the **Intersection Observer API**. Here's how to think about it:

Imagine you're reading a book and you have a bookmark that beeps when a specific page comes into view. The Intersection Observer is that bookmark. You attach it to any element on the page, and it watches. The moment that element enters the visible area of the browser window (the **viewport**), it fires a signal.

In this project, the `FadeIn` component attaches an Intersection Observer to itself. When the observer fires (element is now visible), the code:
1. Changes the element's opacity from 0 (invisible) to 1 (fully visible)
2. Moves it from 30 pixels below its normal position up to its normal position
3. Both changes happen with a smooth CSS transition over 0.6 seconds

After it fires once, the observer disconnects — it stops watching. This ensures the animation only plays once, not every time you scroll up and down past the element.

---

## 8. How Is It Published Online?

### What is hosting?

**Hosting** means paying for a server to store your website files and make them available to anyone on the internet 24/7. Without hosting, your website only exists on your personal computer and no one else can see it.

### What is Vercel?

**Vercel** is the company that hosts this website. They specialize in exactly this type of project — Next.js websites. Think of Vercel as a very smart landlord. They not only store your files, they also:

- Copy those files to servers all around the world (called a **CDN** — Content Delivery Network) so the website loads fast no matter where the visitor is
- Automatically rebuild and redeploy the website every time you push new code
- Provide a live URL where anyone can visit the site

### What is GitHub?

**GitHub** is a website where developers store their code. It's like Google Drive but specifically designed for code. It tracks every change you ever make — who changed what, when, and why. If you make a mistake, you can roll back to any earlier version.

GitHub also acts as the trigger for deployment. When you push new code to GitHub, Vercel sees it and automatically rebuilds the website.

### How does pushing code automatically update the website?

The workflow looks like this:

1. You make a change to a file on your computer
2. You run a few commands (explained below) to "push" that change to GitHub
3. GitHub stores the new version of the code
4. Vercel is watching GitHub. The moment it detects a new push, it automatically:
   - Downloads the latest code
   - Runs `npm run build` (which converts all the code into final website files)
   - Uploads those files to its servers around the world
5. Within about 30 seconds, the live website shows the updated content

You don't click anything on Vercel. It all happens automatically.

---

## 9. How to Make Changes

### Step 1 — Open the project

Open the project folder on your computer using a code editor. The most popular one is **VS Code** (Visual Studio Code), which is free.

### Step 2 — Start the local preview

Open the **Terminal** (a text-based interface for your computer) inside the project folder and run:

```bash
npm run dev
```

**What this does:** It starts a local version of the website on your own computer. No one else can see it — it's just for you to preview changes before publishing. Open your browser and go to `http://localhost:3000` to see it.

### Step 3 — Make your changes

Find the file that controls what you want to change:

| What you want to change | Which file to edit |
|---|---|
| Your name, headline, or description | `components/Hero.tsx` |
| About text, experience, education, languages | `components/About.tsx` |
| Email address, CV file | `components/Contact.tsx` |
| Navigation links | `components/Nav.tsx` |
| All translations (EN and ES text) | `contexts/LanguageContext.tsx` |
| Browser tab title or description | `app/layout.tsx` |
| Profile photo | Replace `public/MyPhoto.PNG` (keep the exact filename) |
| English CV | Replace `public/Resume Mateo Falco.pdf` |
| Spanish CV | Replace `public/CV Mateo Falco.pdf` |

Open the file, find the text you want to change, edit it, and save. The browser preview at `http://localhost:3000` updates automatically.

### Step 4 — Publish your changes

Once you're happy with the changes, run these three commands in the Terminal, one at a time:

```bash
git add .
```
**What this does:** Tells Git "I want to include all my changes in the next save."

```bash
git commit -m "describe what you changed here"
```
**What this does:** Creates a permanent snapshot of your changes with a label describing what you did. Replace the text in quotes with something descriptive, like `"updated about section"` or `"added new job experience"`.

```bash
git push origin main
```
**What this does:** Sends your saved snapshot to GitHub. This triggers Vercel to automatically rebuild and update the live website.

That's it. Within about 30 seconds, anyone visiting your website will see the updated version.

---

## 10. Glossary

A plain-English dictionary of every technical term used in this document.

| Term | What it means |
|---|---|
| **API** | A way for two programs to talk to each other and exchange information |
| **Browser** | The program you use to visit websites — Chrome, Safari, Firefox, Edge |
| **Build** | The process of converting code into the final files a browser can display |
| **CDN (Content Delivery Network)** | A network of servers around the world that store copies of your website so it loads fast from anywhere |
| **CLI** | Command-Line Interface — a way to control a computer by typing text commands |
| **Component** | A self-contained, reusable piece of a website (like a navigation bar or a card) |
| **Context** | A system that shares information across all parts of an application without passing it manually |
| **CSS** | The language that controls how a website looks — colors, fonts, spacing, layout |
| **Database** | An organized system for storing and retrieving data (like a very powerful spreadsheet) |
| **Deployment** | The process of publishing your website so it's live and accessible to everyone on the internet |
| **Framework** | A pre-built toolkit that handles common tasks so developers can focus on what's unique about their project |
| **Frontend** | Everything visible to the user on a website — text, images, buttons, layout |
| **Backend** | The hidden server-side code that processes data, talks to databases, handles business logic |
| **Git** | A tool that tracks every change made to code over time — like a detailed version history |
| **GitHub** | A website where developers store and share code using Git |
| **Hosting** | Paying for a server to store and serve your website to visitors 24/7 |
| **HTML** | The language that defines the structure and content of a web page |
| **Icon** | A small visual symbol used in design (envelope for email, magnifying glass for search, etc.) |
| **Intersection Observer** | A built-in browser tool that detects when an element enters or exits the visible area of the screen |
| **JavaScript** | The programming language that makes websites interactive |
| **Library** | A pre-written collection of code that solves a specific problem (like animations or icons) |
| **localhost** | A way to run a website on your own computer for testing — only you can see it |
| **Navbar** | Navigation bar — the horizontal bar at the top of a website with links |
| **Node.js** | A tool that lets JavaScript run outside of a browser (on servers or computers) |
| **npm** | A tool that downloads and manages libraries for a JavaScript project |
| **Package.json** | A file listing all the libraries a project uses and their versions |
| **PDF** | A file format for documents that looks the same on any device |
| **React** | A JavaScript library for building websites out of reusable components |
| **Repository** | A project folder tracked by Git — often stored on GitHub |
| **Responsive design** | Designing a website so it looks good on screens of any size (desktop, tablet, phone) |
| **Server** | A computer that stores files and sends them to anyone who requests them via the internet |
| **Static site** | A website made of fixed files — no server processing, no database, just files served as-is |
| **Terminal** | A text-based interface for controlling a computer by typing commands |
| **TypeScript** | JavaScript with extra rules that catch coding mistakes before they become problems |
| **URL** | A web address — like `www.example.com` — that locates a specific page on the internet |
| **Vercel** | A hosting platform specializing in Next.js websites with automatic deployment from GitHub |
| **Viewport** | The visible area of a browser window — the part of the page you can actually see at any moment |
