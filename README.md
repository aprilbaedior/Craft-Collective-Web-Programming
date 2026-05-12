# Craft Collective

A multi-page frontend web application centered around arts, crafts, and mindfulness. Built as a collaborative web programming course project (Spring 2025), Craft Collective serves as a community hub for beginner-friendly craft tutorials, local events, a mindfulness blog, and a curated tools storefront.

---

## My Contributions

This was a team project. My responsibilities covered JavaScript development and project coordination.

**JavaScript Development**
- Built all client-side interactivity across the application including:
  - **Contact form validation** — `validateForm()` with required field checks, format validation, and error handling
  - **Character counter** — live `updateCharCount()` on the feedback textarea
  - **Blog like system** — `likePost()` per-post like tracking with live count updates
  - **Comment system** — `addComment()` dynamically renders user comments per post
  - **Share panel** — `openShareOptions()` / `closeShareOptions()` with social platform link generation (Facebook, Twitter, WhatsApp, LinkedIn, Reddit) and email share via `sendEmail()`
  - **FAQ search** — real-time keyword filtering across all FAQ entries
  - **Events rendering** — dynamic population of event table rows by category from a data source
  - **Scroll-to-top button** — visibility toggle and smooth scroll behavior

**Project Management**
- Coordinated task distribution and feature scope across the team
- Managed page ownership and delivery timeline across milestones

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page and site navigation |
| Blog | `craftingblog.html` | Mindfulness & crafting blog with expandable posts, likes, comments, and sharing |
| Events | `events.html` | Local Jacksonville arts and wellness events organized by category |
| FAQ | `faq.html` | Searchable frequently asked questions |
| Storefront | `storefront.html` | Beginner craft tutorials with embedded YouTube videos and Amazon product cards |
| Contact | `contactus.html` | Contact form with validation, smiley rating system, and newsletter signup |

---

## Features

**Blog**
- Expandable post cards using `<details>` / `<summary>` — first post open by default
- Per-post like button with live count
- Inline comment threads with nested replies
- Share panel with social media links and email-to-friend input
- Print button per post
- Linked mini events section with upcoming mindfulness events

**Contact Form**
- Client-side validation via JavaScript
- Live character counter on feedback textarea
- Smiley face emoji rating system (radio inputs, animated on select)
- Category dropdown, date picker, newsletter checkbox
- Submit and reset actions

**Events Calendar**
- Events organized into four categories: Hands-On Art Classes, Kids Events, Mindfulness & Wellness, Festivals & Markets
- Click-to-expand event detail panel with date, time, cost, location, and directions link
- Data-driven rendering via JavaScript — events loaded from JS data object

**FAQ**
- Real-time search filtering — hides non-matching questions as user types
- Expandable `<details>` accordion layout

**Storefront**
- Beginner-friendly craft sections: Crochet, Knitting, Origami, Watercolor
- Embedded YouTube tutorial videos per section
- Product cards with images and Amazon links

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (per-page stylesheets) |
| Interactivity | Vanilla JavaScript (ES6) |
| Media | Embedded YouTube iframes |
| External Links | Amazon product pages |

---

## Project Structure

```
craft-collective/
├── index.html
├── craftingblog.html
├── contactus.html
├── events.html
├── faq.html
├── storefront.html
├── css/
│   ├── styles.css
│   ├── blogstyle.css
│   └── events.css
├── js/
│   ├── contact.js
│   ├── blog.js
│   ├── events.js
│   └── faq.js
└── images/
    └── icons/
```

---

## Running Locally

No build tools or dependencies required — pure HTML/CSS/JS.

```bash
git clone https://github.com/yourusername/craft-collective.git
cd craft-collective
```

Open `index.html` in your browser, or use VS Code's Live Server extension for hot reload during development.
