# Veluxe Interiors - Comprehensive Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by Livspace's luxury interior design aesthetic, emphasizing sophisticated presentation, premium user experience, and high-end visual storytelling.

## Core Design Principles
1. **Luxury Through Restraint**: Generous whitespace and breathing room elevate content
2. **Premium Visual Hierarchy**: Gold accents strategically highlight key elements
3. **Sophisticated Elegance**: Refined typography and subtle animations create refined experience
4. **Trust & Credibility**: Professional presentation with portfolio-first approach

## Typography System

**Headings**: Playfair Display (Elegant Serif)
- H1: 48px/56px (Desktop), 32px/40px (Mobile) - Hero headlines
- H2: 40px/48px (Desktop), 28px/36px (Mobile) - Section titles
- H3: 32px/40px (Desktop), 24px/32px (Mobile) - Subsection titles
- H4: 24px/32px - Card titles, feature headers

**Body Text**: Montserrat (Clean Sans-Serif)
- Large: 18px/28px - Introductory paragraphs, important descriptions
- Regular: 16px/24px - Standard body text
- Small: 14px/20px - Captions, labels, metadata

**Accent Text**: Lora (Serif) - For testimonial quotes and featured content

**Font Weights**: Light (300), Regular (400), Medium (500), Semi-Bold (600), Bold (700)

## Color Palette

**Primary Colors**:
- Pure White: #FFFFFF - Main backgrounds, cards
- Charcoal: #2C2C2C - Primary text, headings

**Luxury Accents**:
- Luxury Gold: #D4AF37 - Primary accent, borders, CTAs
- Bright Gold: #FFD700 - Hover states, highlights, icons

**Subtle Backgrounds**:
- Ghost White: #F8F8FF - Alternating sections
- Light Grey: #F5F5F5 - Input backgrounds, subtle dividers

**Usage Guidelines**:
- White/Ghost White backgrounds alternate for visual rhythm
- Gold accents appear on borders, underlines, icons, and CTA buttons
- Charcoal text on light backgrounds ensures readability
- Gold hover effects on interactive elements

## Layout System

**Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-8 to p-12
- Section padding: py-16 to py-32 (Desktop), py-12 to py-20 (Mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-12

**Container Widths**:
- Full sections: max-w-7xl (1280px)
- Content sections: max-w-6xl (1152px)
- Text content: max-w-4xl (896px)

**Grid Patterns**:
- 3-column for service cards, portfolio items (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- 2-column for testimonials, process steps (lg:grid-cols-2)
- 4-column for stats, quick features (lg:grid-cols-4, md:grid-cols-2)

## Component Library

**Navigation**:
- Fixed header with semi-transparent white background (backdrop-blur)
- Gold underline on active/hover menu items
- Mobile hamburger menu with smooth slide-in drawer
- Luxury logo with Playfair Display typography

**Hero Sections**:
- Large hero image with overlay gradient for text legibility
- Centered content with generous vertical padding (min-h-[600px])
- Primary CTA with gold background and white text
- Secondary CTA with gold border and transparent background with blur
- Subtle parallax or fade-in animation on load

**Cards**:
- White background with subtle shadow (shadow-lg)
- Gold accent border on top or left side (4px width)
- Hover effect: slight elevation increase, gold border glow
- Image thumbnails with aspect-ratio-[4/3] or aspect-ratio-square
- Padding: p-8

**Forms**:
- Light grey input backgrounds (#F5F5F5)
- Gold focus borders (2px)
- Rounded corners (rounded-lg)
- Clear labels above inputs (Montserrat Medium, 14px)
- Gold submit buttons with hover darkening effect
- Validation messages in red (#DC2626) with icons

**Buttons**:
- Primary: Gold background (#D4AF37), white text, rounded-full
- Secondary: Gold border, transparent background with blur, gold text
- Padding: px-8 py-4 for large, px-6 py-3 for medium
- Hover: Darken gold 10%, slight scale (scale-105)
- Icons paired with text where appropriate

**Gallery/Portfolio**:
- Masonry or grid layout with consistent gaps
- Overlay on hover revealing project details
- Modal lightbox for full-screen viewing
- Filter tabs with gold active indicator
- Lazy loading for performance

**Testimonials**:
- Card-based carousel with navigation dots (gold when active)
- Client photo (circular, 80px diameter)
- Quote in Lora font, larger size (20px)
- Client name and location in smaller Montserrat
- 5-star gold rating display

**WhatsApp Integration**:
- Fixed floating button (bottom-right, gold background)
- WhatsApp icon with subtle pulse animation
- Click-to-chat with pre-filled message

**FAQ Accordion**:
- Expandable sections with smooth transitions
- Gold + icon that rotates to × when open
- Dividers between items
- Padding for comfortable reading

## Animations

**Minimalist Approach** - Use sparingly for luxury feel:
- Fade-in on scroll for sections (intersection observer)
- Smooth transitions on hover (0.3s ease)
- Gentle parallax on hero images
- Subtle scale on card hover (scale-105)
- Smooth accordion expand/collapse

**Avoid**: Aggressive animations, auto-playing carousels, distracting movements

## Images

**Required Images**:
1. **Hero Image (Home)**: Luxurious living space with modern interior, warm lighting - Full-width, height 600-700px
2. **Service Page Heroes**: High-quality images for Modular Kitchen, Wardrobes, Living Room, Bedroom - Each 500-600px height
3. **Portfolio Gallery**: 12-20 project images showing completed work across different room types
4. **About Page**: Team/office photo showing professionalism
5. **Process Icons**: Custom or premium icon set for design process steps
6. **Testimonial Photos**: Client headshots (can use professional stock photos)

**Image Treatment**:
- Aspect ratios: 16:9 for heroes, 4:3 for portfolio, 1:1 for testimonials
- Subtle overlays on hero images for text legibility
- Gold frame/border accent on featured images

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-4 column grids, full navigation)

**Mobile Optimizations**:
- Larger touch targets (min 44px)
- Simplified navigation with drawer menu
- Stacked forms with full-width inputs
- Reduced padding on sections (py-12 instead of py-24)
- Gallery switches to single column with vertical scroll

This design system creates a cohesive, luxury-focused experience that positions Veluxe Interiors as a premium interior design brand while maintaining excellent usability and conversion optimization.