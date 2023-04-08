import CartContext from './cart-context.js'

const CartProvider = props => {
    const addItemtoCartHandler = item => {

    }
    const removeItemFromCartHandler = id => {

    }
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler

    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider