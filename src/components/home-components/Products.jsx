import React from 'react'
import { Link } from 'react-router-dom'
import starIcon from '../../images/star-icon.png'

const Products = ({ products, loading, searchTerm }) => {

    if (!loading && products.length === 0) return (
          <div className='infoContainer'>
            <p className='infoContainer__infoText'>Oops! No matches for</p>
            <p className='infoContainer__searchTerm'>'{searchTerm}'</p>
          </div>
    )

    return (
        <div className='products'>
            {products.map(product => (
                <Link to='product' key={product.id} state={{id: product.id}}>
                    <div className='products__product'>
                        <img className='products__product__image' src={product.imageUrl} alt={product.name} />
                        <h2 className='products__product__name'>{product.name}</h2>
                        <h4 className='products__product__category'>{product.category}</h4>
                        <div className='products__product__bottom'>
                            <h3 className='products__product__bottom__price'>${product.price}</h3>
                            <h5 className='products__product__bottom__rating'><span><img src={starIcon} alt='Star icon' /></span>{product.rating}</h5>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products