import styled from 'styled-components';
import { Link } from 'react-router-dom'

import background from '../../assets/background.jpg';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  opacity: 0.9;

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
    margin-top: 14px;
    width: 220px;
  }

  form {
    margin: 16px 0;
    width: 90%;
    text-align: center;

    h1 {
      color: ${({theme}) => theme.colors.primary};
      margin-bottom: 24px;
      font-family: ${({theme}) => theme.fonts.medium};
    }
  }
`;

export const ForgotPass = styled(Link)`
  color: ${({theme}) => theme.colors.text};
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.4;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
  background-position: top;
  filter: grayscale(90%) sepia(80%);
`;
