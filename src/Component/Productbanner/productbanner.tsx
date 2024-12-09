import React from "react";
import Product from "./product";
import classes from "./productbanner.module.css"
const ProductBanner = () => {
  return (
    <div className={classes.product_wrap}>
      <h2>Our Products</h2>
      <Product />
      <button className={classes.product_showmore}>Show More</button>
    </div>
  );
};

export default ProductBanner;