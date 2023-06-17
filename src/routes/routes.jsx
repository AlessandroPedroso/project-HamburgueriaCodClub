import React, {useEffect} from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Home,Login,Products,Register,Cart,Admin} from '../containers/index'

import paths from '../constants/paths'

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
                <PrivateRoute path={paths.Order} isAdmin component={Admin} />
                <PrivateRoute path={paths.Products} isAdmin component={Admin} />
                <PrivateRoute path={paths.NewProduct} isAdmin component={Admin} />
                <PrivateRoute path={paths.EditProduct} isAdmin component={Admin} />

            </Switch>

        </Router>
    )
}

export default MyRoutes