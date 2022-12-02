import "./Login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  //Const pata poder armazemar os valores e mandar para a port 3001 onde realiza o post para o banco de dados.

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      if(response.data.msg === "Usuário logado"){
        navigate("/home");
      }else{
        navigate("/");
      }
    });
  };

  //Const pata poder notificar nos campos usando a propriedade yup

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="containerLogin">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-fieldLogin" 
            placeholder="nome@exemplo.com" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field name="password" className="form-fieldLogin"
              type="password"
              placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          
          <button className="buttonEntrar" type="submit">
            Entrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
