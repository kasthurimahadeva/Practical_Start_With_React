import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import Data from './data';
import DataFilter from './data-filter';
import SearchResults from '../search-result';

class App extends Component {

  state = {};

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('/panda.json')
    .then(rsp => rsp.json())
    .then(data => {
      this.data = data;
      this.determineData();
      this.determineNames();
    })
  }

  determineData = () => {
    if(this.data) {
      const randomIndex = Math.floor(Math.random() * this.data.length);
      const showData = this.data[randomIndex];
      this.setState({showData});
    }
  }

  determineNames = () => {
    const names = this.data? Array.from(new Set(this.data.map(d => d.name))): [];
    names.unshift(null);
    this.setState({names});
  }

  filterNames = (name) => {
    this.setState({activeName: null});
    const filteredNames = this.data.filter(n => n.name === name);
    this.setState({filteredNames});
    this.setState({name});
  }

  setActiveName = (name) => {
    this.setState({activeRow: name});
  }

  render() {
    let activeComponent = null;
    if(this.state.name) {
      activeComponent = <SearchResults name={this.state.name} filteredNames={this.state.filteredNames} setActiveName={this.setActiveName} />;
    }
    if(this.state.activeName) {
      activeComponent = <DataFilter names={this.state.names} filterNames={this.filterNames}/>;
    }
    if(!activeComponent) {
      activeComponent = <Data data={this.state.showData} />;
    }
    return (
      <div className="container">
        <Header subtitle='Panda is awesome!!!'/>
        <DataFilter names={this.state.names} filterNames={this.filterNames}/>
        {activeComponent}
      </div>
    );
  }
}

export default App;
