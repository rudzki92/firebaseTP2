
import { useState } from 'react'
import './css/Registro.css';

const Login = () => {
  return (
    <div className="registro-container">
      <h2 className="registro-title">Bienvenido</h2>
      <form className="registro-form">
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" name="email" />
          </div>
         
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          
        </div>
        <div className="form-button">
          <button type="submit">Iniciar Sesion</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

