import React, { useCallback, useState } from 'react';
import { DayModifiers } from 'react-day-picker';

import { BiTimeFive } from 'react-icons/bi';

import { ImSpoonKnife, ImGlass, ImMusic } from 'react-icons/im';

import { FaWhatsapp } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

import chief from '../../assets/chief.svg';
import music from '../../assets/music.png';

import { Calendar as CalendarContainer } from '../../components/Calendar';

import {
  Container,
  Content,
  Schedule,
  Calendar,
  DayOption,
  DayOptionContent,
  FoodContainer,
  BandContainer,
  HeaderBand,
  HeaderContent,
  MusicContainer,
  MusicContent,
  MusicalStyle,
  RepertoriesContainer,
  SatisfactionContainer,
} from './styles';

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

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
                <ImSpoonKnife />
                <span>Nome do prato do dia</span>
              </FoodContainer>

              <FoodContainer>
                <ImGlass />
                <span>Vinho para acompanhar</span>
              </FoodContainer>
            </DayOptionContent>
          </DayOption>
        </Schedule>
        <Calendar>
          <CalendarContainer
            handleDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
        </Calendar>
      </Content>

      <BandContainer>
        <HeaderBand>
          <HeaderContent>
            <ImMusic />
            <h1>Emerson Nogueira - Violão e voz</h1>
          </HeaderContent>

          <HeaderContent>
            <BiTimeFive />
            <strong>10:00 hrs</strong>
          </HeaderContent>
        </HeaderBand>

        <MusicContainer>
          <img src={music} alt="Imagem do musico" />

          <MusicContent>
            <MusicalStyle>
              <strong>Estilo musical</strong>
              <span>Rock clássico Anos 80</span>
            </MusicalStyle>

            <RepertoriesContainer>
              <strong>Repertório</strong>
              <span>
                Muito anos 80, com cazuza, barão vermelho, titãs e muito mais
              </span>
            </RepertoriesContainer>

            <MusicalStyle>
              <strong>Contato</strong>
              <span>
                <FaWhatsapp color="#12a454" />
                (19) 9 9982-8057
              </span>
            </MusicalStyle>

            <SatisfactionContainer>
              <strong>Satisfação do público</strong>
              <div>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
            </SatisfactionContainer>
          </MusicContent>
        </MusicContainer>
      </BandContainer>
    </Container>
  );
};

export { Home };
