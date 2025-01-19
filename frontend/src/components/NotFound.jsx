import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline">Go to Home</Link>
        </div>
    );
}

export default NotFound;