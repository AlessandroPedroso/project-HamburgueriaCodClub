import React from "react";
import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'
import {Container,ContainerLeft,PageLink,ContainerRight,ContainerText,Line,PageLinkExit} from './styles'
import {useHistory} from 'react-router-dom'
import {useUser} from '../../hooks/UserContext'

export const Header = () =>{
    const {push,location:{pathname}} = useHistory()
    const {logout,userData} = useUser()

    const logoutUser = ()=>{
        localStorage.removeItem('codeburger:cartInfo');
        logout()
        push('/login')
    }

    return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={()=>push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>

                <PageLink onClick={()=> push('/produtos')} isActive={pathname.includes('produtos')}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
            <PageLink onClick={()=> push('/carrinho')}>
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>
                <ContainerText>
                    <p>
                        Olá, {userData.name}
                    </p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}
