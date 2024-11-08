
import { useState } from 'react'
import './css/Registro.css';

const Registro = () => {
  return (
    <div className="registro-container">
      <h2 className="registro-title">Registro de contacto</h2>
      <form className="registro-form">
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input type="text" id="apellido" name="apellido" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" id="telefono" name="telefono" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
        </div>
        <div className="form-button">
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
}

export default Registro;

