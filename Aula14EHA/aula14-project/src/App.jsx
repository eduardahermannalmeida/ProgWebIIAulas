import { useState } from "react";
import logoImg from "./assets/logo.svg";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    let formIsValid = true;
    let newErros = { email: "", password: "" };

    // validação e-mail
    if (!email) {
      newErros.email = "O e-mail é obrigatório!";
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErros.email = "Digite um e-mail válido!";
      formIsValid = false;
    }

    // validação da senha
    if (!password) {
      newErros.password = "A senha é obrigatória.";
      formIsValid = false;
    }

    if (password.lengt > 6) {
      newErros.password = "A senha deve conter ao menos 6 caracteres!";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErros);
      return; // garante que o formulário não envie os dados em caso de erros
    }

    console.log("Email: ", email);
    console.log("Senha: ", password);
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="logo vertigo" />

        <div className="content">
          <h1 className="title"> Acesse a Plataforma </h1>
          <p className="description">
            Faça login ou registre-se para começar a construir seus projetos
            ainda hoje.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error" : ""}
            />

            {errors.email && <span className="error">{errors.email}</span>}

            <div className="s-forgot-password">
              <label htmlFor="password">Senha</label>
              <a href=""> Esqueceu a senha? </a>
            </div>
            <input
              type="passsword"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error">{errors.password} </span>
            )}
            <button type="submit" className={`sign-in-btn ${errors}`}>
              Entrar
            </button>
          </form>
          <p className="sign-up">
            Ainda não tem uma conta? <a href="">Inscreva-se</a>
          </p>
        </div>
      </div>

      <div className="s-img"></div>
    </div>
  );
}
