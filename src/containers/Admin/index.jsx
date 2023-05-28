import React from "react"
import { Container,ContainerItens } from "./styles"
import Orders from "./Orders"
import { SideMenuAdmin } from "../../components/"
import ListProducts from "./ListProducts"
import paths from "../../constants/paths"
import NewProduct from "./NewProduct"

export const Admin = ({match:{path}})=>{
    //console.log(path)
    return (
        <Container>
            <SideMenuAdmin path={path}/>
            <ContainerItens>
                {path === paths.Order && <Orders/> }
                {path === paths.Products && <ListProducts/> }
                {path === paths.NewProduct && <NewProduct/>}
                
            </ContainerItens>

        </Container>
    )
}