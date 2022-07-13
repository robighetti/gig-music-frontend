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
`;

export const Calendar = styled.aside`
  width: 380px;
  margin-top: 36px;
  margin-right: 10vh;
`;
