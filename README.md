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

# Frontend setup
cd ../frontend
npm install
npm run dev

---
## Progress Log

**April 7, 2025**
#Initial frontend shell with Mantine and AppShell
#chore: initialize frontend with Vite and React

**April 4, 2025 **
# Adds imdbID to schema and implement batch seeder with curated metadata
- [x] Added `imdbID` field to schema for deduplication
- [x] Built scalable batch seeding script with curated metadata
- [x] Seeded: The Hurt Locker, The Thin Red Line, Devotion

# Seeds first full entry into War Film Index using final schema (1917)
- [x] Connected MongoDB Atlas via Mongoose
- [x] Finalized and implemented film schema (`IndexEntry`)
- [x] Created `seedIndex.js` script for automated OMDb film import
- [x] Seeded first full entry into index: *1917 (2019)*

**04/03/2025**
# feat: connected /film route to serve indexed war films via MongoDB
- [x] Swapped from generic `Movie` model to custom `IndexEntry` schema
- [x] Created `/film` route to serve curated entries from MongoDB
- [x] Configured `server.js` to handle new route
- [x] Seeded database with custom tags and commentary using `seedIndex.js`
- [x] Connected MongoDB Compass for visual inspection and editing

# Added fetchAndSaveMovie script to pull OMDb data and insert into MongoDB
- [x] Created first Mongoose schema (`Movie`) to structure film metadata and custom commentary fields
- [x] Wrote standalone script to fetch movie data from OMDb and insert into MongoDB Atlas
- [x] Successfully inserted first film (`1917`) into the database, confirming full backend data flow


**04/02/2025**
- [x] Set up MongoDB Atlas cluster
- [x] Installed Mongoose and connected backend to cloud database
- [x] Cleaned up deprecated connection options for modern MongoDB driver
# Setup project org and install Express/Axios
- [x] Installed Express and Axios
- [x] Successfully fetched data from OMDb API using test script
- [x] Initialized backend project structure
