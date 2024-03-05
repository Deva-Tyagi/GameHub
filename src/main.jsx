import React from 'react'
import {Button, ChakraProvider , ColorModeProvider, ColorModeScript, theme} from '@chakra-ui/react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ColorModeSwitcher from './Components/ColorModeSwitcher.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider theme={theme}>
   <ColorModeSwitcher />
   <App />
   
   </ChakraProvider>
  </React.StrictMode>,
)
