import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.filter(
    (element) => element.id === Number(id)
  );
  console.log(productSelected[0].title);
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={productSelected[0].img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productSelected[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productSelected[0].description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {productSelected[0].price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemDetailContainer;
