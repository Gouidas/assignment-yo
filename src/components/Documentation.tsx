import React from 'react';
import { Divider, Typography, List, ListItem } from '@mui/material';

//The DocumentationComponent is a functional component that returns static content for the application documentation.
const DocumentationComponent: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movie Release Viewer Application Documentation
      </Typography>
      <Divider />

      <Typography variant="h5" gutterBottom>
        Overview
      </Typography>
      <Typography variant="body1">
        The "Movie Release Viewer" is a React web application developed with TypeScript and styled with Material-UI. This application provides users with information about upcoming movie releases, presenting them in an interactive, card-based interface.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Libraries Utilized
      </Typography>
      <List>
        <ListItem>ReactJS</ListItem>
        <ListItem>Material-UI</ListItem>
        <ListItem>TypeScript</ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Key Features
      </Typography>
      <List>
        <ListItem>Upcoming Movies Display: Showcases films scheduled for release over the next three months.</ListItem>
        <ListItem>Informative Movie Cards: Each card reveals the title, release date, and average vote count (with total vote numbers in parentheses).</ListItem>
        <ListItem>Sort Functionality: Users can sort the movie cards by average vote, title, release date (default), or popularity.</ListItem>
        <ListItem>Detailed Movie Dialog: Clicking on a card opens a dialog presenting more information about the selected movie.</ListItem>
        <ListItem>Comprehensive Movie Details: The dialog displays the movie title, overview, homepage link, genre list, production companies (with logos), and a list of the film's actors (presented as cards). Each actor card includes an image, the actor's real name, their character's name, and their popularity.</ListItem>
        <ListItem>Actor Sort Options: Within the movie dialog, users can sort actor cards by real name, character name, popularity, or the initial order from the API (default).</ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Application Structure
      </Typography>
      <Typography variant="h6">
        Entry point
      </Typography>
      <Typography variant="body1">
        The application's entry point is index.tsx. This file renders the App component within the ColorProvider context to enable global access to color settings.
      </Typography>

      <Typography variant="h6">
        Main Application Component - App.tsx
      </Typography>
      <Typography variant="body1">
        The App component establishes the application layout and coordinates movie loading and error handling processes. It uses hooks (useMovies, useMovieDetails) to load movie data and uses the ColorContext to pull the currently selected color for the application theme. The handleOpen function triggers when a user clicks on a movie card, prompting the MovieDetails component to open.
      </Typography>

      <Typography variant="h6">
        Entity Card Component - EntityCard.tsx
      </Typography>
      <Typography variant="body1">
        This component represents each movie in the grid. The EntityCard displays an image and basic information about a movie, and reveals more information when hovered over. It has a click event handler that opens the MovieDetails dialog for more extensive movie information.
      </Typography>

      <Typography variant="h6">
        Movie Details Component - MovieDetails.tsx
      </Typography>
      <Typography variant="body1">
        This component offers a detailed view of a movie, presented as a dialog that opens when a user clicks on a movie card.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Error Handling
      </Typography>
      <Typography variant="body1">
        Error situations are handled by setting error messages in state variables (moviesError and detailsError). These messages are displayed using an ErrorSnackbar component when an error occurs.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Data Source
      </Typography>
      <Typography variant="body1">
        Movie data is provided by the TMDB API, authenticated with the API read access token. Movie images are retrieved by appending the poster path to the base TMDB image URL. To optimize performance, movie details data is cached in local storage for up to one day, limiting unnecessary API calls.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Components
      </Typography>
      <Typography variant="h6">
        SortSelect
      </Typography>
      <Typography variant="body1">
        A React component that presents a list of selectable sorting options. It customizes the Material UI elements according to the selected color pulled from the ColorContext using the useContext React hook.
      </Typography>

      <Typography variant="h6">
        Trailer
      </Typography>
      <Typography variant="body1">
        A React component for displaying a movie trailer. If the trailer is not available in the local storage, it fetches video data from an API and constructs the trailer URL. If the trailer fails to load, it displays an error message to the user.
      </Typography>

      <Typography variant="h6">
        TMDB API
      </Typography>
      <Typography variant="body1">
        A module containing functions to interact with The Movie Database (TMDB) API. It exposes functions to get upcoming movies, fetch specific movie details, and retrieve actors of a specific movie.
      </Typography>

      <Typography variant="h6">
        ColorContext and ColorProvider
      </Typography>
      <Typography variant="body1">
        A React context for managing the state of the selected color across the application. The ColorContext can be used in any component inside ColorProvider to access and update the selected color, re-rendering all components using the ColorContext when the selected color changes.
      </Typography>

      <Typography variant="h6">
        ColorChangingLogo
      </Typography>
      <Typography variant="body1">
        A wrapper around an SVG icon whose fill color changes based on a selected color passed as a prop.
      </Typography>

      <Typography variant="h6">
        ErrorSnackbar
      </Typography>
      <Typography variant="body1">
        A component that displays error messages in a Snackbar component from Material UI. The color of the Snackbar changes based on the selected color from the ColorContext.
      </Typography>

      <Typography variant="h6">
        LoadingScreen
      </Typography>
      <Typography variant="body1">
        A component that displays a logo and optional text during data loading. The color of the logo changes every second.
      </Typography>

      <Typography variant="h6">
        Navbar
      </Typography>
      <Typography variant="body1">
        A top navigation bar that includes a color-changing logo and a sorting select input.
      </Typography>

      <Typography variant="h6">
        SectionWithItems
      </Typography>
      <Typography variant="body1">
        This component displays a title and a series of items. Each item can be a chip or an image with a text overlay.
      </Typography>

      <Typography variant="body1">
        In summary, the Movie Release Viewer application offers a seamless, interactive, and informative user experience for movie enthusiasts looking to stay updated on upcoming movie releases. Through robust error handling and efficient data management, it ensures optimal performance.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Test Documentation
      </Typography>
      <Typography variant="body1">
        The Movie Release Viewer application is thoroughly tested to ensure the reliability and correctness of its functionality. The tests cover various components and functionalities of the application. Here is an overview of the test suites:
      </Typography>

      <Typography variant="h6">
        calculateColumns.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite verifies the correctness of the `calculateColumns` utility function, which is responsible for determining the number of grid columns based on the screen size.
      </Typography>

      <Typography variant="h6">
        fetchAndUpdateDetails.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite validates the behavior of the `fetchAndUpdateDetails` function, which fetches movie details from the TMDB API and updates the state of the movie details.
      </Typography>

      <Typography variant="h6">
        useSort.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite tests the `useSort` custom hook, which handles the sorting of movie data based on different sort keys. It ensures that the sorting logic is working correctly and that the sorted data is updated accordingly.
      </Typography>

      <Typography variant="h6">
        useInterval.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite verifies the behavior of the `useInterval` hook, which is responsible for invoking a callback function at a specified interval. It ensures that the callback is triggered at the correct intervals and that the interval can be properly cleared.
      </Typography>

      <Typography variant="h6">
        useFetch.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite tests the `useFetch` hook, which handles fetching data from an API endpoint. It ensures that the fetch request is made correctly, and the data and loading state are updated accordingly.
      </Typography>

      <Typography variant="h6">
        LoadingScreen.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite validates the behavior of the `LoadingScreen` component, which displays a loading screen with a rotating logo. It ensures that the logo rotates every second and that the loading screen is rendered correctly.
      </Typography>

      <Typography variant="h6">
        SectionWithItems.test.tsx
      </Typography>
      <Typography variant="body1">
        This test suite verifies the rendering and behavior of the `SectionWithItems` component, which displays a title and a series of items. It ensures that the component renders the title and items correctly and handles interactions properly.
      </Typography>
    </div>
  );
};

export default DocumentationComponent;
