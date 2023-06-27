import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ element }) => {
  return (
    <Card className="card__container">
      <CardActionArea>
        <Link to={`/item/${element.id}`}>
          <CardMedia
            sx={{ height: 160, backgroundColor: "whitesmoke" }}
            image={element.img}
            title={element.title}
          />
        </Link>
        <CardContent style={{ height: "90px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            {element.title}
          </Typography>
          <Typography
            variant="body"
            style={{ position: "absolute", bottom: "19%" }}>
            ${element.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/item/${element.id}`}>
            <Button
              size="small"
              color="primary"
              variant="contained">
              Detalle
            </Button>
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Item;
