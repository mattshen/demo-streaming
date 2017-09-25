import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import CategoriesPanel from '../components/CatagoryPanel';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <CategoriesPanel />
      <Footer />
    </div>
  );
};

export default HomeScreen;
