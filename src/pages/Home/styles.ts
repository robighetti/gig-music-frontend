import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0px auto;
  display: flex;
`;

export const Schedule = styled.div`
   flex: 1;
   margin-right: 120px;
   color: ${({ theme }) => theme.colors.primary};

   h1 {
    margin-top: 36px;
    font-size: 36px;
    font-family: ${({ theme }) => theme.fonts.medium};
   }

   p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};

    span + span {
      margin-left: 8px;
      padding-left: 8px;
      border-left: 1px solid ${({ theme }) => theme.colors.primary};
    }
   }
`;

export const DayOption = styled.div`
  margin-top: 36px;
  display: flex;

  img {
    width: 180px;
  }
`;

export const DayOptionContent = styled.div`
  width: 100%;
  margin-left: 24px;
  margin-top: 8px;

  > strong {
    margin-bottom: 50px;
    letter-spacing: 8px;
    text-transform: uppercase;
  }
`;

export const FoodContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 30px;
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Calendar = styled.aside`
  width: 380px;
  margin-top: 36px;

  background: orangered;
`;

export const BandContainer = styled.div`
  height: auto;
  margin-top: 56px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.primary_light};
`;
