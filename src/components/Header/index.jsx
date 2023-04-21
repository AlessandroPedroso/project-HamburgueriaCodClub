import React from "react";
import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'
import {Container,ContainerLeft,PageLink,ContainerRight,ContainerText,Line,PageLinkExit} from './styles'
import {useNavigate,useLocation} from 'react-router-dom'

export const Header = () =>{
    const navigate = useNavigate()
    const {pathname} = useLocation()
    console.log(pathname)
    return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={()=>navigate('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>

                <PageLink onClick={()=> navigate('/produtos')} isActive={pathname.includes('produtos')}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
            <PageLink onClick={()=> navigate('/carrinho')}>
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>
                     


                <ContainerText>
                    <p>
                        Olá, Rodolfo
                    </p>
                    <PageLinkExit>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}
