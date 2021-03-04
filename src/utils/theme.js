import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#252683",
    },
    secondary: {
      main: "#fcd124",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"],
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});
