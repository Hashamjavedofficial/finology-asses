import { makeStyles } from "@material-ui/core";

const useSliderStyles = makeStyles((theme) => ({
  HeartButton: {
    color: "white",
    background: "#fe0302",
    "&:hover": {
      color: "white",
      background: "#fe0302",
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

export default useSliderStyles;
