import React from 'react'
import skirtIcon from '../../images/skirt.png'
import dressIcon from '../../images/dress.png'
import tshirtIcon from '../../images/t-shirt.png'
import pantsIcon from '../../images/pants.png'
import allItemsIcon from '../../images/allItems-icon.png'

const Filters = ({ categories, filters, getFilters }) => {

    const getIcon = (category) => {
        if (category === 'dress') {
            return <img className='filter__option__icon' src={dressIcon} />
        }
        if (category === 't-shirt') {
            return <img className='filter__option__icon' src={tshirtIcon} />
        }
        if (category === 'trousers') {
            return <img className='filter__option__icon' src={pantsIcon} />
        }
        if (category === 'skirt') {
            return <img className='filter__option__icon' src={skirtIcon} />
        }
    }

    return (
        <div className='filter'>
            <button className='filter__option dark' onClick={() => getFilters('all')}>
                <img className='filter__option__icon' src={allItemsIcon} />
                All Items
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={`filter__option ${filters.includes(category) && 'active'}`}
                    onClick={() => getFilters(category)}
                >{getIcon(category)}{category[0].toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    )
}

export default Filters