/** @jsxRuntime classic */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill';
import "events-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
