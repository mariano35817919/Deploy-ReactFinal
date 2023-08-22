import './App.css';
import Navegador from "./Componentes/Navegador";
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import { Routes,Route } from 'react-router-dom';
import Formulario from './Componentes/Formulario';
import Productos from './Componentes/Productos';
import Api from "./Componentes/Api";




function App() {
  return (
    <div className="App">
      <Navegador/>

      
      <Routes>

      <Route path='/' element={<Home/>} />
      
      <Route path='/Productos'element={<Productos/>}></Route>

      <Route path='/Formulario'element={<Formulario/>}></Route>

      <Route path='/Api'element={<Api/>}></Route>




      </Routes>


      <Footer/>
    </div>
  );
}

export default App;
