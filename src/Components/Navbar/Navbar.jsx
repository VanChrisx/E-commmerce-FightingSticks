import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            style={{
              display: "flex",
              gap: "1%",
              marginTop: "3%",
              justifySelf: "center",
            }}>
            <Link
              to="/"
              className="styles.navbarItem">
              <Button>All</Button>
            </Link>
            <Link
              to="/category/razer"
              className="styles.navbarItem">
              <Button>Razer</Button>
            </Link>
            <Link
              to="/category/qanba"
              className="styles.navbarItem">
              <Button>Qanba</Button>
            </Link>
            <Link
              to="/category/hori"
              className="styles.navbarItem">
              <Button>Hori</Button>
            </Link>
            <Link
              to="/category/madcatz"
              className="styles.navbarItem">
              <Button>MadCatz</Button>
            </Link>
            <Link
              to="/category/hitbox"
              className="styles.navbarItem">
              <Button>HitBox</Button>
            </Link>
          </ButtonGroup>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            sx={{
              display: {
                background: "white",
                borderRadius: "10px",
                color: "black",
                position: "relative",
                top: "15px",
              },
            }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
            }}>
            <Link
              to="/"
              className="styles.navbarItem">
              <Button>All</Button>
            </Link>
            <Link
              to="/category/razer"
              className="styles.navbarItem">
              <Button>Razer</Button>
            </Link>
            <Link
              to="/category/qanba"
              className="styles.navbarItem">
              <Button>Qanba</Button>
            </Link>
            <Link
              to="/category/hori"
              className="styles.navbarItem">
              <Button>Hori</Button>
            </Link>
            <Link
              to="/category/madcatz"
              className="styles.navbarItem">
              <Button>MadCatz</Button>
            </Link>
            <Link
              to="/category/hitbox"
              className="styles.navbarItem">
              <Button>HitBox</Button>
            </Link>
          </Menu>
        </Box>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
