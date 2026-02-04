import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  width: 100%;
`;

const LoginCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: 1.8rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: ${({ theme }) => theme.spacing.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background-color: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const LinksContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  padding-top: ${({ theme }) => theme.spacing.medium};
`;

const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Very basic validation
    if (!email || !password) {
      setError('Por favor complete todos los campos');
      return;
    }

    const result = login(email, password);
    if (result.success) {
      // Redirección basada en el ROL real del usuario
      if (result.role === 'admin') {
        navigate('/admin');
      } else if (result.role === 'medico') {
        navigate('/turnos-medico');
      } else {
        navigate('/menu-paciente');
      }
    } else {
      setError(result.message);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Bienvenido</Title>
        <Subtitle>Ingrese a su cuenta</Subtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <IconWrapper><FaUser /></IconWrapper>
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <IconWrapper><FaLock /></IconWrapper>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <Button type="submit">Ingresar</Button>
        </Form>

        <LinksContainer>
          <LinkItem onClick={() => navigate('/register')}>Crear Cuenta Nueva</LinkItem>
        </LinksContainer>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
