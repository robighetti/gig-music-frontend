import React, { useCallback, useState } from 'react';
import { DayModifiers } from 'react-day-picker';

import { Calendar as CalendarContainer } from '../../components/Calendar';

import { Container, Content, Calendar } from './styles';

const Plates: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      console.log(day);

      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Content>
        <h1>Plates</h1>

        <Calendar>
          <CalendarContainer
            handleDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export { Plates };
