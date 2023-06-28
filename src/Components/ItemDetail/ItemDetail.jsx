import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ prodSelected, onAdd, quantity }) => {
  return (
    <Card className="card__container--detail">
      <CardActionArea
        className="card__contains"
        sx={{ display: "flex" }}>
        <img
          src={prodSelected.img}
          alt="product img"
        />
        <CardContent className="card__containt-cont">
          <h2 className="font__title">{prodSelected.title}</h2>
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
