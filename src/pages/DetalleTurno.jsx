import styled from 'styled-components';
import { FaUserMd, FaCalendarDay, FaClock, FaNotesMedical, FaCheckCircle } from 'react-icons/fa';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  padding: ${({ theme }) => theme.spacing.xlarge};
  position: relative;
  overflow: hidden;
`;

const StatusBand = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: ${({ status }) => (status === 'confirmado' ? '#2e7d32' : '#fbc02d')};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const StatusBadge = styled.span`
  background-color: ${({ status }) => (status === 'confirmado' ? '#e8f5e9' : '#fff9c4')};
  color: ${({ status }) => (status === 'confirmado' ? '#2e7d32' : '#f57f17')};
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.8rem;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #777;
  font-size: 0.95rem;
  margin-top: ${({ theme }) => theme.spacing.small};
`;

const InfoGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const IconBox = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.85rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`;

// Mock Data
const turno = {
    id: 12345,
    status: 'confirmado',
    doctor: 'Dr. Gregory House',
    specialty: 'Diagnóstico Clínico',
    date: 'Jueves 8 de Junio',
    time: '09:00 hs',
    reason: 'Consulta de control y seguimiento de tratamiento.'
};

const DetalleTurno = () => {
    return (
        <Container>
            <Card>
                <StatusBand status={turno.status} />
                <Header>
                    <StatusBadge status={turno.status}>
                        <FaCheckCircle /> {turno.status}
                    </StatusBadge>
                    <Title>Detalle del Turno</Title>
                    <Subtitle>Código de reserva: #{turno.id}</Subtitle>
                </Header>

                <InfoGrid>
                    <InfoItem>
                        <IconBox><FaUserMd /></IconBox>
                        <InfoContent>
                            <Label>Profesional</Label>
                            <Value>{turno.doctor}</Value>
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>{turno.specialty}</span>
                        </InfoContent>
                    </InfoItem>

                    <InfoItem>
                        <IconBox><FaCalendarDay /></IconBox>
                        <InfoContent>
                            <Label>Fecha y Hora</Label>
                            <Value>{turno.date} - {turno.time}</Value>
                        </InfoContent>
                    </InfoItem>

                    <InfoItem>
                        <IconBox><FaNotesMedical /></IconBox>
                        <InfoContent>
                            <Label>Motivo de Consulta</Label>
                            <Value>{turno.reason}</Value>
                        </InfoContent>
                    </InfoItem>
                </InfoGrid>
            </Card>
        </Container>
    );
};

export default DetalleTurno;
