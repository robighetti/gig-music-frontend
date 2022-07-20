import React, {
  useCallback,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { DayModifiers } from 'react-day-picker';
import { MdRestaurant } from 'react-icons/md';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import chief from '../../assets/chief.svg';

import { Calendar as CalendarContainer } from '../../components/Calendar';
import { List, ListItems } from '../../components/Custom';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import platesMock from '../../mocks/platesMock';

import {
  Container,
  Content,
  Calendar,
  PlateContainer,
  PlateContent,
  ListContainer,
  Scroll,
} from './styles';
import { BiDrink } from 'react-icons/bi';

interface FormProps {
  restaurantDayPlate: string;
  drinkDaySuggestion: string;
}

interface PlateProps {
  restaurantDayPlate: string;
  drinkDaySuggestion: string;
  scheduleDate: string;
}

const Plates: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [restaurantData, setRestaurantData] = useState<PlateProps[]>([]);
  const [dayData, setDayData] = useState<PlateProps>({} as PlateProps);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);

      const filteredDay = platesMock.find(
        item => item.scheduleDate === format(day, 'dd/MM/yyyy'),
      );

      if (!filteredDay) return;
      setDayData(filteredDay);
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: FormProps, { reset }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          restaurantDayPlate: Yup.string().required(
            'O prato do dia é obrigatório!',
          ),
          drinkDaySuggestion: Yup.string().required('A bebida é obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const checkDay = platesMock.find(
          item => item.scheduleDate === format(selectedDate, 'dd/MM/yyyy'),
        );
        if (checkDay) {
          addToast({
            type: 'error',
            title: 'Prato já cadastrado',
            description:
              'Na data selecionad já existe um prato cadastrado, edite-o',
          });
          return;
        }

        platesMock.push({
          ...data,
          scheduleDate: format(selectedDate, 'dd/MM/yyyy'),
        });

        setRestaurantData([
          ...restaurantData,
          {
            ...data,
            scheduleDate: format(selectedDate, 'dd/MM/yyyy'),
          },
        ]);

        addToast({
          type: 'success',
          title: 'Prato e bebida adicionados com sucesso',
        });

        reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na criação',
          description: 'Ocorreu um erro ao criar a agenda!',
        });
      }
    },
    [selectedDate, addToast],
  );

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  useEffect(() => {
    setRestaurantData(platesMock);
  }, []);

  return (
    <Container>
      <Content>
        <PlateContainer>
          <img src={chief} alt="Imagem do restaurant" />

          <PlateContent>
            <h1>Prato do {selectedDateAsText}</h1>

            <Form ref={formRef} onSubmit={handleSubmit} initialData={dayData}>
              <Input
                name="restaurantDayPlate"
                icon={MdRestaurant}
                type="text"
                placeholder="Digite qual o prato"
              />
              <Input
                name="drinkDaySuggestion"
                icon={BiDrink}
                type="text"
                placeholder="Digite a bebida"
              />

              <Button type="submit">Salvar</Button>
            </Form>
          </PlateContent>
        </PlateContainer>

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
            {restaurantData.map(item => (
              <ListItems key={`#${item.scheduleDate}|${Math.random()}`}>
                <label htmlFor="date">
                  Data
                  <p id="date">{item.scheduleDate}</p>
                </label>

                <label htmlFor="plate">
                  Prato
                  <p id="plate">{item.restaurantDayPlate}</p>
                </label>

                <label htmlFor="drink">
                  Bebida
                  <p id="type">{item.drinkDaySuggestion}</p>
                </label>
              </ListItems>
            ))}
          </List>
        </Scroll>
      </ListContainer>
    </Container>
  );
};

export { Plates };
