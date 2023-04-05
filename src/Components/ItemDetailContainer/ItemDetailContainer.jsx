import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [prodSelected, setProdSelected] = useState([]);

  const { addToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProdSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let product = {
      ...prodSelected,
      quantity: quantity,
    };
    addToCart(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product successfully added",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  let quantity = getQuantityById(Number(id));

  return (
    <div>
      <ItemDetail
        prodSelected={prodSelected}
        onAdd={onAdd}
        quantity={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
