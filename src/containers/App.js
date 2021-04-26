//src/containers/App.js

import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Header from "../components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      //same as robots.length === 0
      <div className="loader">
        <div className="loader-ring"></div>
      </div>
    ) : (
      <div>
        <Header>
          <h1 className="header__title">Our community</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </Header>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
