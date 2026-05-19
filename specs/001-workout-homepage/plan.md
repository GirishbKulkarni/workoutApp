# Implementation Plan: Workout Homepage

**Branch**: `001-workout-homepage` | **Date**: 2026-05-19 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/001-workout-homepage/spec.md`

## Summary

Build a modern, responsive, gamified homepage for a Workout Routine Tracker application that tracks daily attendance, displays today's workout and exercises, and provides a progress dashboard.

## Technical Context

**Language/Version**: JavaScript (ES6+)
**Primary Dependencies**: React 18+, Vite, React Router (if needed)
**Storage**: Local State / LocalStorage (initial implementation per spec), Mock JSON
**Testing**: Jest, React Testing Library
**Target Platform**: Web browsers (Mobile-first responsive)
**Project Type**: Single Page Application (SPA)
**Performance Goals**: <1.5s load time, interactive at 60fps
**Constraints**: Vanilla CSS for styling (per Constitution mandate; Tailwind CSS request rejected until Constitution is formally amended).
**Scale/Scope**: Initial local MVP targeting single users.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Core Purpose: Targeted Planning**: PASS (Plan directly implements the daily workout view).
- **II. Media-Rich Guidance**: PASS (UI components include placeholders for demo thumbnails/videos).
- **III. Comprehensive Tracking**: PASS (Includes attendance tracking and streak logic).
- **IV. Robust Media Handling**: PASS (Out of scope for homepage MVP, but structure supports future media components).
- **V. Browsing-Focused Experience**: PASS (Web-based SPA architecture conforms to browsing-only scope).
- **CSS Styling Mandate**: PASS (Enforced Vanilla CSS over requested Tailwind CSS to maintain architectural integrity).

## Project Structure

### Documentation (this feature)

```text
specs/001-workout-homepage/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (Mock JSON schemas)
└── tasks.md             # Phase 2 output (Pending /speckit.tasks)
```

### Source Code (repository root)

```text
frontend/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── data/
│   │   └── mockData.json
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AttendanceTracker.jsx
│   │   ├── WorkoutCard.jsx
│   │   ├── ExerciseList.jsx
│   │   ├── ExerciseCard.jsx
│   │   └── ProgressSnapshot.jsx
│   ├── styles/
│   │   ├── tokens.css
│   │   └── animations.css
│   └── utils/
│       └── streakCalculator.js
└── tests/
    └── components/
```

**Structure Decision**: A standard Vite React SPA structure under a `frontend/` directory to allow clear separation if a backend is added later. Components are logically separated based on the Spec's user stories.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
