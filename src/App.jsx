import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout.jsx';
import Home from './paginas/home/Home.jsx';
import QuienesSomos from './paginas/QuienesSomos/QuienesSomos.jsx';
import Productos from './paginas/Productos/Productos.jsx';
import DetalleProducto from './paginas/DetalleProduct/DetalleProducto.jsx';
import Contacto from './paginas/Contacto/Contacto.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:idCelular" element={<DetalleProducto />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
