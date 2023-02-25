import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings={"Bienvenido a The ArcadeStick Store"} />

      <ProductCard
        title={"Razer Stick"}
        price={"$20000"}
        image={
          "https://res.cloudinary.com/du0sum3lj/image/upload/v1677281383/D_NQ_NP_857001-MLA31583749639_072019-O_jeqgjr.webp"
        }
        imgAlt={"Arcade Stick Phantera Razer"}
      />
      <ProductCard
        title={"Razer Stick"}
        price={"$20000"}
        image={
          "https://res.cloudinary.com/du0sum3lj/image/upload/v1677281383/D_NQ_NP_857001-MLA31583749639_072019-O_jeqgjr.webp"
        }
        imgAlt={"Arcade Stick Phantera Razer"}
      />
      <ProductCard
        title={"Razer Stick"}
        price={"$20000"}
        image={
          "https://res.cloudinary.com/du0sum3lj/image/upload/v1677281383/D_NQ_NP_857001-MLA31583749639_072019-O_jeqgjr.webp"
        }
        imgAlt={"Arcade Stick Phantera Razer"}
      />
      <ProductCard
        title={"Razer Stick"}
        price={"$20000"}
        image={
          "https://res.cloudinary.com/du0sum3lj/image/upload/v1677281383/D_NQ_NP_857001-MLA31583749639_072019-O_jeqgjr.webp"
        }
        imgAlt={"Arcade Stick Phantera Razer"}
      />

      <Footer />
    </div>
  );
}

export default App;
