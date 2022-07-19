import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};

  position: relative;
`;

export const Content = styled.main`
  margin: 0px 36px;
  display: flex;
  justify-content: space-between; 
`;

export const Calendar = styled.aside`
  width: 380px;
  margin-top: 36px;
  margin-right: 10vh;
  right: 0;
`;

export const PlateContainer = styled.div`
  width: 40%;

  img {
    width: 180px;
  }

  h1 {
    margin-bottom: 16px;
  }
`;

export const PlateContent = styled.div`  
  left: 0;
  bottom: 20px;
  margin-top: 16px;
`;

export const ListContainer = styled.div`
  width: 95%;
  position: absolute;
  left: 0;
  top: 480px;
  z-index: 999;
  margin: 0 36px;

  h1 {
    margin-bottom: 16px;
  }
`;
