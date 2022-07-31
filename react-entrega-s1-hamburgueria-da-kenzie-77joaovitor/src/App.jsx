import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Style";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [cartProductList, setCartProductList] = useState([]);
  const [inputSearch, setInputSeach] = useState("");
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setListProduct(response))
      .catch((err) => console.log(err));
  }, []);

  function addCart(event) {
    const idEvent = parseInt(event.target.id);

    const filter = listProduct.filter((item) => item.id === parseInt(idEvent));
    const ifHaveSameProduct = cartProductList.some(
      (product) => filter[0].name === product.name
    );
    if (ifHaveSameProduct) {
      cartProductList.forEach((elem, index) => {
        const count = elem.amount;
        if (elem.id === idEvent) {
          setCartProductList((oldList) => {
            return oldList.filter((item) => item.id !== idEvent);
          });
          setCartProductList((oldList) => [
            ...oldList,
            {
              img: filter[0].img,
              name: filter[0].name,
              price: filter[0].price,
              description: filter[0].description,
              amount: count + 1,
              id: filter[0].id,
            },
          ]);
          console.log(cartProductList);
        }
      });
    } else {
      setCartProductList((oldList) => [
        ...oldList,
        {
          img: filter[0].img,
          name: filter[0].name,
          price: filter[0].price,
          description: filter[0].description,
          amount: 1,
          id: filter[0].id,
        },
      ]);
    }
  }

  const valueTotal = cartProductList.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.amount,
    0
  );

  console.log(valueTotal);
  function removeItem(event) {
    const id = event.target.id;
    setCartProductList((oldList) => {
      return oldList.filter((item) => item.id !== parseInt(id));
    });
  }

  useEffect(() => {
    cartProductList.length > 0 ? setCartEmpty(false) : setCartEmpty(true);
  }, [cartProductList]);

  // console.log(inputSearch);

  return (
    <GlobalStyle className="App">
      <Header>
        <div className="container__logo">
          <h1>Burguer</h1>
          <p>Kenzie</p>
        </div>
        <div className="container__input">
          <input
            type="text"
            value={inputSearch}
            onChange={(event) => setInputSeach(event.target.value)}
          />
          <button>Pesquisar</button>
        </div>
      </Header>
      <div className="main__container">
        <ProductList
          addCard={addCart}
          listProduct={listProduct}
          inputSearch={inputSearch}
        />
        <Cart
          valueTotal={valueTotal}
          cartProductList={cartProductList}
          removeItem={removeItem}
          removeAll={() => setCartProductList([])}
          cartEmpty={cartEmpty}
        />
      </div>
    </GlobalStyle>
  );
}

export default App;
