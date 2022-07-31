import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  ul {
    height: 9rem;
    background-color: #f5f5f5;
    overflow: scroll;
    max-width: 382px;
  }
  header {
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;
    align-items: center;
    width: 97%;
    max-width: 382px;
    height: 65px;
    margin: 5px;

    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
  }

  header p {
    color: white;
    font-family: "Inter";
    font-weight: 600;
  }

  li {
    display: flex;
    height: 4rem;
    justify-content: space-around;
    max-width: 382px;
  }

  li img {
    width: 4rem;
    height: 4rem;
    background-color: #f5f5f5;
  }

  .cart__list {
    width: 100%;
    height: 10rem;
    margin-left: 5px;
    max-width: 395px;
  }

  div p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    color: #333333;
  }
  div span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  form {
    display: flex;
    width: 2.5rem;
    height: 1.5rem;
  }
  form button {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form h5 {
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    border: none;
    background-color: #f5f5f5;
    :hover {
      opacity: 0.5;
    }
  }
  .cart__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 97%;
    height: 9rem;
    background-color: #f5f5f5;
    max-width: 382px;
  }

  .total-button {
    width: 97%;
    height: 6rem;
    max-width: 382px;
  }
  .total-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;

    width: 98%;
  }

  .total_remove {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: #e0e0e0;
      width: 98%;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      height: 3rem;

      font-family: "Inter";
      font-weight: 600;
      font-size: 1rem;
      color: #828282;
    }
  }

  .total_remove button:hover {
    background-color: #828282;
    color: white;
  }
  @media (min-width: 800px) {
    overflow: visible;
    flex-wrap: wrap;
    width: 30%;
    position: relative;
    right: 27px;
    min-width: 20rem;
  }
`;
