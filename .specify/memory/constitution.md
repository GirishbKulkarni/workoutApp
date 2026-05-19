<!--
Sync Impact Report:
- Version change: 1.0.0 -> 1.1.0
- Modified principles: None (Appended Technical Constraints)
- Added sections: Technical Constraints (under Scope and Constraints)
- Removed sections: None
- Templates requiring updates: 
  - .specify/templates/plan-template.md (⚠ pending)
  - .specify/templates/spec-template.md (⚠ pending)
  - .specify/templates/tasks-template.md (⚠ pending)
- Follow-up TODOs: Determine governance migration rules.
-->
# Workout Application Constitution

## Core Principles

### I. Core Purpose: Targeted Planning
The application MUST focus on generating personalized, month-long daily workout routines based on specific user vitals (Age, gender, height, and weight). It MUST be optimized for gym enthusiasts.

### II. Media-Rich Guidance
Exercise routines MUST be supported by high-quality form videos and pictures aligned with the specific plan for the day to ensure safe and effective execution.

### III. Comprehensive Tracking
The application MUST provide robust tracking capabilities, specifically focusing on a workout tracker for strength training and a companion food tracking module.

### IV. Robust Media Handling
The system MUST implement a secure and reliable image and video upload feature to allow users to document their progress and form.

### V. Browsing-Focused Experience
As per the SDD Scope, the application MUST be delivered as a browsing experience only. Native mobile application development is currently out of scope.

## Scope and Constraints

The application is strictly a web-based browsing experience. Integration with device hardware beyond standard browser APIs (e.g., for media uploads) is out of scope.

### Technical Constraints
- **Language**: JavaScript
- **Framework**: React 18+ (using functional components and hooks)
- **Build Tool**: Vite (Recommended for fast, modern React SPAs)
- **Deployment**: GitHub Pages via GitHub Actions
- **Styling**: Vanilla CSS (Focusing on rich aesthetics, glassmorphism, and dynamic animations)

## Development Workflow and Quality

All features must be developed with a focus on ease of use for gym enthusiasts, ensuring media and tracking features are fast and responsive.

## Governance

The Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs/reviews must verify compliance with these core principles.

**Version**: 1.1.0 | **Ratified**: 2026-05-19 | **Last Amended**: 2026-05-19
