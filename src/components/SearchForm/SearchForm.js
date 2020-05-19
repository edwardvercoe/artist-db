import React, { useState } from "react";
import "./searchForm.scss";
import Container from "@material-ui/core/Container";
import CitySelect from "./CitySelect/CitySelect";
import ArtistCard from "./ArtistCard/ArtistCard";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import Pagination from './Pagination/Pagination'

export default function SearchForm({ apiData, loading }) {
  const [city, setCity] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [displayPagination, setDisplayPagination] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost)

    // Submit search form query

  const handleSubmit = () => {
    console.log("submitting");
    // CITY SEARCH
    setSearchResults(apiData.filter((data) => {
      return city.some((x) => x === data.city)
    }))
    // const currentArtists = results.slice(indexOfFirstPost, indexOfLastPost);

    // setSearchResults(
    //   currentArtists.map((artist) => <ArtistCard key={artist._id} data={artist} />)
    // );
    // setDisplayPagination(<Pagination postsPerPage={postsPerPage} totalPosts={results.length} paginate={paginate} />)
    console.log(searchResults);

  };

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // loading API data
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    
    <div className="searchContainer">
      <Typography variant="h2" component="h2">Search form</Typography>
      <Container className="">
        <form>
          <CitySelect setCity={setCity} city={city} />
          <Button
            size="large"
            color="primary"
            variant="contained"
            endIcon={<StarIcon />}
            onClick={() => handleSubmit()}
          >
            DISCOVER
          </Button>
        </form>
      </Container>
      <Container className="resultsContainer">
      {currentPosts.map((artist) => <ArtistCard key={artist._id} data={artist} />)}
      </Container>
      <Pagination postsPerPage={postsPerPage} totalPosts={searchResults.length} paginate={paginate} />
    </div>
  );

}
