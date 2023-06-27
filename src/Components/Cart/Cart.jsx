import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import { useState } from "react";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    getTotalPrice,
    clearCart,
    getTotalQuantity,
    deleteElementById,
  } = useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "The elements will be deleted from the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Deleted!", "All the products has been deleted", "success");
      }
    });
  };

  const del = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The element will be deleted from the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteElementById(id);
        Swal.fire("Deleted!", "The products has been deleted", "success");
      }
    });
  };

  if (orderId) {
    return (
      <div style={{ margin: "15% auto", width: "50%", textAlign: "center" }}>
        <h2>Thanks for your purchase</h2>
        <h3>Your order ID is {orderId}</h3>
        <Link to="/">
          <Button
            style={{ color: "whitesmoke" }}
            variant="contained">
            Continue shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.length > 0 ? (
        !showForm ? (
          <div className="cart__container">
            <div className="products__list--check">
              {cart.map((element) => {
                return (
                  <Card
                    sx={{ minWidth: 400 }}
                    key={element.id}
                    style={{ height: 280, marginBottom: 20 }}>
                    <CardMedia
                      sx={{ height: 150 }}
                      image={element.img}
                      title={element.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div">
                        {element.title}
                      </Typography>
                      <div className="products__info--check">
                        <div>
                          <Typography
                            variant="body1"
                            color="text.secondary">
                            ${element.price}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="text.secondary">
                            Quantity:{element.quantity}
                          </Typography>
                        </div>
                        <div>
                          <CardActions>
                            <Button
                              variant="contained"
                              onClick={() => deleteElementById(element.id)}>
                              Delete
                            </Button>
                          </CardActions>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="cart__info">
              <h3>Quantity of products: {getTotalQuantity()}</h3>
              <h3>Total price: ${getTotalPrice()}</h3>
              {cart.length > 0 && (
                <CardActions>
                  <Button
                    onClick={clear}
                    variant="contained">
                    Empty cart
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setShowForm(true)}>
                    Go to checkout
                  </Button>
                </CardActions>
              )}
            </div>
          </div>
        ) : (
          <FormCheckout
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
            getTotalQuantity={getTotalQuantity}
          />
        )
      ) : (
        <div className="noproducts">
          <h2 style={{ fontSize: "3em", textAlign: "center" }}>
            There's no products in the cart
          </h2>
          <img
            src="https://res.cloudinary.com/du0sum3lj/image/upload/v1680650274/slayer-ggxrd-animation_gyhtj1.gif"
            className="noproducts__img"
            alt="Error 404 Slayer"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
