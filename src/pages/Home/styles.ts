import styled from 'styled-components';
import { shade } from 'polished';

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

  > svg {
    font-size: 28px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }

  > span {
    font-size: 18px;
    letter-spacing: 2px;
    font-family: ${({ theme }) => theme.fonts.medium};
  }
`;

export const Calendar = styled.aside`
  width: 380px;
  margin-top: 36px;
  margin-right: 10vh;

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;

export const BandContainer = styled.div`
  margin-top: 36px;
  padding: 0 36px;

  position: absolute;
  bottom: 160px;
`;

export const HeaderBand = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secondary};

    svg + svg {
      margin-right: 16px;
    }
  }

  > h1 {
    margin: 0 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  > strong {
    margin: 0 8px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MusicContainer = styled.div`
  img {
    width: 180px;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MusicContent = styled.div`
  width: 100%;
  margin-left: 46px;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
`;

export const MusicalStyle = styled.div`
  margin-bottom: 16px;

  strong {
    margin-right: 16px;
  }

  span {
    font-size: 16px;

    display: flex;
    align-items: center;

    > svg {
      margin-right: 8px;
    }
  }
`;

export const RepertoriesContainer = styled.div`
  margin-bottom: 16px;

  strong {
    margin-right: 16px;
  }

  span {
    font-size: 16px;

    display: flex;
    align-items: center;
  }
`;

export const SatisfactionContainer = styled.div`
  > div {
    margin-top: 8px;

    > svg {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
