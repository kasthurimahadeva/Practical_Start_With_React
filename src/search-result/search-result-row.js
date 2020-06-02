import React from 'react'
import './searchResult.css';

const SearchResultRow = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActiveName(props.rowData);
    }

    return <tr onClick={setActive}>
        <td><img className="img-row" src={props.rowData.url} /></td>
        <td>{props.rowData.description}</td>
    </tr>
}

export default SearchResultRow;