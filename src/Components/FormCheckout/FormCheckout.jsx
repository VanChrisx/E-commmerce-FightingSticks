import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { Button, TextField } from "@mui/material";
import "./FormCheckout.css";

const FormCheckout = ({
  cart,
  getTotalPrice,
  setOrderId,
  clearCart,
  getTotalQuantity,
}) => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    direction: "",
    phone: "",
  });

  const submit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <form onSubmit={submit} className="form__structure">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <TextField
          id="outlined-basic"
          label="Direction"
          variant="outlined"
          onChange={(e) =>
            setUserData({ ...userData, direction: e.target.value })
          }
          required
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <Button
          id="outlined-basic"
          variant="outlined"
          type="submit"
          style={{ height: "56px" }}
        >
          Checkout
        </Button>
      </form>
      <div style={{ margin: "20% auto" }}>
        <h3>Quantity of products : {getTotalQuantity()}</h3>
        <h3>Total Price: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default FormCheckout;
