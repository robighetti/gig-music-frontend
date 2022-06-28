import React from 'react';

import chief from '../../assets/chief.svg';
import plate from '../../assets/plate.png';
import drink from '../../assets/drink.png';

import {
  Container,
  Content,
  Schedule,
  Calendar,
  DayOption,
  DayOptionContent,
  FoodContainer,
  BandContainer
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Schedule>
          <h1>Agenda do dia</h1>
          <p>
            <span>Hoje</span>
            <span>dia 06</span>
            <span>Segunda feira</span>
          </p>

          <DayOption>
            <img src={chief} alt="Imagem do restaurant" />

            <DayOptionContent>
              <strong>Sugestão da casa</strong>

              <br />
              <br />

              <FoodContainer>
                <img src={plate} alt="prato" />
                <span>Nome do prato do dia</span>
              </FoodContainer>

              <FoodContainer>
                <img src={drink} alt="bebida" />
                <span>Vinho para acompanhar</span>
              </FoodContainer>
            </DayOptionContent>
          </DayOption>
        </Schedule>
        <Calendar />

      </Content>

      <BandContainer>
        <h1>test</h1>
      </BandContainer>
    </Container>
  );
};

export { Home };
