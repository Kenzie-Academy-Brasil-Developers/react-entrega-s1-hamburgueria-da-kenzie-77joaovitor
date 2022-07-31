import styled from "styled-components";

export const GlobalStyle = styled.div`
  :root {
    --color-background: #ffffff;
    --color-primary: #64b447;
    --color-primary-light: #dfefd9;
    --color-primary-dark: #78a468;
    --color-primary-transparent: rgba(100, 180, 71, 0.2);
    --color-text: #3d3d3d;
    --color-text-in-primary: #ffffff;
    --color-text-complement: #a3a3a2;
    --color-text-light: #c9c9c9;
    --color-red: #b4423e;
    --color-tertiary: #edb12a;
    --color-secondary: #464745;
    --color-success: #7cc39c;
    --color-warning: #fbea85;
    --color-error: #ea524f;
    font-size: 60%;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body,
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body,
  input,
  button,
  textarea {
    font-family: "Roboto";
    font-size: 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  @media (min-width: 800px) {
    .main__container {
      display: flex;
      width: 100%;
      height: 100vh;
      justify-content: space-between;
      margin-top: 2rem;
      margin-left: 2rem;
    }
  }
`;
