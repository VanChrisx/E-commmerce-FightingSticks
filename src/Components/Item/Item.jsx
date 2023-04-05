import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card sx={{ minWidth: 345, maxWidth: 345 }} style={{ height: "350px" }}>
      <CardActionArea>
        <Link to={`/item/${element.id}`}>
          <CardMedia
            sx={{ height: 160, backgroundColor: "whitesmoke" }}
            image={element.img}
            title={element.title}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body">${element.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${element.id}`}>
          <Button size="small" color="primary">
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
