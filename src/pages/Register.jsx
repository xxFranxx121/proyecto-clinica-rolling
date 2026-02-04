import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUserMd } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  width: 100%;
  min-height: 60vh;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: 2rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  font-size: 1.1rem;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

const OptionCard = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xlarge};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: ${({ theme }) => theme.colors.primary};
    color: white;

    svg {
      color: white;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const OptionTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
`;

const OptionDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const LoginLink = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  padding-top: ${({ theme }) => theme.spacing.medium};
  border-top: 1px solid #eee;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Register = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Card>
                <Title>Crear Cuenta</Title>
                <Subtitle>Seleccione el tipo de cuenta que desea crear</Subtitle>

                <OptionsContainer>
                    <OptionCard onClick={() => navigate('/register/paciente')}>
                        <IconWrapper>
                            <FaUser />
                        </IconWrapper>
                        <OptionTitle>Soy Paciente</OptionTitle>
                        <OptionDescription>Quiero reservar turnos y gestionar mis consultas</OptionDescription>
                    </OptionCard>

                    <OptionCard onClick={() => navigate('/register/medico')}>
                        <IconWrapper>
                            <FaUserMd />
                        </IconWrapper>
                        <OptionTitle>Soy Médico</OptionTitle>
                        <OptionDescription>Quiero gestionar mi agenda y atender pacientes</OptionDescription>
                    </OptionCard>
                </OptionsContainer>

                <LoginLink>
                    ¿Ya tienes cuenta? <a href="/login">Ingresar</a>
                </LoginLink>
            </Card>
        </Container>
    );
};

export default Register;
