import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './pages/AdminPanel';
import DoctorPanel from './pages/DoctorPanel';
import MenuPaciente from './pages/MenuPaciente';
import Profesionales from './pages/Profesionales';
import DetalleMedico from './pages/DetalleMedico';
import DetalleTurno from './pages/DetalleTurno';
import MisTurnos from './pages/MisTurnos';
import Especialidades from './pages/Especialidades';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminPanel />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/turnos-medico"
                  element={
                    <ProtectedRoute requiredRole="medico">
                      <DoctorPanel />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/menu-paciente"
                  element={
                    <ProtectedRoute requiredRole="paciente">
                      <MenuPaciente />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/mis-turnos"
                  element={
                    <ProtectedRoute requiredRole="paciente">
                      <MisTurnos />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/especialidades"
                  element={
                    <ProtectedRoute requiredRole="paciente">
                      <Especialidades />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profesionales"
                  element={
                    <ProtectedRoute requiredRole="paciente">
                      <Profesionales />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/medico"
                  element={
                    <ProtectedRoute requiredRole="paciente">
                      <DetalleMedico />
                    </ProtectedRoute>
                  }
                />
                <Route path="/turno" element={<DetalleTurno />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
