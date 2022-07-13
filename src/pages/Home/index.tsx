import React, { useCallback, useState, useMemo } from 'react';
import { DayModifiers } from 'react-day-picker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { BiTimeFive } from 'react-icons/bi';

import { ImSpoonKnife, ImGlass, ImMusic } from 'react-icons/im';

import { FaWhatsapp } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

import chief from '../../assets/chief.svg';
import music from '../../assets/music.png';

import { Calendar as CalendarContainer } from '../../components/Calendar';

import agendaMock from '../../mocks/agendaMock';

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

interface RestaurantProps {
  scheduleDate: Date | string;
  restaurantDayPlate: string;
  drinkDaySuggestion: string;
}

interface MusicianProps {
  name: string;
  date: Date | string;
  style: string;
  repertory: string;
  contact: string;
  satisfaction: number;
  hour?: string;
}

interface AgendaProps {
  restaurant: RestaurantProps;
  musician: MusicianProps;
}

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [agenda, setAgenda] = useState<AgendaProps>();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      const formatedData = agendaMock.map(item => ({
        ...item,
        restaurant: {
          ...item.restaurant,
          scheduleDate: format(
            new Date(item.restaurant.scheduleDate),
            'dd/MM/yyyy',
          ),
        },
        musician: {
          ...item.musician,
          date: format(new Date(item.musician.date), 'dd/MM/yyyy'),
          hour: `${format(new Date(item.musician.date), 'kk:mm')} hrs`,
        },
      }));

      const formatedSelectedDate = format(day, 'dd/MM/yyyy');

      const dayAgenda = formatedData.find(
        item => item.restaurant.scheduleDate === formatedSelectedDate,
      );

      setSelectedDate(day);

      setAgenda(dayAgenda);
    }
  }, []);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', {
      locale: ptBR,
    });
  }, [selectedDate]);

  const numberOfStars = useMemo(() => {
    if (agenda?.musician.satisfaction) {
      return Array.from(Array(agenda.musician.satisfaction).keys());
    }
  }, [selectedDate]);

  return (
    <Container>
      <Content>
        <Schedule>
          <h1>Agenda do dia</h1>
          <p>
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          <DayOption>
            <img src={chief} alt="Imagem do restaurant" />

            <DayOptionContent>
              <strong>Sugestão da casa</strong>

              <br />
              <br />

              <FoodContainer>
                <ImSpoonKnife />
                <span>
                  {agenda?.restaurant.restaurantDayPlate ||
                    '** PRATO NÃO DISPONÍVEL **'}
                </span>
              </FoodContainer>

              <FoodContainer>
                <ImGlass />
                <span>
                  {agenda?.restaurant.drinkDaySuggestion ||
                    '** BEBIDA NÃO DISPONÍVEL **'}
                </span>
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
        {agenda?.musician.date ? (
          <HeaderBand>
            <HeaderContent>
              <ImMusic />
              <h1>{agenda?.musician.name}</h1>
            </HeaderContent>

            <HeaderContent>
              <BiTimeFive />
              <strong>{agenda?.musician.hour}</strong>
            </HeaderContent>
          </HeaderBand>
        ) : (
          <HeaderContent>
            <h1>** Músico não encontrado **</h1>
          </HeaderContent>
        )}

        <MusicContainer>
          <img src={music} alt="Imagem do musico" />

          {agenda?.musician.date && (
            <MusicContent>
              <MusicalStyle>
                <strong>Estilo musical</strong>
                <span>{agenda?.musician.style}</span>
              </MusicalStyle>

              <RepertoriesContainer>
                <strong>Repertório</strong>
                <span>{agenda?.musician.repertory}</span>
              </RepertoriesContainer>

              <MusicalStyle>
                <strong>Contato</strong>
                <span>
                  <FaWhatsapp color="#12a454" />
                  {agenda?.musician.contact}
                </span>
              </MusicalStyle>

              <SatisfactionContainer>
                <strong>Satisfação do público</strong>
                <div>
                  {numberOfStars?.map(item => (
                    <FiStar />
                  ))}
                </div>
              </SatisfactionContainer>
            </MusicContent>
          )}
        </MusicContainer>
      </BandContainer>
    </Container>
  );
};

export { Home };
