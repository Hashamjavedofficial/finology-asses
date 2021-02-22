import { makeStyles } from "@material-ui/core";

const SelectedNav = "#0dd0fd";

export const useHeaderStyles = makeStyles((theme) => ({
  MainDiv: {
    background: theme.palette.primary.main,
    height: "75vh",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
  },
  HeaderLogo: {
    height: "4rem",
  },
  List: {
    "& li": {
      display: "inline",
      color: "white",
      fontSize: "1rem",
      cursor: "pointer",
      "&:hover": {
        color: SelectedNav,
      },
    },
  },
  SearchIcon: {
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: SelectedNav,
    },
  },
  HeaderContent: {
    "& p": {
      margin: 0,
      fontSize: "12px",
      color: "white",
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
  },
  LeftBanner: {
    position: "absolute",
    height: "23rem",
    bottom: 0,
    left: "-80px",
    [theme.breakpoints.down("sm")]: {
      height: "14rem",
      left: "-40px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "8rem",
      left: "-20px",
      bottom: "20px",
    },
  },
  RightBanner: {
    position: "absolute",
    height: "18rem",
    right: "-160px",
    bottom: "30px",
    [theme.breakpoints.down("sm")]: {
      height: "12rem",
      right: "-100px",
      bottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      right: "-70px",
      bottom: "10px",
    },
  },
  BannerImage: {
    position: "absolute",
    height: "20rem",
    bottom: "-46px",
    right: "150px",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      bottom: "-26px",
      right: "90px",
      height: "12rem",
    },
    [theme.breakpoints.down("xs")]: {
      bottom: "-20px",
      right: "70px",
      height: "10rem",
    },
  },
  Heading: {
    fontSize: "32pt",
    fontWeight: "700",
    color: "white",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24pt",
      fontWeight: "600",
      marginTop: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18pt",
      fontWeight: "500",
      marginTop: "14px",
    },
  },
}));
