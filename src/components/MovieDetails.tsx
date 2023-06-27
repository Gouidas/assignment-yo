import React, { useMemo, useContext } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, Typography, Link, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { MovieDetailsProps } from '../lib/types/MovieDetailsProps';
import { Cast } from '../lib/types/Cast';
import SortSelect from './reusable/SortSelect';
import EntityCard from './reusable/EntityCard';
import { useSort } from '../lib/hooks/useSort';
import { ColorContext } from '../lib/context/ColorContext';
import prifileTransparent from '../assets/images/prifileTransparent.png';
import SectionWithItems from './reusable/SectionWithItems';
import Trailer from './reusable/Trailer';


const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, actors, open, onClose }) => {
  const { selectedColor } = useContext(ColorContext);
  const { title, overview, homepage, genres, production_companies, imdb_id  } = movie;

  const actorSortOptions = ['name', 'character', 'popularity'] as (keyof Cast)[];
  const castMembers = useMemo(() => actors.flatMap(actor => actor.cast), [actors]);

  const { sortedData: sortedCast, setSortKey: setActorSortKey } = useSort<Cast>(
    castMembers,
    'name',
    actorSortOptions
  );

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle 
        sx={{ 
          backgroundColor: selectedColor, 
          color: 'white', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={onClose} 
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
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
                image={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : prifileTransparent}
                altText={cast.name}
                selectedColorProp={selectedColor}
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
    </Dialog>
  );
};

export default MovieDetails;