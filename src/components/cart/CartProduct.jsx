import React, { useState } from 'react'

import Quantity from '../Quantity'

import { FaEllipsis } from "react-icons/fa6"

const CartProduct = ({ product, setSelectedProducts, updateItemCount, roundNumber }) => {

    const [openMenu, setOpenMenu] = useState(null)

    const handleMenuOpen = (productId) => {
        if (openMenu && openMenu.productId === productId) {
            setOpenMenu(null)
        } else {
            setOpenMenu({ productId })
        }
    }

    const handleRemoveProduct = (productId) => {
        setSelectedProducts(prevProducts => prevProducts.filter(product => product.id !== productId))
    }

    return (
        <div>
            <div className='cart__product'>
                <img className='cart__product__img' src={product.imageUrl} alt={product.name} />
                <div className='cart__product__details'>
                    <h3 className='cart__product__details__name'>{product.name}</h3>
                    <h4 className='cart__product__details__category'>{product.category}</h4>
                    <div className='cart__product__details__styles'>
                        <div className='cart__product__details__styles__color' style={{backgroundColor: product.color}}></div>
                        <div className='cart__product__details__styles__size'>{product.size}</div>
                    </div>
                    <h5 className='cart__product__details__price'>${roundNumber(product.price * product.itemCount)}</h5>
                </div>
                <div className='cart__product__controls'>
                    <button
                        className='cart__product__controls__dotsBtn'
                        onClick={() => handleMenuOpen(product.id)}
                    >
                        <FaEllipsis />
                    </button>
                    {openMenu && openMenu.productId === product.id && (
                        <button className='removeBtn' onClick={() => handleRemoveProduct(product.id)}>Remove Product</button>
                    )}
                    {product && product.itemCount !== undefined && product.setItemCount && (
                        <Quantity itemCount={product.itemCount} setItemCount={(newCount) => updateItemCount(product.id, newCount)} />
                    )}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartProduct