import React, { useState } from "react";
import { Link } from "react-router-dom";
import CitySelect from "./CitySelect/CitySelect";
import GenreSelect from "./GenreSelect/GenreSelect";
import ArtistCard from "./ArtistCard/ArtistCard";
import Button from "@material-ui/core/Button";
import Pagination from "./Pagination/Pagination";

import "./searchForm.scss";

export default function SearchForm({
  apiData,
  loading,
  searchResults,
  setSearchResults,
}) {
  const [city, setCity] = useState([]);
  const [genre, setGenre] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost);

  // Submit search form query

  const handleSubmit = () => {
    setCurrentPage(1);
    console.log("submitting");
    let results = apiData;

    // CITY SEARCH
    if (city.length > 0) {
      results = results.filter((data) => {
        return city.some((x) => x === data.city);
      });
    }
    if (genre.length > 0) {
      results = results.filter((data) => {
        return genre.some((x) => data.genre.includes(x.toLowerCase()));
      });
    }

    results.length < 1 ? setResultsFound(false) : setResultsFound(true);

    setSearchResults(results);
  };

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="searchContainer">
      <form className="searchForm">
        <img
          className="asset-arrowR"
          src="static/assets/arrowHoleR.png"
          alt="squiggly arrow decoration"
        />
        <span className="searchPhrase">I want to discover a DJ in</span>
        <CitySelect setCity={setCity} city={city} />
        <span className="searchPhrase">that plays</span>
        <GenreSelect genre={genre} setGenre={setGenre} />
        <span className="searchPhrase">type of music</span>

        <Link to="/search">
          {loading ? (
            <img
              className="loadingSpinner"
              src="static/assets/loading.svg"
              alt="loading spinner"
            />
          ) : (
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => handleSubmit()}
              className="btn-search"
            >
              <img
                className="asset-shine"
                src="static/assets/shine.png"
                alt="shine"
              />
              GO!
            </Button>
          )}
        </Link>
      </form>
      <div className="resultsContainer">
        {resultsFound
          ? currentPosts.map((artist) => (
              <ArtistCard key={artist._id} data={artist} />
            ))
          : <h3>No results found :(</h3>}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={searchResults.length}
        paginate={paginate}
      />
    </div>
  );
}
