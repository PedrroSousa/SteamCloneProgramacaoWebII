function CardGame() {
  return (
    <div className="card-game">
        <img src={image} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{preço}</p>
    </div>
  );
}

export default CardGame;