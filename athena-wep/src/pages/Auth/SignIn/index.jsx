import { useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { api } from "../../../services/api";

import "./styles.css";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function authenticate(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      const { data } = await api.post("/session", { email, password });

      localStorage.setItem("athena:user", JSON.stringify(data.user));

      toast.success("Login realizado com sucesso!");
      navigate("/schedules", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível realizar o login. Tente novamente!");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="sign-in-container">
      <h1>
        Gerencie <br />
        seus <br />
        <span>horários</span>.
      </h1>

      <form onSubmit={authenticate}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Link to="/sign-up">Cadastre-se aqui 👈</Link>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Carregando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
