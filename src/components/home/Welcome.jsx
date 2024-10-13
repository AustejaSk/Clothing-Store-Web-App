import React from 'react'
import customerImg from '../../images/customer.png'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome__textContainer'>
                <span className='welcome__textContainer__greeting'>Hello, Welcome👋</span>
                <h1 className='welcome__textContainer__customerName'>Emily Carter</h1>
            </div>
            <img className='welcome__customerImg' src={customerImg} alt='Profile image.' />
        </div>
    )
}

export default Welcome