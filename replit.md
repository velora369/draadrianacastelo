# Dra. Adriana Castelo C. de Moura - Landing Page

## Overview

This project is a professional landing page for Dr. Adriana Castelo C. de Moura, a medical oncologist. The website is a modern, responsive single-page application built with React, designed to showcase the doctor's expertise, specialties, and patient testimonials. Its purpose is to establish trust and credibility through a classic, humanized healthcare aesthetic, providing easy contact via WhatsApp integration. The platform aims to be a primary digital touchpoint for patients seeking specialized oncology care.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript
- **Vite** for build and development
- **Wouter** for client-side routing
- **TanStack Query** for server state management

**UI Component System:**
- **shadcn/ui** built on Radix UI
- **Tailwind CSS** for styling
- **Custom design tokens** and **CSS variables** for theming
- **Playfair Display** (serif) for headings, **Lato** (sans-serif) for body

**Design Philosophy:**
- Mobile-first responsive design
- Smooth transitions and microinteractions
- Intersection Observer API for scroll animations
- Component composition and separation of concerns
- Accessibility-focused (ARIA labels, semantic HTML)

**Color Palette:**
- Primary: Verde Musgo (HSL 158 39% 27%)
- Secondary: Azul Marinho (HSL 215 67% 18%)
- Accent: Rosa Seco (HSL 0 30% 62%)
- Neutral backgrounds

**Key Architectural Decisions:**
- Single-page application (SPA)
- Component-based structure
- Scroll-based section navigation
- Animation timing via Intersection Observer
- Form handling with React Hook Form and Zod validation

### Backend Architecture

**Server Framework:**
- **Express.js** with Node.js and TypeScript
- ESM format for modules

**Development vs Production:**
- Vite middleware for development (HMR)
- Express serves static assets in production
- Environment-based configuration

**Storage Layer:**
- In-memory storage (MemStorage class) with `IStorage` interface for future database integration.

**API Structure:**
- RESTful API routes (`/api`)
- Request/response logging and error handling middleware
- CORS and security considerations
- Currently uses mock data for testimonials and reviews.

### System Design Choices

- **Core Features**: Doctor's bio, specialties (thoracic, gynecological, gastrointestinal oncology, clinical research), patient testimonials, events section, and "Weekly Tips" (`Dicas da Semana`).
- **Interactive Elements**: Expandable specialty cards with detailed modals, event carousels with expandable modals, tab-based content for weekly tips, and WhatsApp integration for consultations.
- **Dynamic Content**: Tumor type examples dynamically adapted per specialty; featured "Weekly Tip" with a prominent post-it design and pulsing animation.
- **Accessibility**: Full keyboard navigation, proper focus management, ARIA labels, and screen reader support implemented across all interactive components.

## External Dependencies

### Database and ORM

- **Drizzle ORM** configured for PostgreSQL with **@neondatabase/serverless** client.
- Schema defined in `shared/schema.ts`, migrations managed by Drizzle Kit.
- Database infrastructure ready, though currently using in-memory storage.

### Third-Party Integrations

- **WhatsApp Integration**: Direct `wa.me` links with pre-filled messages.
- **Social Media**: Instagram profile links.
- **External Assets**: Custom logo (WordPress CDN), professional imagery, Google Fonts (Playfair Display, Lato).

### UI Component Libraries

- **Radix UI Primitives**: Accessible, unstyled UI components (Dialog, Dropdown, Accordion, etc.).
- **react-icons** & **lucide-react**: Icon sets.
- **embla-carousel-react**: Carousel functionality.
- **cmdk**: Command menu patterns.
- **class-variance-authority**: Component variant management.
- **date-fns**: Date manipulation.

### Session Management

- **Connect-pg-simple**: PostgreSQL session store for Express sessions.

### Development and Build Tools (Replit-Specific)

- `@replit/vite-plugin-runtime-error-modal`
- `@replit/vite-plugin-cartographer`
- `@replit/vite-plugin-dev-banner`