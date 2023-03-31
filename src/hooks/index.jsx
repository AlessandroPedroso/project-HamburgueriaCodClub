import React from "react";

import { UserProvider } from "./UserContext";
import { CardProvider } from './CartContext';

const AppProvider = ({ children }) => (
    <UserProvider>
        <CardProvider>{children}</CardProvider>
    </UserProvider>
)

export default AppProvider