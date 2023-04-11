import { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../Store/cart-context'
import CartItem from './CartItem'

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {}
    const cartItemAddHandler = item => {}

    const cartItens = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => {
        return (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
        )
    })}</ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItens}
            <div className={classes['total']}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes['actions']}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes['button']}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart