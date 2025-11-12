import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 - Página não encontrada</h2>
      <p>Voltar para a <Link to="/">Loja</Link></p>
    </div>
  );
}
