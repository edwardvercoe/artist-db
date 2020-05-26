import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
          title="Contemplative Reptile"
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
        {data.genre.length > 1 ? (
          <Typography variant="body2" color="textSecondary" component="p">
            Genres: {data.genre.join(", ")}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          FB
        </Button>
        <Button size="small" color="primary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}
