import { useState } from "react";
import { CartContainer } from "./style";

const Cart = ({
  cartProductList,
  removeItem,
  valueTotal,
  removeAll,
  cartEmpty,
}) => {
  const [numb, setNumb] = useState(1);
  function sub(event) {
    event.preventDefault();
    setNumb((oldNumb) => oldNumb - 1);
  }
  function add(event) {
    event.preventDefault();
    setNumb((oldNumb) => oldNumb + 1);
  }
  console.log(cartProductList);

  return (
    <CartContainer>
      <header>
        <p>Carrinho de compras</p>
      </header>
      <div className="cart__list">
        {!cartEmpty && (
          <ul>
            {cartProductList.map((product, index) => {
              return (
                <li key={index}>
                  <img src={product.img} alt={product.name} />
                  <div>
                    <p>{product.name}</p>
                    <span>{product.description}</span>
                    <span>Quantidade:{product.amount}</span>
                  </div>
                  <div>
                    <button onClick={removeItem} id={product.id}>
                      Remover
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {cartEmpty && (
          <section className="cart__empty">
            <p>Sua sacola esta vazia</p>
            <span>adicione item</span>
          </section>
        )}
        {!cartEmpty && (
          <div className="total-button">
            <div className="total-description">
              <p>Total:</p>
              <span>{valueTotal}</span>
            </div>
            <div className="total_remove">
              <button onClick={removeAll}>Romover Todos</button>
            </div>
          </div>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
