import React from "react";

import { Route,Redirect  } from 'react-router-dom';
import { Header } from "../components";


function PrivateRoute({isAdmin,component,...rest}){
    const user = localStorage.getItem('codeburger:userDate')

    if(!user){
        return <Redirect to='/login'/>
    }

    if(isAdmin && !JSON.parse(user).admin){
        return <Redirect to='/' />
    }


    return (
        <>
            {!isAdmin && <Header/>}
            <Route {...rest} component={component}/>
        </>
    )
    


    // if(user && userAdmin.admin == false){
    //     return <Outlet/>
    // }
 
    // return user ? <>{!userAdmin.admin && <Header/>}<Outlet/></>:<Navigate to="/login"/>



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