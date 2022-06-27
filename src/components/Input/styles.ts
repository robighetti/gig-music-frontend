import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({theme}) => theme.colors.secondary_light};
  border-radius: 10px;

  border: 2px solid ${({theme}) => theme.colors.secondary_light};
  color: ${({theme}) => theme.colors.placeholder};

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({theme}) => theme.colors.attention};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${({theme}) => theme.colors.secondary};
      border-color: ${({theme}) => theme.colors.secondary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${({theme}) => theme.colors.secondary};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};

    &::placeholder {
      color: ${({theme}) => theme.colors.placeholder};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  font-family: ${({theme}) => theme.fonts.regular};

  svg {
    margin: 0;
  }

  span {
    background: ${({theme}) => theme.colors.attention};;
    color: ${({theme}) => theme.colors.shape};

    &::before {
      border-color: ${({theme}) => theme.colors.attention} transparent;
    }
  }
`;
