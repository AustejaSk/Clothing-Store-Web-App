import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaAngleLeft, FaEllipsis, FaAngleDown } from "react-icons/fa6"

import Quantity from '../components/Quantity'
import visaImg from '../images/visa.png'

const Cart = ({ selectedProducts, setSelectedProducts, updateItemCount }) => {

    const [openMenu, setOpenMenu] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    const shippingFee = 6

    const roundNumber = (number) => {
        return Math.round((number + Number.EPSILON) * 100) / 100
    }

    const totalItemsCount = selectedProducts.reduce((acc, product) => acc + product.itemCount, 0)
    const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price * product.itemCount, 0)

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

    const handleBackClick = () => {
        if (location.state && location.state.from) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return (
        <div className='cart'>
            <div className='cart__header'>
                <button className='cart__header__backBtn' onClick={handleBackClick}><FaAngleLeft /></button>
                <h1 className='cart__header__title'>Checkout</h1>
            </div>
            {selectedProducts.filter(product => product.itemCount > 0).length ? (
                <>
                    <div className='cart__products'>
                        {selectedProducts.filter(product => product.itemCount > 0).map(product => (
                            <div key={product.id}>
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
                        ))}
                    </div>

                    <div className='cart__payment'>
                        <h2 className='cart__payment__heading'>Payment and Shipping</h2>
                        <div className='cart__payment__card'>
                            <img className='cart__payment__card__icon' src={visaImg} alt='Visa Icon' />
                            <p className='cart__payment__card__numbers'>**** **** **** 2143</p>
                            <button className='cart__payment__card__btn'><FaAngleDown /></button>
                        </div>
                        <div className='cart__payment__priceDetails'>
                            <p className='cart__payment__priceDetails__name'>Total ({totalItemsCount} items)
                                <span className='cart__payment__priceDetails__price'>${roundNumber(totalPrice)}</span>
                            </p>
                            <p className='cart__payment__priceDetails__name'>Shipping Fee
                                <span className='cart__payment__priceDetails__price'>${shippingFee}</span>
                            </p>
                            <hr />
                            <p className='cart__payment__priceDetails__name'>Sub Total
                                <span className='cart__payment__priceDetails__price'>${roundNumber(totalPrice + shippingFee)}</span>
                            </p>
                        </div>
                        <button className='cart__payment__btn'>Pay</button>
                    </div>
                </>
            ) : (
                <div className='cart__empty'>
                    <h2 className='cart__empty__title'>Your cart is currently empty</h2>
                    <h3 className='cart__empty__subtitle'>Explore our products and add your favorites!</h3>
                    <Link to='/' className='cart__empty__btn'>Explore Products</Link>
                </div>
            )}
        </div>
    )
}

export default Cart