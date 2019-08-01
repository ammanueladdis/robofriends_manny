import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// the actual list of robots imported below
import { robots } from  './robotNames'
// import the CSS family with SEGA font for H1
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
      this.setState({ robots: robots      })
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })    
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        //console.log(filteredRobots);    
        
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends - omg yay!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;