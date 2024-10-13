import React from 'react'

import PageHeader from '../components/PageHeader'
import Products from '../components/Products'
import EmptyPage from '../components/EmptyPage'

const Favourites = ({ favouriteProducts, setFavouriteProducts }) => {
    return (
        <div className='favourites'>
            <PageHeader name='Favourites' />
            {favouriteProducts?.length > 0 
                ? <Products products={favouriteProducts} favouriteProducts={favouriteProducts} setFavouriteProducts={setFavouriteProducts} />
                : <EmptyPage
                    title='No favorites yet!'
                    subtitle='Browse our collection and tap the heart icon to save your favorite items.'
                    btnText='Explore Products'
                />
            }
        </div>
    )
}

export default Favourites