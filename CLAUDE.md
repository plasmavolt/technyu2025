# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tech@NYU marketing website built with Next.js 16 (App Router), React 19, and TypeScript. Features four programs: Dev Team, Tech Treks, Startup Week, and Mentorship.

## Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Directory Structure

- `/app` - Next.js App Router pages (home, programs/, team/)
- `/components/ui` - Reusable UI components (buttons, cards, modals, animations)
- `/components/sections` - Full-width page sections (hero, footer, program showcases)
- `/components/navigation` - Navbar components (desktop and mobile variants)
- `/lib` - Utilities, constants, and type definitions
- `/lib/sanity` - Sanity CMS client and queries (infrastructure for future CMS integration)
- `/public` - Static assets (fonts, images, videos)

### Key Files

- `lib/consts.ts` - Central data store for programs, team members, roles, and FAQs
- `lib/types.ts` - TypeScript interfaces (ProgramCardProps, TeamMember, EboardBio, etc.)
- `lib/application-links.json` - Application URLs and status per program/role
- `lib/utils.ts` - Utility functions including `cn()` for class merging

### Component Patterns

- Client components marked with `'use client'` for interactive features
- Server components as default for static content
- GSAP for timeline animations (hero), Framer Motion for component transitions
- Radix UI primitives for accessible dialogs, dropdowns, and accordions

### SVG Handling

SVGs are imported as React components via `@svgr/webpack`. Configured in `next.config.ts` for both webpack and turbopack.

```tsx
import Logo from '@/components/assets/logo.svg';
// Use as <Logo className="..." />
```

### Styling

- Tailwind CSS 4 with utility-first approach
- SCSS modules for scoped styles (e.g., `navbar/style.module.css`)
- Custom Satoshi font loaded from `/public/fonts/Satoshi`
- Dark theme only (no light mode toggle)

### Image Optimization

Remote images from `cdn.sanity.io` are allowed in `next.config.ts`. Use Next.js `<Image>` component for optimization.

## Path Aliases

`@/` maps to the project root, configured in tsconfig.json.
