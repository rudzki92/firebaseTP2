import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navegación</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Iniciar Sesion</Link></li>
        <li><Link to="/productos">Home</Link></li>
        <li><Link to="/baseDatos">Firebase</Link></li>
        <li><Link to="/productosFirebase">Productos Firebase</Link></li>
        <li><Link to="/registroFirebase">Registro Firebase</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
