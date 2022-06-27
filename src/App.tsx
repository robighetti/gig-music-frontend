import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
