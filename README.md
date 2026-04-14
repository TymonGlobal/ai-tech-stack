# Tymon Global AI Tech Stack

A comprehensive, interactive AI/ML learning roadmap built as a single-page application. Designed to guide learners from foundations to specialization across three distinct career tracks.

## Overview

The AI Tech Stack provides a structured curriculum covering the full landscape of modern AI/ML — from mathematical foundations to production infrastructure. Content is organized into **3 career tracks** across **4 progressive phases**.

### Career Tracks

- **AI/ML Research & Model Development** — Research, design, and train AI/ML models from mathematical foundations through production-scale systems
- **Applied AI Engineering** — Design and build production AI applications, from intelligent APIs to multi-agent systems
- **AI Systems & Infrastructure** — Deploy, scale, and operate AI systems reliably in production environments

### Learning Phases

| Phase | Focus | Timeline |
|-------|-------|----------|
| Phase 1 | Foundations | 0–3 months |
| Phase 2 | Core Skills | 3–6 months |
| Phase 3 | Applied Practice | 6–12 months |
| Phase 4 | Specialization | 12+ months |

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool and dev server
- **ESLint** — Code quality

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── index.html          # Entry point
├── roadmap.jsx         # Main roadmap component with all curriculum data
├── src/
│   ├── main.jsx        # React root
│   └── App.jsx         # App shell
├── public/
│   ├── ai-tech-stack-wheel.svg   # Concentric circle infographic
│   └── tymonglobal.png           # Logo
└── vite.config.js      # Vite configuration
```

## Infographic

The project includes a high-resolution SVG infographic (`public/ai-tech-stack-wheel.svg`) visualizing all three tracks and four phases in a concentric circle layout.

## License

Proprietary — Copyright (c) 2026 Tymon Global. All rights reserved. See [LICENSE](LICENSE) for details.
