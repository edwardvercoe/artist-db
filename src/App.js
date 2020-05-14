import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import Home from "./components/Home/Home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./components/NavigationBar/navigationBar.scss";
import "./main.scss";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    if (apiData.length < 1) {
      console.log("fetching...");
      async function fetchData() {
        try {
          const response = await fetch(
            "https://entertainment-artists.herokuapp.com/artists"
          );
          const json = await response.json();
          setApiData(json);
        } catch (e) {
          console.error(e);
        }
      }
      fetchData();
    }
  }, []);

  console.log(apiData);

  return (
    <Router>
      <div className="appContainer">
        <AppBar position="static">
          <Toolbar className="toolbar">
            <Typography variant="h6" align="center">
              <Link to="/">Artist Entertainment</Link>
            </Typography>

            <IconButton
              aria-label="search"
              className="searchIcon"
              color="inherit"
            >
              <Link to="/search">
                <SearchIcon />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/search">
            <SearchForm apiData={apiData} />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
