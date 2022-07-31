import styled from "styled-components";

export const Card = styled.li`
  width: 16.3rem;
  height: 18rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 5px;
  border: 2px solid #e0e0e0;
  box-sizing: inherit;

  div {
    width: 16rem;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }

  div img {
    width: 5rem;
    height: 5rem;
    width: 7rem;
    height: 8rem;
  }

  .list__description {
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
    margin-left: 10px;
    padding: 5px;
  }

  div h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  .list__category {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }
  .list__price {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    /* color-primary */

    color: #27ae60;
  }
  section button {
    width: 106px;
    height: 40px;
    left: 20px;
    top: 133px;

    /* color-primary */

    background: #27ae60;
    /* color-primary */

    border: 2px solid #27ae60;
    border-radius: 8px;
    font-size: 1rem;
    color: white;
  }
  section button:hover {
    opacity: 0.7;
  }
`;
