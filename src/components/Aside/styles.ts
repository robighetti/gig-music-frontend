import styled, { css, keyframes} from 'styled-components';

interface ClickProps {
  click?: boolean;
}

const disappear = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50px);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div<ClickProps>`
  position: relative;

  width: 400px;

  grid-area: AS;
  background-color: ${props => props.theme.colors.background};
  font-family: ${({theme}) => theme.fonts.regular} !important;

  padding-left: 16px;
  border-right: 1px solid ${props => props.theme.colors.primary};

  transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);

  > button {
    position: absolute;
    top: 20px;
    right: -15px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({theme}) => theme.colors.secondary};
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    z-index: 999;

    svg {
      font-size: 22px;
      color: ${({theme}) => theme.colors.shape};
    }
  }

  ${props => props.click && css`
    width: 0;
  `}
`;

export const Content = styled.div<ClickProps>`
  width: 100%;
  height: 100%;

  opacity: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.click && css`
    animation: ${disappear} 0.3s;
    opacity: 0;
  `}

  ${props => !props.click && css`
    animation: ${appear} 1.2s;
    opacity: 1;
  `}


`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > button {
    margin-bottom: 16px;
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.primary};
    font-weight: ${({theme}) => theme.fonts.medium};

    transition: all 0.2s;

    &:hover {
      transform: scale(1.01);
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Header = styled.div`
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({theme}) => theme.colors.primary};
    text-shadow: 0 0 2px ${({theme}) => theme.colors.secondary};
  }
`;

export const LogoImg = styled.img`
  margin-right: 24px;
  width: 5rem;
`;

export const MenuContainer = styled.ul`
  margin-top: 32px;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-top: 16px;
`;
