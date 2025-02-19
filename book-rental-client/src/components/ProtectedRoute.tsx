// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { token } = useAuth();

	if (!token) {
		return <Navigate to="/login" />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
