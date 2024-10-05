import React from 'react'

const PopupMessage = ({ message, isVisible, placement, children }) => {

    return (
        <div className={`popup ${isVisible ? 'fade-in' : 'fade-out'} ${placement}`}>
            {children ? children : (
                <p className='popup__message'>{message}</p>
            )}
        </div>
    )
}

export default PopupMessage