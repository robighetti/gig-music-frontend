import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.background};
  font-family: ${({theme}) => theme.fonts.regular};

  padding: 0 16px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const RightSide = styled.section`
  display: flex;
  align-items: center;
  margin-right: 25px;

  button {
    margin-left: 32px;
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.01);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.primary};

  a {
    font-size: 18px;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
