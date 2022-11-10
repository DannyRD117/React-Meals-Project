import { Fragment } from "react";
import mealsImage from "../../assets/images/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButtom from "./HeaderCartButtom";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButtom />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
