import "./SectionContainer.css";

function SectionContainer({ titulo, children }) {
  return (
    <section className="section-container">
      <h2>{titulo}</h2>
      <div className="conteudo">{children}</div>
    </section>
  );
}

export default SectionContainer;
