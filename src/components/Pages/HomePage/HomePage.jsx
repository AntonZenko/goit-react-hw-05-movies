import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { FilmList } from '../FilmList/Filmlist';
import { getTrending } from '../../fetchService/fetchService';

const HomePage = () => {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    getTrending().then(setTrendings);
  }, []);
  return (
    <div>
      <h2>Trendings today</h2>
      <FilmList filmList={trendings} />
    </div>
  );
};

export default HomePage;
