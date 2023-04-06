import CartContext from "./cart-context"

const CartProvider = props => {
    const addItemtoCartHandler = item => {
        return(
            true
        )
    }
    const removeItemFromCartHandler = id => {
        return(
            true
        )
    }
    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler

    }
    return(
        <CartContext.Provider value={CartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider