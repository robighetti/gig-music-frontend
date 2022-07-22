import React, {
  useCallback,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { FaMusic } from 'react-icons/fa';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Calendar as CalendarContainer } from '../../components/Calendar';

import { useToast } from '../../hooks/toast';

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
import { FiPlusCircle, FiXCircle } from 'react-icons/fi';

interface MusiciansProps {
  name: string;
  date: string;
  style: string;
  repertory: string;
  contact: string;
  satisfaction: number;
  avaliable: boolean;
}

const SearchMusicPlayer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [musicianData, setMusicianData] = useState<MusiciansProps>(
    {} as MusiciansProps,
  );
  const [musicians, setMusicians] = useState<MusiciansProps[]>([]);

  const handleDateChange = useCallback((day: Date) => {
    const musicianPerDay = musicianMock.filter(
      item => item.date === format(day, 'dd/MM/yyyy'),
    );

    setSelectedDate(day);
    setMusicians(musicianPerDay);
  }, []);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      if (!data.name) return;

      const checkIfExists = musicianMock.find(
        item =>
          item.date === format(selectedDate, 'dd/MM/yyyy') &&
          !item.avaliable &&
          item.name !== data.name,
      );
      if (checkIfExists) {
        addToast({
          type: 'error',
          title: 'Já existe agendamento',
          description: `Para a data de ${selectedDateAsText} já existe músico!`,
        });
        reset();
        return;
      }

      const index = musicianMock.findIndex(
        item =>
          item.name === data.name &&
          item.date === format(selectedDate, 'dd/MM/yyyy'),
      );

      musicianMock[index].avaliable = !musicianMock[index].avaliable;

      const musicianPerDay = musicianMock.filter(
        item => item.date === format(new Date(), 'dd/MM/yyyy'),
      );

      addToast({
        type: 'success',
        title: 'Musico confirmado',
        description: `Musico ${data.name} confirmado para o ${selectedDateAsText}`,
      });

      setMusicians(musicianPerDay);
      setMusicianData({} as MusiciansProps);
      reset();
    },
    [addToast, selectedDate, selectedDateAsText],
  );

  const loadMusician = useCallback((item: MusiciansProps) => {
    console.log(item);
    setMusicianData(item);
  }, []);

  useEffect(() => {
    const musicianPerDay = musicianMock.filter(
      item => item.date === format(new Date(), 'dd/MM/yyyy'),
    );
    setMusicians(musicianPerDay);
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
                name="name"
                icon={FaMusic}
                type="text"
                value={musicianData.name}
                placeholder="Musico"
                disabled
              />

              <Button type="submit">Salvar</Button>
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
        <h1>Músicos disponíveis</h1>
        <Scroll>
          <List>
            {musicians.map(item =>
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

                  <div>
                    <button
                      type="button"
                      title="Selecionar"
                      onClick={() => loadMusician(item)}
                    >
                      {item.avaliable ? (
                        <FiPlusCircle size={20} color="#12a454" />
                      ) : (
                        <FiXCircle size={20} color="#e83f5b" />
                      )}
                    </button>
                  </div>
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
