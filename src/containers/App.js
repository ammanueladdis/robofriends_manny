import React, { Component } from "react";
import { connect } from 'react-redux'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from '../components/Header';

// the actual list of robots imported below - commented out in mean-time
//import { robots } from  './robotNames'

// import the CSS family with SEGA font for H1
import "./App.css";

import { setSearchField, requestRobots } from '../actions'

//TODO: rememner sending and receiving state functions below - also different export at end of file
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) 
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
      return isPending ? 
      <h1>Loading... yikes duuuuuude!</h1> :
      (      
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />      
            </ErrorBoundary>
          </Scroll>
          
        </div>
      );
  }
}

//TODO: how to export for React-redux. Higher=order components 
export default connect(mapStateToProps, mapDispatchToProps)(App);
