import React from 'react';
// Components
import SearchBar from './SearchBar';
import Filter from './Filter';

const Catalogue = () => {
    return (
        <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
                <h2 className="text-4xl font-extrabold">Catalogue voitures</h2>
                <p>Trouver la voiture de vos rêves sans plus attendre</p>
            </div>

            <div className="home__filters">
                <SearchBar />
                <div className="home__filter-container">
                    <Filter title="fuel" />
                    <Filter title="year" />
                </div>
            </div>
        </div>
    );
};

export default Catalogue;