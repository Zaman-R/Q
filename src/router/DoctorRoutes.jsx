import React from 'react';
import useUserData from '../hooks/useUserData';
import { Navigate } from 'react-router-dom';

const DoctorRoutes = ({ children }) => {
    const [userData] = useUserData();

    if (userData?.isDoctor || userData?.isAdmin) {
        return children;
    } else if (userData?.isDoctor == false) {
        
        return <Navigate to="/login" replace></Navigate>;
        
    }
};

export default DoctorRoutes;