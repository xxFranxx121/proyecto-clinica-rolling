import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaCalendarPlus, FaListAlt, FaUserCircle } from 'react-icons/fa';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.large};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const WelcomeText = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 8px;
`;

const SubText = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const MenuCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 8px;
  font-size: 1.3rem;
`;

const CardDesc = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

const MenuPaciente = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <WelcomeText>¡Hola, {user?.name || 'Paciente'}!</WelcomeText>
        <SubText>¿Cómo podemos ayudarte hoy?</SubText>
      </Header>

      <MenuGrid>
        <MenuCard onClick={() => navigate('/especialidades')}>
          <IconWrapper>
            <FaCalendarPlus />
          </IconWrapper>
          <CardTitle>Reservar Turno</CardTitle>
          <CardDesc>Elegí especialidad y profesional</CardDesc>
        </MenuCard>

        <MenuCard onClick={() => navigate('/mis-turnos')}>
          <IconWrapper>
            <FaListAlt />
          </IconWrapper>
          <CardTitle>Mis Turnos</CardTitle>
          <CardDesc>Ver turnos programados e historial</CardDesc>
        </MenuCard>

        <MenuCard onClick={() => navigate('/perfil')}>
          <IconWrapper>
            <FaUserCircle />
          </IconWrapper>
          <CardTitle>Mi Perfil</CardTitle>
          <CardDesc>Actualizar datos personales</CardDesc>
        </MenuCard>
      </MenuGrid>
    </Container>
  );
};

export default MenuPaciente;
