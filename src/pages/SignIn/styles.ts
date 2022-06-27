import styled from 'styled-components';

import suporte from '../../assets/suporte.jpg';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  position: absolute;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.shape};
  border-radius: 8px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0 8px ${({theme}) => theme.colors.shadow};

  img {
    margin-top: 24px;
    width: 320px;
  }

  form {
    margin: 30px 0;
    width: 90%;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-family: ${({theme}) => theme.fonts.medium};
    }

    a {
      color: ${({theme}) => theme.colors.text};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        opacity: 0.4;
        transform: scale(1.03);
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${suporte}) no-repeat center;
  background-size: cover;
  background-position: top;
`;
