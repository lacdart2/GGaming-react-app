

/* import React, { useState } from 'react';
import MostPopularData from '../../Data/MostPopularData';

function Search({ MostPopularData, setFilteredGames }) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        const query = event.target.value;
        console.log(query);
        setSearchQuery(query);
        const filteredGames = MostPopularData.filter((game) => {
            return game.title.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredGames(filteredGames);
    };

    return (
        <div className="search-section">
            <form className="d-flex w-50 m-4 ">
                <input className="form-control me-2 search-input" value={searchQuery}
                    onChange={handleSearch} type="search" placeholder="Search For a Game" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>

    );
}

export default Search; */
