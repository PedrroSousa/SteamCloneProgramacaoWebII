import "./Explorar.css";
import SectionContainer from "./SectionContainer";
import CardGame from "./CardGame";

function Populares() {
  return (
    <SectionContainer titulo="Mais Populares">
      <CardGame
        titulo="Baldur’s Gate 3"
        imagem="https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg"
        precoAntigo="249,90"
        precoAtual="229,90"
      />
      <CardGame
        titulo="Red Dead Redemption 2"
        imagem="https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"
        precoAntigo="249,90"
        precoAtual="149,90"
      />
      <CardGame
        titulo="No Man’s Sky"
        imagem="https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg"
        precoAntigo="199,90"
        precoAtual="99,90"
      />
    </SectionContainer>
  );
}

export default Populares;
