import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Decathlon';
import Heptathlon from './Heptathlon';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Decathlon from './Decathlon';

// ReactDOM.render(
//   <BrowserRouter basename='/'>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <div>
      <App />
      {/* <Decathlon />
      <Heptathlon/> */}
    </div>
    </BrowserRouter>
  // </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
