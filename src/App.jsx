import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Loja from "./pages/Loja.jsx";
import Biblioteca from "./pages/Biblioteca.jsx";
import Comunidade from "./pages/Comunidade.jsx";
import Perfil from "./pages/Perfil.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Loja />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
