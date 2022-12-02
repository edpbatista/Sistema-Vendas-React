import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';
import Home from './pages/Home/Home';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/CadastroProduto" element={<CadastroProduto />} />
                <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;