import { useState } from 'react';
import { auth, db } from './FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './css/Registro.css';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nombre,
        apellido,
        email,
        telefono
      });

      setSuccess('Usuario registrado exitosamente');
      setError(null);

      setNombre('');
      setApellido('');
      setEmail('');
      setTelefono('');
      setPassword('');
      setConfirmPassword('');

    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError('Error al registrar el usuario');
      setSuccess(null);
    }
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Registro de contacto</h2>
      <form className="registro-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
        </div>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="form-button">
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
