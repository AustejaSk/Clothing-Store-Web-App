import React from "react"

import visaImg from '../../images/visa.png'

import { FaAngleDown } from "react-icons/fa6"

const CartPayment = ({ selectedProducts, setSelectedProducts, roundNumber, setIsPopupVisible }) => {

    const shippingFee = 6

    const totalItemsCount = selectedProducts.reduce((acc, product) => acc + product.itemCount, 0)
    const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price * product.itemCount, 0)

    const handlePayClick = () => {
        setIsPopupVisible(true)
        setTimeout(() => {
            setSelectedProducts([])
        }, 1000)
    }

    return (
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

            <button className='cart__payment__btn' onClick={handlePayClick}>Pay</button>
        </div>
    )
}

export default CartPayment