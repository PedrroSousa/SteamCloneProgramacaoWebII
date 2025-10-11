import Header from "./components/Header.jsx";
import Destaques from "./components/Destaques.jsx";

function App() {
  return (
    <>
      <Header />
      <main style={{padding: "20px"}}>
        <h2>Pagina principal</h2>
        <p>Conteudo dos jogos</p>
      </main>
      <Destaques />
    </>
  );
}

export default App;