import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="contentHome">
        <div className="row flex">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="middle">
              <a href=" " className="btn"
              // onClick={() => [navigate("/Vendas")]}
              >
                Vendas
              </a>
              <a
                href=" "
                className="btn"
              //onClick={() => [navigate("/EntradaProduto")]}
              >
                Entrada de Produtos
              </a>
              <a
                href=" "
                className="btn"
                onClick={() => [navigate("/CadastroProduto")]}
              >
                Cadastrar novo Produto
              </a>
              <a
                href=" "
                className="btn"
              // onClick={() => [navigate("/Relatorio")]}
              >
                Relatorio
              </a>
              <a
                href=" "
                className="btn"
                onClick={() => [navigate("/CadastroUsuario")]}
              >
                Cadastrar novo Usuario
              </a>
              <button
                className="btnSairHome"
                Text="Sair"
                onClick={() => [navigate("/")]}>
                Sair
              </button>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
