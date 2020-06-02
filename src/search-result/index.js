import React, { Component } from 'react'
import SearchResultRow from './search-result-row';

 const SearchResults = (props) => {
     const rowData = props.filteredNames.map(n => 
        <SearchResultRow key={n.id.toString()} rowData={n}
        setActiveName={props.setActiveName} />);

        return (
            <div className="mt-2">
                <h4>Results for {props.name}:</h4>
                <table className="table table-hover">
                    <tbody>
                        {rowData}
                    </tbody>
                </table>
            </div>
        );
 }

 export default SearchResults;