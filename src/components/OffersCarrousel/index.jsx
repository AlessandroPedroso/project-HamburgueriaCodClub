import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { Container, CategoryImg,ContainerItems,Image,Button } from './styles'
import Offer from '../../assets/offer.png'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formartCurrency'

export function OffersCarrousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {

        async function loadOffers() {
            const { data } = await api.get('products')
            const onlyOffers = data.filter(products=> products.offer).map(products=>{
                return {...products, formatedPrice: formatCurrency(products.price)}
            })
            setOffers(onlyOffers);
        }

        loadOffers()

    }, [])
    const breakPoints = [
        {width:1, itemsToShow:1},
        {width:400, itemsToShow:2},
        {width:600, itemsToShow:3},
        {width:900, itemsToShow:4},
        {width:1300, itemsToShow:5}
    ]
    return (
        <Container>
            <CategoryImg src={Offer} alt="logo da oferta" />
            <Carousel itemsToShow={5} style={{width:'80%'}} breakPoints={breakPoints}>
                {
                  offers && offers.map(products => (
                    <ContainerItems key={products.id}>
                        <Image src={products.url} alt="foto do produto" />
                        <p>{products.name}</p>
                        <p>{products.formatedPrice}</p>
                        <Button>Peça agora</Button>
                    </ContainerItems>
                    
                  ))
                }
            </Carousel>
        </Container>
    )
}