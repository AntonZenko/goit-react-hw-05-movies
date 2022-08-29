import { getMovieDetail } from '../../fetchService/fetchService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   getMovieDetail(id).then(res => {
  //     console.log(res);
  //     setMovieDetails(res);
  //   });
  // }, [id]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieDetail(id);
        setMovieDetails(prevProps => res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  return (
    <div>
      <h2>CurrentMovie</h2>
      <MovieDetails movieInfo={movieDetails} />
    </div>
  );
};

export default MovieInfo;
