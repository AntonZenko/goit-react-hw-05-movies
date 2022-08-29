import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
// import { lazy, Suspense } from 'react';
// import { getTrending } from './fetchService/fetchService';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import Movies from './Pages/Movies/Movies';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import MovieInfo from './Pages/MovieInfo/MovieInfo';
// const MovieInfo = lazy(() => import('./Pages/MovieInfo/MovieInfo'));

export function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieInfo />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
