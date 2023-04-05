import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  if (stock == 0) {
    return (
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: "grey", marginTop: "20px" }}
        >
          Out of stock
        </Button>
      </div>
    );
  } else {
    const plus = () => {
      if (counter < stock) {
        setCounter(counter + 1);
      }
    };

    const minus = () => {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    };

    return (
      <div className="container-btn">
        <h3>Quantity: {counter}</h3>
        <div style={{ marginBottom: "5%" }}>
          <Button variant="outlined" onClick={plus}>
            +
          </Button>
          <Button variant="contained" onClick={() => onAdd(counter)}>
            Add to cart
          </Button>
          <Button variant="outlined" onClick={minus}>
            -
          </Button>
        </div>
      </div>
    );
  }
};

export default ItemCount;
