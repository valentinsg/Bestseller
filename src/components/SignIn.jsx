import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

let SignIn = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return(
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          correo: "",
          contrasena: "",
        }}
        validate={(valores => {
          let errores = {};

          //validacion nombre

          if(!valores.nombre){
            errores.nombre = 'Por favor ingresa tu nombre'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
              errores.nombre = "El nombre solo puede contener letras y espacios"
          }

          //validacion apellido

          if(!valores.apellido){
            errores.apellido = 'Por favor ingresa tu apellido'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
              errores.apellido = "El apellido solo puede contener letras y espacios"
          }

          //validacion correo

          if(!valores.correo){
            errores.correo = 'Por favor ingresa un correo electrónico'
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
              errores.correo = "El correo puede contener letras, números, guiones, guión bajo y puntos "
          }

          //validacion contraseña

          if(!valores.contrasena){
            errores.contrasena = 'Por favor ingresa una contraseña'
          } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(valores.contrasena)){
              errores.contrasena = "Por cuestiones de seguridad en Bestseller te pedimos que tu contraseña tenga un mínimo de 8 carácteres, un máximo de 15, al menos una letra mayúscula, un número, sin espacios en blanco y por lo menos 1 caracter especial"
          }

          //validacion repetir contraseña

          return errores
        })}
        onSubmit={(valores, {resetForm})=>{
          resetForm();
          console.log('Formulario enviado');
          cambiarFormularioEnviado(true);
          setTimeout(()=> cambiarFormularioEnviado(false), 5000);
        }}
      >

        {( {values, errors, touched , handleChange, handleBlur}) => (
          <Form className="formulario-registro">
            <div>
                <label htmlFor="nombre">Nombre</label>
                <Field 
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder="Nombre" 
                />
                <ErrorMessage name="nombre" component={() =>
                  <div className="error">{errors.nombre}</div>
                }/>
            </div>
            <div>
                <label htmlFor="apellido">Apellido</label>
                <Field 
                type="text" 
                id="apellido" 
                name="apellido" 
                placeholder="Apellido" 
                />
                <ErrorMessage name="apellido" component={()=>
                  <div className="error">{errors.apellido}</div>
                }/>
            </div>
            <div>
                <label htmlFor="correo">Correo electrónico</label>
                <Field 
                type="text" 
                id="correo" 
                name="correo" 
                placeholder="Correo electrónico" 
                />
                <ErrorMessage name="correo" component={()=>
                  <div className="error">{errors.correo}</div>
                }/>
            </div>
            <div>
                <label htmlFor="contrasena">Contraseña</label>
                <Field 
                type="password" 
                id="contrasena" 
                name="contrasena" 
                placeholder="Contraseña" 
                />
                <ErrorMessage name="contrasena" component={()=>
                  <div className="error">{errors.contrasena}</div>
                }/>
              </div>
              <div>
                <label htmlfor="terminos">Acepto términos y condiciones</label>
                  <Field 
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  />
                  <ErrorMessage name="terminos" component={() =>
                    <div className="error">{errors.terminos}</div>
                  }/>
              </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">Registro realizado con éxito!</p>}
          </Form>
        )}
      </Formik>
    )
}

export default SignIn;