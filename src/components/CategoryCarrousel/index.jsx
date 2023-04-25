import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { Container, CategoryImg,ContainerItems,Image,Button } from './styles'
import Category from '../../assets/category.png'
import Carousel from 'react-elastic-carousel'

export function CategoryCarrousel() {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategorias(data);
        }

        loadCategories()

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
            <CategoryImg src={Category} alt="" />
            <Carousel itemsToShow={5} style={{width:'80%'}} breakPoints={breakPoints}>
                {
                  categorias && categorias.map(cate => (
                    <ContainerItems key={cate.id}>
                        <Image src={cate.url} alt="foto da categoria" />
                        <Button to={'/produtos'} state={{categoryId:cate.id}}>{cate.name}</Button>
                    </ContainerItems>
                    
                  ))
                }
            </Carousel>
        </Container>
    )
}