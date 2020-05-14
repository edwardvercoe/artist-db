import React, { useState } from "react";
import "./searchForm.scss";
import Container from "@material-ui/core/Container";
import CitySelect from "./CitySelect/CitySelect";
import ArtistCard from "./ArtistCard/ArtistCard";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";

export default function SearchForm({ apiData }) {
  const [city, setCity] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = () => {
    console.log("submitting");
    // CITY SEARCH
    const results = apiData.filter((data) => {
      if (city.some((x) => x === data.city)) return data;
    });
    console.log(results);
    return setSearchResults(
      results.map((artist) => <ArtistCard key={artist._id} data={artist} />)
    );
  };

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
      <Container className="resultsContainer">{searchResults}</Container>
    </div>
  );
}
