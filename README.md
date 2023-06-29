# Assignment-Yo

Assignment-Yo is a React-based web application that serves as a movie discovery platform. It allows users to browse movies, view their details, and sort the list of movies based on various criteria. The project utilizes TypeScript and a suite of custom hooks to handle state management and side effects.

## Project Structure

- `src/`: The root directory of the source code.
  - `index.tsx`: The entry point of the application.
  - `App.tsx`: The root component of the application.
  - `api/`: Contains files responsible for API calls.
    - `tmdb.ts`: Module for interacting with the TMDB API.
  - `components/`: Contains all the React components for the app, separated by their respective concerns.
    - `Documentation.tsx`
    - `MovieDetails.tsx`
    - `Navbar.tsx`
    - `SectionWithItems.tsx`
    - `cards/`: Subdirectory with components related to card layout.
      - `CardContainer.tsx`
      - `EntityCard.tsx`
      - `HoveredCard.tsx`
      - `MovieCard.tsx`
      - `NormalCard.tsx`
      - `renderMovies.tsx`
    - `reusable/`: Subdirectory with reusable components.
      - `ColorChangingLogo.tsx`
      - `DialogComponent.tsx`
      - `ErrorSnackbar.tsx`
      - `LoadingScreen.tsx`
      - `SortSelect.tsx`
      - `Trailer.tsx`
  - `lib/`: Contains utility files and context providers.
    - `constants.ts`
    - `context/`: Context for managing global state.
      - `ColorContext.tsx`
    - `hooks/`: Contains custom React hooks for reusable logic.
      - `calculateColumns.ts`
      - `fetchAndUpdateDetails.ts`
      - `useCachedMovieDetails.ts`
      - `useColumnCount.ts`
      - `useErrors.ts`
      - `useFetch.ts`
      - `useHover.ts`
      - `useInterval.ts`
      - `useMovieDetails.ts`
      - `useMovies.ts`
      - `useSort.ts`
  - `types/`: Contains TypeScript interfaces/types.

## Component Descriptions

Refer to the project's `Documentation.tsx` file for detailed descriptions and explanations of each component's purpose and functionality.

## Hooks Descriptions

Refer to the project's `Documentation.tsx` file for detailed descriptions and explanations of each hook's purpose and functionality.

## How to Run

- Clone the repository
- Create an .env file in the root directory.
- Add the provided variables to the .env file (replace your_value with the actual values provided):
  REACT_APP_VARIABLE1=your_value
  REACT_APP_VARIABLE2=your_value
- Run `npm install` to install dependencies.
- Run `npm start` to start the development server.
- Open http://localhost:3005 to view it in the browser. (change this in package.json file)

## How to Test

- Run `npm test` to launch the test runner in the interactive watch mode.

## How to Build

- Run `npm run build` to build the app for production to the `build` folder.

## License

This project is licensed under the ...

## Author

Gouidas Athanasios
