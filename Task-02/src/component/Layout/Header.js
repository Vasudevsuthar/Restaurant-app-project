import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import image from '../../assets/image.webp'
import MealsSummary from "../Meals/MealsSummary";
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Khana Khazana</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="A table full of delicious food"/>
      </div>
      <MealsSummary/>
    </Fragment>
  );
};

export default Header;
