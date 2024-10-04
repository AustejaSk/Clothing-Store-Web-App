import React from 'react'

const PopupMessage = ({ message, isVisible }) => {

    return (
        <div className={`popup ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <p className='popup__message'>{message}</p>
        </div>
    )
}

export default PopupMessage