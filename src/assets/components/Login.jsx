import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Login = () =>{

    const [errorCamposLogin, setErrorCamposLogin] = useState(false);
    const [errorCaracterLogin, setErrorCaracterLogin] = useState(false);
    const [errorIncorrecta, setErrorIncorrecto] = useState("");
    const [exitoLogin, setExitoLogin] = useState(false);
    const [emailLogin, setEmailLogin] = useState('');
    const [contraseñaLogin, setContraseñaLogin] = useState('');

    
    const validarDatos = (e) => {
        e.preventDefault();
        setErrorCamposLogin(false);
        setErrorCaracterLogin(false);
        setExitoLogin(false);
        setErrorIncorrecto(false);
        if (!emailLogin.trim() || !contraseñaLogin.trim() ){
            setErrorCamposLogin(true);
            return;
        }
        if(contraseñaLogin.length < 6){
            setErrorCaracterLogin(true);
            return;
        }
        if(contraseñaLogin !== "contraseñaCorrecta"){
            setErrorIncorrecto(true);
            return;
        }
        setErrorCamposLogin(false);
        setErrorCaracterLogin(false);
        setErrorIncorrecto(false);
        setExitoLogin(true);
        setEmailLogin('');
        setContraseñaLogin('');    
    };
                

    return(
        <>
            <form className="form-register" onSubmit={validarDatos}>
                {errorCamposLogin ? <Alert variant="danger">Todos los campos son obligatorios</Alert> : null}
                {errorCaracterLogin ? <Alert variant="danger">El password debe tener al menos 6 caracteres</Alert> : null}
                {errorIncorrecta ? <Alert variant="danger">El password no es correcto</Alert> : null}
                {exitoLogin === true? <Alert variant="success">Datos exitosos</Alert> : null}
                <h2>Login </h2>
                <div className="data-container">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    placeholder= "example@example.com"
                    onChange={(e) => setEmailLogin(e.target.value)}
                    value={emailLogin}/>
                </div>
                <div className="data-container">
                    <label>Contraseña</label>
                    <input
                    type="text"
                    name="contraseña"
                    placeholder="******"
                    onChange={(e) => setContraseñaLogin(e.target.value)}
                    value={contraseñaLogin}/>
                </div>
                <Button type="submit">Enviar </Button>
            </form>
        </>
    );
}; 
export default Login