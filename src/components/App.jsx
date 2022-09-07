import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BASE_URL } from './services/BaseUrl';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieInfo = lazy(() => import('./Pages/MovieInfo/MovieInfo'));
const Reviews = lazy(() => import('./Pages/Rewies/Rewies'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const Loader = lazy(() => import('./Loader/Loader'));

export function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${BASE_URL}`} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
