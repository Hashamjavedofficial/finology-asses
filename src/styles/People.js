import { makeStyles } from "@material-ui/core";

export const usePeopleStyles = makeStyles((theme) => ({
  EmojiButton: {
    color: "white",
    background: "#ff00b8",
    "&:hover": {
      color: "white",
      background: "#ff00b8",
    },
  },
  HeadingText: {
    fontWeight: "bold",
  },
  EditButton: {
    backgroundColor: "#fffede",
    color: "#ffc120",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ffc120",
      color: "#fffede",
    },
  },
  ButtonExtra: {
    width: "5rem",
    borderRadius: "6px",
  },
  AddButton: {
    backgroundColor: "#eedeff",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginLeft: "10px",

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#eedeff",
    },
  },
}));

export const usePeopleCardStyles = makeStyles((theme) => ({
  CardImage: {
    height: "200px",
    [theme.breakpoints.down("md")]: {
      height: "150px",
    },
  },
}));
