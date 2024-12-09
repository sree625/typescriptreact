import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_left}>
          <h1>Funiro.</h1>
          <p>400 University Drive Suite 200 Coral <br/> Gables,<br/>
          FL 33134 USA</p>
        </div>
        <div className={classes.footer_right}>
          <nav className={classes.footer_nav}>
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
