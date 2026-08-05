# ARCHITECTURE.md

> **Engineering Architecture & Technical Blueprint for "The Build Log: An Engineer's Journal"**  
> *Strict Compliance with [DESIGN_BIBLE.md](file:///Users/tanveersingh/College_Work/Personal%20Projects/portfolio/DESIGN_BIBLE.md)*

---

## 1. Project Folder Structure

The project follows Next.js 15 (App Router) best practices with strict domain isolation and modular component composition.

```
portfolio/
├── app/                        # Next.js App Router (Routes & Layouts)
│   ├── favicon.ico
│   ├── globals.css             # Tailwind v4 directives & font imports
│   ├── layout.tsx              # Root HTML/Body wrapper with font providers
│   ├── page.tsx                # Main entry point (Journal Container Page)
│   └── api/                    # Optional API routes (e.g., contact form)
├── components/                 # React UI Components (Atomic Architecture)
│   ├── layout/                 # Macro layout (Desk workspace, main canvas)
│   │   ├── DeskWorkspace.tsx   # Fixed desk background container
│   │   ├── JournalContainer.tsx# Book spine & paper page viewport
│   │   └── HeaderNav.tsx       # Minimal desk branding header
│   ├── journal/                # Journal Chapters & Spreads
│   │   ├── JournalSpread.tsx   # Double-page spread container
│   │   ├── PageFlipEngine.tsx  # Physical paper flip wrapper
│   │   ├── chapters/           # Individual Journal Chapters
│   │   │   ├── CoverChapter.tsx
│   │   │   ├── AboutChapter.tsx
│   │   │   ├── JourneyChapter.tsx
│   │   │   ├── ProjectsChapter.tsx
│   │   │   ├── SkillsChapter.tsx
│   │   │   └── ContactChapter.tsx
│   │   └── elements/           # Journal-specific sub-components
│   │       ├── PaperTexture.tsx
│   │       ├── MarginAnnotation.tsx
│   │       ├── StickyNote.tsx
│   │       └── BinderClip.tsx
│   ├── cursor/                 # Mechanical Pencil Cursor Engine
│   │   ├── MechanicalPencilCursor.tsx
│   │   ├── GraphiteTrailCanvas.tsx
│   │   └── CursorInteractionHandler.tsx
│   ├── music/                  # Desk Audio Player
│   │   ├── DeskAudioPlayer.tsx # Vintage tape/desk audio button
│   │   └── AudioControls.tsx
│   └── ui/                     # Primitives & Base Craft Controls
│       ├── DeskChecklist.tsx   # Handwritten desk chapter checklist
│       ├── HandwrittenText.tsx # Annotation & script text component
│       ├── EditorialTitle.tsx  # High-precision editorial headline
│       ├── MechanicalButton.tsx# Tactile button primitive
│       └── PencilSketchIcon.tsx# SVG icon renderer with sketch paths
├── hooks/                      # Custom React Hooks
│   ├── useJournalNavigation.ts # Active chapter state & page turn trigger
│   ├── usePaperFlipPhysics.ts  # Motion & shadow physics for paper turning
│   ├── usePencilCursor.ts      # Cursor coordinates, angle & gesture state
│   ├── useAudioPlayer.ts       # Audio play/pause/volume state & WebAudio
│   ├── useLenisScroll.ts       # Smooth scroll & page wheel integration
│   └── usePrefersReducedMotion.ts # Motion accessibility listener
├── lib/                        # Infrastructure, Configs & Third-Party Core
│   ├── animations/             # Motion variants & GSAP timelines
│   │   ├── pageFlipVariants.ts # Paper fold/turn Framer Motion variants
│   │   ├── cursorVariants.ts   # Pencil rotation & micro-gesture physics
│   │   ├── checklistVariants.ts# Pencil SVG path draw variants
│   │   └── shadowTimelines.ts  # Dynamic depth shadow keyframes
│   ├── constants/              # Static journal data & configuration
│   │   ├── chapters.config.ts  # Chapter registry & metadata
│   │   ├── projects.data.ts    # Deep-dive engineering project spreads
│   │   ├── skills.data.ts      # Technical schematic diagram data
│   │   └── journey.data.ts     # Career timeline nodes
│   ├── lenis.ts                # Smooth scroll instance configuration
│   └── store/                  # Lightweight State Stores (Zustand)
│       ├── useJournalStore.ts  # Active chapter, turning state, progress
│       └── useAudioStore.ts    # Music track state, volume, ambient audio
├── styles/                     # CSS Tokens, Fonts & Animations
│   ├── fonts.ts                # Next.js font loaders (Editorial, Sans, Script)
│   ├── shadow-system.css       # Paper depth & dynamic shadow layers
│   └── typography.css          # Editorial column & margin utility classes
├── types/                      # TypeScript Declarations & Interfaces
│   ├── chapter.types.ts        # Chapter metadata & navigation types
│   ├── project.types.ts        # Architecture spread data structures
│   ├── cursor.types.ts         # Pencil interaction states & gestures
│   └── audio.types.ts          # Track & audio player state types
├── utils/                      # Helper Functions
│   ├── formatters.ts           # String & date helpers
│   ├── mathPhysics.ts          # Page drag & rotation math helpers
│   └── cn.ts                   # Tailwind class merge utility (clsx + twMerge)
├── assets/                     # Source Assets (Compiled/Bundled)
│   ├── textures/               # High-res paper grain, wood desk textures
│   ├── fonts/                  # Custom font files (if not using Google Fonts)
│   └── illustrations/          # Raw SVG hand-drawn engineering sketches
├── public/                     # Public Static Assets (Served at Root)
│   ├── audio/                  # Ambient focus tracks & paper SFX
│   └── icons/                  # Favicons & static manifest assets
├── DESIGN_BIBLE.md             # Core Design & Philosophy Bible
├── ARCHITECTURE.md             # This Engineering Blueprint
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts / postcss.config.mjs # Tailwind v4 config
├── package.json
└── tsconfig.json
```

---

## 2. Component Philosophy

### Atomic Composition & Layering
To ensure clean isolation and scalability, components follow a modified atomic pattern tailored for an interactive editorial experience:

1. **Primitives (`components/ui/`):** Pure, stateless building blocks (e.g., `EditorialTitle`, `HandwrittenText`, `MechanicalButton`). They take props, handle zero global state, and are 100% reusable.
2. **Desk & Journal Elements (`components/journal/elements/`):** Tactile decor and functional props (e.g., `PaperTexture`, `StickyNote`, `BinderClip`). They accept children or metadata and render tactile physical surfaces.
3. **Organisms / Chapters (`components/journal/chapters/`):** Fully isolated chapter spreads (e.g., `ProjectsChapter`, `SkillsChapter`). Each chapter manages its internal content layout without knowing how the overall book turns.
4. **Layout & Canvas Managers (`components/layout/`):** High-level containers (`DeskWorkspace`, `JournalContainer`) that coordinate positioning, desk background boundaries, and overall viewport scaling.

### Component Decision Matrix

| What MUST Be a Component | What MUST NOT Be a Component |
| :--- | :--- |
| Any visual element rendered more than once (e.g., sticky notes, margin callouts). | Raw SVG path strings (keep in `assets/illustrations` or `lib/constants`). |
| Complex stateful interactions (e.g., `PageFlipEngine`, `MechanicalPencilCursor`). | Monolithic page files (e.g., putting all chapter JSX inside `app/page.tsx`). |
| Discrete domain features (e.g., `DeskChecklist`, `DeskAudioPlayer`). | One-off inline inline CSS style calculators (move to `utils/mathPhysics.ts`). |

### Single Responsibility & Isolation Rules
- **No Monolithic Chapters:** Chapters like `ProjectsChapter` must compose smaller sub-components (`ProjectProblem`, `ArchitectureDiagram`, `EngineeringImpact`) rather than rendering 500 lines of inline JSX.
- **Visual Isolation:** A chapter component must never manipulate the desktop wrapper or cursor directly; it communicates exclusively through custom hooks (`useJournalNavigation`).

---

## 3. State Management Strategy

To maintain maximum performance and zero unnecessary re-renders, state is strictly scoped according to its volatility and lifecycle.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          State Architecture                            │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ State Scope       │ Technology        │ Use Case                       │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ Local Component   │ useState          │ Hover states, local form input │
│ Global UI         │ Zustand           │ Active chapter, checklist sync │
│ Animation Physics │ Motion / Ref      │ Pencil coordinates, flip angle │
│ Audio Engine      │ Zustand + WebAudio│ Track playback, volume, muted  │
│ Scroll & Wheel    │ Lenis + Custom    │ Wheel threshold, paper turn    │
└───────────────────┴───────────────────┴────────────────────────────────┘
```

### State Layer Specifications

1. **Local Component State (`useState` / `useReducer`):**
   - Used only for transient UI interactions scoped to a single component (e.g., whether a sticky note is expanded, or a button hover state).
2. **Global UI Store (`lib/store/useJournalStore.ts`):**
   - Built with **Zustand** due to its micro bundle size (~1kb) and zero-provider architecture.
   - Holds: `activeChapterIndex`, `isPageTurning`, `completedChapters: Set<number>`, `isBookOpen`.
   - Actions: `goToChapter(index)`, `setPageTurning(boolean)`, `markChapterComplete(index)`.
3. **Animation & Physics State (Ref-based / Motion Values):**
   - High-frequency values (cursor $X/Y$ coordinates, tilt angle, scroll velocity, shadow opacity) **must never trigger React state re-renders**.
   - Use Framer Motion's `useMotionValue` / `useSpring` or direct `useRef` handles mutated within `requestAnimationFrame`.
4. **Music & Audio Store (`lib/store/useAudioStore.ts`):**
   - Manages audio track list, current track index, play/pause status, volume slider value, and user audio consent.
5. **Scroll & Page Turn State (`hooks/useLenisScroll.ts`):**
   - Listens to Lenis smooth scroll delta and wheel events.
   - When a user scrolls past a chapter's end boundary, it triggers `useJournalStore.getState().nextChapter()` instead of standard vertical scrolling.

---

## 4. Animation Architecture

All animation logic is completely decoupled from UI markup and stored in `lib/animations/`.

```
  UI Component (JSX) ──► Imports ──► Motion Variants (`lib/animations/`)
           │
           └──► Triggers ──► Custom Motion Hook (`hooks/usePaperFlipPhysics.ts`)
```

### Animation Category Isolation

1. **Page Transitions (`lib/animations/pageFlipVariants.ts`):**
   - Built with Framer Motion 3D transforms (`rotateY`, `transformOrigin: "left center"`, `perspective: 1200px`).
   - Accompanied by dynamic shadow keyframe updates (`shadowTimelines.ts`) that adjust page depth lighting as the page turns from $0^\circ$ to $180^\circ$.
2. **Micro-Interactions (`lib/animations/checklistVariants.ts`):**
   - Pencil checkmark path drawing using Framer Motion `pathLength` (`initial: { pathLength: 0 }`, `animate: { pathLength: 1, transition: { duration: 0.4, ease: "easeOut" } }`).
3. **Cursor Micro-Gestures (`lib/animations/cursorVariants.ts`):**
   - Pencil tilt rotation on click ($0^\circ \rightarrow -12^\circ$).
   - Graphite dot placement scale spring animation upon clicking interactive targets.
4. **Journal Page Content Reveals:**
   - Soft opacity and subtle slide-up ($y: 12\text{px} \rightarrow 0\text{px}$) executed only after page turn physics stabilize.

---

## 5. Asset Management & Naming Standards

All assets are stored strictly in their designated directories with domain-prefixed, kebab-case file names.

### Storage Matrix

| Asset Type | Path | Allowed Formats | Example File Name |
| :--- | :--- | :--- | :--- |
| **Textures** | `assets/textures/` | `.webp`, `.png` (high-res tile) | `paper-grain-cream.webp`, `desk-wood-dark.webp` |
| **Fonts** | `styles/fonts.ts` / `assets/fonts/` | `.woff2` | `editorial-serif-bold.woff2` |
| **Sounds** | `public/audio/` | `.mp3` (compressed), `.ogg` | `paper-turn-01.mp3`, `pencil-check.mp3` |
| **Illustrations**| `assets/illustrations/` | `.svg` (clean vector paths) | `sketch-react-architecture.svg` |
| **Icons** | `components/ui/PencilSketchIcon.tsx` | `.svg` | `icon-binder-clip.svg` |

### Asset Naming Rules
- Format: `[domain]-[descriptor].[ext]`
- All lowercase, hyphen-separated (kebab-case).
- No spaces, underscores, or camelCase in asset filenames.

---

## 6. Styling Rules & Design Tokens

Tailwind CSS v4 is configured via CSS variables and theme extensions in `app/globals.css`. **Magic pixel values in inline styles or arbitrary Tailwind classes (e.g., `w-[373px]`) are strictly forbidden.**

### Color System Tokens

```css
@theme {
  /* Paper & Desk Base Palette */
  --color-paper-base: #F9F7F1;       /* Cream notebook paper */
  --color-paper-page-dark: #F1ECE1;  /* Underneath page shadow tone */
  --color-desk-wood: #1E1B18;        /* Deep natural wood workspace background */
  
  /* Ink & Graphite Palette */
  --color-ink-primary: #1A1918;      /* High contrast reading ink */
  --color-ink-secondary: #4A4744;    /* Subtitled editorial text */
  --color-graphite: #6B6661;         /* Pencil margin annotations */
  --color-graphite-light: #9C968F;   /* Unfinished sketch lines */

  /* Accent Callouts */
  --color-accent-amber: #D97706;     /* Sticky note accent */
  --color-accent-vermilion: #C2410C; /* Margin correction ink */
}
```

### Z-Index Elevation Architecture

To prevent z-index competition, all elements must use standard semantic z-index tokens:

```css
@theme {
  --z-desk-base: 0;         /* Fixed desk background surface */
  --z-journal-base: 10;     /* Book spine & page stack base */
  --z-journal-under-page: 20;/* Inactive left/right spread pages */
  --z-journal-flipping-page: 30;/* Active turning page layer */
  --z-margin-annotations: 40;/* Sticky notes & paper tabs on top of page */
  --z-desk-props: 50;       /* Diet Coke can, stationary checklist, tape player */
  --z-cursor: 9000;         /* Mechanical pencil cursor (highest layer) */
  --z-modal-overlay: 10000; /* Accessibility overlays & critical popups */
}
```

### Spacing & Grid System
- Journal spreads follow a fixed grid aspect ratio ($16:10$ desktop dual-page, $9:16$ mobile single-page).
- Padding inside journal pages uses standard mathematical step tokens: `var(--spacing-page-padding)` (default: `2.5rem` / `4rem`).

---

## 7. Naming Conventions

Strict adherence to naming rules ensures instant readability and searchability.

```
┌──────────────────┬──────────────────────┬────────────────────────────────────────┐
│ Element Type     │ Casing Standard      │ Example Pattern                        │
├──────────────────┼──────────────────────┼────────────────────────────────────────┤
│ React Components │ PascalCase           │ `JournalSpread.tsx`, `DeskChecklist.tsx`│
│ Custom Hooks     │ camelCase (use...)   │ `usePaperFlipPhysics.ts`               │
│ Utility Files    │ camelCase            │ `mathPhysics.ts`, `formatters.ts`      │
│ TypeScript Types │ PascalCase           │ `ProjectSpread.ts`, `TCursorState`     │
│ Store Files      │ camelCase (use...Store)│ `useJournalStore.ts`                 │
│ CSS Variables    │ kebab-case (--...)   │ `--color-paper-base`, `--z-cursor`     │
│ Asset Files      │ kebab-case           │ `paper-grain-cream.webp`               │
└──────────────────┴──────────────────────┴────────────────────────────────────────┘
```

---

## 8. Performance & Optimization Strategy

To guarantee a steady **60 FPS** and **Lighthouse score ≥ 95**, the architecture enforces four hard technical boundaries:

```
                  ┌─────────────────────────────────────┐
                  │ 60 FPS Performance Pipeline         │
                  └──────────────────┬──────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
  [ GPU Acceleration ]      [ Dynamic Code Splitting ]   [ Zero Layout Thrashing ]
  - translate3d(x,y,0)      - Lazy import chapters      - Measure DOM via ResizeObserver
  - opacity & transform     - WebAudio deferred load    - No client-side style calculations 
  - will-change scoping                                   inside scroll handlers
```

1. **Dynamic Code Splitting:**
   - Non-cover chapters (`ProjectsChapter`, `SkillsChapter`, `JourneyChapter`) are dynamically imported via `next/dynamic` with skeleton paper placeholders.
   - The WebAudio engine and audio files are lazy-loaded only when the user first interacts with the audio player.
2. **GPU-Accelerated Animations:**
   - Animations exclusively target `transform` (`translate3d`, `rotateY`, `scale`) and `opacity`.
   - `will-change: transform` is applied dynamically to turning pages *only during active turning*, and removed immediately upon animation completion to prevent GPU memory bloat.
3. **Asset & Texture Optimization:**
   - All paper grain textures are losslessly compressed `.webp` tiles capped at under $100\text{KB}$.
   - SVGs are pre-optimized via SVGO to strip redundant XML nodes.
4. **React Component Memoization:**
   - Heavy static background surfaces (`PaperTexture`, `DeskWorkspace`, complex SVG sketches) are wrapped in `React.memo()`.

---

## 9. Accessibility Strategy (a11y)

Physical tactile interfaces must be fully accessible to screen readers and keyboard users.

1. **Keyboard Navigation & Trapping:**
   - Readers can navigate chapters using `ArrowLeft` / `ArrowRight` or `PageUp` / `PageDown`.
   - `Tab` moves focus sequentially through the desk checklist, interactive margin annotations, project links, and audio controls.
   - Active focus states trigger a clear, high-contrast graphite pencil bracket outline.
2. **Reduced Motion (`prefers-reduced-motion`):**
   - Detected automatically via `usePrefersReducedMotion()`.
   - When enabled, physical 3D paper page flips are replaced with instant 150ms cross-fades.
3. **Screen Reader Semantics:**
   - The journal container uses `<main role="main">`.
   - Each chapter is wrapped in an `<article aria-label="Chapter [N]: [Name]">`.
   - Active chapter changes update a hidden `aria-live="polite"` region (e.g., `"Switched to Chapter 3: Projects"`).
   - Decorative objects (Diet Coke can, paper grain overlay) carry `aria-hidden="true"`.

---

## 10. Git Workflow & Governance

### Branch Strategy
- `main`: Production branch. Always deployable, strictly protected.
- `feature/[feature-name]`: Isolated feature work (e.g., `feature/paper-flip-physics`, `feature/projects-spread`).
- `fix/[bug-name]`: Targeted bug fixes (e.g., `fix/checklist-zindex-mobile`).

### Commit Message Standard (Conventional Commits)
- `feat: add mechanical pencil cursor gesture handlers`
- `fix: correct drop shadow skew during page flip transition`
- `docs: update ARCHITECTURE.md with state management rules`
- `perf: memoize paper texture component to reduce re-renders`

### Merge Policy
- All PRs require clean build verification (`pnpm build`) and linting (`pnpm lint`) with zero TypeScript errors before merging.
- Merges to `main` must use **Squash and Merge** to maintain a readable linear history.

---

## 11. Future Scalability Blueprint

The codebase is built so new content and chapters can be added seamlessly without touching core layout logic:

### Adding a New Chapter
1. Add the chapter entry to `lib/constants/chapters.config.ts`:
   ```typescript
   export const CHAPTERS_CONFIG = [
     // ... existing chapters
     {
       id: 'research',
       title: 'Research & Papers',
       component: lazy(() => import('@/components/journal/chapters/ResearchChapter')),
     }
   ] as const;
   ```
2. Create the isolated chapter file inside `components/journal/chapters/ResearchChapter.tsx`.
3. **Result:** The `DeskChecklist`, `PageFlipEngine`, and `JournalContainer` automatically pick up the new chapter, adjust total page counts, render the new checklist item, and wire page transitions with zero additional refactoring required.
