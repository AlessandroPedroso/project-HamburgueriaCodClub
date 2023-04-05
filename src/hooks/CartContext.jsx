import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

const CardContext = createContext({})

export const CardProvider = ({ children }) => {
    const [cardProducts, setCardProducts] = useState([])

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
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts))
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

        <CardContext.Provider value={{ putProductsInCart, cardProducts }}>{children}</CardContext.Provider>

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