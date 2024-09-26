import React, { useState } from 'react'

import Welcome from '../components/home-components/Welcome'
import SearchBar from '../components/home-components/SearchBar'
import Filters from '../components/home-components/Filters'
import Products from '../components/home-components/Products'


function Home({ products, categories, loading }) {

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
      <Products
        products={filteredProducts}
        loading={loading}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default Home
