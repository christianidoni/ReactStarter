import React from "react";
import { Card, CardMedia, Typography, Button, Box } from "@mui/material";
import "./SingleCard.css";

const SingleCard = ({ id, name, time, image, onClickHandler }) => {
  return (
    <Card className="single-card">
      <CardMedia
        component="img"
        className="single-card-media"
        image={image}
        alt={name}
      />
      <Box className="overlay">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2">{time}</Typography>
        <Button className="show-more-button" onClick={() => onClickHandler(id)}>
          Show more
        </Button>
      </Box>
    </Card>
  );
};

export default SingleCard;
