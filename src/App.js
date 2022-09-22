import React, { useState } from 'react'; 
import * as bootstrap from "bootstrap";
import Home from "./screens/Home";
import Login from "./screens/Login";
import firebaseApp from './firebase/credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const auth = getAuth (firebaseApp);

function App (){
  const [user, setUser] = useState (null);

  function setUserWithFirebase (usuarioFirebase) {
    const userData = {
      uid: usuarioFirebase.uid,
      email: usuarioFirebase.email,
    };
    setUser (userData);
    console.log("userData final", userData);
  } 

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      if (!user){
        setUserWithFirebase(usuarioFirebase);
      }
    } else {
      setUser (null);
    }
  });

 return <>{user ? <Home /> : <Login />}</>;
  
}
 
export default App;
