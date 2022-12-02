import "./CadastroUsuario.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const handleRegister = (values) => {
    window.location.reload(false);
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };


  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="containerCadastroUsuario">
      <h1>Cadastro de Usuário</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-fieldCadastroUsuario" 
            placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password"
              className="form-fieldCadastroUsuario"
              type="password"
              placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-fieldCadastroUsuario"
              placeholder="Senha"
              type="password"

            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <button className="buttonCadastroUsuario" type="submit">
            Cadastrar
          </button>
          <button className="buttonCadastroUsuarioSair" type="submit"
           onClick={() => [navigate("/Home")]}>
            Voltar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
