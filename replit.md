# Dra. Adriana Castelo C. de Moura - Landing Page

## Overview

This is a professional landing page for Dr. Adriana Castelo C. de Moura, a medical oncologist specializing in thoracic, gynecological, and gastrointestinal oncology. The website is designed with a classic, humanized healthcare aesthetic that emphasizes trust, credibility, and compassionate care. It features a modern, responsive single-page application built with React that showcases the doctor's expertise, specialties, and patient testimonials while providing easy contact through WhatsApp integration.

## Recent Changes

### November 04, 2025
- **Improved modal close button for better mobile experience**: Enhanced X button visibility and usability
  - Increased button size and touch area with added padding for easier mobile interaction
  - Added semi-transparent background with backdrop-blur for better contrast on all backgrounds
  - Responsive sizing: 5x5 (mobile) → 6x6 (desktop) with proper touch target
  - Circular button design with smooth hover effects and scale animation
  - Enhanced z-index (50) ensures button always stays visible above content
  - Improved positioning: right-3/top-3 (mobile) → right-4/top-4 (desktop)

- **Added expandable modal for event details**: Implemented click-to-expand functionality for event cards
  - Cards in carousel are now fully clickable to open detailed modal view
  - Modal displays larger event image (height 320px) with gradient overlay
  - Expanded description with better formatting and readability
  - Additional context section highlighting importance of continuing medical education
  - Close button (X) in top-right corner for easy dismissal
  - Modal can be closed by clicking outside or pressing ESC key
  - Full accessibility support with DialogDescription for screen readers

- **Transformed Events section into automatic carousel**: Implemented Embla Carousel with autoplay and manual navigation
  - Replaced static grid layout with horizontal carousel showing cards in a single row
  - Configured automatic rotation with 4-second delay and infinite loop
  - Added manual navigation buttons (← →) below the carousel for user control
  - Responsive card sizing: 100% (mobile) → 85% (sm) → 60% (md) → 45% (lg) → 35% (xl)
  - Autoplay continues even when users interact with navigation buttons
  - Smooth transitions and hover effects maintained from previous design
  - All 5 conference cards now rotate automatically for better engagement

- **Fixed scroll behavior in "Dicas da Semana" section**: Implemented scroll preservation when collapsing expanded tips
  - Added useRef hooks to capture card positions before collapse
  - Created handleCollapse function that maintains scroll position when clicking "Ler menos"
  - Prevents unwanted page jump to footer when collapsing content
  - Works seamlessly on both mobile and desktop for all tip categories

- **Expanded Events section to 5 conferences**: Added "Simpósio Nacional GBOT 2025" and reorganized layout
  - New event: Simpósio Nacional GBOT 2025 (Brazil) - multidisciplinary thoracic oncology symposium
  - Reorganized grid layout from 2 columns to responsive 3-column design
  - Layout progression: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
  - Desktop displays 3 events in first row, 2 in second row for balanced appearance
  - All 5 events maintain consistent styling and hover effects

- **Added "Dicas da Semana" feature**: New weekly tips section with dedicated page
  - **Landing page section**: WeeklyTipsSection component with introduction and clickable card that navigates to dedicated page
  - **Dedicated page** (`/dicas-da-semana`): Standalone page with tab-based content separation
  - **Tab system**: Toggle between "Para Pacientes" (patient-focused tips) and "Para Médicos" (medical professional content)
  - **Patient content**: 3 health tips including exercise after chemotherapy, nutrition during treatment, and skin care during radiotherapy
  - **Medical content**: 3 scientific articles covering melanoma immunotherapy, lung cancer biomarkers, and immunotherapy toxicity management
  - **Expandable cards**: Each tip/article has a "Ler mais" button to expand full content
  - **Smart navigation**: Header navigation automatically redirects to home page when clicked from other routes, then scrolls to intended section
  - **Navigation menu**: Added "Dicas" link to both desktop and mobile header navigation
  - Full accessibility with data-testids on all interactive elements

### October 27, 2025
- **Enhanced header logo visibility**: Increased logo size by 50% for better readability
  - Mobile: 120px (was 80px)
  - Tablet: 144px (was 96px)
  - Desktop: 168px (was 112px)

- **Added Events section**: New "Eventos" section showcasing international medical conferences
  - Four major conference cards with images and detailed descriptions
  - ASCO Annual Meeting - USA
  - IASLC World Conference on Lung Cancer - Spain 2025
  - ELCC European Lung Cancer Congress - 2025
  - Annual Meeting on Women's Cancer - Seattle, WA 2025
  - Responsive grid layout with hover effects and animations
  - Navigation menu updated to include "Eventos" link

- **Expanded tumor type examples across all specialties**: Extended the tumor types feature from Oncologia Ginecológica to all clinical specialties
  - **Oncologia Torácica** now includes 4 tumor examples:
    - Câncer de Pulmão de Não Pequenas Células (NSCLC)
    - Câncer de Pulmão de Pequenas Células (SCLC)
    - Mesotelioma Pleural
    - Timoma e Carcinoma Tímico
  - **Oncologia Gastrointestinal** now includes 4 tumor examples:
    - Câncer Colorretal
    - Câncer de Estômago (Gástrico)
    - Câncer de Pâncreas
    - Carcinoma Hepatocelular
  - **Dynamic section titles**: Tumor type section headers now adapt based on specialty (Torácicos, Ginecológicos, Gastrointestinais)
  - All tumor examples include name and medical description for patient education

### October 17, 2025
- **Implemented interactive modals for specialty cards**: Added Dialog-based modals with full accessibility support
  - Each specialty card (Torácica, Ginecológica, Gastrointestinal, Pesquisa Clínica) now opens an educational modal with detailed content
  - Modals include 2-3 paragraphs of educational content about each specialty
  - Oncologia Ginecológica modal features a dedicated subsection for tumor types with descriptions
  - Pesquisa Clínica modal includes link to hospital studies and two action buttons
  - WhatsApp integration in all modals (except Pesquisa Clínica which has two buttons)
  - Full keyboard accessibility: cards are focusable buttons, focus moves to modal title on open, returns to card on close
  - Proper focus management with visible focus rings and ESC/outside-click dismissal
  - Responsive design works seamlessly on mobile and desktop

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