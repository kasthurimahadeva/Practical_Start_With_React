import React, { Component } from 'react';
import './dataContent.css';

class DataContent extends Component {
    state = {  }
    render(props) { 
        const data = this.props.data;
        return ( 
            <div>
                <div className="row mt-2">
                    <h5 className="col-md-12">{data.name}</h5>
                </div>
                <div className="row">
                    <h6 className="col-md-12">{data.subtitle}</h6>
                </div>
                <div className="row">
                    <img className="col-md-5" src={data.url} alt={data.name} className="img" />
                    <p className="col-md-7">{data.description}</p>
                </div>
            </div>
         );
    }
}
 
export default DataContent;