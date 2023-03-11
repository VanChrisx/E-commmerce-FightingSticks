import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.filter(
    (element) => element.id === Number(id)
  );
  console.log(productSelected[0].title);
  return (
    <div>
      <ItemDetail productSelected={productSelected} />
    </div>
  );
};

export default ItemDetailContainer;
