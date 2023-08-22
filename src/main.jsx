import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';

import Home from './components/pages/Home.jsx';
import EletricaResi from './components/pages/EletricaResi.jsx';
import EnergiaSol from './components/pages/EnergiaSol.jsx';
import Elevadores from './components/pages/Elevadores.jsx';
import ArCondicionado from './components/pages/Arcondicionado.jsx';

import Navbar from "./components/layout/Navbar";
import Container from './components/layout/Container.jsx';


import './index.css';
import Footer from './components/layout/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <React.StrictMode>
    // eslint-disable-next-line no-undef, no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navbar />
    <Container customClass="min-height">
    <Routes
       element={<App />}>
      <Route
         path='/elev-com'
         element={<Home/>}exact >
      </Route>
      <Route
         path='/EletricaResi'
         element={<EletricaResi/>}>
      </Route>
       <Route
         path='/EnergiaSol'
         element={<EnergiaSol/>}>
       </Route>
       <Route
         path='/Elevadores'
         element={<Elevadores/>}>
       </Route>
       <Route
         path='/Arcondicionado'
         element={<ArCondicionado/>}>
       </Route>
      </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
