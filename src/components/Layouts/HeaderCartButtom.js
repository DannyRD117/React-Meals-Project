import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButtom.module.css";

const HeaderCartButtom = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const items = cartCtx.items;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnStyle = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  return (
    <button className={btnStyle} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButtom;
