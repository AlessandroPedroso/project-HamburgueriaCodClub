import React from "react";
import { Container,ItemContainer,ListLink } from "./styles";
import listLink from "./menu-list";
import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from "../../hooks/UserContext";
export const SideMenuAdmin = ({path}) =>{
    const {logout} = useUser()

   return (
        <Container>
            <hr />
            {listLink.map(item=> (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon"/>
                    <ListLink to={item.link} >{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr />
             <ItemContainer style={{position:'fixed', bottom:'30px'}}>
                <LogoutIcon style={{color:'white'}}/>
                <ListLink to='/login' onClick={()=> logout()}>Sair</ListLink>
            </ItemContainer>   
        </Container>
   )
}
