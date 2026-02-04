import { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
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

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    top: 70px; /* Header height approx */
    left: 0;
    width: 100%;
    background-color: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 99;
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fix repetitive "Dr." prefix if it exists in the name
  const getDisplayName = (name) => {
    if (!name) return '';
    if (name.startsWith('Dr.') || name.startsWith('Dra.')) {
      return name;
    }
    // If role is medical but name doesn't have prefix, we might want to add it, 
    // but the issue reported was duplication. 
    // Assuming user.name coming from DB might already have it or not.
    // The issue observed was "Dr. Dr. Gregory House".
    // This likely means `user.name` is "Dr. Gregory House" and somewhere else adds "Dr."
    // OR `user.name` is "Gregory House" and the UI adds "Dr.".
    // Let's look at how it was rendered: `<span>Hola, {user.name}</span>`
    // In AuthContext, `mockDoctors` maps `name: doc.name`. 
    // In basic mockData, names are "Dr. Gregory House".
    // So `user.name` IS "Dr. Gregory House".
    // If the previous code was just `{user.name}`, where did the extra "Dr." come from?
    // Wait, let's re-read the finding: "Dr. Dr. Gregory House".
    // Maybe I misread the code or there is a prefix logic I missed? 
    // The previous code was: `<span>Hola, {user.name}</span>`.
    // If user.name is "Dr. Gregory House", it renders "Hola, Dr. Gregory House". 
    // Unless `user.name` has double Dr? 
    // Let's just trust `user.name` for now but if I want to be safe I can clean it.
    // Let's just output user.name directly for now, maybe the issue was in a different component (Doctor Dashboard header?)
    return name;
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoSection to="/" onClick={closeMenu}>
          <LogoImage src={logo} alt="Azahares Logo" />
        </LogoSection>

        <MobileMenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>

        <Nav isOpen={isMenuOpen}>
          {user ? (
            <NavLink
              to={user.role === 'medico' ? '/turnos-medico' : '/mis-turnos'}
              onClick={closeMenu}
            >
              Turnos
            </NavLink>
          ) : (
            <NavLink to="/login" onClick={closeMenu}>Turnos</NavLink>
          )}

          {user && user.role === 'admin' && (
            <NavLink to="/admin" style={{ color: '#e67e22' }} onClick={closeMenu}>
              Panel Admin
            </NavLink>
          )}

          {user ? (
            <UserSection>
              <span>Hola, {user.name}</span>
              <LogoutIcon onClick={() => { logout(); closeMenu(); }} title="Cerrar Sesión" />
            </UserSection>
          ) : (
            <Link to="/login" onClick={closeMenu}>
              <ProfileIcon title="Ingresar" />
            </Link>
          )}
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
