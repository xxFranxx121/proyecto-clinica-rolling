import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { FaUser, FaEnvelope, FaLock, FaIdCard } from 'react-icons/fa';

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

const RegisterPatient = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        insurance: ''
    });
    const [error, setError] = useState('');
    const { register } = useAuth();
    const { addPatient } = useData();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.password) {
            setError('Por favor complete todos los campos.');
            return;
        }

        const newUser = {
            ...formData,
            role: 'paciente'
        };

        const result = register(newUser);

        if (result.success) {
            addPatient(newUser); // Add to data context patient list
            navigate('/menu-paciente');
        } else {
            setError(result.message);
        }
    };

    return (
        <Container>
            <Card>
                <Title>Registro de Paciente</Title>
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
                    <InputGroup>
                        <Icon><FaIdCard /></Icon>
                        <Input
                            name="insurance"
                            placeholder="Obra Social (Opcional)"
                            value={formData.insurance}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <Button type="submit">Registrarse como Paciente</Button>
                </Form>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/register">Volver</Link>
                </div>
            </Card>
        </Container>
    );
};

export default RegisterPatient;
