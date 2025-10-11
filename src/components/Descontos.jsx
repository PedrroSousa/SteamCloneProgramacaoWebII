import "./Descontos.css";
import CardGame from "./CardGame";

function Descontos() {
  const jogosComDesconto = [
    {
      titulo: "Resident Evil 4 Remake",
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
      precoAntigo: "249,90",
      precoAtual: "149,90",
    },
    {
      titulo: "The Witcher 3",
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
      precoAntigo: "99,90",
      precoAtual: "39,90",
    },
    {
      titulo: "Cyberpunk 2077",
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
      precoAntigo: "199,90",
      precoAtual: "99,90",
    },
  ];

  return (
    <section className="descontos">
      <h2>Descontos e Eventos</h2>
      <div className="descontos-container">
        {jogosComDesconto.map((jogo) => (
          <CardGame
            key={jogo.titulo}
            imagem={jogo.imagem}
            titulo={jogo.titulo}
            precoAntigo={jogo.precoAntigo}
            precoAtual={jogo.precoAtual}
          />
        ))}
      </div>
    </section>
  );
}

export default Descontos;
