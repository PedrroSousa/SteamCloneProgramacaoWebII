import "./Explorar.css";
import SectionContainer from "./SectionContainer";
import CardGame from "./CardGame";

function Explorar() {
  return (
    <SectionContainer titulo="Explorar Jogos">
      <CardGame
        titulo="Terraria"
        imagem="https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg"
        precoAntigo="39,90"
        precoAtual="19,90"
      />
      <CardGame
        titulo="Celeste"
        imagem="https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg"
        precoAntigo="49,90"
        precoAtual="24,90"
      />
      <CardGame
        titulo="Slay the Spire"
        imagem="https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg"
        precoAntigo="79,90"
        precoAtual="39,90"
      />
    </SectionContainer>
  );
}

export default Explorar;
