---
description: "Task list template for feature implementation"
---

# Tasks: Workout Homepage

**Input**: Design documents from `specs/001-workout-homepage/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)
**Purpose**: Project initialization and basic structure

- [x] T001 Initialize React project with Vite in `frontend/` directory.
- [x] T002 [P] Clean up default Vite boilerplate and configure basic `frontend/src/main.jsx` and `frontend/index.html`.
- [x] T003 [P] Create CSS token system in `frontend/src/styles/tokens.css` per Constitution styling mandate.
- [x] T004 [P] Create mock data JSON file matching Data Model at `frontend/src/data/mockData.json`.

---

## Phase 2: Foundational (Blocking Prerequisites)
**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T005 Implement `streakCalculator.js` utility in `frontend/src/utils/streakCalculator.js`.
- [x] T006 [P] Create foundational app layout structure in `frontend/src/App.jsx`.
- [x] T007 [P] Create shared data loading context/hook in `frontend/src/hooks/useAppData.js` to load from `mockData.json`.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Daily Attendance Tracking (Priority: P1) 🎯 MVP
**Goal**: Users need to track their daily workout attendance to maintain motivation and build a habit.
**Independent Test**: Can be fully tested by marking attendance and verifying streak count updates.

- [x] T008 [P] [US1] Create `Header.jsx` in `frontend/src/components/Header.jsx` (displays date, greeting, quote).
- [x] T009 [P] [US1] Create `AttendanceTracker.jsx` in `frontend/src/components/AttendanceTracker.jsx`.
- [x] T010 [US1] Implement attendance toggle state logic integrating with `streakCalculator` in `AttendanceTracker.jsx`.
- [x] T011 [US1] Render `Header` and `AttendanceTracker` into `App.jsx`.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Today's Workout Overview (Priority: P1)
**Goal**: Users need to see what workout is planned for today, including target muscles and difficulty.
**Independent Test**: Verify the correct workout card is displayed based on current date mock data.

- [x] T012 [P] [US2] Create `WorkoutCard.jsx` in `frontend/src/components/WorkoutCard.jsx`.
- [x] T013 [US2] Implement dynamic styling/badges based on WorkoutPlan type and difficulty in `WorkoutCard.jsx`.
- [x] T014 [US2] Integrate `WorkoutCard` into `App.jsx`.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Exercise Execution (Priority: P1)
**Goal**: Users need a detailed list of exercises for the day with sets, reps, and weights.
**Independent Test**: Verify a list of exercises appears and users can expand instructions.

- [x] T015 [P] [US3] Create `ExerciseCard.jsx` in `frontend/src/components/ExerciseCard.jsx` (with expandable instruction toggle).
- [x] T016 [P] [US3] Create `ExerciseList.jsx` in `frontend/src/components/ExerciseList.jsx` to render multiple `ExerciseCard`s.
- [x] T017 [US3] Integrate `ExerciseList` into `App.jsx` passing `Exercise` data from context.

**Checkpoint**: All P1 user stories should now be independently functional.

---

## Phase 6: User Story 4 - Progress and Quick Actions (Priority: P2)
**Goal**: Users need a quick snapshot of their progress and shortcuts to frequent actions.
**Independent Test**: Verify the dashboard shows correct aggregate stats and buttons navigate correctly.

- [x] T018 [P] [US4] Create `ProgressSnapshot.jsx` in `frontend/src/components/ProgressSnapshot.jsx` to display UserProfile stats.
- [x] T019 [P] [US4] Create quick action shortcut buttons within `ProgressSnapshot.jsx`.
- [x] T020 [US4] Integrate `ProgressSnapshot` into `App.jsx`.

---

## Phase 7: Polish & Cross-Cutting Concerns
**Purpose**: Improvements that affect multiple user stories

- [x] T021 [P] Ensure fully responsive CSS grid/flex layouts across all components in `frontend/src/App.css`.
- [x] T022 [P] Add dark mode theme support via CSS variables in `tokens.css`.
- [x] T023 Implement rich micro-animations (hover states, expansion transitions) in `frontend/src/styles/animations.css`.

---

## Dependencies & Execution Order

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - Phase 3, 4, 5, and 6 can be executed in parallel by different developers.
- **Polish (Final Phase)**: Depends on all desired user stories being complete
