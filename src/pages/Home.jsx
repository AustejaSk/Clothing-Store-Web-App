import React, { useState } from 'react'

import Welcome from '../components/home/Welcome'
import SearchBar from '../components/home/SearchBar'
import Filters from '../components/home/Filters'
import Products from '../components/Products'


function Home({ products, categories, loading, favouriteProducts, setFavouriteProducts }) {

  const [filters, setFilters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [inputValue, setInputValue] = useState('')

  const getFilters = (filter) => {
    setFilters(prevFilters => { 
        return filter === 'all' ? []
        : prevFilters.includes(filter)
        ? prevFilters.filter(f => f !== filter)
        : [...prevFilters, filter]
    })
    setSearchTerm('')
    setInputValue('')
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      || product.category.includes(searchTerm.toLowerCase()) : true

    const matchesFilters = filters.length === 0
      || filters.includes(product.category)

    return matchesSearch && matchesFilters
  })

  return (
    <div className='home-page'>
      <Welcome />
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchTerm={setSearchTerm}
      />
      <Filters
        categories={categories}
        filters={filters}
        getFilters={getFilters}
      />
      {!loading && filteredProducts.length === 0 ?
          <div className='infoContainer'>
            <p className='infoContainer__infoText'>Oops! No matches for</p>
            <p className='infoContainer__searchTerm'>'{searchTerm}'</p>
          </div>
      :
        <Products
          products={filteredProducts}
          favouriteProducts={favouriteProducts}
          setFavouriteProducts={setFavouriteProducts}
        />
      }
    </div>
  )
}

export default Home
