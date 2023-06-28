import React from 'react';
import { Typography } from '@mui/material';
import EntityCard from './EntityCard';
import { Movie } from '../../lib/types/Movie';

type MovieCardProps = {
  movie: Movie;
  index: number;
  totalItems: number;
  onHover: (hovered: boolean, index: number) => void;
  onClick: () => void;
  hoveredCardIndex: number | null;
}
// MovieCard is a component for rendering each individual movie.
// It takes movie details, index, and hover and click event handlers as props.
const MovieCard: React.FC<MovieCardProps> = ({ movie, index, totalItems, onHover, onClick, hoveredCardIndex }) => {
  return (
    // EntityCard component is used for each movie card.
    // onHover prop is used to update the hoveredCardIndex in the parent component.
    <EntityCard
      key={movie.id}
      movie={movie}
      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      altText={movie.title}
      onClick={onClick}
      index={index}
      totalItems={totalItems}
      onHover={(hovered) => onHover(hovered, index)}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {hoveredCardIndex === index && movie.title}
        {hoveredCardIndex !== index && (movie.title.length > 21 ? `${movie.title.substring(0, 21)}...` : movie.title)}
      </Typography>
      <Typography variant="subtitle2">{movie.release_date}</Typography>
      <Typography variant="subtitle2">
        {movie.vote_average} ({movie.vote_count} votes)
      </Typography>
    </EntityCard>
  );
};

export default MovieCard;
