import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import usePeopleStyles from "../styles/People";

const People = (props) => {
  const classes = usePeopleStyles();
  return (
    <div className="md:pl-20 sm:pl-6 my-10 lg:mt-40 md:mt-32 sm:mt-32">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mb-16 sm:mb-6">
        <div className="pl-5 flex justify-between">
          <div>
            <IconButton className={classes.EmojiButton}>
              <EmojiEmotionsIcon />
            </IconButton>
          </div>

          <div className="ml-10">
            <Typography
              component="h5"
              variant="h5"
              color="primary"
              className={classes.HeadingText}
            >
              Our important people is listed here
            </Typography>
          </div>
        </div>
        <div></div>
        <div className="flex justify-end md:col-span-2 lg:col-span-1 lg:pr-24 sm:pr-8 items-end">
          <div>
            <IconButton className={classes.SliderButton}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
