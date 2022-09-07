import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/fetchService';
import {
  CastList,
  CastItem,
  CastImg,
  CastTitle,
  CastText,
} from './Cast.styled';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieCast(id);
        setCast(prevProps => res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  return (
    <CastList>
      {cast &&
        cast.map(actor => (
          <CastItem key={actor.credit_id}>
            <CastImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : 'https://i.pravatar.cc/300'
              }
              alt="actor_photo"
              intrinsicsize="100 x 160"
              width="200px"
            />
            <CastTitle>{actor.name}</CastTitle>
            <CastText>Character: {actor.character}</CastText>
          </CastItem>
        ))}
    </CastList>
  );
}

export default Cast;
