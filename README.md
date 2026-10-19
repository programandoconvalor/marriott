# Marriott Frontend Technical Interview Demo

A frontend application built with **Next.js, React, TypeScript, and Tailwind CSS** as a preparation project for a Senior Front-End Engineer technical interview.

The project provides a simple, reusable foundation for implementing common frontend exercises, including search and filtering, reusable components, custom React hooks, API integration, and state management.

The main objective is to demonstrate frontend engineering fundamentals, clean component architecture, maintainability, responsive UI, accessibility, and problem-solving skills.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Core Components](#core-components)
- [React State and Rendering](#react-state-and-rendering)
- [Search and Filtering](#search-and-filtering)
- [Next.js App Router](#nextjs-app-router)
- [TypeScript Strategy](#typescript-strategy)
- [Responsive UI and Accessibility](#responsive-ui-and-accessibility)
- [Performance Considerations](#performance-considerations)
- [Potential API Integration](#potential-api-integration)
- [Testing Strategy](#testing-strategy)
- [Local Development](#local-development)
- [Available Commands](#available-commands)
- [Possible Technical Exercises](#possible-technical-exercises)
- [Future Improvements](#future-improvements)
- [Project Scope](#project-scope)
- [Developer](#developer)

---

# Project Overview

The application uses a small, component-based frontend architecture designed to be easy to understand, extend, and maintain.

The initial implementation includes:

- A reusable application header.
- A main content area.
- A reusable footer.
- A controlled search input.
- Client-side filtering.
- Dynamic list rendering.
- Empty-state handling.
- Responsive styling.
- TypeScript support.
- Next.js App Router.

The project can be extended to support additional technical exercises without changing the overall application layout.

Examples include custom hooks, data fetching, forms, tables, product catalogs, Redux Toolkit, and GraphQL integration.

---

# Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework and routing |
| React | Component-based UI and state management |
| TypeScript | Static typing and safer refactoring |
| Tailwind CSS | Responsive styling and consistent UI patterns |
| React Hooks | State, effects, and reusable stateful logic |
| ESLint | Code quality and static analysis |
| npm | Dependency and script management |

Additional libraries such as Redux Toolkit, Apollo Client, React Hook Form, Jest, React Testing Library, or Vitest can be introduced when an exercise requires them.

---

# Project Structure

The initial project follows a simple structure using the Next.js App Router.

```text
marriott-demo/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Content.tsx
│   │   └── Footer.tsx
│   │
│   └── hooks/
│       └── (custom hooks can be added here)
│
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

The `hooks` directory is an optional extension. It can be created when reusable hooks are needed.

## Architecture Principles

The project follows these principles:

- Separation of layout and feature content.
- Reusable UI components.
- Clear component responsibilities.
- Type-safe development.
- Minimal dependencies.
- Responsive and accessible interfaces.
- Incremental extension based on requirements.

The goal is to keep the initial implementation simple while allowing it to evolve into a more feature-oriented architecture.

---

# Architecture

The application is organized into three main UI components.

```text
RootLayout
    |
    ├── Header
    |
    ├── Main
    |     |
    |     └── Content
    |
    └── Footer
```

## Root Layout

The root layout is defined in:

`src/app/layout.tsx`

It provides the shared application shell, global styles, page metadata, and common UI components.

The layout is responsible for the overall page structure rather than feature-specific business logic.

## Header

The header is defined in:

`src/components/Header.tsx`

It provides the application identity and a consistent top section.

It is intentionally kept simple so that the main development effort can focus on the exercise requirements.

## Content

The content component is defined in:

`src/components/Content.tsx`

It contains the main interactive functionality.

The initial implementation demonstrates controlled inputs, local state, filtering, list rendering, and empty states.

New exercises can be implemented here or extracted into feature-specific components when appropriate.

## Footer

The footer is defined in:

`src/components/Footer.tsx`

It provides a consistent bottom section across the application.

Keeping it in the root layout avoids repeating the footer in individual pages.

---

# Core Components

## Component-Based Architecture

React allows the UI to be divided into smaller components with clear responsibilities.

This improves:

- Reusability.
- Readability.
- Maintainability.
- Testability.
- Separation of concerns.

A component should have a clear purpose and a well-defined interface through props when it needs to receive data or callbacks from its parent.

## Controlled Components

The search input is a controlled React component.

Its value is managed through React state, and changes are handled through the `onChange` event.

```tsx
const [search, setSearch] = useState("");

<input
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>
```

Controlled inputs make the current value explicit and allow validation, filtering, and conditional UI updates.

## List Rendering

The application renders collections using `map()`.

```tsx
items.map((item) => (
  <li key={item.id}>
    {item.name}
  </li>
))
```

Each item should have a stable key so React can identify elements correctly when a collection changes.

---

# React State and Rendering

The application uses React hooks to manage interactive behavior.

## useState

`useState` stores component state.

In this project, it manages the current search value.

When the value changes, React schedules an update and renders the affected component again.

## useMemo

`useMemo` can cache the result of a calculation between renders when its dependencies have not changed.

The search implementation uses it to derive the filtered list from the original data and the search term.

Memoization should be used when it provides a meaningful benefit rather than being added automatically to every calculation.

## Derived State

The filtered list is derived from the original list and the search term.

It does not need a separate state variable because it can be calculated from existing state.

This avoids maintaining multiple sources of truth.

## Custom Hooks

Custom hooks can be introduced when stateful logic needs to be reused.

Examples include:

- `useCounter`
- `useDebounce`
- `useFetch`
- `useLocalStorage`

Custom hooks should encapsulate reusable behavior without depending on a specific UI component.

---

# Search and Filtering

The initial content component demonstrates client-side search.

The search process follows this flow:

```text
User Input
    |
    v
React State
    |
    v
Normalize Search Value
    |
    v
Filter Original Data
    |
    v
Render Matching Items
    |
    v
Show Results or Empty State
```

The implementation:

- Uses a controlled input.
- Ignores differences in letter casing.
- Removes leading and trailing spaces from the search value.
- Filters the original dataset.
- Renders the matching results.
- Displays a message when no items match.

For larger datasets, additional approaches may be appropriate, such as debouncing, server-side filtering, pagination, or API-based search.

The correct strategy depends on dataset size, response time, and application requirements.

---

# Next.js App Router

The project uses the Next.js App Router.

## Root Layout

The root layout defines shared UI and document metadata.

It is a Server Component by default unless client-side behavior is required.

## Page Component

The main page is defined in:

`src/app/page.tsx`

It renders the content component.

This keeps the route definition small and makes the UI easier to reorganize.

## Server and Client Components

Next.js supports both Server Components and Client Components.

Server Components are useful for rendering content that does not require browser-side interaction.

Client Components are required for React hooks such as `useState` and `useEffect`, as well as browser event handlers.

The content component uses the `"use client"` directive because it manages interactive search state.

The directive should be applied only where client-side functionality is required.

## Rendering Strategy

The current project is a small interactive exercise and does not require a complex rendering strategy.

For a production application, the choice between Static Site Generation, Server-Side Rendering, and Incremental Static Regeneration should depend on data freshness, personalization, caching, SEO, and performance requirements.

---

# TypeScript Strategy

TypeScript is used to make component contracts and application data more predictable.

Recommended practices include:

- Define explicit types for external data.
- Use typed props for reusable components.
- Avoid unnecessary use of `any`.
- Use union types for known application states.
- Validate external data at runtime when necessary.
- Keep types close to the feature that owns them.

For example:

```tsx
type Technology = {
  id: number;
  name: string;
  category: string;
};
```

This makes the expected data structure clear and helps detect incompatible changes during development.

TypeScript provides compile-time checking, but it does not automatically validate external API responses at runtime.

---

# Responsive UI and Accessibility

Tailwind CSS is used to build responsive layouts with utility classes.

The UI should work across:

- Desktop.
- Tablet.
- Mobile.

Accessibility considerations include:

- Semantic HTML.
- Correct heading hierarchy.
- Labels associated with inputs.
- Descriptive button names.
- Keyboard-accessible controls.
- Visible focus states.
- Clear loading, error, and empty messages.
- Sufficient color contrast.

Accessibility should be considered during implementation rather than added only at the end.

---

# Performance Considerations

The initial project is intentionally small. Its performance strategy focuses on avoiding unnecessary complexity.

Relevant practices include:

- Keep components focused and reusable.
- Derive data instead of duplicating state.
- Avoid unnecessary effects.
- Measure rendering performance before applying memoization.
- Use responsive image strategies when images are introduced.
- Use lazy loading and code splitting when appropriate.
- Avoid unnecessary dependencies.
- Keep client-side JavaScript limited to interactive functionality.

For a larger Next.js application, performance work should also consider Core Web Vitals, caching, data fetching, bundle size, and the selected rendering strategy.

Performance improvements should be validated through measurement rather than assumptions.

---

# Potential API Integration

The current starter implementation uses a local array for its search exercise.

If a coding exercise requires external data, the component can be extended to retrieve information through `fetch()` or a dedicated data-fetching library.

A typical API flow is:

```text
UI Component
    |
    v
Data Fetching Logic
    |
    v
External API
    |
    v
Response Validation
    |
    v
Loading / Error / Success State
    |
    v
Rendered UI
```

For asynchronous requests, the interface should handle:

- Loading.
- Success.
- Errors.
- Empty results.
- Request cancellation when appropriate.
- Invalid or unexpected response data.

For GraphQL exercises, Apollo Client can be introduced to manage queries, mutations, and caching.

For larger applications, API communication should be separated from presentation components to improve testability and maintainability.

---

# Testing Strategy

Testing tools can be added according to the requirements of the exercise.

Recommended testing levels include:

## Component Tests

Verify that individual components render correctly and respond to user interactions.

Examples:

- Header renders.
- Search input accepts text.
- Matching items appear.
- Empty state appears when no results match.

## Integration Tests

Verify that components and their dependencies work together.

Examples:

- Search state updates the displayed list.
- Form validation displays the correct messages.
- API results are rendered correctly.

## End-to-End Tests

For larger applications, end-to-end tests can verify important user workflows in a real browser.

The objective is to test observable behavior and expected outcomes rather than internal implementation details.

---

# Local Development

## Requirements

- Node.js.
- npm.
- A code editor such as Visual Studio Code.

## Installation

Clone the repository if it has been published to a Git hosting service:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd marriott-demo
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local application:

```text
http://localhost:3000
```

If the project already exists locally, skip cloning and run the commands from its root directory.

---

# Available Commands

## Development Server

```bash
npm run dev
```

Starts the Next.js development server.

## Production Build

```bash
npm run build
```

Creates an optimized production build.

## Production Server

```bash
npm start
```

Starts the production server after a successful build.

## Linting

```bash
npm run lint
```

Runs ESLint if the corresponding script is configured in `package.json`.

## TypeScript Validation

```bash
npx tsc --noEmit
```

Checks TypeScript errors without generating output files.

Test commands depend on the test framework installed in the project.

---

# Possible Technical Exercises

The project can be extended to implement common frontend interview tasks.

| Exercise | Main concepts |
|---|---|
| Search and filtering | State, events, array methods |
| Custom counter hook | `useState`, custom hooks |
| Debounced search | `useEffect`, timers, cleanup |
| API data table | Async operations, loading, errors |
| Form validation | Controlled inputs, validation |
| Reusable product cards | Props, component composition |
| Redux Toolkit integration | Store, slices, selectors |
| GraphQL integration | Queries, mutations, caching |
| Pagination | Derived data, state |
| Unit testing | User interactions, expected behavior |

These are possible extensions, not features that are automatically implemented by the initial project.

---

# Future Improvements

Depending on the technical requirements, the project could be extended with:

- Feature-based architecture.
- Redux Toolkit for shared client state.
- Apollo Client for GraphQL.
- React Hook Form for complex forms.
- Zod for runtime data and form validation.
- Storybook for component documentation.
- Vitest or Jest with React Testing Library.
- Cypress for end-to-end testing.
- Error boundaries and centralized error handling.
- API service modules.
- Reusable loading and error components.
- More comprehensive accessibility checks.
- Performance measurement and optimization.

Each dependency should be introduced only when it solves a real requirement.

---

# Project Scope

This repository is a frontend technical interview starter project.

Its purpose is to provide a reusable foundation for demonstrating:

- React and Next.js fundamentals.
- TypeScript.
- Component-based architecture.
- React hooks and state management.
- API integration patterns.
- Responsive UI.
- Accessibility.
- Performance awareness.
- Testing practices.
- Maintainable frontend code.

The initial application is intentionally simple and does not represent a complete production application or an official Marriott system.

---

# Developer

**Juan Carlos Zepeda Arzate**

Senior Front-End Engineer

**Primary Technologies:**

React · Next.js · TypeScript · JavaScript · Angular

**Frontend Engineering Focus:**

Scalable Architecture · Reusable Components · API Integration · Performance · Accessibility · Testing

---

*Prepared as a technical interview practice project.*