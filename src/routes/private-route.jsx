import React from "react";

import { Navigate , Outlet  } from 'react-router-dom';
import { Header } from "../components";

function PrivateRoute(){
    const user = localStorage.getItem('codeburger:userDate')

    return user ? <><Header/><Outlet/></>:<Navigate to="/login"/>

    // if(!user){
    //     return <Navigate to='/login'/>
    // }

    // return <Outlet/> // redireciona para a página de home



    // if(!user){
    //     return <Navigate to="/login"/>
    // }
    
    // return <Route {...rest} element={element} />
}

export default PrivateRoute