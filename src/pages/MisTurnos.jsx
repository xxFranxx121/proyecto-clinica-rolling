import styled from 'styled-components';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { FaCalendarCheck, FaUserMd, FaClock } from 'react-icons/fa';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
`;

const AppointmentCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const DoctorName = styled.h3`
    margin: 0;
    color: #333;
    font-size: 1.1rem;
`;

const DateInfo = styled.div`
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Reason = styled.p`
    color: #888;
    font-size: 0.9rem;
    margin: 5px 0 0 0;
    font-style: italic;
`;

const Status = styled.span`
    background-color: #e8f5e9;
    color: #2e7d32;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
`;

const EmptyState = styled.div`
    text-align: center;
    color: #999;
    margin-top: 50px;
`;

const MisTurnos = () => {
    const { appointments } = useData();
    const { user } = useAuth();

    // Filter appointments for the current user
    const myAppointments = appointments.filter(apt =>
        (user?.id && apt.patientId === user.id) ||
        (user?.email && apt.patientEmail === user.email) ||
        (user?.name && apt.patientName === user.name) // Fallback for old mock data
    );

    return (
        <Container>
            <Title>Mis Turnos Programados</Title>

            {myAppointments.length > 0 ? (
                myAppointments.map(apt => (
                    <AppointmentCard key={apt.id}>
                        <Info>
                            <DoctorName>
                                <FaUserMd style={{ marginRight: 8 }} />
                                {apt.doctorName || 'Dr. Desconocido'}
                            </DoctorName>
                            <DateInfo>
                                <FaCalendarCheck /> {apt.date}
                                <FaClock style={{ marginLeft: 10 }} /> {apt.time}
                            </DateInfo>
                            <Reason>"{apt.reason}"</Reason>
                        </Info>
                        <Status>{apt.status}</Status>
                    </AppointmentCard>
                ))
            ) : (
                <EmptyState>
                    <h3>No tenés turnos programados.</h3>
                    <p>Utilizá la opción "Reservar Turno" para agendar una cita.</p>
                </EmptyState>
            )}
        </Container>
    );
};

export default MisTurnos;
