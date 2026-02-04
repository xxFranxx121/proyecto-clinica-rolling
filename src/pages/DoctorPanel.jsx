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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Thead = styled.thead`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Tr = styled.tr`
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    background: white;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border: 1px solid #eee;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 25px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.2rem;

    &::before {
      content: attr(data-label);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary}; // Or just a dark gray if secondary theme color is better
      font-size: 1rem;
      text-transform: uppercase;
      text-align: left;
      margin-right: 15px;
    }

    &:last-child {
      border-bottom: none;
      justify-content: flex-end;
      margin-top: 0;
      border-top: 1px solid #eee;
      padding-top: 15px;
    }
  }
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

  // Fix repetitive "Dr." prefix
  const displayName = user?.name ? (
    user.name.startsWith('Dr.') || user.name.startsWith('Dra.') ? user.name : `Dr. ${user.name}`
  ) : 'Médico';

  return (
    <Container>
      <Header>
        <Title>Gestión de Turnos</Title>
        <WelcomeMsg>{displayName}</WelcomeMsg>
      </Header>

      {myAppointments.length > 0 ? (
        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Paciente</Th>
                <Th>Fecha y Hora</Th>
                <Th>Motivo</Th>
                <Th>Estado</Th>
                <Th>Acciones</Th>
              </tr>
            </Thead>
            <tbody>
              {myAppointments.map((apt) => (
                <Tr key={apt.id}>
                  <Td data-label="Paciente">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                      {apt.patientName} <FaUser style={{ color: '#ccc' }} />
                    </div>
                  </Td>
                  <Td data-label="Fecha y Hora">
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.9rem', alignItems: 'flex-end' }}>
                      <span>{apt.date} <FaCalendarDay size={12} /></span>
                      <span style={{ color: '#666' }}>{apt.time} <FaClock size={12} /></span>
                    </div>
                  </Td>
                  <Td data-label="Motivo">{apt.reason}</Td>
                  <Td data-label="Estado">
                    <StatusBadge status={apt.status}>
                      {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                    </StatusBadge>
                  </Td>
                  <Td data-label="Acciones">
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                    </div>
                  </Td>
                </Tr>
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
