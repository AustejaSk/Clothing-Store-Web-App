import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import homeFilled from '../images/home-filled.png'
import homeOutline from '../images/home-outline.png'
import cartFilled from '../images/cart-filled.png'
import cartOutline from '../images/cart-outline.png'
import favouritesFilled from '../images/favourite-filled.png'
import favouritesOutline from '../images/favourite-outline.png'
import accountFilled from '../images/account-filled.png'
import accountOutline from '../images/account-outline.png'

const Navigation = ({ selectedProducts }) => {
    const location = useLocation()

    return (
        <nav className='navigationBar'>
            <Link to='/' className='navigationBar__link'>
                <img className='navigationBar__img' src={location.pathname === '/' ? homeFilled : homeOutline} alt="Home"/>
            </Link>
            <Link to='cart' className='navigationBar__link' state={{ from: true }}>
                <img className='navigationBar__img' src={location.pathname === '/cart' ? cartFilled : cartOutline} alt="Cart"/>
                {selectedProducts.length !== 0 && <div className='navigationBar__itemsBubble'></div>}
            </Link>
            <Link to='favourites' className='navigationBar__link' state={{ from: true }}>
                <img className='navigationBar__img' src={location.pathname === '/favourites' ? favouritesFilled : favouritesOutline} alt="Favourites"/>
            </Link>
            <Link to='account' className='navigationBar__link'>
                <img className='navigationBar__img' src={location.pathname === '/account' ? accountFilled : accountOutline} alt="Account"/>
            </Link>
        </nav>
    )
}

export default Navigation