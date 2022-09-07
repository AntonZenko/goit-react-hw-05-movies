import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;
