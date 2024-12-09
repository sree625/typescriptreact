import Bedroom from "./bedroom.webp";
import Living from "./living.webp";
import Dining from "./dining.webp";
import classes from "./categoryBanner.module.css";

const CategoryBanner = () => {
  return (
    <section className={classes.category_wrapper}>
      <div className={classes.category_container}>
        <div className={classes.category_titlewrap}>
          <h1 className={classes.category_title}>Browse The Range</h1>
          <p className={classes.categoryText}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className={classes.category_content}>
          {categories.map((item) => (
            <div key={item.id} className={classes.category_item}>
              <a href={"/about"} className={classes.category_image_wrap}>
                <img src={item.img} alt="category" />{" "}
              </a>
              <h3 className={classes.category_subtitle}> {item.title}</h3>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;

const categories = [
  { img: Bedroom, id: 1, title: "Dining" },
  { img: Living, id: 2, title: "Living" },
  { img: Dining, id: 3, title: "Bedroom" },
];
