import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, ListItem, Typography } from '@mui/material';

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Documentation: React.FC = () => {
  return (
    <Box padding="2rem">
      <Typography variant="h5" gutterBottom>
        Documentation
      </Typography>
      <Typography  gutterBottom>
        Project Description
      </Typography>
      <CustomTypography gutterBottom>
        This is a simple Movie Release Viewer application that displays upcoming movies for the next three months. 
        The movies are presented in cards, showing the title, release date, and average vote along with the number of votes. 
        Users can sort the movie cards by average vote, title, release date, and popularity. Clicking on a card opens a 
        dialog with more detailed information about the movie, including a list of actors. The actors can also be sorted by 
        their real name, character name, popularity, and their order from the API.
      </CustomTypography>
      <Typography  gutterBottom>
        Project Structure
      </Typography>
      <List>
        <ListItem>
          <CustomTypography>
            <strong>src:</strong> The root directory of the source code.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>api:</strong> Contains the API service (tmdb.ts) which handles all API requests using Axios.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>components:</strong> Contains all React components, including the Documentation, MovieDetails, Navbar, SectionWithItems, and several reusable components.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>lib:</strong> Contains various utility functions, constants, and hooks used across the application.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>types:</strong> Contains type definitions for various data structures used throughout the application.
          </CustomTypography>
        </ListItem>
      </List>
      <Typography  gutterBottom>
        Main Features
      </Typography>
      <List>
        <ListItem>
          <CustomTypography>
            <strong>Upcoming Movie Display:</strong> The application fetches data from the TMDB API and displays all upcoming 
            movies in cards. Each card includes the movie's title, release date, average vote, and vote count.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>Sorting Functionality:</strong> Users can sort the movie cards by average vote, title, release date, and 
            popularity. The application uses a custom React hook for managing and applying the sorting logic.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>Movie Details:</strong> When a movie card is clicked, a dialog opens to show more detailed information 
            about the movie, including the overview, homepage link, genres, production companies, and actors.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>Actor Sorting:</strong> In the movie details dialog, the list of actors can be sorted by their real name, 
            character name, popularity, and the initial order from the API.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>Color Changing Functionality:</strong> The color scheme of the application changes based on the sorting 
            selected for the movie cards.
          </CustomTypography>
        </ListItem>
        <ListItem>
          <CustomTypography>
            <strong>Responsive Design:</strong> The application is fully responsive and provides an excellent user experience 
            across all device types.
          </CustomTypography>
        </ListItem>
      </List>
      <Typography  gutterBottom>
        Components
      </Typography>

      <List>
        <ListItem>
          <CustomTypography>
            <strong>App:</strong> The root component of the application. It sets up the application theme and layout.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>Documentation:</strong> Provides comprehensive details about the project, its structure, and the purpose of each file and component.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>MovieDetails:</strong> Displays detailed information about a specific movie when a user clicks on a Movie Card. It fetches data such as the movie's title, overview, homepage link, genres, production companies, and cast details.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>Navbar:</strong> The application's navigation bar. Contains the SortSelect component for sorting the displayed movie cards.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>SectionWithItems:</strong> A layout component that displays a section with various items (sort list).
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>CardContainer:</strong> A container component for card components, ensuring consistent style and layout.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>EntityCard:</strong> A generalized card component for displaying entities such as movies or actors.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>HoveredCard:</strong> Special card component that triggers when the user hovers over a MovieCard, displaying additional information such as the movie trailer.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>MovieCard:</strong> Represents a single movie card. Displays the movie's title, release date, and average vote.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>NormalCard:</strong> A standard card component with a consistent design throughout the application.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>RenderMovies:</strong> A component responsible for fetching and rendering a list of movie cards.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>ColorChangingLogo:</strong> A component representing the logo of the application. The logo's color changes based on the selected sorting option.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>DialogComponent:</strong> A reusable dialog component to display detailed information in a modal when a user clicks on a MovieCard.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>ErrorSnackbar:</strong> A component for displaying error messages in the form of a Snackbar.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>LoadingScreen:</strong> A component to display a loading state while fetching data from the API.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>SortSelect:</strong> A component for selecting a sorting criterion. It also triggers a color change in the application.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>TrailerComponent:</strong> A component responsible for displaying a movie trailer when available.
          </CustomTypography>
        </ListItem>

      </List>
      <Typography  gutterBottom>
        Hooks
      </Typography>

      <List>
        <ListItem>
          <CustomTypography>
            <strong>ColorContext & ColorProvider:</strong> Context and provider for managing and passing down the color selection state in the app.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>calculateColumns:</strong> Utility function used in the useColumnCount hook to calculate the number of columns that can be displayed based on the current window size.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useCachedMovieDetails:</strong> Hook that fetches movie details from the TMDB API and caches them in local storage. It also ensures the data isn't stale by refreshing it if it's more than a day old.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useColumnCount:</strong> Hook that calculates the number of columns that can be displayed based on the current window size. It also sets a 'disableHover' flag to true if only one column can be displayed.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useErrors:</strong> Hook that manages an error state, providing methods to set, handle, and reset the error state.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useInterval:</strong> Hook that calls the provided callback function every 'delay' milliseconds. It's an encapsulation of setInterval that uses React hooks.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useMovieDetails:</strong> Hook for managing the detailed view of a movie, including fetching and storing the selected movie's data and handling the modal's open/close state.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useMovies:</strong> Hook that manages the movies list, fetching data, and handling the sorting of the list.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useHover:</strong> A custom hook for managing hover states in components.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useSort:</strong> A custom hook responsible for managing and applying the sorting logic to the movies and actors.
          </CustomTypography>
        </ListItem>

        <ListItem>
          <CustomTypography>
            <strong>useFetch:</strong> A custom hook for fetching data from the API. It handles the loading state and errors during the fetch process.
          </CustomTypography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Documentation;
