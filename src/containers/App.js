import React, { Component } from "react";
import { connect } from 'react-redux'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

// the actual list of robots imported below - commented out in mean-time
//import { robots } from  './robotNames'

// import the CSS family with SEGA font for H1
import "./App.css";

import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    console.log(this.props.store.getState())    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
      return !robots.length ? 
      <h1>Loading... yikes duuuuuude!</h1> :
      (      
        <div className="tc">
          <h1 className="f1">Robo Friends - omg yay!</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />      
            </ErrorBoundary>
          </Scroll>
          
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
