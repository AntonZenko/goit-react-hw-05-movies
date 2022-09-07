import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkStyled } from './Layout.styled';
import { BASE_URL } from '../services/BaseUrl';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to={`${BASE_URL}/`}>Home</NavLinkStyled>
          <NavLinkStyled to={`${BASE_URL}/movies`}>Movies</NavLinkStyled>
        </Nav>
      </Header>

      <Outlet />
    </>
  );
};
export default Layout;
