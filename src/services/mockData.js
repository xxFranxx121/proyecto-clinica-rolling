export const mockDoctors = [
    { id: 1, name: 'Dr. Gregory House', specialty: 'Clínica Medica', email: 'house@clinica.com', image: 'https://i.pravatar.cc/150?u=house' },
    { id: 2, name: 'Dra. Meredith Grey', specialty: 'Cirugía General', email: 'grey@clinica.com', image: 'https://i.pravatar.cc/150?u=grey' },
    { id: 3, name: 'Dr. Shaun Murphy', specialty: 'Pediatría / Neonatología', email: 'murphy@clinica.com', image: 'https://i.pravatar.cc/150?u=shaun' },
    { id: 4, name: 'Dra. Lisa Cuddy', specialty: 'Endocrinología', email: 'cuddy@clinica.com', image: 'https://i.pravatar.cc/150?u=cuddy' },
    { id: 5, name: 'Dr. Derek Shepherd', specialty: 'Neurología', email: 'shepherd@clinica.com', image: 'https://i.pravatar.cc/150?u=derek' },
    { id: 6, name: 'Dra. Addison Montgomery', specialty: 'Ginecología', email: 'montgomery@clinica.com', image: 'https://i.pravatar.cc/150?u=addison' },
    { id: 7, name: 'Dra. Cristina Yang', specialty: 'Cardiología', email: 'yang@clinica.com', image: 'https://i.pravatar.cc/150?u=yang' },
];

export const mockAppointments = [
    { id: 101, doctorId: 1, patientName: 'Juan Pérez', date: '2023-11-15', time: '09:00', status: 'confirmado', reason: 'Dolor de cabeza' },
    { id: 102, doctorId: 2, patientName: 'Maria Gómez', date: '2023-11-16', time: '10:30', status: 'pendiente', reason: 'Consulta general' },
    { id: 103, doctorId: 3, patientName: 'Tomasito Ruiz', date: '2023-11-17', time: '14:00', status: 'confirmado', reason: 'Control pediátrico' },
    { id: 104, doctorId: 1, patientName: 'Ana García', date: '2023-11-15', time: '11:30', status: 'pendiente', reason: 'Resultados análisis' },
    { id: 105, doctorId: 3, patientName: 'Lucía Lopez', date: '2023-11-18', time: '09:00', status: 'pendiente', reason: 'Fiebre' },
    { id: 106, doctorId: 7, patientName: 'Roberto B.', date: '2023-11-19', time: '16:00', status: 'confirmado', reason: 'Control post-cirugía' }
];
