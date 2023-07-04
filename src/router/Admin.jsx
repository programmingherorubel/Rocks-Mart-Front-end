import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Components/Loading';

const Admin = ({children}) => {
    const {user,loading,admin}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(admin){
        return children 
    }
    

    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default Admin;