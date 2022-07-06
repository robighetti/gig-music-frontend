import React from 'react';

import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Container } from './styles';

interface CalendarProps {
  selectedDate: Date;
  handleDateChange: (day: Date, modifiers: DayModifiers) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  handleDateChange,
}) => {
  return (
    <Container>
      <DayPicker
        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
        fromMonth={new Date()}
        modifiers={{ available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] } }}
        onDayClick={handleDateChange}
        selectedDays={selectedDate}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
      />
    </Container>
  );
};

export { Calendar };
