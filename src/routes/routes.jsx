import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from "../containers/Home";
import PrivateRoute from "./private-route"
const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route exact path="/" element={<PrivateRoute/>}>
                    <Route exact path='/' element={<Home/>}/>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default MyRoutes