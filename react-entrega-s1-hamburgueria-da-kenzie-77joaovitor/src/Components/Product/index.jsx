import { Card } from "./style";

const Product = ({ listProduct, addCard }) => {
  return (
    <Card>
      <div className="list__img">
        <img src={listProduct.img} alt={listProduct.name} />
      </div>
      <section className="list__description">
        <h3>{listProduct.name}</h3>
        <span className="list__category">{listProduct.category}</span>
        <span className="list__price">{listProduct.price}</span>
        <button onClick={addCard} id={listProduct.id}>
          Adicionar
        </button>
      </section>
    </Card>
  );
};

export default Product;
