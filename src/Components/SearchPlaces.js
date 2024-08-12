import React, { useState } from 'react';
import data from '../data/places.json'; // Adjust the path as needed
import './SearchPlaces.css';

const SearchPlaces = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    // Filter data based on search term
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginate the filtered data
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="search-places">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search places"
                className="search-box"
            />
            <table className="places-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(page => Math.min(page + 1, Math.ceil(filteredData.length / itemsPerPage)))}
                    disabled={currentPage >= Math.ceil(filteredData.length / itemsPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchPlaces;
