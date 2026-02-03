import styled from 'styled-components';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaClock, FaCheck, FaTimes, FaCalendarDay, FaTrash } from 'react-icons/fa';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.large};
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  padding-bottom: 20px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

const WelcomeMsg = styled.span`
  color: #666;
  font-size: 1.1rem;
`;

const TableWrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f8f9fa;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #eee;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #eee;
  color: #444;
`;

const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  
  ${({ status }) => {
    switch (status) {
      case 'confirmado':
        return 'background-color: #e8f5e9; color: #2e7d32;';
      case 'cancelado':
        return 'background-color: #ffebee; color: #c62828;';
      default:
        return 'background-color: #fff3e0; color: #ef6c00;';
    }
  }}
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-right: 5px;
  color: ${({ color }) => color};

  &:hover {
    background-color: ${({ bg }) => bg};
  }
`;

const DoctorPanel = () => {
  const { appointments, updateAppointmentStatus, deleteAppointment } = useData();
  const { user } = useAuth();

  // Filter by the logged-in doctor's ID
  const myAppointments = appointments.filter(apt => apt.doctorId === user?.id);

  return (
    <Container>
      <Header>
        <Title>Gestión de Turnos</Title>
        <WelcomeMsg>Dr. {user?.name || 'Médico'}</WelcomeMsg>
      </Header>

      {myAppointments.length > 0 ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Paciente</Th>
                <Th>Fecha y Hora</Th>
                <Th>Motivo</Th>
                <Th>Estado</Th>
                <Th>Acciones</Th>
              </tr>
            </thead>
            <tbody>
              {myAppointments.map((apt) => (
                <tr key={apt.id}>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaUser style={{ color: '#ccc' }} /> {apt.patientName}
                    </div>
                  </Td>
                  <Td>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.9rem' }}>
                      <span><FaCalendarDay size={12} /> {apt.date}</span>
                      <span style={{ color: '#666' }}><FaClock size={12} /> {apt.time}</span>
                    </div>
                  </Td>
                  <Td>{apt.reason}</Td>
                  <Td>
                    <StatusBadge status={apt.status}>
                      {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                    </StatusBadge>
                  </Td>
                  <Td>
                    {apt.status === 'pendiente' && (
                      <>
                        <ActionButton
                          color="#2e7d32"
                          bg="#e8f5e9"
                          title="Confirmar"
                          onClick={() => updateAppointmentStatus(apt.id, 'confirmado')}
                        >
                          <FaCheck />
                        </ActionButton>
                        <ActionButton
                          color="#c62828"
                          bg="#ffebee"
                          title="Cancelar"
                          onClick={() => updateAppointmentStatus(apt.id, 'cancelado')}
                        >
                          <FaTimes />
                        </ActionButton>
                      </>
                    )}
                    {apt.status === 'cancelado' && (
                      <ActionButton
                        color="#444"
                        bg="#eee"
                        title="Eliminar registro"
                        onClick={() => { if (window.confirm('¿Eliminar este turno cancelado?')) deleteAppointment(apt.id) }}
                      >
                        <FaTrash />
                      </ActionButton>
                    )}
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <div style={{ textAlign: 'center', color: '#666', marginTop: '50px' }}>
          <h3>No hay turnos asignados por el momento.</h3>
        </div>
      )}
    </Container>
  );
};

export default DoctorPanel;
