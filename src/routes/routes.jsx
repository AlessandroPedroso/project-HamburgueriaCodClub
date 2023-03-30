import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home,Login,Products,Register} from '../containers/index'

import PrivateRoute from "./private-route"
const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route exact path="/" element={<PrivateRoute/>}>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/produtos' element={<Products/>}/>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default MyRoutes