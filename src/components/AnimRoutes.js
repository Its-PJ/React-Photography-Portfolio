import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Traditional from '../pages/Traditional';
import Graphic from '../pages/Graphic';
import Vintage from '../pages/Vintage';
import Contact from '../pages/Contact';

import {Routes, Route, useLocation} from 'react-router-dom';

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/traditional' element={<Traditional />} />
      <Route path='/graphic' element={<Graphic />} />
      <Route path='/vintage' element={<Vintage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default AnimRoutes;
