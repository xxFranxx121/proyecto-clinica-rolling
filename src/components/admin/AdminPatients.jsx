import styled from 'styled-components';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Container = styled.div``;

const Toolbar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        justify-content: center;
    }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        justify-content: center;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
        box-shadow: none;
        background: transparent;
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
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`;

const Td = styled.td`
    padding: 12px;
    border-bottom: 1px solid #eee;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: right;
        padding: 10px 50px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 1.2rem;

        &::before {
            content: attr(data-label);
            font-weight: 700;
            color: ${({ theme }) => theme.colors.primary};
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
    max-width: 90%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        padding: 20px;
    }
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
                <Thead>
                    <tr>
                        <Th>Nombre</Th>
                        <Th>Obra Social</Th>
                        <Th>Antecedentes</Th>
                        <Th>Acciones</Th>
                    </tr>
                </Thead>
                <tbody>
                    {patients.map(p => (
                        <Tr key={p.id}>
                            <Td data-label="Nombre">{p.name}</Td>
                            <Td data-label="Obra Social">{p.insurance}</Td>
                            <Td data-label="Antecedentes">{p.history}</Td>
                            <Td data-label="Acciones">
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                    <FaEdit style={{ cursor: 'pointer', color: '#f39c12', fontSize: '1.2rem' }} onClick={() => handleOpen(p)} />
                                    <FaTrash style={{ cursor: 'pointer', color: '#e74c3c', fontSize: '1.2rem' }} onClick={() => { if (window.confirm('Eliminar?')) deletePatient(p.id) }} />
                                </div>
                            </Td>
                        </Tr>
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
