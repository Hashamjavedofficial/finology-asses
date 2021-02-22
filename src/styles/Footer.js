import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles((theme) => ({
  Footer: {
    height: "10rem",
    position: "relative",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      height: "7rem",
    },
  },
  LeftImage: {
    height: "20rem",
  },
  LogoImage: {
    height: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    },
  },
  LogoText: {
    color: "white",
    fontSize: "16pt",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10pt",
    },
  },
  Heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "6pt",
    },
  },
  Paragraph: {
    color: "white",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "6pt",
    },
  },
  FooterLeft: {
    height: "15rem",
    position: "absolute",
    top: "0px",
    overflow: "hidden",
  },
}));
