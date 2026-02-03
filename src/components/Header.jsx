import styled from 'styled-components';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-around;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const LogoutIcon = styled(FaSignOutAlt)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #e74c3c;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoSection to="/">
          <LogoImage src={logo} alt="Azahares Logo" />
        </LogoSection>
        <Nav>
          {user ? (
            <NavLink to={user.role === 'medico' ? '/turnos-medico' : '/mis-turnos'}>
              Turnos
            </NavLink>
          ) : (
            <NavLink to="/login">Turnos</NavLink>
          )}
          {user && user.role === 'admin' && (
            <NavLink to="/admin" style={{ color: '#e67e22' }}>Panel Admin</NavLink>
          )}
          {user ? (
            <UserSection>
              <span>Hola, {user.name}</span>
              <LogoutIcon onClick={logout} title="Cerrar Sesión" />
            </UserSection>
          ) : (
            <Link to="/login">
              <ProfileIcon title="Ingresar" />
            </Link>
          )}
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
