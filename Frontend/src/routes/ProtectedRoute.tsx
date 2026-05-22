import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    // jika isAuthenticated bernilai false, maka redirect ke halaman login
    if(!isAuthenticated){
        return <Navigate to="/loginform" replace/>;
    }

    // jika isAuthenticated bernilai true, maka render childern
    return <Outlet />;
}