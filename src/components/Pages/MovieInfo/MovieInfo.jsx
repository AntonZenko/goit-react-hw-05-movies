import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetail } from '../../services/fetchService';
import { MovieCard } from './MovieCard/MovieCard';

import { Container } from '../../Container/Container';
import {
  Wrapper,
  Button,
  InfoLink,
  InfoTitle,
  InfoList,
  InfoItem,
} from './MovieInfo.styled';

const MovieInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieCard, setMovieCard] = useState({});
  const [goBack, setGoBack] = useState('');
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieDetail(id);
        setMovieCard(prevProps => res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  const locationState = location.state;
  useEffect(() => {
    if (!locationState) {
      return;
    }
    setGoBack(locationState);
  }, [locationState]);

  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          navigate(goBack, { replace: true });
        }}
      >
        Go back
      </Button>
      <Wrapper>
        <MovieCard movieInfo={movieCard} />
      </Wrapper>
      <Wrapper>
        <InfoTitle>Additional Info</InfoTitle>
        <InfoList>
          <InfoItem>
            <InfoLink to="cast">Cast</InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink to="reviews">Reviews</InfoLink>
          </InfoItem>
        </InfoList>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default MovieInfo;
