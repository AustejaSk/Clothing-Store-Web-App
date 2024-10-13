import React from 'react'
import { Link } from 'react-router-dom'

import starIcon from '../images/star-icon.png'
import { FaHeart, FaRegHeart } from "react-icons/fa6"

const Products = ({ products, favouriteProducts, setFavouriteProducts }) => {

    const handleFavourite = (e, newProduct) => {
        e.preventDefault()
        e.stopPropagation()
         if (favouriteProducts?.some(favProduct => favProduct.id === newProduct.id)) {
            setFavouriteProducts(prevFav => prevFav.filter(product => product.id !== newProduct.id))
         } else {
            setFavouriteProducts(prevFav => [...prevFav, newProduct])
         }
    }

    return (
        <div className='products'>
            {products.map(product => (
                <Link to={`/${product.id}`} key={product.id} state={{ from: true }}>
                    <div className='productCard'>
                        <div className='productCard__imgContainer'>
                            <img className='productCard__image' src={product.imageUrl} alt={product.name} />
                            <button className='productCard__btn' onClick={(e) => handleFavourite(e, product)}>
                                {favouriteProducts?.some(favProduct => favProduct.id === product.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                        </div>
                        <h2 className='productCard__name'>{product.name}</h2>
                        <h4 className='productCard__category'>{product.category}</h4>
                        <div className='productCard__bottom'>
                            <h3 className='productCard__bottom__price'>${product.price}</h3>
                            <h5 className='productCard__bottom__rating'><span><img src={starIcon} alt='Star icon' /></span>{product.rating}</h5>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products