# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Nursing Evolution 3000** is a Spanish-language nursing documentation tool that helps nurses generate clinical notes by selecting predefined options. The app generates templated text that can be enhanced using Google's Gemini AI for grammatical polishing.

This is a monorepo setup using Turborepo and pnpm, despite having a simple single-app structure currently.

## Development Commands

### Running the Application
```bash
pnpm install          # Install dependencies
npm run dev           # Start development server on port 3000
```

### Build and Test
```bash
npm run build         # TypeScript compilation + Vite build
npm run test          # Run all tests once
npm run test:watch    # Run tests in watch mode
```

### Environment Setup
- Copy `.env.local` and set `GEMINI_API_KEY` to your Google Gemini API key
- The Vite config exposes this as `process.env.API_KEY` in the application

## Architecture Overview

### Monorepo Structure
The project uses a flat monorepo with Turborepo orchestration:

```
/
├── apps/web/          # Main React application
│   ├── App.tsx        # Main UI component with template selector, form, and live preview
│   └── store.ts       # Zustand state management
├── packages/
│   ├── core/          # Business logic layer (framework-agnostic)
│   │   ├── types.ts   # Core data structures: Template, Section, Option
│   │   └── engine.ts  # TextEngine class for deterministic text compilation
│   ├── config/        # Data layer
│   │   └── templates.ts  # NURSING_TEMPLATES array with all clinical templates
│   └── ui/            # Reusable React components
│       └── components.tsx  # Chip, Button, Card, SectionHeader
```

### Data Flow Architecture

1. **Template Selection**: User selects a template (e.g., "Valoración de Turno")
2. **Option Selection**: User clicks chips to toggle options within sections
3. **Reactive Compilation**: Store calls `TextEngine.compile()` on every change
4. **Live Preview**: Generated text updates immediately in the preview panel
5. **AI Enhancement** (optional): User clicks "IA Mejorar" to polish text with Gemini

### Key Design Principles

**Separation of Concerns**:
- `packages/core` contains zero UI dependencies - purely business logic
- `TextEngine.compile()` is deterministic: same inputs always produce same output
- AI enhancement is a separate, optional post-processing step

**State Management**:
- Zustand store in `apps/web/store.ts` manages:
  - `activeTemplate`: Currently selected template
  - `selections`: `Record<sectionId, optionId[]>` - what user has selected
  - `generatedText`: Current output text (either compiled or AI-polished)
- Text compilation happens automatically via `toggleOption` action

**Template System**:
- Each `Template` has multiple `Section`s
- Each `Section` has a `type` ('single' | 'multi') controlling selection behavior
- Each `Option` has a `label` (UI text) and `value` (output text)
- Templates are defined in `packages/config/templates.ts` and written in Spanish

### Import Patterns

The codebase uses relative imports due to the flat structure:
- From `apps/web/App.tsx`: `../../packages/config/templates`
- From `apps/web/store.ts`: `../../packages/core/types`
- TypeScript path alias `@/*` maps to project root

## Technology Stack

- **Framework**: React 18 (with TypeScript)
- **Build Tool**: Vite 5
- **State Management**: Zustand
- **Styling**: Tailwind CSS (imported in components)
- **AI Integration**: Google Gemini 2.5 Flash via `@google/genai`
- **Monorepo**: Turborepo + pnpm workspaces
- **Testing**: Vitest

## AI Integration Details

The AI "polish" feature (`handlePolish` in App.tsx:21):
- Takes the generated text and sends it to Gemini with a Spanish medical writing prompt
- Prompt instructs AI to rewrite for fluency, professionalism, and conciseness
- Does NOT allow AI to invent information - only grammatical improvement
- Updates `generatedText` in store with polished version

## Important Notes

- All user-facing text is in Spanish
- Clinical templates follow standard nursing documentation patterns
- The app runs entirely client-side (no backend beyond Gemini API calls)
- Entry point is `index.tsx` at project root, which mounts `apps/web/App.tsx`
