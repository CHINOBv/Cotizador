import React from 'react';

import Header from './components/Header/Header.jsx';
import Form from './components/Form/Cotizado'
import Resumen from './components/Form/Resumen.jsx'
import Resultado from './components/Form/Resultado'


function App() {
  return (
    <div className="container">
      <Header titulo="Cotizador"/>
      <Form/>
    </div>
  );
}

export default App;
