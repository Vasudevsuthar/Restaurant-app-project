import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import image from '../../assets/image.webp'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Khana Khazana</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="A table full of delicious food"/>
      </div>

    </Fragment>
  );
};

export default Header;
