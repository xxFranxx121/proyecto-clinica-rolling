import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaUserMd, FaEnvelope, FaLock, FaIdCard, FaStethoscope } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ active, theme }) => (active ? theme.colors.primary : 'transparent')};
  color: ${({ active, theme }) => (active ? theme.colors.primary : '#888')};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
      background: #f9f9f9;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Icon = styled.span`
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
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMsg = styled.div`
  color: #e74c3c;
  background: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  
  a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      font-weight: 600;
  }
`;

const Register = () => {
    const [role, setRole] = useState('paciente'); // 'paciente' or 'medico'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        specialty: '', // Only for doctor
        insurance: ''  // Only for patient
    });
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.password) {
            setError('Por favor complete los campos obligatorios.');
            return;
        }

        if (role === 'medico' && !formData.specialty) {
            setError('Mencione su especialidad.');
            return;
        }

        const newUser = {
            ...formData,
            role: role
        };

        const result = register(newUser);

        if (result.success) {
            // Redirect based on role
            if (role === 'medico') navigate('/turnos-medico');
            else navigate('/menu-paciente');
        } else {
            setError(result.message);
        }
    };

    return (
        <Container>
            <Card>
                <Title>Crear Cuenta</Title>

                <Tabs>
                    <Tab active={role === 'paciente'} onClick={() => setRole('paciente')}>
                        <FaUser /> Soy Paciente
                    </Tab>
                    <Tab active={role === 'medico'} onClick={() => setRole('medico')}>
                        <FaUserMd /> Soy Médico
                    </Tab>
                </Tabs>

                {error && <ErrorMsg>{error}</ErrorMsg>}

                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Icon><FaUser /></Icon>
                        <Input
                            name="name"
                            placeholder="Nombre Completo"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Icon><FaEnvelope /></Icon>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Icon><FaLock /></Icon>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    {role === 'paciente' && (
                        <InputGroup>
                            <Icon><FaIdCard /></Icon>
                            <Input
                                name="insurance"
                                placeholder="Obra Social (Opcional)"
                                value={formData.insurance}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    )}

                    {role === 'medico' && (
                        <InputGroup>
                            <Icon><FaStethoscope /></Icon>
                            <Input
                                name="specialty"
                                placeholder="Especialidad (Ej: Cardiología)"
                                value={formData.specialty}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    )}

                    <Button type="submit">Registrarse</Button>
                </Form>

                <LoginLink>
                    ¿Ya tienes cuenta? <Link to="/login">Ingresar</Link>
                </LoginLink>
            </Card>
        </Container>
    );
};

export default Register;
