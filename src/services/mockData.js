export const mockDoctors = [
    { id: 1, name: 'Dr. Gregory House', specialty: 'Clínica Medica', email: 'dr.house@clinica.com', image: 'https://i.pravatar.cc/150?u=house', approved: true },
    { id: 2, name: 'Dra. Meredith Grey', specialty: 'Cirugía General', email: 'grey@clinica.com', image: 'https://i.pravatar.cc/150?u=grey', approved: true },
    { id: 3, name: 'Dr. Shaun Murphy', specialty: 'Pediatría / Neonatología', email: 'murphy@clinica.com', image: 'https://i.pravatar.cc/150?u=shaun', approved: true },
    { id: 4, name: 'Dra. Lisa Cuddy', specialty: 'Endocrinología', email: 'cuddy@clinica.com', image: 'https://i.pravatar.cc/150?u=cuddy', approved: true },
    { id: 5, name: 'Dr. Derek Shepherd', specialty: 'Neurología', email: 'shepherd@clinica.com', image: 'https://i.pravatar.cc/150?u=derek', approved: true },
    { id: 6, name: 'Dra. Addison Montgomery', specialty: 'Ginecología', email: 'montgomery@clinica.com', image: 'https://i.pravatar.cc/150?u=addison', approved: true },
    { id: 7, name: 'Dra. Cristina Yang', specialty: 'Cardiología', email: 'yang@clinica.com', image: 'https://i.pravatar.cc/150?u=yang', approved: true },
];

export const mockAppointments = [
    { id: 101, doctorId: 1, patientName: 'Juan Pérez', date: '2023-11-15', time: '09:00', status: 'confirmado', reason: 'Dolor de cabeza' },
    { id: 102, doctorId: 2, patientName: 'Maria Gómez', date: '2023-11-16', time: '10:30', status: 'pendiente', reason: 'Consulta general' },
    { id: 103, doctorId: 3, patientName: 'Tomasito Ruiz', date: '2023-11-17', time: '14:00', status: 'confirmado', reason: 'Control pediátrico' },
    { id: 104, doctorId: 1, patientName: 'Ana García', date: '2023-11-15', time: '11:30', status: 'pendiente', reason: 'Resultados análisis' },
    { id: 105, doctorId: 3, patientName: 'Lucía Lopez', date: '2023-11-18', time: '09:00', status: 'pendiente', reason: 'Fiebre' },
    { id: 106, doctorId: 7, patientName: 'Roberto B.', date: '2023-11-19', time: '16:00', status: 'confirmado', reason: 'Control post-cirugía' }
];

export const mockSpecialties = [
    { id: 1, name: 'Cardiología' },
    { id: 2, name: 'Clínica Medica' },
    { id: 3, name: 'Pediatría / Neonatología' },
    { id: 4, name: 'Endocrinología' },
    { id: 5, name: 'Neurología' },
    { id: 6, name: 'Ginecología' },
    { id: 7, name: 'Dermatología' },
    { id: 8, name: 'Oftalmología' },
    { id: 9, name: 'Cirugía General' },
    { id: 10, name: 'Traumatología' }
];
