import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButtom.module.css";

const HeaderCartButtom = (props) => {
  const cartCtx = useContext(CartContext);

  const numberCartItems = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButtom;
