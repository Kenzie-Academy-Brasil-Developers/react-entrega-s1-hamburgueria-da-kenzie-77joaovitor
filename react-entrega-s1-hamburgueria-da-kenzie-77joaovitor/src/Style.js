import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 8.688rem;
  gap: 1.5rem;
  background-color: #f5f5f5;

  .container__logo {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4px;
    height: 3rem;
  }

  .container__input {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 3rem;
    border-radius: 4px;
  }

  div h1 {
    font-family: "Inter";
    font-size: 1.8rem;
    font-weight: 600;
  }

  div p {
    color: rgba(235, 87, 87, 1);
    margin-bottom: 4px;
    font-family: "Inter";
    font-weight: 600;
  }
  div input {
    width: 90vw;
    max-width: 19rem;
    align-items: center;
    padding: 0px 10px 0px 15px;

    width: 382px;
    height: 60px;
    border-radius: 8px;

    background: #ffffff;

    border: 2px solid #e0e0e0;
  }
  div button {
    margin-left: -7.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 107px;
    height: 40px;
    font-size: 1rem;
    font-family: "Inter";
    color: white;

    /* color-primary */

    background: #27ae60;
    /* color-primary */

    border: 2px solid #27ae60;
    border-radius: 8px;
  }

  @media (min-width: 425px) {
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;

    .container__logo {
      margin-bottom: 1rem;
    }

    .main__container {
      display: flex;
    }
  }
  @media (min-width: 800px) {
    padding-left: 2rem;
  }
`;
