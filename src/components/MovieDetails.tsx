import React, { useMemo, useContext } from 'react';
import { Box, Dialog, DialogContent, Typography, Link, } from '@mui/material';
import { MovieDetailsProps } from '../lib/types/MovieDetailsProps';
import { Cast } from '../lib/types/Cast';
import SortSelect from './reusable/SortSelect';
import EntityCard from './cards/EntityCard';
import { useSort } from '../lib/hooks/useSort';
import { ColorContext } from '../lib/context/ColorContext';
import SectionWithItems from './reusable/SectionWithItems';
import Trailer from './reusable/Trailer';
import DialogComponent from './reusable/DialogComponent';

// MovieDetails is a component for displaying details of a selected movie in a dialog box.
const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, actors, open, onClose }) => {
  const { selectedColor } = useContext(ColorContext);
  const { title, overview, homepage, genres, production_companies, imdb_id  } = movie;

  // Sorting options for the actors list.
  const actorSortOptions = ['name', 'character', 'popularity'] as (keyof Cast)[];

  // Use a useMemo hook to avoid unnecessary computations in case of re-renders.
  const castMembers = useMemo(() => actors.flatMap(actor => actor.cast), [actors]);

  // We use a custom hook, useSort, to sort the cast members based on the selected sort key.
  const { sortedData: sortedCast, setSortKey: setActorSortKey } = useSort<Cast>(
    castMembers,
    'name',
    actorSortOptions
  );

  // The details of the movie are displayed in a Dialog component.
  return (
    // DialogComponent provides the main structure of the details display.
    // The content of the movie details is structured in a grid with two main columns.
    // On the left, we have the movie overview, homepage link, genres, and production companies.
    // On the right, we have the movie trailer.
    // At the bottom, we display the sorted list of actors.
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogComponent 
          title={title} 
          onClose={onClose} 
          selectedColor={selectedColor}
          open={open}
      >
        <DialogContent sx={{ backgroundColor: 'primary.main', color: 'text.primary' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: ['1fr', '50% 50%'],
              gridTemplateRows: 'repeat(2, auto)',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '1rem'
            }}>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Overview:
              </Typography>
              <Typography variant="subtitle1" sx={{ marginTop: '1rem', marginBottom: '1rem', color: 'text.secondary' }}>
                {overview}
              </Typography>
              <Link 
                href={homepage} 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ 
                  color: 'text.secondary', 
                  textDecoration: 'none',
                  ':hover': {
                    color: 'white', 
                  },
                }}
              >
                Movie Homepage Link
              </Link>
              <Box sx={{marginTop: '1rem'}}>
                <SectionWithItems
                  title="Genres:"
                  items={genres.map((genre) => ({
                    id: genre.id,
                    name: genre.name,
                    type: 'chip',
                  }))}
                  selectedColor={selectedColor}
                />
              </Box>

              <SectionWithItems
                title="Production Companies:"
                items={production_companies.map((company) => ({
                  id: company.id,
                  name: company.name,
                  logo_path: company.logo_path,
                  type: 'image',
                }))}
                selectedColor={selectedColor}
              />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', justifyContent: 'center', alignItems: 'center', maxHeight: '50vh', borderRadius: '6px', overflow: 'hidden' }}>
              <Trailer movieId={imdb_id} fallbackImage={``} autoplay={false} />
            </Box>
          </Box>
          <Box
            sx={{
              margin: '2rem 0',
              textAlign: 'right'
            }}
          >
            <SortSelect 
              options={actorSortOptions.map(option => ({ value: option, label: option }))}
              defaultValue='name'
              onChange={(value) => setActorSortKey(value as 'name' | 'character' | 'popularity')}
              selectedColorProp={selectedColor}
              labelText='Sort Actors by'
              shouldUpdateContext={false} 
            />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            {sortedCast.map((cast, index) => (
              <Box key={cast.id} sx={{ display: 'flex', justifyContent: 'center' }}> 
                <EntityCard
                  image={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                  altText={cast.name}
                  index={index}
                  totalItems={sortedCast.length}
                  disableHover={true}
                >
                  <Typography variant="h6">{cast.name}</Typography>
                  <Typography variant="subtitle1">Character: {cast.character}</Typography>
                  <Typography variant="subtitle2">Popularity: {cast.popularity}</Typography>
                </EntityCard>
              </Box>
            ))}
          </Box>
        </DialogContent>
      </DialogComponent>
    </Dialog>
  );
};

export default MovieDetails;