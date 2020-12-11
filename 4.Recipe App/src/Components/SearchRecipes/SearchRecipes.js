import React, { useState } from 'react'
import './SearchRecipes.scss'

const SearchRecipes = ({ searchRecipe }) => {
    const [search, setSearch] = useState('')

    return (
        <form className="search" action="" onSubmit={(e) => searchRecipe(e, search)}>
            <input className="search-input" type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="search-btn" type="submit">Search</button>
        </form>
    );
}

export default SearchRecipes;
