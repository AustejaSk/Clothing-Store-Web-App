import React, { useEffect } from 'react'

const SearchBar = ({ inputValue, setInputValue, setSearchTerm }) => {

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setSearchTerm(inputValue)
        }, 300)
  
        return () => clearTimeout(debounceTimeout)
    }, [inputValue, setSearchTerm])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className='search'>
            <div className='search__input'>
                <input className='search__input__bar'
                    type='text'
                    placeholder='Search clothes. . .'
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default SearchBar