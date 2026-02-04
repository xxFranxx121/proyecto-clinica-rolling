import { createContext, useState, useContext } from 'react';
import { mockDoctors, mockAppointments, mockSpecialties } from '../services/mockData';

const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [doctors, setDoctors] = useState(mockDoctors);

    // --- SPECIALITIES STATE & LOGIC ---
    const [specialties, setSpecialties] = useState(() => {
        const stored = localStorage.getItem('specialties');
        return stored ? JSON.parse(stored) : mockSpecialties;
    });

    const addSpecialty = (name) => {
        const newSpec = { id: Date.now(), name };
        const newSpecialties = [...specialties, newSpec];
        setSpecialties(newSpecialties);
        localStorage.setItem('specialties', JSON.stringify(newSpecialties));
    };

    const deleteSpecialty = (id) => {
        const newSpecialties = specialties.filter(s => s.id !== id);
        setSpecialties(newSpecialties);
        localStorage.setItem('specialties', JSON.stringify(newSpecialties));
    };

    const [patients, setPatients] = useState(() => {
        const storedPatients = localStorage.getItem('patients');
        if (storedPatients) {
            return JSON.parse(storedPatients);
        }
        // Seed some mock patients
        const initialPatients = [
            { id: 1, name: 'Juan Pérez', email: 'juan@example.com', insurance: 'OSDE 210', history: 'Hipertensión' },
            { id: 2, name: 'Maria Gómez', email: 'maria@example.com', insurance: 'Swiss Medical', history: 'Sin antecedentes' }
        ];
        localStorage.setItem('patients', JSON.stringify(initialPatients));
        return initialPatients;
    });

    const [appointments, setAppointments] = useState(() => {
        const storedAppointments = localStorage.getItem('appointments');
        if (storedAppointments) {
            try {
                return JSON.parse(storedAppointments);
            } catch (error) {
                console.error("Error parsing appointments:", error);
                localStorage.setItem('appointments', JSON.stringify(mockAppointments));
                return mockAppointments;
            }
        }
        localStorage.setItem('appointments', JSON.stringify(mockAppointments));
        return mockAppointments;
    });

    // --- DOCTORS CRUD ---
    const addDoctor = (doctor) => {
        // Enforce approved: false by default for new registrations
        const newDoc = { ...doctor, id: Date.now(), approved: doctor.approved || false };
        const newDoctors = [...doctors, newDoc];
        setDoctors(newDoctors);
        // In a real app we'd save to DB/Local here too
    };

    const updateDoctor = (updatedDoctor) => {
        const newDoctors = doctors.map(d => d.id === updatedDoctor.id ? updatedDoctor : d);
        setDoctors(newDoctors);
    };

    const deleteDoctor = (id) => {
        setDoctors(doctors.filter(d => d.id !== id));
    };

    // --- PATIENTS CRUD ---
    const addPatient = (patient) => {
        const newPatients = [...patients, { ...patient, id: Date.now() }];
        setPatients(newPatients);
        localStorage.setItem('patients', JSON.stringify(newPatients));
    };

    const updatePatient = (updatedPatient) => {
        const newPatients = patients.map(p => p.id === updatedPatient.id ? updatedPatient : p);
        setPatients(newPatients);
        localStorage.setItem('patients', JSON.stringify(newPatients));
    };

    const deletePatient = (id) => {
        const newPatients = patients.filter(p => p.id !== id);
        setPatients(newPatients);
        localStorage.setItem('patients', JSON.stringify(newPatients));
    };

    // --- APPOINTMENTS CRUD ---
    const checkAvailability = (doctorId, date, time) => {
        return !appointments.some(apt =>
            Number(apt.doctorId) === Number(doctorId) &&
            apt.date === date &&
            apt.time === time &&
            apt.status !== 'cancelado'
        );
    };

    const addAppointment = (appointment) => {
        const newAppointments = [...appointments, { ...appointment, id: Date.now(), status: 'pendiente' }];
        setAppointments(newAppointments);
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
    };

    const updateAppointmentStatus = (id, newStatus) => {
        const updatedAppointments = appointments.map(apt =>
            apt.id === id ? { ...apt, status: newStatus } : apt
        );
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    };

    const deleteAppointment = (id) => {
        const updatedAppointments = appointments.filter(apt => apt.id !== id);
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    };

    const value = {
        doctors,
        addDoctor, updateDoctor, deleteDoctor,
        patients,
        addPatient, updatePatient, deletePatient,
        appointments,
        addAppointment, updateAppointmentStatus, deleteAppointment,
        checkAvailability,
        specialties, addSpecialty, deleteSpecialty
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
