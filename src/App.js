import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import Home from "./components/Home/Home";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./components/NavigationBar/navigationBar.scss";
import { ParallaxProvider } from "react-scroll-parallax";

import { Parallax } from "react-scroll-parallax";
import "./app.scss";

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (apiData.length < 1) {
      console.log("fetching...");
      setLoading(true);
      async function fetchData() {
        try {
          const response = await fetch(
            "https://entertainment-artists.herokuapp.com/artists"
          );
          const json = await response.json();
          setApiData(json);
          setLoading(false);
        } catch (e) {
          console.error(e);
        }
      }
      fetchData();
    }
  }, [apiData]);

  console.log(apiData);

  return (
    <Router>
      <ParallaxProvider>
        <div className="appWrapper">
          <header className="header">
            <div className="titleContainer">
              <img
                className="asset-rainbowSmall"
                src="static/assets/rainbowSmall.png"
                alt=""
              />
              <img
                className="asset-cloudShine"
                src="static/assets/cloudShine.png"
                alt=""
              />
              <img
                className="asset-cloudSmall anim-cloudHover"
                src="static/assets/cloudSmall.png"
                alt=""
              />
              <Link to="/">
                <h1>SITE TITLE</h1>
              </Link>
            </div>
            <IconButton
              aria-label="search"
              className="searchIcon"
              color="inherit"
            >
              <Link to="/search">
                <SearchIcon />
              </Link>
            </IconButton>
          </header>

          <div className="contentContainer">
            <div className="box-color"></div>
            <div className="box-color"></div>
            <div className="box-color"></div>
            <div className="box-color"></div>
            <Parallax
              className="asset-clouds asset"
              y={[100, -100]}
              tagOuter="figure"
            >
              <img className="anim-cloudHover" src="static/assets/clouds.png" alt="" />
            </Parallax>
            <Parallax
              className="asset-cloudShine asset"
              y={[-100, 100]}
              tagOuter="figure"
            >
              <img className="anim-cloudHover" src="static/assets/cloudShine.png" alt="" />
            </Parallax>

            <Switch>
              <Route path="/search">
                <SearchForm apiData={apiData} loading={loading} />
              </Route>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>

          <footer>
            <div className="footer-contents">
              <span>DJ search site designed by etc</span>
              <span>more footer content here</span>
              <span>copyright 2020</span>
            </div>
          </footer>
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
