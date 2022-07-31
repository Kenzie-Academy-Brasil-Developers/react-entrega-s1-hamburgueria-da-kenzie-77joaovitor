import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  flex-direction: initial;
  align-items: flex-start;
  overflow: scroll;
  gap: 5px;
  margin-left: 5px;
  @media (min-width: 435px) {
    width: 100%;
    /* overflow: visible; */
    /* flex-wrap: wrap; */
  }
  @media (min-width: 800px) {
    width: 70%;
    overflow: visible;
    flex-wrap: wrap;
  }
`;
