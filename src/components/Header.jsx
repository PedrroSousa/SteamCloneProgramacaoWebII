import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Steam Clone</h1>
      <nav className="menu">
        <Link to="/">Loja</Link>
        <Link to="/biblioteca">Biblioteca</Link>
        <Link to="/comunidade">Comunidade</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}
