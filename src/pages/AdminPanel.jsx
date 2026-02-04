import styled from 'styled-components';
import { useState } from 'react';
import { FaUserMd, FaUserInjured, FaCalendarCheck } from 'react-icons/fa';
import AdminDoctors from '../components/admin/AdminDoctors';
import AdminPatients from '../components/admin/AdminPatients';
import AdminAppointments from '../components/admin/AdminAppointments';
import AdminSpecialties from '../components/admin/AdminSpecialties';

const AdminContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  width: 100%;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`;

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
`;

const Tab = styled.button`
    background: ${({ active, theme }) => (active ? theme.colors.primary : 'transparent')};
    color: ${({ active }) => (active ? 'white' : '#666')};
    border: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: ${({ active }) => (active ? '0 4px 10px rgba(0,0,0,0.2)' : 'none')};

    &:hover {
        background: ${({ active, theme }) => (active ? theme.colors.primary : '#e9ecef')};
        transform: translateY(-2px);
    }
`;

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('doctors');

    return (
        <AdminContainer>
            <Title>Panel de Administración</Title>

            <TabsContainer>
                <Tab active={activeTab === 'doctors'} onClick={() => setActiveTab('doctors')}>
                    <FaUserMd size={20} /> Médicos
                </Tab>
                <Tab active={activeTab === 'patients'} onClick={() => setActiveTab('patients')}>
                    <FaUserInjured size={20} /> Pacientes
                </Tab>
                <Tab active={activeTab === 'appointments'} onClick={() => setActiveTab('appointments')}>
                    <FaCalendarCheck size={20} /> Turnos
                </Tab>
                <Tab active={activeTab === 'specialties'} onClick={() => setActiveTab('specialties')}>
                    <FaCalendarCheck size={20} /> Especialidades
                </Tab>
            </TabsContainer>

            {activeTab === 'doctors' && <AdminDoctors />}
            {activeTab === 'patients' && <AdminPatients />}
            {activeTab === 'appointments' && <AdminAppointments />}
            {activeTab === 'specialties' && <AdminSpecialties />}

        </AdminContainer>
    );
};

export default AdminPanel;

