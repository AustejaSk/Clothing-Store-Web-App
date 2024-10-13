import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { FaAngleLeft } from "react-icons/fa6"

const PageHeader = ({ name }) => {

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
        <div className='page__header'>
            <button className='page__header__backBtn' onClick={handleBackClick}><FaAngleLeft /></button>
            <h1 className='page__header__title'>{name}</h1>
        </div>
    )
}

export default PageHeader