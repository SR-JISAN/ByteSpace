# ByteSpace

A modern, responsive learning platform landing page built with **Next.js, TypeScript, Tailwind CSS, and shadcn/ui**.

ByteSpace is designed to provide a clean and engaging interface for discovering courses, exploring learning paths, connecting with creators, and discovering professional growth opportunities.

## Live Demo

**Live Website: https://byte-space-gamma.vercel.app

**Repository: https://github.com/SR-JISAN/ByteSpace

---

## Overview

ByteSpace is a frontend-focused web project developed as part of a practical frontend assessment.

The project focuses on:

* Pixel-conscious UI implementation
* Responsive design across screen sizes
* Reusable React components
* Clean component structure
* Modern Tailwind CSS styling
* Smooth and accessible user interactions
* Loading and 404 states
* Maintainable frontend architecture

The interface was implemented based on the provided ByteSpace design reference and adapted into a functional Next.js application.

---

## Features

### Navigation

* Responsive navigation bar
* Active navigation state
* Mobile-friendly layout
* Shopping bag interaction
* ByteSpace brand identity

### Hero Section

* Responsive hero layout
* Primary call-to-action
* Supporting content
* Visual assets and decorative elements

### Learning & Courses

* Featured courses
* Learning paths
* Course-related content sections
* Category-based content presentation

### Creator & Community Sections

* Creator-focused content
* Become a Creator section
* Brand and community presentation
* Professional growth content

### Additional Sections

* Product showcase
* Passion and potential sections
* Reviews
* Brand section
* Professional growth section
* Footer with navigation links

### User Experience

* Responsive layout
* Hover interactions
* Smooth transitions
* Mobile and desktop support
* Custom loading screen
* Custom 404 Not Found page

---

## Tech Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

### UI & Styling

* **shadcn/ui**
* **Lucide React**
* CSS animations
* Responsive utility classes

### Development Tools

* **pnpm**
* **ESLint / Biome**
* **Git**
* **GitHub**
* **Vercel**

---

## Project Structure

```text
ByteSpace/
├── public/
│   ├── brand1.png
│   ├── brand3.png
│   ├── brand4.png
│   ├── brand5.png
│   ├── demo.png
│   ├── heroin.png
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   └── components/
│       ├── shear_components/
│       │   ├── BrandSection.tsx
│       │   ├── Footer.tsx
│       │   ├── HeroBanner.tsx
│       │   ├── LearningPathSection.tsx
│       │   ├── Navbar.tsx
│       │   ├── PassionSection.tsx
│       │   ├── PotentialSection.tsx
│       │   ├── Product.tsx
│       │   ├── ProfessionalGrowthSection.tsx
│       │   └── ReviewSection.tsx
│       │
│       └── ui/
│           ├── aspect-ratio.tsx
│           ├── badge.tsx
│           └── card.tsx
│
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/SR-JISAN/ByteSpace.git
```

Navigate to the project:

```bash
cd ByteSpace
```

Install dependencies:

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

---

## Build for Production

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## Responsive Design

The application is designed to work across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens
* Large desktop displays

Responsive layouts are implemented primarily using Tailwind CSS breakpoints and flexible grid/flex layouts.

---

## Component Architecture

The project uses reusable React components to keep the application maintainable and organized.

Major sections are separated into individual components instead of keeping the entire landing page inside a single file.

For example:

```text
Navbar
HeroBanner
BrandSection
LearningPathSection
PassionSection
PotentialSection
Product
ProfessionalGrowthSection
ReviewSection
Footer
```

This makes individual sections easier to maintain, modify, and reuse.

---

## Loading & Error Handling

### Loading State

A custom `loading.tsx` is included to provide a branded loading experience while Next.js loads route content.

### 404 Page

A custom `not-found.tsx` provides a branded 404 experience for invalid routes.

---

## Deployment

The project is deployed using **Vercel**.

Every production deployment can be connected directly to the GitHub repository for streamlined deployment and updates.

**Live:** https://byte-space.vercel.app/

---

## Git Workflow

Development was organized using a separate feature branch before merging the completed implementation into `main`.

Example:

```text
landing_page
     │
     ▼
Development & Testing
     │
     ▼
main
     │
     ▼
GitHub
     │
     ▼
Vercel
```

This workflow keeps feature development separated from the main branch and makes changes easier to review.

---

## Future Improvements

Potential future improvements include:

* Course search and filtering
* Authentication
* Course details pages
* Creator profiles
* Shopping cart functionality
* Backend/API integration
* Database integration
* Payment integration
* User dashboard
* Course enrollment system

---

## Author

**Shajidur Rahman Jisan**

Full Stack Web Developer

* GitHub: https://github.com/SR-JISAN
* LinkedIn: https://linkedin.com/in/dev-md-jisan/
* Portfolio: https://portfolio-front-usdb.vercel.app/

---

## License

This project was created for educational and assessment purposes.
