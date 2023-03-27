import React,{useEffect,useState} from "react";
import ProductLogo from '../../assets/product-logo.png'
import api from '../../services/api'
import {Container, ProductImg,CategoryButton,CategoriesMenu} from './styles'

const Products = () =>{

    const [categorias, setCategorias] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)
    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')
            const newArray = [{id:0 , name:'Todos'}, ...data]
            setCategorias(newArray);
        }

        loadCategories()

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
        </Container>
    )
}

export default Products