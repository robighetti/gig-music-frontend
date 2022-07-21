import React, {
  useCallback,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { DayModifiers } from 'react-day-picker';
import { FaMusic } from 'react-icons/fa';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Calendar as CalendarContainer } from '../../components/Calendar';

import Input from '../../components/Input';
import Button from '../../components/Button';

import music from '../../assets/music.svg';
import musicianMock from '../../mocks/musicianMock';

import { List, ListItems } from '../../components/Custom';

import {
  Container,
  Content,
  Calendar,
  MusicContainer,
  MusicContent,
  ListContainer,
  Scroll,
} from './styles';

interface MusiciansProps {
  name: string;
  date: string;
  style: string;
  repertory: string;
  contact: string;
  satisfaction: number;
}

const SearchMusicPlayer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [musician, setMusician] = useState<MusiciansProps[]>([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      console.log(day);

      setSelectedDate(day);
    }
  }, []);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const handleSubmit = useCallback(async () => {}, []);

  useEffect(() => {
    setMusician(musicianMock);
  }, []);

  return (
    <Container>
      <Content>
        <MusicContainer>
          <img src={music} alt="Imagem do musico" />

          <MusicContent>
            <h1>Músico do {selectedDateAsText}</h1>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="musician"
                icon={FaMusic}
                type="text"
                placeholder="Musico"
              />

              <Button type="submit">Agendar</Button>
            </Form>
          </MusicContent>
        </MusicContainer>

        <Calendar>
          <CalendarContainer
            handleDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
        </Calendar>
      </Content>
      <ListContainer>
        <h1>Agendamentos do mês</h1>
        <Scroll>
          <List>
            {musician.map(item =>
              item.name ? (
                <ListItems key={`#${item.name}|${Math.random()}`}>
                  <label htmlFor="date">
                    Data
                    <p id="date">{item.date}</p>
                  </label>

                  <label htmlFor="musician">
                    Músico
                    <p id="plate">{item.name}</p>
                  </label>

                  <label htmlFor="style">
                    Estilo Musical
                    <p id="type">{item.style}</p>
                  </label>

                  <label htmlFor="contact">
                    Contato
                    <p id="contact">{item.contact}</p>
                  </label>
                </ListItems>
              ) : (
                <span>Não possuem agendamentos no Mês</span>
              ),
            )}
          </List>
        </Scroll>
      </ListContainer>
    </Container>
  );
};

export { SearchMusicPlayer };
