import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// https://react-swipeable-views.com/demos/demos/ ....multiple ways to use slides
function SwipeableHome() {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff",
    },
    slide1: {
      background: "none",
    },
    slide2: {
      background: "none",
    },
    slide3: {
      background: "none",
    },
  };
  return (
    <>
      <AutoPlaySwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <img
            src="https://res.cloudinary.com/umair007/image/upload/v1597421980/ecommerece%20project/Slids/slid1_whwbvr.png"
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
          />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <img
            src="https://res.cloudinary.com/umair007/image/upload/v1597421980/ecommerece%20project/Slids/slide2_gvycjx.png"
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
          />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <img
            src="https://res.cloudinary.com/umair007/image/upload/v1597421979/ecommerece%20project/Slids/slide3_jrp5oh.jpg"
            style={{ maxWidth: "100vh", maxHeight: "100vh", margin: "auto" }}
          />
        </div>
      </AutoPlaySwipeableViews>
    </>
  );
}

export default SwipeableHome;
