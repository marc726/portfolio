import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the App component where your Tabs are defined
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
