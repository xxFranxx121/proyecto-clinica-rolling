import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Admin can access everything (Superuser)
    if (user.role === 'admin') {
        return children;
    }

    // Security Check: Force logout/redirect if user is a doctor and not approved
    // (This handles cases where access might be attempted via direct URL manipulation or stale session)
    if (user.role === 'medico' && user.approved === false) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
