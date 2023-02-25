import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  let { title, price, image, imgAlt } = props;

  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={imgAlt} className={styles.imgProperty} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
