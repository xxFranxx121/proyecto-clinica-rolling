import { createContext, useState, useContext, useEffect } from 'react';
import { mockDoctors } from '../services/mockData';

const AuthContext = createContext();

// 1. Base de Datos Simulada (Usuarios Base)
const BASE_USERS = [
    {
        email: 'admin@clinica.com',
        password: 'admin123',
        name: 'Carlos Admin',
        role: 'admin'
    },
    {
        email: 'pepe@gmail.com',
        password: 'pepe123',
        name: 'Pepe Argento',
        role: 'paciente'
    }
];

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState(BASE_USERS); // Initialize with base

    useEffect(() => {
        // Generate Doctor Users from mockData
        const doctorUsers = mockDoctors.map(doc => ({
            email: doc.email || `doc${doc.id}@clinica.com`, // Fallback
            password: '123', // Default simplified password for doctors
            name: doc.name,
            role: 'medico',
            specialty: doc.specialty,
            id: doc.id
        }));

        // Load permanently registered users from LocalStorage
        const storedRegisteredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');

        const combinedUsers = [...BASE_USERS, ...doctorUsers, ...storedRegisteredUsers];
        setAllUsers(combinedUsers);

        // Check local storage on initial load for active session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email, password) => {
        // 2. Lógica de Login Estricta
        const foundUser = allUsers.find(u => u.email === email && u.password === password);

        if (foundUser) {
            // 3. Login Exitoso: Guardar usuario (sin password)
            // eslint-disable-next-line no-unused-vars
            const { password, ...userWithoutPass } = foundUser;

            setUser(userWithoutPass);
            localStorage.setItem('user', JSON.stringify(userWithoutPass));
            return { success: true };
        } else {
            // 4. Login Fallido
            return { success: false, message: 'Credenciales inválidas. Verifique email y contraseña.' };
        }
    };

    const register = (userData) => {
        // Check if email already exists
        if (allUsers.some(u => u.email === userData.email)) {
            return { success: false, message: 'El correo electrónico ya está registrado.' };
        }

        const newUser = { ...userData, id: Date.now() };

        // Update Session State
        const { password, ...userWithoutPass } = newUser;
        setUser(userWithoutPass);
        localStorage.setItem('user', JSON.stringify(userWithoutPass));

        // Update All Users List (Runtime)
        setAllUsers([...allUsers, newUser]);

        // Persist new user to Storage (so they exist after refresh)
        const storedRegisteredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
        localStorage.setItem('registered_users', JSON.stringify([...storedRegisteredUsers, newUser]));

        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const value = {
        user,
        login,
        logout,
        register
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
