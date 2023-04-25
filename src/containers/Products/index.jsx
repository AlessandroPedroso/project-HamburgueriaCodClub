import React, { useEffect, useState } from "react";
import ProductLogo from '../../assets/product-logo.png'
import api from '../../services/api'
import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import {CardProducts} from '../../components'
import formatCurrency from '../../utils/formartCurrency'
import {useLocation} from 'react-router-dom'

export const Products = () => {



    const [categorias, setCategorias] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)
    const [productNo, SetProductNo] = useState('')

    const {state} = useLocation()

    if(state?.categoryId){
            useEffect(()=>{
        
                setActiveCategories(state.categoryId)
            
        },[state.categoryId])
    }


    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')

            const newArray = [{ id: 0, name: 'Todos' }, ...data]

            setCategorias(newArray);
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')
            const newAllProducts = allProducts.map(products => {
                return {
                    ...products,
                    fotmatedCurrency: formatCurrency(products.price)
                }
            })
            setProducts(newAllProducts);

        }

        loadCategories()
        loadProducts()

    }, [])

    useEffect(() => {

        if (activeCategories === 0) {
            setFilteredProducts(products)
        } else {

            const newFilteredProdutcs = products.filter(products => products.category_id === activeCategories)
            
            if (newFilteredProdutcs.length === 0) {

                SetProductNo('Produto não cadastrado!')
            }
            setFilteredProducts(newFilteredProdutcs)

        }
    }, [activeCategories, products])


    return (
        <Container>
            <ProductImg src={ProductLogo} alt="imagem da home" />
            <CategoriesMenu>
                {
                    categorias && categorias.map(category => (
                        <CategoryButton onClick={() => { setActiveCategories(category.id) }} isCategoryActive={activeCategories === category.id} key={category.id}>{category.name}</CategoryButton>
                    ))
                }
            </CategoriesMenu>
            <ProductsContainer>
                { filteredProducts.length > 0 ? (
                 filteredProducts.map(products => (
                    <CardProducts key={products.id} products={products} />
                ))) : (
                    <p>{productNo}</p>
                )}

            </ProductsContainer>
        </Container>
    )
}
