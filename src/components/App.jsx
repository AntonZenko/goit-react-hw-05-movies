import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieInfo = lazy(() => import('./Pages/MovieInfo/MovieInfo'));
const Reviews = lazy(() => import('./Pages/Rewies/Rewies'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

export function App() {
  return (
    <div>
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="red"
            strokeWidth="4"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        }
      >
        <Layout />
        <Routes>
          <Route path={`/`} element={<Layout />}></Route>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieInfo />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
