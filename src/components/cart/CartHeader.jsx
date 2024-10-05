import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { FaAngleLeft } from "react-icons/fa6"

const CartHeader = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleBackClick = () => {
        if (location.state && location.state.from) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return (
        <div className='cart__header'>
            <button className='cart__header__backBtn' onClick={handleBackClick}><FaAngleLeft /></button>
            <h1 className='cart__header__title'>Checkout</h1>
        </div>
    )
}

export default CartHeader