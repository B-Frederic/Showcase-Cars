"use client";
import React, { useState } from 'react';
// Components
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState("");

    const handleSearch = () => {

    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__items">
                <SearchManufacturer 
                    setManufacturer={setManufacturer}
                />
            </div>
        </form>
    );
};

export default SearchBar;