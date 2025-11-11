import Header from "./components/Header.jsx";
import Destaques from "./components/Destaques.jsx";
import Descontos from "./components/Descontos.jsx";
import Explorar from "./components/Explorar.jsx";
import Populares from "./components/Populares.jsx";

function App() {
  return (
    <>
      <h1>Cadastro</h1>
      <Formulario/>
      <Header />
      <Destaques />
      <Descontos />
      <Explorar />
      <Populares />
    </>
  );
}

export default App;