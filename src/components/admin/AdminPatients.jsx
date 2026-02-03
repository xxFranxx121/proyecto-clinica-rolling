import styled from 'styled-components';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

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

const AdminPatients = () => {
    const { patients, addPatient, updatePatient, deletePatient } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', insurance: '', history: '' });

    const handleOpen = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData(item);
        } else {
            setEditingItem(null);
            setFormData({ name: '', email: '', insurance: '', history: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (editingItem) {
            updatePatient(formData);
        } else {
            addPatient(formData);
        }
        setIsModalOpen(false);
    };

    return (
        <Container>
            <Toolbar>
                <Button onClick={() => handleOpen()}>
                    <FaPlus /> Nuevo Paciente
                </Button>
            </Toolbar>

            <Table>
                <thead>
                    <tr>
                        <Th>Nombre</Th>
                        <Th>Obra Social</Th>
                        <Th>Antecedentes</Th>
                        <Th>Acciones</Th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(p => (
                        <tr key={p.id}>
                            <Td>{p.name}</Td>
                            <Td>{p.insurance}</Td>
                            <Td>{p.history}</Td>
                            <Td>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <FaEdit style={{ cursor: 'pointer', color: '#f39c12' }} onClick={() => handleOpen(p)} />
                                    <FaTrash style={{ cursor: 'pointer', color: '#e74c3c' }} onClick={() => { if (window.confirm('Eliminar?')) deletePatient(p.id) }} />
                                </div>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {isModalOpen && (
                <>
                    <Overlay onClick={() => setIsModalOpen(false)} />
                    <Modal>
                        <h3>{editingItem ? 'Editar Paciente' : 'Nuevo Paciente'}</h3>
                        <Input
                            placeholder="Nombre Completo"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                            placeholder="Email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Input
                            placeholder="Obra Social"
                            value={formData.insurance}
                            onChange={e => setFormData({ ...formData, insurance: e.target.value })}
                        />
                        <Input
                            placeholder="Historial / Antecedentes"
                            value={formData.history}
                            onChange={e => setFormData({ ...formData, history: e.target.value })}
                        />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
                            <Button style={{ background: '#ccc' }} onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                            <Button onClick={handleSubmit}>Guardar</Button>
                        </div>
                    </Modal>
                </>
            )}
        </Container>
    );
};

export default AdminPatients;
