# Aproxio — Institutional Group Web Platform

A high-performance full-stack web application for **Aproxio** Institutional Group.
- **Frontend Architecture**: Structured using the industry-standard **`OFL-WEBSITE`** pattern.
- **Design & UI**: 100% extracted from the **Google Stitch** project (`Aproxio Eternal Website Clone`).
- **Backend API**: Production-ready Express REST API with dedicated controllers, routes, validation, and JSON seed data.

---

## Project Structure

```text
Aproxio/
├── backend/                       # Express REST API Server
│   ├── src/
│   │   ├── controllers/           # Business logic
│   │   │   ├── businessesController.js
│   │   │   ├── careersController.js
│   │   │   ├── contactController.js
│   │   │   ├── impactController.js
│   │   │   └── investorsController.js
│   │   ├── routes/                # Express API routes
│   │   │   ├── businesses.routes.js
│   │   │   ├── careers.routes.js
│   │   │   ├── contact.routes.js
│   │   │   ├── impact.routes.js
│   │   │   └── investors.routes.js
│   │   ├── data/                  # Seed datasets
│   │   │   ├── businesses.json
│   │   │   ├── jobs.json
│   │   │   ├── reports.json
│   │   │   └── impact.json
│   │   └── server.js              # Server entry point (Port 5000)
│   ├── package.json
│   └── .env
│
├── frontend/                      # React Frontend (OFL-WEBSITE Pattern)
│   ├── public/
│   │   └── index.html             # Preloaded Hanken Grotesk & Material Symbols
│   ├── src/
│   │   ├── api/                   # API client & backend service modules
│   │   │   ├── client.js          # Axios client with fallback
│   │   │   ├── businesses.js
│   │   │   ├── careers.js
│   │   │   ├── contact.js
│   │   │   ├── impact.js
│   │   │   └── investors.js
│   │   ├── components/            # Reusable UI sections
│   │   │   ├── Businesses/        # Interactive group company carousel
│   │   │   ├── CareersSection/    # Filterable jobs & application modal
│   │   │   ├── ContactSection/    # Interactive inquiry form & office cards
│   │   │   ├── CultureSection/    # Institutional ethos & friction memo
│   │   │   ├── Footer/            # Dispatches & corporate footer
│   │   │   ├── FounderNote/       # Founder dispatch memo
│   │   │   ├── Hero/              # Hero statement with architectural grid
│   │   │   ├── ImpactSection/     # Climate & EV fleet statistics
│   │   │   ├── InvestorsSection/  # Financial indicators & filings
│   │   │   ├── MobileMenu/        # Responsive mobile drawer
│   │   │   ├── Navbar/            # Fixed navbar with active route indicators
│   │   │   └── Scrollbar/         # Floating scroll-to-top button
│   │   ├── images/
│   │   │   └── logo.svg           # Aproxio wordmark logo from Stitch
│   │   ├── main-component/        # Page views & routing
│   │   │   ├── App/               # Root App wrapper with ToastContainer
│   │   │   ├── router/            # React Router v6 <Routes> (AllRoute)
│   │   │   ├── HomePage/
│   │   │   ├── CulturePage/
│   │   │   ├── CareersPage/
│   │   │   ├── InvestorsPage/
│   │   │   ├── ImpactPage/
│   │   │   ├── ContactPage/
│   │   │   └── ErrorPage/
│   │   ├── css/
│   │   │   └── style.css          # Design DNA styling & imports
│   │   ├── index.css              # Tailwind CSS directives
│   │   └── index.jsx              # React DOM entry
│   ├── tailwind.config.js         # Stitch theme colors & typography
│   ├── vite.config.js
│   └── package.json
│
├── package.json                   # Root orchestrator scripts
└── README.md
```

---

## Getting Started

### 1. Install Dependencies

```bash
# From workspace root
npm run install:all
```

Or individually:
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Run the Backend API

```bash
npm run dev:backend
# API will start at http://localhost:5000
# Health check: http://localhost:5000/api/health
```

### 3. Run the Frontend (React App)

```bash
npm start
# Frontend will start at http://localhost:3000
```

---

## API Endpoints

- `GET /api/health` — API status check
- `GET /api/businesses` — Upcoming projects (Aproxio Fleet, Aproxio Core, CleanGrid, Horizon, Vault)
- `GET /api/careers/jobs?department=engineering` — Filterable job listings
- `POST /api/careers/apply` — Candidate application submission
- `GET /api/investors/reports?category=letters` — Quarterly shareholder filings
- `POST /api/contact` — Official contact form submission
- `POST /api/contact/subscribe` — Quarterly dispatches subscription
