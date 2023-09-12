# How to run this project

- Clone this project to your machine
- Make sure node / npm already installed in your machine.
- Run `npm install` or `yarn install` or `pnpm install` (for this project, I prefer to use pnpm).
- After installation, run `pnpm dev`
- Open the project in your browser with url localhost:5173

This project also can accessed within this url.

# How to test this project

From your terminal, run:
- `npm test` or `yarn test` or `pnpm test`

For running test with coverage, run:
- `npm test:coverage` or `yarn test:coverage` or `pnpm test:coverage`

# About this Project

I create this project based on Vite + React + Typescript project. The other lib that I use for this project:
- react-router-dom: for doing client side router
- reat-query: for data-fetcher utility with cache management
- Tailwind CSS: for styling utilities
- Vitest: unit testing utilities. Since this project on top of Vite, I use Vitest for testing utilities.
- React Testing Library: for React component testing

# Features that Enhanced User Experience

- Infinite Scroll
I implement Infinite Scroll feature with React Intersection Observer & React Query's `useInfiniteQuery` so user can easily load the other movie with scroll.

- Debouncing the search input
I implement this to avoid multiple API call when user typing. Instead, API call will fired once the user stop typing.

- Skeleton UI
I implement Skeleton UI following with how the component are shaped instead of loading spinner or `Loading` text to enhance User Experience.

- Similar Movie
I adding component to show Similar Movie based on `Movie id`

# Things to Improve

Here also I take some note on feature that still not implemented but good to be implemented:
- mocking REST API with `msw`
