function CardGame({ image, titulo, preco }) {
  return (
    <div className="card-game">
      <img src={image} alt={titulo} />
      <h3>{titulo}</h3>
      <p>R$ {preco}</p>
    </div>
  );
}

export default CardGame;

/* menu | destaques e recomendados | descontos e eventos | explore | cards | lista de populares*/