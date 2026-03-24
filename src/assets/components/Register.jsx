import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Register = () =>{

    const [errorCampos, setErrorCampos] = useState(false);
    const [errorCaracter, setErrorCaracter] = useState(false);
    const [errorIguales, setErrorIguales] = useState(false);
    const [exitoRegister, setExitoRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [conContraseña, setConContraseña] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();
        setErrorCampos(false);
        setErrorCaracter(false);
        setErrorIguales(false);
        setExitoRegister(false);

        if (!email.trim() || !contraseña.trim() || !conContraseña.trim()){
            setErrorCampos(true);
            return;
        }
        if(contraseña.length < 6){
            setErrorCaracter(true);
            return;
        }
        if(contraseña !== conContraseña){
            setErrorIguales(true);
            return;
        }
        setExitoRegister(true);
        setErrorCampos(false);
        setErrorCaracter(false);
        setErrorIguales(false);
        setEmail('');
        setConContraseña('');
        setContraseña('');
    };
                


    return(
        <>
            <form className="form-register" onSubmit={validarDatos}>
                {errorCampos ? <Alert variant="danger" >Todos los campos son obligatorios</Alert> : null}
                {errorCaracter ? <Alert variant="danger">El password debe tener al menos 6 caracteres</Alert> : null}
                {errorIguales ? <Alert variant="danger">El password y la confirmación del password deben ser iguales</Alert> : null}
                {exitoRegister === true? <Alert variant="success">Datos exitosos</Alert> : null}
                <h2>Registro </h2>
                <div className="data-container">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    placeholder= "example@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                </div>
                <div className="data-container">
                    <label>Password</label>
                    <input
                    type="text"
                    name="contraseña"
                    placeholder="******"
                    onChange={(e) => setContraseña(e.target.value)}
                    value={contraseña}/>
                </div>
                <div className="data-container">
                    <label>Confirmación de Password</label>
                    <input
                    type="text"
                    name="conContraseña"
                    placeholder="******"
                    onChange={(e) => setConContraseña(e.target.value)}
                    value={conContraseña}/>
                </div>
                <Button type="submit">Enviar </Button>
            </form>
        </>
    );
}; 

export default Register