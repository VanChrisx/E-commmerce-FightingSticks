import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.containerProperty}>
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
