import React from "react";
import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'
import {Container,ContainerLeft,PageLink,ContainerRight,ContainerText,Line,PageLinkExit} from './styles'

export const Header = () =>{

    return (
        <Container>

            <ContainerLeft>
                <PageLink>
                    Home
                </PageLink>

                <PageLink>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>
                     <Line></Line>
                <PageLink>
                    <img src={Cart} alt="carrinho" />
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
