import Product from "../Product";
import { CardList } from "./style";

const ProductList = ({ listProduct, addCard, inputSearch }) => {
  //   console.log(inputSearch);
  return (
    <CardList>
      {listProduct
        ?.filter((item) =>
          item.name.toLowerCase().includes(inputSearch.toLowerCase())
        )
        .map((product) => {
          return (
            <Product addCard={addCard} key={product.id} listProduct={product} />
          );
        })}
    </CardList>
  );
};

export default ProductList;
