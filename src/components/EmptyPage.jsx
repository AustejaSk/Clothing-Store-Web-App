import React from 'react'
import { Link } from 'react-router-dom'

const EmptyPage = ({ title, subtitle, btnText }) => {
    return (
        <div className='emptyPage'>
            <h2 className='emptyPage__title'>{title}</h2>
            <h3 className='emptyPage__subtitle'>{subtitle}</h3>
            <Link to='/' className='emptyPage__btn'>{btnText}</Link>
        </div>
    )
}

export default EmptyPage