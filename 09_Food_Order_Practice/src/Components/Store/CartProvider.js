import { useReducer } from 'react'

import CartContext from './cart-context.js'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, actions) => {
    if(actions.type === 'ADD'){
        const updatedItems = state.item.concat(actions.item)
        const updatedTotalAmount = state.totalAmount + actions.item.price * actions.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = props => {
const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState)

    const addItemtoCartHandler = item => {
        dispatchCartActions({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = id => {

    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler

    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider