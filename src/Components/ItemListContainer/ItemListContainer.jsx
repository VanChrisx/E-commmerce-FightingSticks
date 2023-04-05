import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { PuffLoader } from "react-spinners";

import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consult = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consult = getDocs(q);
    } else {
      consult = getDocs(itemsCollection);
    }
    consult.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(products);
    });
  }, [categoryName]);

  return (
    <div>
      {products.length > 0 ? (
        <ItemList items={products} />
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <PuffLoader color={"#0033ff"} size={100} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
