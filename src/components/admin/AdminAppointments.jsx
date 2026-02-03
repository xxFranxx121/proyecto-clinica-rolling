import styled from 'styled-components';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Container = styled.div``;

const Toolbar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const Th = styled.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`;

const Td = styled.td`
    padding: 12px;
    border-bottom: 1px solid #eee;
`;

const Select = styled.select`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const Input = styled.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 100;
    width: 400px;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`;

const ErrorMsg = styled.p`
    color: red;
    font-size: 0.9rem;
    margin-bottom: 10px;
`;

const AdminAppointments = () => {
    const { appointments, doctors, addAppointment, deleteAppointment, checkAvailability } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ doctorId: '', patientName: '', date: '', time: '', reason: '' });
    const [error, setError] = useState('');

    const handleOpen = () => {
        setFormData({ doctorId: '', patientName: '', date: '', time: '', reason: '' });
        setError('');
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!formData.doctorId || !formData.date || !formData.time || !formData.patientName) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const isAvailable = checkAvailability(formData.doctorId, formData.date, formData.time);

        if (!isAvailable) {
            setError('⚠️ El médico no tiene disponibilidad en ese horario.');
            return;
        }

        const selectedDoc = doctors.find(d => d.id === Number(formData.doctorId));

        addAppointment({
            ...formData,
            doctorId: Number(formData.doctorId),
            doctorName: selectedDoc ? selectedDoc.name : 'Desconocido'
        });

        setIsModalOpen(false);
    };

    return (
        <Container>
            <Toolbar>
                <Button onClick={handleOpen}>
                    <FaPlus /> Agendar Turno
                </Button>
            </Toolbar>

            <Table>
                <thead>
                    <tr>
                        <Th>Paciente</Th>
                        <Th>Médico</Th>
                        <Th>Fecha/Hora</Th>
                        <Th>Estado</Th>
                        <Th>Acciones</Th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(apt => (
                        <tr key={apt.id}>
                            <Td>{apt.patientName}</Td>
                            <Td>{apt.doctorName}</Td>
                            <Td>{apt.date} {apt.time}</Td>
                            <Td>{apt.status}</Td>
                            <Td>
                                <FaTrash style={{ cursor: 'pointer', color: '#e74c3c' }} onClick={() => { if (window.confirm('Cancelar turno?')) deleteAppointment(apt.id) }} />
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {isModalOpen && (
                <>
                    <Overlay onClick={() => setIsModalOpen(false)} />
                    <Modal>
                        <h3>Agendar Nuevo Turno</h3>
                        {error && <ErrorMsg>{error}</ErrorMsg>}

                        <label>Médico:</label>
                        <Select
                            value={formData.doctorId}
                            onChange={e => setFormData({ ...formData, doctorId: e.target.value })}
                        >
                            <option value="">Seleccione Médico</option>
                            {doctors.map(d => (
                                <option key={d.id} value={d.id}>{d.name} - {d.specialty}</option>
                            ))}
                        </Select>

                        <label>Paciente:</label>
                        <Input
                            placeholder="Nombre Paciente"
                            value={formData.patientName}
                            onChange={e => setFormData({ ...formData, patientName: e.target.value })}
                        />

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ flex: 1 }}>
                                <label>Fecha:</label>
                                <Input
                                    type="date"
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label>Hora:</label>
                                <Select
                                    value={formData.time}
                                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                                >
                                    <option value="">Hora</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="16:00">16:00</option>
                                </Select>
                            </div>
                        </div>

                        <label>Motivo:</label>
                        <Input
                            placeholder="Motivo de consulta"
                            value={formData.reason}
                            onChange={e => setFormData({ ...formData, reason: e.target.value })}
                        />

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
                            <Button style={{ background: '#ccc' }} onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                            <Button onClick={handleSubmit}>Confirmar</Button>
                        </div>
                    </Modal>
                </>
            )}
        </Container>
    );
};

export default AdminAppointments;
