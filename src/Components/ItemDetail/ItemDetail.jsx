import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prodSelected, onAdd, quantity }) => {
  return (
    <Card style={{ margin: "5% auto", width: "80%" }}>
      <CardActionArea
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}>
        <div style={{ width: "40%" }}>
          <img
            src={prodSelected.img}
            alt=""
            style={{ width: "500px" }}
          />
        </div>
        <CardContent style={{ width: "50%" }}>
          <Typography
            gutterBottom
            variant="h2"
            component="div">
            {prodSelected.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary">
            {prodSelected.description}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            style={{ fontSize: "2em", fontWeight: "bold" }}>
            $ {prodSelected.price}
          </Typography>
          <ItemCount
            stock={prodSelected.stock}
            onAdd={onAdd}
            initial={quantity}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemDetail;
