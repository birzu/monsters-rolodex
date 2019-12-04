import React from 'react';
import './SearchBox.styles.scss';


const SearchBox = ({ searchChange, placeholder }) => {
    return (
        <input className="SearchBox" onChange={searchChange} type='search' placeholder={placeholder}></input>
    )
}

export default SearchBox;