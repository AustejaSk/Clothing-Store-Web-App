import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../components/PageHeader'

import customerImg from '../images/customer.png'
import settingsIcon from '../images/settings.png'
import ordersIcon from '../images/orders.png'
import accountIcon from '../images/profile.png'

const Account = () => {
    return (
        <div className='account'>
            <PageHeader name='Account' />
            <div className='customerInfo'>
                <img className='customerInfo__img' src={customerImg} alt='Profile image.' />
                <h1 className='customerInfo__name'>Emily Carter</h1>
            </div>
            <ul className='accountMenu'>
                <Link to='.' className='accountMenu__option'><img className='accountMenu__optionIcon' src={settingsIcon} alt="Settings" />Settings</Link>
                <Link to='.' className='accountMenu__option'><img className='accountMenu__optionIcon' src={accountIcon} alt="Account" />Account</Link>
                <Link to='.' className='accountMenu__option'><img className='accountMenu__optionIcon' src={ordersIcon} alt="Order history" />Order history</Link>
            </ul>
            <button className='signout-btn'>Sign out</button>
        </div>
    )
}

export default Account