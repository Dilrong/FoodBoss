import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from './navigations';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f39c12',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigator/>
    </PaperProvider>
  );
}