import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { FaBeer } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.header}>
        <div className={classes.header__logo}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
          <div>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <div className={classes.delivery}>
                <p> Deliverd to</p>
                <span> Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          {/* search bar */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
          {/* icon */}
        </div>
        <div className={classes.order__container}>
          <div>
            <Link to="" className={classes.language}>
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
                alt=""
              />

              <section>
                <option value="">EN</option>
              </section>
            </Link>
          </div>
          {/* three component */}
          <Link to="/auth">
            <div>
              <p>sign In</p>
              <span>Account & Lists </span>
            </div>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
