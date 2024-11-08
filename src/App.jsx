import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Bienvenido from './Bienvenido';
import ListadoProductos from './ListadoProductos';
import Registro from './Registro';
import Login from './Login';
import ProductoDetalle from './ProductoDetalle';
import BaseDatos from './BaseDatos';
import ListadoProductosFirebase from './ListadoProductosFirebase';
import RegistroFirebase from './RegistroFirebase';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Bienvenido />} /> 
            <Route path="/registro" element={<Registro />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/productos" element={<ListadoProductos />} /> 
            <Route path="/productos/:id" element={<ProductoDetalle />} />
            <Route path="/baseDatos" element={<BaseDatos />} /> 
            <Route path="/productosFirebase" element={<ListadoProductosFirebase />} />
            <Route path="/registroFirebase" element={<RegistroFirebase />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;