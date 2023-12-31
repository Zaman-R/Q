import useUserData from "../hooks/useUserData";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const [userData] = useUserData();

    if (userData?.isAdmin) {
        return children;
    } else if (userData?.isAdmin == false) {
        
        return <Navigate to="/login" replace></Navigate>;
        
    }
};

export default AdminRoutes;