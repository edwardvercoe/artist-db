import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./artistCard.scss";

export default function ArtistCard({ data }) {
  return (
    <Card className="cardContainer">
      <div className="outerCard"></div>
      <CardActionArea className="artistImgContainer">
        <div className="horizontal-rule"></div>
        <CardMedia
          className="artistImg"
          image={process.env.PUBLIC_URL + "/static/assets/smiley.png"}
          title="Artist Avatar"
        ></CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.name}
        </Typography>
        {data.city ? (
          <Typography variant="h5" color="textSecondary" component="h3">
            {data.city}
          </Typography>
        ) : null}
        <div className="genre-container">
        {data.genre.length > 1 ? (
          data.genre.map(item => <div className="genre-chip">{item}</div>)
        ) : null}
        </div>
      </CardContent>
      <CardActions>
          {data.facebook ? <a href={data.facebook}><img src={process.env.PUBLIC_URL + "/static/socialIcons/fbIcon.svg"} alt="social media icon"/></a>:null}
          {data.instagram ? <a href={data.instagram}><img src={process.env.PUBLIC_URL + "/static/socialIcons/instaIcon.svg"} alt="social media icon"/></a>:null}
          {data.soundcloud ? <a href={data.soundcloud}><img src={process.env.PUBLIC_URL + "/static/socialIcons/scIcon.svg"} alt="social media icon"/></a>:null}

          {data.email ? <a href={data.email}><img src={process.env.PUBLIC_URL + "/static/socialIcons/mailIcon.svg"} alt="social media icon"/></a>:null}
      </CardActions>
    </Card>
  );
}
