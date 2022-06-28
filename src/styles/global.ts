import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: ${props => props.theme.colors.text_dark};
    -webkit-font-smoothing: antialiased;

    background-color: ${({theme}) =>theme.colors.shape};
  }

  body, input, button, select, textarea {
    font-family: ${({theme}) => theme.fonts.regular}, serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: ${({theme}) => theme.fonts.medium};
  }

  button {
    cursor: pointer;
  }
`;
