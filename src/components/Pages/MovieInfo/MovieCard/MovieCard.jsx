import PropTypes from 'prop-types';
import {
  MovieBox,
  Description,
  MovieTitle,
  Text,
  Info,
  Genres,
} from './MovieCard.styled';

export function MovieCard({ movieInfo }) {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;

  return (
    <MovieBox>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="film poster"
        height="300px"
      />
      <Description>
        <MovieTitle>
          {title ?? name} ({new Date(release_date).getFullYear()})
        </MovieTitle>
        <Text>User Score: {Math.round(vote_average * 10)}%</Text>
        <Info>Overview</Info>
        {overview ? (
          <Text>{overview}</Text>
        ) : (
          <Text>We don't have overview for this movie</Text>
        )}

        <Genres>Genres</Genres>
        <Text>{genres && genres.map(genre => ` ${genre.name}`)}</Text>
      </Description>
    </MovieBox>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
