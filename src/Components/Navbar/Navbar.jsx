import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/du0sum3lj/image/upload/v1677276329/pngwing.com_sf1nia.png"
          alt="Stick Logo"
          style={{ width: "100px" }}
        />
      </Link>

      <ul className={styles.listContainer}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Link to="/" className="styles.navbarItem">
            <Button>Todos</Button>
          </Link>
          <Link to="/category/razer" className="styles.navbarItem">
            <Button>Razer</Button>
          </Link>
          <Link to="/category/qanba" className="styles.navbarItem">
            <Button>Qanba</Button>
          </Link>
          <Link to="/category/hori" className="styles.navbarItem">
            <Button>Hori</Button>
          </Link>
          <Link to="/category/madcatz" className="styles.navbarItem">
            <Button>MadCatz</Button>
          </Link>
          <Link to="/category/hitbox" className="styles.navbarItem">
            <Button>HitBox</Button>
          </Link>
        </ButtonGroup>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
