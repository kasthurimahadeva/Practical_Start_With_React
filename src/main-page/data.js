import React from 'react';
import DataContent from '../DataContent';

const Data = (props) => {
    if(props.data) return (
        <div>
            <div className="row data">
                <h3 className="col-md-12 text-center">
                    Panda - Karady
                </h3>
            </div>
            <DataContent data={props.data} />
        </div>
    )
    return (
        <div>No data at this time!!!</div>
    )
}
 
export default Data;