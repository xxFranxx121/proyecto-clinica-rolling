import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AvisoHorario from '../components/AvisoHorario';
import { FaStethoscope, FaCalendarCheck, FaNotesMedical, FaInfoCircle } from 'react-icons/fa';
import heroImg from '../assets/clinic-hero.png';

const HeroWrapper = styled.section`
  height: 60vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 45vh;
  }
`;

const FullWidthSection = styled.section`
  width: 100%;
`;

const HeroSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  color: #f1f1f1;
  max-width: 700px;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xlarge};
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.accent};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const CTASection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary}; /* Brand Green */
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xlarge};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  opacity: 0.9;
  line-height: 1.5;
`;

const CTAButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.spacing.small};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSacarTurno = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (user.role === 'medico') {
      navigate('/turnos-medico');
    } else if (user.role === 'admin') {
      navigate('/admin');
    } else {
      // Paciente - Start booking flow
      navigate('/especialidades');
    }
  };

  return (
    <>
      <HeroWrapper>
        <HeroSection>
          <HeroTitle>Cuidamos tu salud, cerca de vos</HeroTitle>
          <HeroText>
            En Azahares brindamos atención médica integral con los mejores profesionales
            y tecnología de última generación.
          </HeroText>
        </HeroSection>
      </HeroWrapper>

      <FullWidthSection>
        <AvisoHorario />
      </FullWidthSection>

      <CardsGrid>
        <Card>
          <CardIcon>
            <FaStethoscope />
          </CardIcon>
          <CardTitle>Especialidades Médicas</CardTitle>
          <CardDescription>
            Más de 30 especialidades a tu disposición. Cardiología, Pediatría, Traumatología y más.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon>
            <FaCalendarCheck />
          </CardIcon>
          <CardTitle>Turnos Online</CardTitle>
          <CardDescription>
            Gestioná tus citas de manera rápida y sencilla desde la comodidad de tu hogar.
          </CardDescription>
        </Card>

        <Card onClick={() => navigate('/404')}>
          <CardIcon>
            <FaNotesMedical />
          </CardIcon>
          <CardTitle>Resultados de Estudios</CardTitle>
          <CardDescription>
            Accedé a tus informes y resultados de laboratorio sin necesidad de venir a la clínica.
          </CardDescription>
        </Card>
      </CardsGrid>

      {/* Sección: Conocé más sobre nosotros */}
      <CTASection style={{ backgroundColor: '#f8f9fa', color: '#333' }}>
        <FaInfoCircle style={{ fontSize: '3rem', color: '#2e7d32', marginBottom: '1rem' }} />
        <CTATitle style={{ color: '#2e7d32' }}>Conocé Clínica Azahares</CTATitle>
        <CTAText style={{ color: '#666' }}>
          Descubrí nuestra historia, valores y el compromiso que nos impulsa a brindarte
          la mejor atención médica. Conocé más sobre nuestro equipo y misión.
        </CTAText>
        <CTAButton
          onClick={() => navigate('/nosotros')}
          style={{ backgroundColor: '#2e7d32', color: 'white' }}
        >
          Acerca de Nosotros
        </CTAButton>
      </CTASection>

      {/* Nueva Sección CTA: Sacar Turno */}
      <CTASection>
        <CTATitle>¿Necesitás ver a un médico?</CTATitle>
        <CTAText>
          {user?.role === 'medico'
            ? 'Accedé a tu panel para ver tus próximos pacientes y gestionar tu agenda.'
            : 'Reservá tu turno online de forma rápida y segura. Elegí la especialidad y el profesional que mejor se adapte a tus horarios.'}
        </CTAText>
        <CTAButton onClick={handleSacarTurno}>
          {user?.role === 'medico' ? 'Gestionar Turnos' : 'Sacar Turno'}
        </CTAButton>
      </CTASection>
    </>
  );
};

export default Home;
