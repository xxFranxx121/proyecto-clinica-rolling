import styled from 'styled-components';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { FaUserMd, FaClock, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const ProfileCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: ${({ theme }) => theme.spacing.xlarge};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  background-color: #f0f0f0;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  margin: 0 auto;
  overflow: hidden;
  
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Specialty = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #666;
  font-size: 0.95rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: flex-start;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const BookingSection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
`;

const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  padding-bottom: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
    color: #c62828;
    background: #ffebee;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const DetalleMedico = () => {
  const { id: doctorId } = useParams();
  const navigate = useNavigate();

  const { doctors, checkAvailability, addAppointment } = useData();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: ''
  });
  const [error, setError] = useState('');

  const doctor = doctorId && doctors.length > 0
    ? doctors.find(d => d.id === Number(doctorId))
    : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.date || !formData.time || !formData.reason) {
      setError('Por favor complete todos los campos.');
      return;
    }

    const isAvailable = checkAvailability(doctorId, formData.date, formData.time);

    if (!isAvailable) {
      setError('El médico no tiene disponibilidad en ese horario.');
      return;
    }

    addAppointment({
      doctorId: Number(doctorId),
      doctorName: doctor.name,
      patientName: user?.name || 'Paciente',
      patientId: user?.id,
      patientEmail: user?.email,
      date: formData.date,
      time: formData.time,
      reason: formData.reason
    });

    navigate('/mis-turnos');
  };

  if (!doctor) return <Container>Cargando información del médico...</Container>;

  return (
    <Container>
      <ProfileCard>
        <Avatar>
          {doctor.image ? <img src={doctor.image} alt={doctor.name} /> : <FaUserMd size={50} />}
        </Avatar>
        <InfoSection>
          <Name>{doctor.name}</Name>
          <Specialty>{doctor.specialty}</Specialty>
          <ContactInfo>
            <div>
              <FaClock />
              <span>Horarios: 08:00 - 20:00</span>
            </div>
            <div>
              <FaEnvelope />
              <span>{doctor.email || 'contacto@clinica.com'}</span>
            </div>
          </ContactInfo>
        </InfoSection>
      </ProfileCard>

      <BookingSection>
        <FormTitle>
          <FaCalendarAlt />
          Solicitar Turno
        </FormTitle>

        {error && <ErrorMsg><FaExclamationTriangle /> {error}</ErrorMsg>}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Fecha</Label>
            <Input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label>Horario</Label>
            <Select
              value={formData.time}
              onChange={e => setFormData({ ...formData, time: e.target.value })}
              disabled={!formData.date}
            >
              <option value="">Seleccione Horario</option>
              {["09:00", "10:00", "11:30", "14:00", "16:00", "17:30"].map(time => {
                const isAvailable = formData.date ? checkAvailability(doctorId, formData.date, time) : true;
                return (
                  <option key={time} value={time} disabled={!isAvailable}>
                    {time} {formData.date && !isAvailable ? '(Ocupado)' : ''}
                  </option>
                );
              })}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Motivo de Consulta</Label>
            <Input
              placeholder="Ej: Dolor de cabeza, Chequeo..."
              value={formData.reason}
              onChange={e => setFormData({ ...formData, reason: e.target.value })}
            />
          </FormGroup>

          <Button type="submit">Confirmar Turno</Button>
        </Form>
      </BookingSection>
    </Container>
  );
};

export default DetalleMedico;
