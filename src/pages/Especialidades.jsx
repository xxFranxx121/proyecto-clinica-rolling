import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { FaCalendarCheck } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary}; /* Teal/Green */
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
`;

const SpecialtyButton = styled.button`
  background-color: #2a9d8f; /* Teal color from image reference */
  color: white;
  border: none;
  border-radius: 6px;
  padding: 15px 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background-color: #21867a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;



const Especialidades = () => {
  const navigate = useNavigate();
  const { specialties } = useData();

  const handleSelect = (specialtyName) => {
    navigate(`/profesionales?specialty=${encodeURIComponent(specialtyName)}`);
  };

  return (
    <Container>
      <Header>
        <IconWrapper>
          <FaCalendarCheck />
        </IconWrapper>
        <Title>Reservar Turno</Title>
        <Subtitle>Turno Presencial</Subtitle>
      </Header>

      <SectionTitle>Elige una especialidad:</SectionTitle>

      <Grid>
        {specialties.map((spec) => (
          <SpecialtyButton key={spec.id} onClick={() => handleSelect(spec.name)}>
            {spec.name}
          </SpecialtyButton>
        ))}
      </Grid>
    </Container>
  );
};

export default Especialidades;
