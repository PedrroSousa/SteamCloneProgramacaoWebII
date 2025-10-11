import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Steam Clone</h1>
      <nav className="menu">
        <a href="#">Loja</a>
        <a href="#">Biblioteca</a>
        <a href="#">Comunidade</a>
        <a href="#">Perfil</a>
      </nav>
    </header>
  );
}

export default Header;
