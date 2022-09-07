import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, LinkItem } from './FilmList.styled';
import { BASE_URL } from '../../services/BaseUrl';

export function FilmList({ filmList }) {
  const location = useLocation();

  return (
    <List>
      {filmList &&
        filmList.map(({ id, title, name }) => (
          <Item key={id}>
            <LinkItem
              to={`${BASE_URL}/movies/${id}`}
              state={
                location.search
                  ? location.pathname + location.search
                  : location.pathname
              }
            >
              {title ?? name}
            </LinkItem>
          </Item>
        ))}
    </List>
  );
}

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
