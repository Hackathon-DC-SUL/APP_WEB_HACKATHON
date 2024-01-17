import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageDefault from "./pages/PageDefault";
import Home from "./pages/Home";
import Salas from "./pages/Salas";
import Eventos from "./pages/Eventos";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />}/>
          <Route path="eventos" element={<Eventos />}/>
          <Route path="usuarios" element={<Usuarios />}/>
          <Route path="salas" element={<Salas />}/>
          {/* <Route path="login" element={<Login />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
