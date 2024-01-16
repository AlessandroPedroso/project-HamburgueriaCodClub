import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

const CardContext = createContext({})

export const CardProvider = ({ children }) => {
    const [cardProducts, setCardProducts] = useState([])

    const updateLocalStorage = async (products) =>{

        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
    }

    const putProductsInCart = async products => {
        const cartIndex = cardProducts.findIndex(prd => prd.id === products.id)
        
        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cardProducts
            newCartProducts[cartIndex].quantity += 1
            setCardProducts(newCartProducts)
        } else {
            products.quantity = 1
            newCartProducts = [...cardProducts, products]
            setCardProducts(newCartProducts)

        }
        await updateLocalStorage(newCartProducts)
    }

    const deleteProducts = async productId =>{
        const newCart = cardProducts.filter(product => product.id !== productId)
        setCardProducts(newCart)
        await updateLocalStorage(newCart)

    }

    const increaseProducts = async productId =>{
        const newCart = cardProducts.map(product => {
            return product.id === productId ? {...product, quantity: product.quantity + 1} : product
        })

        setCardProducts(newCart)

        await updateLocalStorage(newCart)

    }


    const decreaseProducts = async productId =>{
        const cardIndex = cardProducts.findIndex(pd => pd.id === productId)

        if(cardProducts[cardIndex].quantity > 1){

            const newCart = cardProducts.map(product => {
                return product.id === productId ? {...product, quantity: product.quantity - 1} : product
            })

            setCardProducts(newCart)

            await updateLocalStorage(newCart)
        }else{
            confirm("Você deseja excluir o produto do carrinho ?") ? deleteProducts(productId): ""
            
        }

    }

    useEffect(() => {

        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {

                setCardProducts(JSON.parse(clientCartData))
            }
            
        }

        loadUserData()

    }, [])

    return (

        <CardContext.Provider value={{ putProductsInCart, cardProducts,increaseProducts,decreaseProducts,deleteProducts }}>{children}</CardContext.Provider>

    )
}

export const useCart = () => {
    const context = useContext(CardContext)

    if (!context) {
        throw new Error("useUser must be used with UserContext")
    }

    return context
}

CardProvider.prototype = {
    children: PropTypes.node
}