import { makeStyles } from "@material-ui/core";

const usePeopleStyles = makeStyles((theme) => ({
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
  SliderButton: {
    backgroundColor: "#eedeff",
    color: "#8251bc",
    "&:hover": {
      backgroundColor: "#8251bc",
      color: "#eedeff",
    },
  },
}));

export default usePeopleStyles;
