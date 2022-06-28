import React from 'react';

import chief from '../../assets/chief.svg';
import plate from '../../assets/plate.png';
import drink from '../../assets/drink.png';

import {
  Container,
  Content,
  Schedule,
  Calendar,
  PlateOfTheDay,
  FoodContainer,
  DrinkContainer,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Schedule>
          <h1>Horarios Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>dia 06</span>
            <span>Segunda feira</span>
          </p>

          <PlateOfTheDay>
            <img src={chief} alt="Imagem do restaurant" />
            <strong>Sugestão da casa</strong>

            <div />

            <div>
              <FoodContainer>
                <img src={plate} alt="prato" />
                <span>Nome do prato do dia</span>
              </FoodContainer>

              <DrinkContainer>
                <img src={drink} alt="bebida" />
                <span>Vinho para acompanhar</span>
              </DrinkContainer>
            </div>
          </PlateOfTheDay>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export { Home };
