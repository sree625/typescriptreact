import React from "react";
import classes from "./header.module.css";
import logo from "./logo.webp";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <img src={logo} alt="Logo" />
        <span> Furniro</span>
      </div>
      <nav className={classes.header_nav}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className={classes.icon_wrapper}>
        <FaRegUser className={classes.icon} />
        <IoSearch className={classes.icon} />
        <FaRegHeart className={classes.icon} />
        <FiShoppingCart className={classes.icon} />
      </div>
    </header>
  );
};

export default Header;
