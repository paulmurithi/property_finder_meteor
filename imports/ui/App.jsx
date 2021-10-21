import React from 'react';
import Navigation from '../Components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Rent from './pages/Rent';
import './app.css';

const theme = createTheme({
  Body:{
    margin:0,
    padding:0,
    backgroundColor:"#edf0f5"
  }
});

library.add(fab,fas);

export const App = () => (
  <ThemeProvider theme={theme}>
    <div className="content">
      <Navigation />
      <Rent />
    </div>
  </ThemeProvider>
);
