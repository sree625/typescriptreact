import React from "react";
import home from "./home.webp";
import sofa from "./sofa.webp";
import classes from "./product.module.css";

const Product = () => {
  return (
    <div className={classes.product_grid}>
      {products.map((item) => {
        return (
          <div className={classes.product_card} key={item.id}>
            <img
              className={classes.product_image}
              src={item.img}
              alt="products"
            />
            {item.discount && (
              <span className={classes.product_discount}>-{item.discount}</span>
            )}
            {item.new && <span className={classes.product_new}> New</span>}
            <div className={classes.product_info}>
              {item.name && <h3> {item.name}</h3>}
              <p> {item.text}</p>
              <span className={classes.product_price}> Rp {item.price}</span>
              {!!item.maxprice && (
                <span className={classes.product_maxprice}> Rp {item.maxprice}</span>
              )}
            </div>
            <div className={classes.product_overlay}>
              <button className={classes.add_to_cart}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

const products = [
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: "30%",
    maxprice: 3500.0,
    img: home,
    id: 1,
    new: null,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: null,
    // maxprice: 3500.0,
    img: sofa,
    id: 2,
    new: null,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: "50%",
    maxprice: 3500.0,
    img: home,
    id: 3,
    new: null,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: null,
    maxprice: 3500.0,
    img: sofa,
    id: 4,
    new: null,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: "30%",
    maxprice: 3500.0,
    img: home,
    id: 5,
    new: null,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: null,
    maxprice: 3500.0,
    img: sofa,
    id: 6,
    new: null,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: null,
    maxprice: 3500.0,
    img: sofa,
    id: 7,
    new: true,
  },
  {
    name: "Syitherine",
    text: "Stylish cafe chair",
    price: 2500.0,
    discount: null,
    maxprice: 3500.0,
    img: home,
    id: 8,
    new: null,
  },
];
