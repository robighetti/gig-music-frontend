import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${({theme}) => theme.colors.tertiary};
  border-radius: 8px;
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0px auto;
  display: flex;
`;

export const Schedule = styled.div`
   flex: 1;
   margin-right: 120px;
   color: ${({theme}) => theme.colors.primary};

   h1 {
    margin-top: 36px;
    font-size: 36px;
    font-family: ${({theme}) => theme.fonts.medium};
   }

   p {
    margin-top: 8px;
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.medium};

    span + span {
      margin-left: 8px;
    }
   }
`;

export const PlateOfTheDay = styled.div`
  margin-top: 36px;
  background: yellow;
  display: flex;

  img {
    width: 220px;
  }

  div {
    flex: 1;

    background: red;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
`;

export const FoodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
  }
`;

export const DrinkContainer = styled.div`
  img {
    width: 30px;
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
