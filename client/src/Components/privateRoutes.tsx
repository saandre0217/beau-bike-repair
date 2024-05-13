import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    //@ts-ignore
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated' ));

    return(
        isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes