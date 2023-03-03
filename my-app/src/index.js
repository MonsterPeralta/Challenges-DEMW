import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GifExpertApp } from './GiftExpertApp';
import MyComponent from './MyComponent';
import QuoteComponent from './QuoteComponent';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
    <App />
    <MyComponent />
    <QuoteComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
