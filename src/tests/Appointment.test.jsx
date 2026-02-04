import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DetalleMedico from '../pages/DetalleMedico';
import MisTurnos from '../pages/MisTurnos';
import { DataProvider } from '../context/DataContext';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

// Wrapper with contexts
const TestWrapper = ({ children, initialEntries = ['/'] }) => (
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <DataProvider>
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route path="/medico" element={<DetalleMedico />} />
                        <Route path="/mis-turnos" element={<MisTurnos />} />
                    </Routes>
                </MemoryRouter>
            </DataProvider>
        </AuthProvider>
    </ThemeProvider>
);

describe('Appointment Booking Logic', () => {
    it('disables occupied time slots for Doctor 1 on 2023-11-15', async () => {
        // Navigate to Doctor 1 (House)
        render(<TestWrapper initialEntries={['/medico?id=1']} />);

        // Wait for doctor data to load (it's sync but good practice)
        expect(screen.getByText('Dr. Gregory House')).toBeInTheDocument();

        // Select Date: 2023-11-15
        const dateInput = screen.getByLabelText(/Fecha/i);
        fireEvent.change(dateInput, { target: { value: '2023-11-15' } });

        // Select Time Dropdown
        const timeSelect = screen.getByText('Seleccione Horario').closest('select'); // or by role combobox?
        // Note: Styled components might not have standard roles sometimes, but <Select> translates to <select>

        // Check Options
        // 09:00 should be disabled (Confirmed apt)
        const option9 = screen.getByRole('option', { name: /09:00/i });
        expect(option9.disabled).toBe(true);
        expect(option9.textContent).toContain('(Ocupado)');

        // 11:30 should be disabled (Pending apt)
        const option1130 = screen.getByRole('option', { name: /11:30/i });
        expect(option1130.disabled).toBe(true);
        expect(option1130.textContent).toContain('(Ocupado)');

        // 10:00 should be enabled
        const option10 = screen.getByRole('option', { name: /10:00/i });
        expect(option10.disabled).toBe(false);
        expect(option10.textContent).not.toContain('(Ocupado)');
    });

    it('allows booking a free slot', async () => {
        render(<TestWrapper initialEntries={['/medico?id=1']} />);

        // Select Date: 2023-11-15
        const dateInput = screen.getByLabelText(/Fecha/i);
        fireEvent.change(dateInput, { target: { value: '2023-11-15' } });

        // Select Time: 10:00 (Free)
        const timeSelect = screen.getByDisplayValue(/Seleccione Horario/i); // Initial value
        fireEvent.change(timeSelect, { target: { value: '10:00' } });

        // Enter Reason
        const reasonInput = screen.getByPlaceholderText(/Ej: Dolor de cabeza/i);
        fireEvent.change(reasonInput, { target: { value: 'Test Reason' } });

        // Click Submit
        const submitBtn = screen.getByText(/Confirmar Turno/i);
        fireEvent.click(submitBtn);

        // Verify Navigation to Mis Turnos
        // We should see "Mis Turnos" title (based on MisTurnos.jsx content)
        // Wait for navigation
        await waitFor(() => {
            expect(screen.getByText('Mis Turnos')).toBeInTheDocument();
        });

        // Verify the new appointment is listed
        // It should have: Dr. Gregory House, 2023-11-15, 10:00, Test Reason
        expect(screen.getByText('Test Reason')).toBeInTheDocument();
    });
});
