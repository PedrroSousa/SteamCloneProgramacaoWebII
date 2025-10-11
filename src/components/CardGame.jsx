import "./CardGame.css";

function CardGame({ imagem, titulo, precoAntigo, precoAtual }) {
  return (
    <div className="card-game">
      <img src={imagem} alt={titulo} />
      <h4>{titulo}</h4>
      <p className="preco">
        <span className="antigo">R$ {precoAntigo}</span> →{" "}
        <span className="atual">R$ {precoAtual}</span>
      </p>
    </div>
  );
}

export default CardGame;
