import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerProperty}>
      <img
        src="https://res.cloudinary.com/du0sum3lj/image/upload/v1677276329/pngwing.com_sf1nia.png"
        alt="Stick Logo"
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default Footer;
