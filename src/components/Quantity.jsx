import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6"

const Quantity = ({ itemCount, setItemCount }) => {

    const handleCount = (method) => {
        if (method === 'decrease') {
            if (itemCount > 0) {
                setItemCount(itemCount - 1)
            }
        }

        if (method === 'increase') {
            setItemCount(itemCount + 1)
        }
    }

    return (
        <div className='product__quantity'>
            <button className='product__quantity__btn' onClick={() => handleCount('decrease')} style={itemCount === 0 ? {color: '#CAC9C9'} : {}}><FaMinus style={{color: '#000000'}} /></button>
            <p className='product__quantity__value'>{itemCount}</p>
            <button className='product__quantity__btn' onClick={() => handleCount('increase')}><FaPlus style={{color: '#000000'}} /></button>
        </div>
    )
}

export default Quantity