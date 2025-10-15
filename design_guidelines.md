# Design Guidelines: Dra. Adriana Castelo C. de Moura - Landing Page

## Design Approach
**Reference-Based Approach**: Medical/Healthcare aesthetic inspired by premium healthcare providers like Mayo Clinic and Cleveland Clinic, combined with the refined elegance of professional service sites. The design balances medical professionalism with warm, humanized care.

## Core Design Principles
- **Classic & Professional**: Timeless medical aesthetic with refined elegance
- **Humanized Care**: Warm, welcoming atmosphere that prioritizes patient comfort
- **Trust & Credibility**: Clean layouts emphasizing expertise and compassion
- **Spiritual Sensitivity**: Thoughtful integration of faith elements without being overt

## Color Palette

### Primary Colors
- **Verde Musgo (Primary)**: 158 39% 27% - Main brand color for CTAs and key elements
- **Azul Marinho (Secondary)**: 215 67% 18% - Headers, text emphasis, professional authority
- **Rosa Seco (Accent)**: 0 30% 62% - Subtle feminine touches, hover states, gentle highlights

### Neutral & Background
- **Background Base**: 60 20% 98% - Main page background, soft and clean
- **Surface (Cards)**: 0 0% 100% - Card backgrounds, pure white
- **Neutral Borders**: 120 11% 91% - Subtle borders and dividers
- **Text Secondary**: 158 10% 26% - Secondary text, supporting content

### Feedback
- **Success/Confirmation**: 158 39% 35% - Derived from primary, form confirmations

## Typography

### Font Families
- **Display/Headings**: Playfair Display (serif, elegant, authoritative)
- **Body Text**: Lato or Montserrat (clean, highly legible, professional)

### Type Scale
- **H1 (Hero Title)**: text-5xl md:text-6xl, font-display, font-bold
- **H2 (Section Titles)**: text-3xl md:text-4xl, font-display, font-semibold
- **H3 (Card Titles)**: text-xl md:text-2xl, font-display, font-semibold
- **Body Large**: text-lg, font-body, leading-relaxed
- **Body Regular**: text-base, font-body, leading-relaxed
- **Body Small**: text-sm, font-body

## Layout System

### Spacing Primitives
Primary spacing units: **4, 6, 8, 12, 16, 20, 24** (Tailwind scale)
- Sections: py-16 md:py-24 (generous vertical rhythm)
- Cards: p-6 md:p-8 (comfortable internal spacing)
- Elements: gap-4, gap-6, gap-8 (consistent relationships)

### Container Strategy
- **Full Width Sections**: w-full with max-w-7xl mx-auto px-4 md:px-6
- **Content Sections**: max-w-6xl mx-auto
- **Text Content**: max-w-4xl mx-auto for readability

### Grid Patterns
- **Specialty Cards**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
- **Testimonials**: grid-cols-1 md:grid-cols-3 gap-6
- **Google Reviews**: grid-cols-1 md:grid-cols-3 gap-4

## Component Library

### Navigation
- Fixed header with soft shadow on scroll
- Logo text left-aligned, navigation center, CTA button right
- Smooth anchor scroll navigation
- Mobile: hamburger menu with slide-in drawer

### Buttons
- **Primary CTA**: Verde musgo background, white text, rounded-lg, px-8 py-3
- **WhatsApp CTAs**: Include WhatsApp icon, same styling as primary
- **Outline variant on images**: Blurred background (backdrop-blur-sm), white border, white text

### Cards
- **Specialty Cards**: White background, subtle shadow, icon top, centered text, hover lift effect
- **Testimonial Cards**: Light background, quote marks, patient name/source bottom
- **Google Review Cards**: Google branding, 5-star display, reviewer name/date, mimics actual Google styling

### Icons & Visual Elements
- **Specialty Icons**: Use medical/healthcare icon set (Heroicons Medical or Font Awesome)
- **Cross/Spiritual Symbol**: Subtle, integrated in humanized section background
- **WhatsApp Icon**: Brand-accurate green icon with CTAs
- **Google Icon**: Official multicolor logo in review cards

### Forms
- Input fields: border-2 border-neutral-100, rounded-md, focus:border-primary
- Textarea: min-height for message field
- Labels: text-sm font-medium above inputs
- Submit: Primary button styling with loading state

## Section-Specific Design

### Hero Section
- **Height**: min-h-[600px] md:min-h-[700px] - impactful but not forced viewport
- **Image**: Professional medical environment or caring doctor-patient interaction, subtle overlay
- **Layout**: Centered content with title, subtitle, CTA button
- **CTA Prominence**: Large WhatsApp button with icon

### About Section (Quem Sou)
- Two-column layout (lg): Text left, visual seals/badges right
- Specialty badges horizontal on mobile, grid on desktop
- Emphasis on credentials and hospitals

### Humanized Section (Fé e Propósito)
- Soft background texture or subtle gradient
- Centered content with max-width prose
- Delicate cross or light symbol watermark
- Gentle rosa seco accents

### Testimonials & Reviews
- Star ratings: Gold/yellow stars (standard testimonial pattern)
- Google Reviews: Exact Google styling - gray background cards, official logo, verified checkmark feel
- Mix of card shadows for depth

### Contact Section
- Split layout: Form left, contact info/WhatsApp right
- Prominente WhatsApp button above form
- Office hours clearly displayed
- Social icons (WhatsApp, Instagram) with hover states

### Footer
- Three-column layout on desktop: Branding | Info | Social
- Centered on mobile
- Subtle top border
- Copyright centered at bottom

## Images

### Hero Image
Large, professional hero image showing either:
- Confident female doctor in medical setting (hospital/clinic background)
- Warm doctor-patient consultation moment
- Modern, clean medical environment with natural light
Style: Professional photography, slight warmth in color grading, never stock-looking

### About Section
- Portrait of Dra. Adriana (professional headshot) OR
- Hospital/clinic environment showing credibility

### Humanized Section
- Soft, abstract imagery: hands in prayer, light rays, peaceful scene
- OR textured background only with subtle spiritual symbolism

### Testimonial Cards
- Small circular avatars (illustrated or stock portraits)
- Alternatively: quote-only cards without images

## Accessibility & Polish
- Minimum contrast ratio 4.5:1 for all text
- Focus states visible on all interactive elements
- Smooth scroll behavior for anchor navigation
- Loading states for WhatsApp CTAs
- Responsive images with appropriate sizing
- Touch-friendly tap targets (min 44x44px)

## Animation Strategy
**Minimal & Purposeful**:
- Fade-in on scroll for section entrances (subtle, once)
- Hover lift on cards (transform: translateY(-4px))
- Button hover states (slight scale or color shift)
- NO complex scroll-driven animations
- NO excessive motion - maintain professional medical tone