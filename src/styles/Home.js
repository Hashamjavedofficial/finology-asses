import { makeStyles } from "@material-ui/core";

export const useHomeStyles = makeStyles((theme) => ({
  LeftImage: {
    height: "30rem",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  RightImage: {
    height: "30rem",
    marginLeft: "84px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      marginLeft: 0,
    },
  },
  TextHeading: {
    color: theme.palette.primary.main,
    fontSize: "24px",
    marginTop: "75px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
    },
  },
  Paragraph: {
    color: "#a1a0ba",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));
