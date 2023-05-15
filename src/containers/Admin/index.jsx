import React from "react"
import { Container } from "./styles"
import Orders from "./Orders"
import { SideMenuAdmin } from "../../components/"
import ListProducts from "./ListProducts"

export const Admin = ()=>{
    return (
        <Container>
            <SideMenuAdmin/>
            {/* <Orders/> */}
            <ListProducts/>
        </Container>
    )
}