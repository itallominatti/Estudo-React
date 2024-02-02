
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Components/Produtos/Produtos';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contato from './Components/Contato/Contato';
import Produto from './Components/Produto/Produto';

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path='contato' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
