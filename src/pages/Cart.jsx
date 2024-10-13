import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6"

import PopupMessage from '../components/PopupMessage'
import PageHeader from '../components/PageHeader'
import CartProduct from '../components/cart/CartProduct'
import CartPayment from '../components/cart/CartPayment'
import EmptyPage from '../components/EmptyPage'


const Cart = ({ selectedProducts, setSelectedProducts, updateItemCount }) => {

    const [isPopupVisible, setIsPopupVisible] = useState(false)

    const roundNumber = (number) => {
        return Math.round((number + Number.EPSILON) * 100) / 100
    }

    const handlePopupClose = () => {
        setIsPopupVisible(false)
    }

    return (
        <div className='cart'>
            <PageHeader name='Checkout' />

            {selectedProducts.filter(product => product.itemCount > 0).length ? (
                <>  
                    <div className='cart__products'>
                        {selectedProducts.filter(product => product.itemCount > 0).map(product => (
                            <CartProduct
                                product={product}
                                setSelectedProducts={setSelectedProducts}
                                updateItemCount={updateItemCount}
                                roundNumber={roundNumber}
                                key={product.id}
                            />
                        ))}
                    </div>
                    
                    <CartPayment
                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                        roundNumber={roundNumber}
                        setIsPopupVisible={setIsPopupVisible}
                    />
                </>
            ) : 
                <EmptyPage
                    title='Your cart is currently empty'
                    subtitle='Explore our products and add your favorites!'
                    btnText='Explore Products'
                />
            }

            <PopupMessage isVisible={isPopupVisible} placement='middle'>
                <button className='order-close-btn' onClick={handlePopupClose}><FaXmark /></button>
                <h2 className='order-heading'>🎉 Thank you for your order! 🎉</h2>
                <h3 className='order-text'>
                    Your items will be packed and shipped soon. We’ll send you an update when they’re on the way.
                </h3>
                <h4 className='order-bottom-text'>Happy shopping! 🛒✨</h4>
            </PopupMessage>
        </div>
    )
}

export default Cart