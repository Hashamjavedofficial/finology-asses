import React from "react";
import { Card, CardContent, makeStyles, Avatar } from "@material-ui/core";

const useSytles = makeStyles((theme) => ({
  CardComponent: {
    backgroundColor: "white",
    boxShadow: "0 0px 5px 0 #b1b1b1",
    margin: "20px 20px",
    borderRadius: "8px",
  },
  Name: {
    color: "#5b5b5b",
    fontSize: "12pt",
    fontWeight: "700",
  },
  Desigination: {
    color: "#b1b1b1",
    fontSize: "10pt",
  },
}));

const SliderCard = (props) => {
  const classes = useSytles();

  const { data } = props;

  return (
    <Card elevation={0} className={classes.CardComponent}>
      <CardContent>
        <div className="flex">
          <div>
            <Avatar src={data.image} />
          </div>
          <div className="ml-6">
            <p className={classes.Name}>{data.name}</p>
            <p className={classes.Desigination}>{data.desigination}</p>
          </div>
        </div>
        <div className="mt-4">"{data.comment}"</div>
      </CardContent>
    </Card>
  );
};

export default SliderCard;
