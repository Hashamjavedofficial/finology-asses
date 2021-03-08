import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import { usePeopleCardStyles } from "../styles/People";

import ImageTest from "../assets/4-people/tania-ferreira.jpg";

const PeopleCard = (props) => {
  const classes = usePeopleCardStyles();
  return (
    <Card elevation={3} className={classes.CardContainer}>
      <CardActionArea disableRipple={true}>
        <IconButton className={classes.EditCardButton}>
          <CreateIcon />
        </IconButton>
        <CardMedia image={ImageTest} className={classes.CardImage} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PeopleCard;
