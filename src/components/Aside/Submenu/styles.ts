import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(Link)`
  color: ${({theme}) => theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: ${({theme}) => theme.colors.secondary_light};
    border-left: 4px solid ${({theme}) => theme.colors.secondary};
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
  color: ${({theme}) => theme.colors.primary};
  font-size: 18px;

  &:hover {
    background: ${({theme}) => theme.colors.secondary_light};
    border-left: 4px solid ${({theme}) => theme.colors.secondary};
    cursor: pointer;
  }
`;
