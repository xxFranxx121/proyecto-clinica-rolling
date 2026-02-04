import styled from 'styled-components';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { FaPlus, FaEdit, FaTrash, FaUserMd } from 'react-icons/fa';

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

const AdminDoctors = () => {
    const { doctors, addDoctor, updateDoctor, deleteDoctor } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDoc, setEditingDoc] = useState(null);
    const [formData, setFormData] = useState({ name: '', specialty: '', image: 'https://i.pravatar.cc/150' });

    const handleOpen = (doc = null) => {
        if (doc) {
            setEditingDoc(doc);
            setFormData(doc);
        } else {
            setEditingDoc(null);
            setFormData({ name: '', specialty: '', image: 'https://i.pravatar.cc/150' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (editingDoc) {
            updateDoctor(formData);
        } else {
            addDoctor(formData);
        }
        setIsModalOpen(false);
    };

    return (
        <Container>
            <Toolbar>
                <Button onClick={() => handleOpen()}>
                    <FaPlus /> Nuevo Médico
                </Button>
            </Toolbar>

            <Table>
                <Thead>
                    <tr>
                        <Th>Nombre</Th>
                        <Th>Especialidad</Th>
                        <Th>Estado</Th>
                        <Th>Acciones</Th>
                    </tr>
                </Thead>
                <tbody>
                    {doctors.map(doc => (
                        <Tr key={doc.id}>
                            <Td data-label="Nombre">{doc.name}</Td>
                            <Td data-label="Especialidad">{doc.specialty}</Td>
                            <Td data-label="Estado">
                                <span style={{
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    background: doc.approved ? '#e8f5e9' : '#fff3e0',
                                    color: doc.approved ? '#2e7d32' : '#ef6c00'
                                }}>
                                    {doc.approved ? 'Aprobado' : 'Pendiente'}
                                </span>
                            </Td>
                            <Td data-label="Acciones">
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                    {!doc.approved && (
                                        <button
                                            style={{
                                                padding: '4px 10px',
                                                background: '#4caf50',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '0.85rem'
                                            }}
                                            onClick={() => updateDoctor({ ...doc, approved: true })}
                                        >
                                            Aprobar
                                        </button>
                                    )}
                                    <FaEdit style={{ cursor: 'pointer', color: '#f39c12', fontSize: '1.1rem' }} onClick={() => handleOpen(doc)} />
                                    <FaTrash style={{ cursor: 'pointer', color: '#e74c3c', fontSize: '1.1rem' }} onClick={() => { if (window.confirm('Eliminar?')) deleteDoctor(doc.id) }} />
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
                        <h3>{editingDoc ? 'Editar Médico' : 'Nuevo Médico'}</h3>
                        <Input
                            placeholder="Nombre Dr/Dra"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                            placeholder="Especialidad"
                            value={formData.specialty}
                            onChange={e => setFormData({ ...formData, specialty: e.target.value })}
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

export default AdminDoctors;
