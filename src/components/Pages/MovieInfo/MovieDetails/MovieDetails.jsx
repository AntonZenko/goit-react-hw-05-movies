import PropTypes from 'prop-types';
export function MovieDetails({ movieInfo }) {
  console.log(movieInfo);
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
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="film poster"
        height="300px"
      />
      <div>
        <h2>
          {title ?? name} ({new Date(release_date).getFullYear()})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        {overview ? (
          <p>{overview}</p>
        ) : (
          <p>We don't have overview for this movie</p>
        )}

        <h3>Genres</h3>
        <p>{genres && genres.map(genre => ` ${genre.name}`)}</p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
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
    ).isRequired,
  }).isRequired,
};
