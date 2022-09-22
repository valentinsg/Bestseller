import React from 'react';
import Cards from '../components/Cards.jsx';
import '../estilos/home.css'

import logo from "../imagenes/bestsellermodoclaro.png";
import busd from "../imagenes/busd.png";
import usdt from "../imagenes/usdt.png";
import usdc from "../imagenes/usdc.png";
import dai from "../imagenes/dai.png";

import firebaseApp from '../firebase/credenciales';
import { getAuth, signOut} from 'firebase/auth';
const auth = getAuth (firebaseApp);

function Home() {
  return( 
  <div className="home-js">

  <nav class="navbar navbar-expand-lg shadow-sm rounded sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="Home.js">
        <img src={logo} alt="" width="320" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-dark" aria-current="page" href="Pedidos.js">Nuevo pedido</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">Mis pedidos</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Más
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Información</a></li>
              <li><a class="dropdown-item" href="#">Soporte</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><button class="dropdown-item" onClick = {() => signOut(auth)}>Cerrar sesión</button></li>
            </ul>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  
    <div className="inicio-home">
        
        <Cards />

    </div>


    <div className="lista-de-criptos">
    <h1 className="titulo-lista-de-criptos">Nuestras criptos</h1>
      <table className="table table-hover table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col-3">Criptomoneda</th>
            <th scope="col-3">Compra</th>
            <th scope="col-3">Venta</th>
          </tr>
        </thead>
        <tbody>
          <tr> 
            <th class="col-3"><img src={usdt} className="imagen-cripto-lista usdt" alt="USDT" width="45"/>USDT</th>
            <td class="col-3">290 ARS</td>
            <td class="col-3">285 ARS</td>
          </tr>
          <tr>
            <th class="col-3"><img src={usdc} className="imagen-cripto-lista usdc" alt="USDC" width="45"/>USDC</th>
            <td class="col-3">292 ARS</td>
            <td class="col-3">286 ARS</td>
          </tr>
          <tr>
            <th class="col-3"><img src={dai} className="imagen-cripto-lista dai" alt="DAI" width="45"/>DAI</th>
            <td class="col-3">293 ARS</td>
            <td class="col-3">285 ARS</td>
          </tr>
          <tr>
            <th class="col-3"><img src={busd} className="imagen-cripto-lista busd" alt="BUSD" width="45"/>BUSD</th>
            <td class="col-3">295 ARS</td>
            <td class="col-3">285 ARS</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  )
}
export default Home;
