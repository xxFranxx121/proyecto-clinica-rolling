import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  opacity: 0.3;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Subtitle = styled.h2`
  color: #666;
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Message = styled.p`
  color: #888;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  max-width: 500px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <IconWrapper>
                <FaExclamationTriangle />
            </IconWrapper>
            <Title>404</Title>
            <Subtitle>Página No Encontrada</Subtitle>
            <Message>
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </Message>
            <Button onClick={() => navigate('/')}>
                Volver al Inicio
            </Button>
        </Container>
    );
};

export default NotFound;
