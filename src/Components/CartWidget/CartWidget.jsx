import { GiShoppingCart } from "react-icons/gi";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="Ecommerce-FightingSticks/cart">
      <div className={styles.container__cart}>
        <GiShoppingCart
          size={70}
          color={"white"}
        />
        <div className={styles.bubble__counter}>
          <span style={{ color: "yellow", fontWeight: "bold" }}>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
