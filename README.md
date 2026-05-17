# 🎬 Movie Discovery Engine

A premium, highly responsive movie discovery platform built with modern frontend architecture. This project moves away from standard hard-coded timers to deliver an **event-driven user experience**, matching loading frames seamlessly with live cinematic data streaming from the TMDB API.

🔗 **Live Demo:** [https://ayushtriescode.github.io/Movie-Discovery/](https://ayushtriescode.github.io/Movie-Discovery/)

---

## ✨ Features

- 🏎️ **Dynamic Skeleton Screens:** Event-driven loading states synced directly to API data arrival, replacing primitive timers with an interactive shimmer UX.
- 📱 **Mobile-First Responsive Design:** Custom-tailored navigation architecture with smooth transitions and a collapsible search drawer built entirely with Tailwind CSS.
- 🔍 **URL-Based State Syncing:** Utilizes React Router hooks (`useParams`, `useSearchParams`, `useNavigate`) to lock search filters and layout parameters right into the browser's address bar for easily shareable links.
- ⚡ **Optimized Asset Fallbacks:** Hardened image layout featuring robust error handlers (`onError`) to ensure broken media items fail gracefully.
- 🛠️ **Dev-Safe Data Handling:** Implements localized layout management to minimize layout shift when transitioning from raw API paths to high-resolution asset strings.

---

## 🛠️ Technical Stack

- **Framework:** React 18 (Functional Components, Hooks)
- **Styling:** Tailwind CSS (Modern premium layout, glassmorphism overlays)
- **Routing:** React Router DOM v6
- **HTTP Client:** Axios (Modular instance design with pre-configured headers)
- **Data Source:** TMDB API (The Movie Database)

---

## ⚙️ Architecture & Logic Highlights

### Breaking the Parent-Child Re-Render Loop
To achieve a completely flicker-free experience when swapping between skeleton layouts and live data layers, the communication bridge uses a combination of stable function references (`useCallback`) and state guards (`useRef`) to keep components from re-triggering network fetches infinitely.

### Asset Pipeline Optimization
Leverages TMDB's structured backdrop and poster configurations to serving responsive image weights (`w500` vs `original`) depending on viewport sizing, ensuring rapid first-contentful-paint (FCP) across both desktop and mobile layouts.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/ayushtriescode/Movie-Discovery.git](https://github.com/ayushtriescode/Movie-Discovery.git)
cd Movie-Discovery