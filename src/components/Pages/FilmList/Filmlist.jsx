import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// const BASE_REMOTE_URL = '/goit-react-hw-05-movies';
// const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export function FilmList({ filmList }) {
  // const location = useLocation();
  // console.log(location);
  return (
    <ul>
      {filmList &&
        filmList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title ?? name}</Link>
          </li>
        ))}
    </ul>
  );
}

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
