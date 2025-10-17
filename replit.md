# Dra. Adriana Castelo C. de Moura - Landing Page

## Overview

This is a professional landing page for Dr. Adriana Castelo C. de Moura, a medical oncologist specializing in thoracic, gynecological, and gastrointestinal oncology. The website is designed with a classic, humanized healthcare aesthetic that emphasizes trust, credibility, and compassionate care. It features a modern, responsive single-page application built with React that showcases the doctor's expertise, specialties, and patient testimonials while providing easy contact through WhatsApp integration.

## Recent Changes

### October 17, 2025
- **Eliminated redundancy in specialties sections**: Consolidated "Áreas de Especialização" and "Áreas de Atuação" into a single "Especialidades" section
  - Removed duplicate specialty cards from AboutSection (previously showed 3 smaller cards)
  - Renamed "Áreas de Atuação" to "Especialidades" in SpecialtiesSection
  - Removed "Oncologia de Precisão" card from SpecialtiesSection per user request
  - Final result: Single comprehensive "Especialidades" section with 4 specialty cards (Torácica, Ginecológica, Gastrointestinal, Pesquisa Clínica)
  - AboutSection now focuses solely on biographical information

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System:**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design system
- **Custom design tokens** defined in CSS variables for consistent theming
- **Playfair Display** (serif) for headings and **Lato** (sans-serif) for body text

**Design Philosophy:**
- Mobile-first responsive design with breakpoints for tablet and desktop
- Smooth transitions and microinteractions for enhanced UX
- Intersection Observer API for scroll-triggered animations
- Component composition pattern with separation of concerns
- Accessibility-focused with ARIA labels and semantic HTML

**Color Palette:**
- Primary: Verde Musgo (moss green) - HSL 158 39% 27%
- Secondary: Azul Marinho (navy blue) - HSL 215 67% 18%
- Accent: Rosa Seco (dusty rose) - HSL 0 30% 62%
- Neutral backgrounds and borders for clean, professional appearance

**Key Architectural Decisions:**
- Single-page application (SPA) architecture for fluid navigation
- Component-based structure with reusable UI elements
- Scroll-based section navigation with smooth scrolling anchors
- Animation timing controlled through Intersection Observer for performance
- Form handling with React Hook Form and Zod validation (via @hookform/resolvers)

### Backend Architecture

**Server Framework:**
- **Express.js** running on Node.js for HTTP server
- **TypeScript** for type safety across the entire stack
- ESM (ES Modules) format for modern JavaScript module system

**Development vs Production:**
- Development mode uses Vite middleware for HMR and fast refresh
- Production build outputs static assets served by Express
- Environment-based configuration through NODE_ENV

**Storage Layer:**
- **In-memory storage** (MemStorage class) for basic user data
- Interface-based design (IStorage) allows easy swapping to database implementation
- UUID-based user identification using Node's crypto module

**API Structure:**
- RESTful API routes prefixed with `/api`
- Request/response logging middleware for debugging
- Error handling middleware for consistent error responses
- CORS and security considerations for production deployment

**Key Architectural Decisions:**
- Currently using mock data for testimonials and reviews (marked with TODO comments)
- Separation of storage interface from implementation for future database integration
- Middleware pattern for cross-cutting concerns (logging, error handling)
- Static file serving separated from API routes

### Build and Development Tools

**Build Process:**
- Client build: Vite bundles React app to `dist/public`
- Server build: esbuild bundles Express server to `dist/index.js`
- TypeScript compilation for type checking (`tsc --noEmit`)
- PostCSS with Tailwind CSS and Autoprefixer for style processing

**Development Experience:**
- Hot module replacement through Vite
- TypeScript path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Replit-specific plugins for error overlay and development banner
- Source maps for debugging

**Configuration:**
- Monorepo structure with shared types between client and server
- Centralized TypeScript configuration
- Tailwind configuration with custom theme extensions
- Component configuration through components.json (shadcn/ui)

## External Dependencies

### Database and ORM

**Drizzle ORM** is configured for PostgreSQL:
- Schema definitions in `shared/schema.ts` using drizzle-orm
- Database credentials via `DATABASE_URL` environment variable
- Migration files output to `./migrations` directory
- Drizzle Kit for schema migrations and database push operations
- **@neondatabase/serverless** as the PostgreSQL client (Neon Database)

**Current Database Schema:**
- Users table with id (UUID), username, and password fields
- Drizzle-Zod integration for runtime validation of insert operations

**Note:** The application is set up to use PostgreSQL through Drizzle ORM, but currently uses in-memory storage. The database infrastructure is ready for activation when needed.

### Third-Party Integrations

**WhatsApp Integration:**
- Direct WhatsApp links using `wa.me` API
- Pre-filled messages for consultation booking
- Contact number: Mock value `5561999999999` (marked for replacement)

**Social Media:**
- Instagram profile links
- Mock handle `draadrianaoncologista` (marked for replacement)

**External Assets:**
- Custom logo hosted on WordPress CDN
- Professional medical imagery hosted externally
- Google Fonts (Playfair Display and Lato) loaded from CDN

### UI Component Libraries

**Radix UI Primitives:**
- Complete suite of accessible, unstyled UI components
- Includes: Dialog, Dropdown, Accordion, Toast, Tooltip, and 20+ other primitives
- Keyboard navigation and ARIA attributes built-in

**Additional UI Dependencies:**
- **react-icons** for icon sets (Font Awesome, Lucide)
- **lucide-react** for modern iconography
- **embla-carousel-react** for carousel/slider functionality
- **cmdk** for command menu patterns
- **class-variance-authority** for component variant management
- **date-fns** for date formatting and manipulation

### Session Management

**Connect-pg-simple:**
- PostgreSQL session store for Express sessions
- Integrates with existing Drizzle/Neon database setup
- Enables persistent user sessions across server restarts

### Development and Build Tools

**Replit-Specific:**
- `@replit/vite-plugin-runtime-error-modal` for error overlay
- `@replit/vite-plugin-cartographer` for code navigation
- `@replit/vite-plugin-dev-banner` for development environment indicator

**Type Safety:**
- Drizzle-Zod for schema validation
- Zod for runtime type checking and form validation