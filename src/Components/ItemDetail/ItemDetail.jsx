import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prodSelected, onAdd, quantity }) => {
  return (
    <Card>
      <CardActionArea style={{ display: "flex" }}>
        <CardMedia
          component="img"
          style={{ width: "60%", marginRight: "2%", padding: "1%" }}
          height="300"
          image={prodSelected.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {prodSelected.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {prodSelected.description}
          </Typography>
          <Typography variant="body1" color="text.primary">
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
