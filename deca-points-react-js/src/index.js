import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Decathlon,
  Heptathlon
} from "./components";

//   <BrowserRouter basename='/'>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <BrowserRouter>
//     <div>
//       <App />
//     </div>
//     </BrowserRouter>
//   </React.StrictMode> 
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decathlon" element={<Decathlon />} />
      <Route path="/heptathlon" element={<Heptathlon />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();


