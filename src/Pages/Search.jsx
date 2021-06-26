import React from 'react'
import NavBar from '../components/navigation/NavBar'
import ItemsList from '../components/utilities/ItemsList'
import SearchBar from '../components/utilities/SearchBar'
import {isAuthenticated} from '../components/login/Auth'
const Search = () => {
    return (
        <div>
            <NavBar/>
            <ItemsList/>
            {isAuthenticated() ? <SearchBar/> :<h1 style={{textAlign:"center"}}>Login first</h1> }
        </div>
    )
}

export default Search
