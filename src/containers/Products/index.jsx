import React,{useEffect,useState} from "react";
import ProductLogo from '../../assets/product-logo.png'
import api from '../../services/api'
import {Container, ProductImg,CategoryButton,CategoriesMenu,ProductsContainer} from './styles'
import CardProducts from  '../../components/CardProducts'
import formatCurrency from '../../utils/formartCurrency'

const Products = () =>{

    const [categorias, setCategorias] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)
    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')
            const newArray = [{id:0 , name:'Todos'}, ...data]
            setCategorias(newArray);
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')
            const newAllProducts = allProducts.map(products=>{
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



    return (
        <Container>
            <ProductImg src={ProductLogo} alt="imagem da home" />
            <CategoriesMenu>
            {
                categorias && categorias.map(category =>(
                    <CategoryButton onClick={()=>{setActiveCategories(category.id)}} isCategoryActive={activeCategories === category.id} key={category.id}>{category.name}</CategoryButton>
                ))
            }
            </CategoriesMenu>
            <ProductsContainer>
                {products && products.map(products=>(

                        <CardProducts key={products.id} products={products} />
                ))}
                
            </ProductsContainer>
        </Container>
    )
}

export default Products