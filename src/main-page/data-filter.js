import React, { Component } from 'react';

class DataFilter extends Component {
    constructor (props){
        super(props);
      
        this.state = {};
      
        this.onSearchChange = this.onSearchChange.bind(this);
      
      }
    onSearchChange(e) {
        const name = e.target.value;
        this.props.filterNames(name);
    }

    render() {
        const search = this.state.search;
        const names = this.props.names || [];
        return (
            <div className="form-group row mt-3">
                <div className="offset-md-3 col-md-4">
                    Look for your name
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {names.map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

export default DataFilter;