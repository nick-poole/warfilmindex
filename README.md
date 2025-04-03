# The War Film Index

A MERN-powered archive of war films, curated by conflict, context, and cinematic storytelling.

**An educational archive of war films curated by conflict, context, and cinematic storytelling.**

The War Film Index is a full-stack application that catalogs impactful portrayals of military history on screen.
It’s designed for educators, historians, and curious viewers who want to explore war not through textbooks—but through cinema.

---

## Tech Stack

- **Frontend:** React, TailwindCSS *(planned)*
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **External API:** [OMDb API](https://www.omdbapi.com/) for auto-seeding film metadata
- **Deployment:** Render (backend), Vercel or Netlify (frontend)

---

## Project Goals

- Build a private, curated database of war films and miniseries
- Classify entries by conflict (WWII, Vietnam, Cold War, etc.)
- Provide meaningful context: commentary, historical insights, and modern relevance
- Offer educators a clean, ad-free resource to support visual learning

---

## Features (Planned)

- Conflict-based filters and search
- Individual film detail pages with commentary and links to further reading
- Optional “Impact Today” section connecting historical lessons to modern issues
- Curator’s Picks and Featured Sections on the homepage
- Future timeline or map-based exploration

---

## Setup Instructions (Dev)

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/warfilmindex.git

# Backend setup
cd warfilmindex/backend
npm install
node server.js

# Frontend setup (when ready)
cd ../frontend
npm install
npm run dev

---
## Progress Log

**April 3, 2025**
- Created first Mongoose schema (`Movie`) to structure film metadata and custom commentary fields
- Wrote standalone script to fetch movie data from OMDb and insert into MongoDB Atlas
- Successfully inserted first film (`1917`) into the database, confirming full backend data flow


**04/02/2025**
- Set up MongoDB Atlas cluster with free-tier hosting
- Installed Mongoose and connected backend to cloud database
- Cleaned up deprecated connection options for modern MongoDB driver

- Installed Express and Axios
- Successfully fetched data from OMDb API using test script
- Initialized backend project structure
