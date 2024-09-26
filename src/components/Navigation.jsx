import React from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '../images/home-icon.png'
import cartIcon from '../images/cart-icon.png'
import favouriteIcon from '../images/favourite-icon.png'
import accountIcon from '../images/account-icon.png'

const Navigation = ({ selectedProducts }) => {
    return (
        <nav className='navigationBar'>
            <Link to='/' className='navigationBar__link'>
                <img className='navigationBar__img' src={homeIcon} alt="Home"/>
            </Link>
            <Link to='cart' className='navigationBar__link'>
                <img className='navigationBar__img' src={cartIcon} alt="Cart"/>
                {selectedProducts.length !== 0 && <div className='navigationBar__itemsBubble'></div>}
            </Link>
            <Link to='favourite' className='navigationBar__link'>
                <img className='navigationBar__img' src={favouriteIcon} alt="Favourite"/>
            </Link>
            <Link to='account' className='navigationBar__link'>
                <img className='navigationBar__img' src={accountIcon} alt="Account"/>
            </Link>
        </nav>
    )
}

export default Navigation