import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // if (loading) {
    //     return <div>
    //         <p>Loading...</p>
    //     </div>
    // }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/authpage' state={{ from: location }} replace />
    );
};

export default PrivateRoute;