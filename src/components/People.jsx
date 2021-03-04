import React from "react";
import { IconButton, Typography, Button } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import PeopleCard from "./PeopleCard";

import { usePeopleStyles } from "../styles/People";
import clsx from "clsx";

const People = (props) => {
  const classes = usePeopleStyles();
  return (
    <div className="md:px-20 sm:px-6 my-10 lg:mt-40 md:mt-32 sm:mt-32">
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
        <div className="flex justify-end md:col-span-2 lg:col-span-1 sm:mt-10 items-end">
          <div>
            <Button className={clsx(classes.EditButton, classes.ButtonExtra)}>
              Edit
            </Button>
            <Button className={clsx(classes.AddButton, classes.ButtonExtra)}>
              Add
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        <div>
          <PeopleCard />
        </div>
        <div>
          <PeopleCard />
        </div>
        <div>
          <PeopleCard />
        </div>
        <div>
          <PeopleCard />
        </div>
        <div>
          <PeopleCard />
        </div>
        <div>
          <PeopleCard />
        </div>
        <div>
          <PeopleCard />
        </div>
      </div>
    </div>
  );
};

export default People;
