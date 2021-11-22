import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Table from './components/Table';

import './App.css';


function App() {
    const [repos, setRepos] = useState([]);
    const [filter, setFilter] = useState("");
    const [loadMore, setLoadMore] = useState(true);
    const [githubPage, setGithubPage] = useState(1);



    useEffect(() => {
    const url = `https://api.github.com/orgs/faradayio/repos?per_page=100&page=${githubPage}`;
    console.log(url);

    if(loadMore===true){
          const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setRepos([...repos, ...json]);
            json.length < 100 ? setLoadMore(false) : setGithubPage(githubPage + 1);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    }
}, [loadMore, githubPage]);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };





  return (
    <div className="App">

      <AppBar position="fixed">
<Toolbar>
          <div className="searchContainer">
            <SearchIcon className="searchIcon" />
            <TextField
              className="searchInput"
              onChange={handleSearchChange}
              variant="standard"
              placeholder="Search"
            />
          </div>
        </Toolbar>
      </AppBar>

      <section style={{paddingTop: "100px"}}>
      <h1 align="center">Faraday Github Repos</h1>
      <p align="center">Click a card to visit that Repo's page.</p>

      
      <Table repos={repos} filter={filter}/>
      </section>
      {loadMore === true ? <p align="center">Loading...</p> : null}
    </div>
  );
}

export default App;
