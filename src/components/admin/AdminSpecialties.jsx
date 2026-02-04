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

const AdminSpecialties = () => {
    const { specialties, addSpecialty, deleteSpecialty } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSpecName, setNewSpecName] = useState('');

    const handleSubmit = () => {
        if (!newSpecName.trim()) return;
        addSpecialty(newSpecName);
        setNewSpecName('');
        setIsModalOpen(false);
    };

    return (
        <Container>
            <Toolbar>
                <Button onClick={() => setIsModalOpen(true)}>
                    <FaPlus /> Nueva Especialidad
                </Button>
            </Toolbar>

            <Table>
                <thead>
                    <tr>
                        <Th>Nombre</Th>
                        <Th>Acciones</Th>
                    </tr>
                </thead>
                <tbody>
                    {specialties.map(spec => (
                        <tr key={spec.id}>
                            <Td>{spec.name}</Td>
                            <Td>
                                <FaTrash
                                    style={{ cursor: 'pointer', color: '#e74c3c' }}
                                    onClick={() => { if (window.confirm(`Eliminar ${spec.name}?`)) deleteSpecialty(spec.id) }}
                                />
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {isModalOpen && (
                <>
                    <Overlay onClick={() => setIsModalOpen(false)} />
                    <Modal>
                        <h3>Nueva Especialidad</h3>
                        <Input
                            placeholder="Nombre de Especialidad"
                            value={newSpecName}
                            onChange={e => setNewSpecName(e.target.value)}
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

export default AdminSpecialties;
