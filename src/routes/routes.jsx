import React, {useEffect} from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Home,Login,Products,Register,Cart,Admin} from '../containers/index'

import PrivateRoute from "./private-route"
const MyRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
                <PrivateRoute exact component={Home} path='/'/>
                <PrivateRoute path='/produtos' component={Products}/>
                <PrivateRoute path='/carrinho' component={Cart}/>
                <PrivateRoute path="/pedidos" isAdmin component={Admin} />

            </Switch>

        </Router>
    )
}

export default MyRoutes