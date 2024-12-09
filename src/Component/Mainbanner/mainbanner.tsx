import React from "react";
import classes from "./mainbanner.module.css";
import BgImage from "./mainbanner.webp";
const Mainbanner = () => {
  return (
    <div className={classes.mainbanner}>
      <img
        className={classes.mainbanner_image}
        src={BgImage}
        alt="New Collection"
        loading="eager"
      />
      <div className={classes.mainbanner_content}>
        <div className={classes.mainbanner_subcontent}>
          <p className={classes.mainbanner_subtitle}>New Arrival</p>
          <h1>
            Discover Our <br/> New Collection
          </h1>
          <p className={classes.mainbanner_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className={classes.mainbanner_button}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Mainbanner;
