import React, {useState} from 'react';
import logo from "../imagenes/bestsellermodoclaro.png";
import '../estilos/login.css';

import firebaseApp from "../firebase/credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
const auth = getAuth (firebaseApp);


function Login(){
  const firestore = getFirestore (firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState (false);

  async function registrarUsuario(email, password){
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email, 
      password,
    ).then((usuarioFirebase)=>{
      return usuarioFirebase;
    });
    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {correo: email});
  }


  function submitHandler (e){
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log("submit", email, password);

    if (isRegistrando){

      registrarUsuario(email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password)
    }

  }

  return( 
  <div className="login-js">

    <nav class="navbar navbar-expand-lg shadow-sm rounded">
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <a class="navbar-brand" href="Login.js">
        <img src={logo} alt="" width="320" />
      </a>
    </div>
    </nav>
    
    <div className="inicio">
        <h1 className='presentacion'>
            En Bestseller podrás comprar, vender e intercambiar tus criptomonedas, donde quieras, cuando quieras.
        </h1>
      <div className="registrarse">

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Iniciar
        </button>

    <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog d-flex row p-10">
      <div class="modal-content">
        <div class="modal-header d-flex">
          <h5 class="modal-title" id="titulo-modal">{ isRegistrando ? "Regístrate" : "Inicia sesión" }</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
        </div>

        <div class="modal-body">
          <form onSubmit={submitHandler} class="row align-items-center p-4">

            <label className="inputGroup">
              <input type="email" id="email" placeholder='Correo eléctronico'/>
            </label>

            <label className="inputGroup">
              <input type="password" id="password" placeholder='Contraseña'/>
            </label>

            <div>
            <input className="boton-registrarse-iniciar" type="submit" value={isRegistrando ? '  Registrarse ' : 'Iniciar sesión'} 
            />  
            </div>
          </form>

        </div>

          <hr></hr>
          
          <div class="modal-footer d-flex justify-content-center">
            
            <button className="boton-ya-tengo-una-cuenta" onClick={() => setIsRegistrando (!isRegistrando)} >
            {isRegistrando ? "Ya tengo una cuenta" : " Quiero registrarme "}
            </button>
          
          </div>
      </div>
    </div>
    </div>
              
    </div>
    
  </div>
    <div className="fondo-whitepaper">
      <div className="whitepaper">
        <div className="caja-como-funciona">
          <h1 className="como-funciona">
          Cómo 
          funciona:</h1> 
          <h3 className="como-funciona-info">Registrate en nuestra página de forma sencilla y empezá a operar con tus activos.
          Nosotros hacemos nuestra parte encargandonos asi de que el proceso sea rápido y seguro, mientras te brindamos un seguimiento personalizado.</h3>
        </div>

        <div className="cajitas-informativas">
          <div className="cajita-1">
          <h3 className="descripcion">
          Tu Inversión,
          Tus Ahorros,
          Tu Dinero
          <p className="info">Operá con tranquilidad en tu Wallet favorita, de pesos a cripto en solo unos minutos*</p>
          </h3>
          </div>
          <div className="cajita-4">
          <h3 className="descripcion4">
          Soporte Personalizado
          <p className="info">Un asesor se pondrá en contacto y te acompañará en el transcurso de la operación, respondiendo todas tus dudas</p>
          </h3>
          </div>
          <div className="cajita-3">
          <h3 className="descripcion3">
          Seguridad, 
          Privacidad
          y Datos
          <p className="info">Nos importa que tus datos de pago se mantengan seguros y privados, por éste motivo nunca los almacenamos en nuestra plataforma</p>
          </h3>
          </div>
          <div className='cajita-2'> 
          <h3 className="descripcion2">
          Transparencia
          en nuestras
          cotizaciones
          <p className="info">Trabajamos con un sistema de cotizaciones en tiempo real, para que conozcas y evalúes tus compras hasta el último momento</p>
          </h3>
          </div>          
        </div>
        <small className="advertencia"><b> * Las pagos mediante transferencia pueden tener una demora de hasta 48 horas hábiles dependiendo de la entidad bancaria </b></small>
      </div>
    </div>
  </div>
);
}

export default Login;