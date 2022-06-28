import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(Link)`
  color: ${({theme}) => theme.colors.tertiary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background: ${({theme}) => theme.colors.tertiary_light};
    border-left: 4px solid ${({theme}) => theme.colors.tertiary};
    cursor: pointer;
  }

  > div {
    width: 100%;
    display: flex;

    > svg {
      margin-left: 16px;
    }
  }
`;

export const SidebarLabel = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

export const DropdowLink = styled(Link)`
  background: ${({theme}) => theme.colors.shape};
  height: 60px;
  padding-left: 3rem;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({theme}) => theme.colors.tertiary};
  font-size: 18px;

  &:hover {
    background: ${({theme}) => theme.colors.tertiary_light};
    border-left: 4px solid ${({theme}) => theme.colors.tertiary};
    cursor: pointer;
  }
`;
