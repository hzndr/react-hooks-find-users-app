//src/containers/App.js
import React from "react";
import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Header from "../components/Header";

function App() {
  const [users, setUsers] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };
    getUsers();
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = users.filter((user) => {
    return user.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !users.length ? (
    //same as robots.length === 0
    <div className="loader">
      <div className="loader-ring"></div>
    </div>
  ) : (
    <div>
      <Header>
        <h1 className="header__title">Our community</h1>
        <SearchBox searchChange={onSearchChange} />
      </Header>
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
