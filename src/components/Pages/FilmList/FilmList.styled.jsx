import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding: 5px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: #ff0000;
  }
`;
