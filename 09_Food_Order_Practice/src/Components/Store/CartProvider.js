import { useReducer } from 'react'

import CartContext from './cart-context.js'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, actions) => {
    if (actions.type === 'ADD') {
        
        const updatedTotalAmount = state.totalAmount + actions.item.price * actions.item.amount;
        
        const existingCartIndex = state.items.findIndex(item => item.id === actions.item.id)
        const existingCartItem = state.items[existingCartIndex]
        let updatedItems;
        
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + actions.item.amount
            };
            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = updatedItem
        } else { 
             updatedItems = state.items.concat(actions.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(actions.type === 'REMOVE'){
        const existingCartIndex = state.items.findIndex(item => item.id === actions.id)
        
        const existingItem = state.items[existingCartIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== actions.id )
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = updatedItem;
        }
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
        dispatchCartActions({ type: 'ADD', item: item })
    }
    const removeItemFromCartHandler = id => {
        dispatchCartActions({ type: 'REMOVE', id: id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler

    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider