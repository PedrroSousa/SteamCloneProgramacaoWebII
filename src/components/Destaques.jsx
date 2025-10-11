import "./Destaques.css";

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
    <section className="destaques">
      <h2>Destaques e Recomendados</h2>

      <div className="destaque-container">
        <img src={destaque.imagem} alt={destaque.titulo} />
        <div className="destaque-info">
          <h3>{destaque.titulo}</h3>
          <p>{destaque.descricao}</p>
        </div>
      </div>

      <div className="recomendados">
        {recomendados.map((jogo) => (
          <div key={jogo.titulo} className="recomendado-card">
            <img src={jogo.imagem} alt={jogo.titulo} />
            <p>{jogo.titulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destaques;
