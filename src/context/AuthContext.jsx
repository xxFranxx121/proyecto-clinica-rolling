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
        // 2. Lógica de Login Estricta (pero flexible en formato)
        const cleanEmail = email.trim().toLowerCase();

        const foundUser = allUsers.find(u =>
            u.email.toLowerCase() === cleanEmail && u.password === password
        );

        if (foundUser) {
            // Check for Doctor Approval
            if (foundUser.role === 'medico' && foundUser.approved === false) {
                return { success: false, message: 'Su cuenta está pendiente de aprobación por un administrador.' };
            }

            // 3. Login Exitoso: Guardar usuario (sin password)
            // eslint-disable-next-line no-unused-vars
            const { password, ...userWithoutPass } = foundUser;

            setUser(userWithoutPass);
            localStorage.setItem('user', JSON.stringify(userWithoutPass));
            return { success: true, role: foundUser.role };
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

    const updateUser = (updatedUser) => {
        // Update state
        setAllUsers(prevUsers => prevUsers.map(u => u.email === updatedUser.email ? updatedUser : u));

        // Update localStorage if it's a registered user
        const storedRegisteredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
        const userIndex = storedRegisteredUsers.findIndex(u => u.email === updatedUser.email);

        if (userIndex !== -1) {
            storedRegisteredUsers[userIndex] = updatedUser;
            localStorage.setItem('registered_users', JSON.stringify(storedRegisteredUsers));
        }

        // If it's the current logged in user, update session too
        if (user && user.email === updatedUser.email) {
            const { password, ...userWithoutPass } = updatedUser;
            setUser(userWithoutPass);
            localStorage.setItem('user', JSON.stringify(userWithoutPass));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const value = {
        user,
        login,
        logout,
        login,
        logout,
        register,
        updateUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
