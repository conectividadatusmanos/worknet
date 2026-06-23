import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './Login';
import RegisterForm from './Registro';

export default function Ingresar() {
  const [vista, setVista] = useState('ingresar');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

const [registroData, setRegistroData] = useState({
  correo: '',
  contrasena: '',
  nombres_completos: '',
  edad: '',
  telefono: '',
  direccion: '',
  ciudad: 'Bogotá D.C.', // Podemos dejar por defecto la que tiene la BD si quieres
  profesion_id: '',
  descripcion_experiencia: ''
});

  const handleRegistroChange = (e) => {
    setRegistroData({
      ...registroData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', { email, password });
  };

  const handleRegistroSubmit = async (e) => {
    e.preventDefault();
    setMensaje({ texto: '', tipo: '' });

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/usuario', registroData);
      setMensaje({ texto: response.data.mensaje, tipo: 'exito' });
      
      setRegistroData({
        correo: '', contrasena: '', nombres_completos: '', edad: '', telefono: '', direccion: '', ciudad: 'Bogotá D.C.', profesion_id: '', descripcion_experiencia: ''
      });
    } catch (error) {
      console.error(error);
      let errorServer = 'Error en el servidor al registrar';

      if (error.response?.data?.errors) {
        const primerosErrores = Object.values(error.response.data.errors);
        if (primerosErrores.length > 0) {
          errorServer = primerosErrores[0][0];
        }
      } else if (error.response?.data?.message) {
        errorServer = error.response.data.message;
      }
      setMensaje({ texto: errorServer, tipo: 'error' });
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 min-h-screen transition-all duration-300">
      
      {vista === 'ingresar' ? (
        <LoginForm 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleLoginSubmit}
          onSwitchToRegister={() => setVista('registro')}
        />
      ) : (
        <RegisterForm 
          registroData={registroData}
          onChange={handleRegistroChange}
          onSubmit={handleRegistroSubmit}
          mensaje={mensaje}
          onSwitchToLogin={() => setVista('ingresar')}
        />
      )}

    </div>
  );
}