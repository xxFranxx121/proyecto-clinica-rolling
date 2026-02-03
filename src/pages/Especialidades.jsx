import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const specialties = [
    'Afiliados PAMI', 'Cardiología', 'Clínica Medica',
    'Dermatología', 'Diabetología', 'Endocrinología',
    'Estética', 'Fonoaudiologia', 'Gastroenterología',
    'Ginecología', 'Infectología', 'Laboratorio',
    'Medicina Familiar', 'Neumonología Infantil', 'Neurología',
    'Nutrición', 'Odontología', 'Oftalmología',
    'Oftalmopediatría', 'Pediatría / Neonatología', 'Psicología'
];

const Especialidades = () => {
    const navigate = useNavigate();

    const handleSelect = (specialty) => {
        // Navigate to professionals list filtering by specialty
        navigate(`/profesionales?specialty=${encodeURIComponent(specialty)}`);
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
                {specialties.map((spec, index) => (
                    <SpecialtyButton key={index} onClick={() => handleSelect(spec)}>
                        {spec}
                    </SpecialtyButton>
                ))}
            </Grid>
        </Container>
    );
};

export default Especialidades;
