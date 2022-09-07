import { useState, useEffect } from 'react';
import { FilmList } from '../FilmList/Filmlist';
import { getTrending } from '../../services/fetchService';
import { Container } from '../../Container/Container';
import PageTitle from '../../PageTitle/PageTitle';

const HomePage = () => {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getTrending();
        setTrendings(prevProps => res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [setTrendings]);
  return (
    <Container>
      <PageTitle>Tranding today</PageTitle>
      <FilmList filmList={trendings} />
    </Container>
  );
};

export default HomePage;
