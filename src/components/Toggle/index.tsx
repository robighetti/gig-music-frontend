import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
  //TODO: trabalhar no onChange
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={false}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => {
          console.log('mudou');
        }}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
