import styled from 'styled-components';

/*
  Layout

  MH = Main Header
  AS = Aside
  CT = Content
*/

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'AS MH'
    'AS CT';

  height: 100vh;
`;
