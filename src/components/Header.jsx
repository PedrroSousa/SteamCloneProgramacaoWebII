function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>SteamClone</h1>
      <nav style={styles.nav}>
        <a href="#">Loja</a>
        <a href="#">Comunidade</a>
        <a href="#">Sobre</a>
        <a href="#">Suporte</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#1b2838",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
  },
  logo: {
    fontSize: "1.5rem",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};

export default Header;
