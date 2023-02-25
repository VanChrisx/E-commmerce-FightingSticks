import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <img
        src="https://res.cloudinary.com/du0sum3lj/image/upload/v1677276329/pngwing.com_sf1nia.png"
        alt="Stick Logo"
        style={{ width: "100px" }}
      />

      <ul className={styles.listContainer}>
        <li>
          <a href="">PS4/PS5</a>
        </li>
        <li>
          <a href="">XBOX</a>
        </li>
        <li>
          <a href="">SWITCH</a>
        </li>
        <li>
          <a href="">Multiplataforma</a>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
