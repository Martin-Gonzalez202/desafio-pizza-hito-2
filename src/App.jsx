import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Footer from'./assets/components/Footer';
import Register from './assets/components/Register'
import Login from './assets/components/Login';

function App() {
  
  return (
    <>
      <Navbar/>
      {/* <Home /> */}
      <Register />
      <Login />
      <Footer derechos="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
    </>
  );
};

export default App;
