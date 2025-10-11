function Destaques() {
  const destaque = {
    titulo: "Elden Ring",
    imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    descricao: "O lendário RPG de ação em mundo aberto da FromSoftware.",
  };

  const recomendados = [
    {
      titulo: "Hollow Knight",
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    },
    {
      titulo: "Stardew Valley",
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    },
    {
      titulo: "Hades",
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.titulo}>Destaques e Recomendados</h2>

      <div style={styles.destaqueContainer}>
        <img src={destaque.imagem} alt={destaque.titulo} style={styles.destaqueImagem} />
        <div style={styles.destaqueInfo}>
          <h3>{destaque.titulo}</h3>
          <p>{destaque.descricao}</p>
        </div>
      </div>

      <div style={styles.recomendados}>
        {recomendados.map((jogo) => (
          <div key={jogo.titulo} style={styles.card}>
            <img src={jogo.imagem} alt={jogo.titulo} style={styles.cardImagem} />
            <p>{jogo.titulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    color: "white",
    backgroundColor: "#171a21",
    padding: "20px 30px",
  },
  titulo: {
    marginBottom: "15px",
  },
  destaqueContainer: {
    display: "flex",
    gap: "20px",
    backgroundColor: "#1b2838",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  destaqueImagem: {
    width: "500px",
    borderRadius: "10px",
  },
  destaqueInfo: {
    maxWidth: "400px",
  },
  recomendados: {
    display: "flex",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1b2838",
    padding: "10px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
  },
  cardImagem: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default Destaques;
