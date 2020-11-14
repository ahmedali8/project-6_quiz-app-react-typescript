import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: linear-gradient(90deg, #141E30, #243B55);
    margin: 0;
    padding: 0 20px;
  }

  * {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loader {
    width: 50px;
    margin: 10px 0;
  }

  h1 {
    font-weight: 400;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 60px;
    text-align: center;
    color: #fff;
    margin: 15px;
  }

  .start,
  .next {
    cursor: pointer;
    color: #fff;
    background: linear-gradient(180deg, #141e30, #243b55);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: all 0.2s ease;
  }

  .start {
    max-width: 200px;
  }

  .start:hover,
  .start:focus,
  .next:hover,
  .next:focus {
    color: #141e30;
    background: #fff;
  }

  .score {
    color: #fff;
    font-weight: 700;
  }

  @media only screen and (max-width: 720px) {
    h1 {
      font-size: 25px;
      margin: 10px;
    }
  }
`;
