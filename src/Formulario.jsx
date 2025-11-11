import React, { useState, useRef, useEffect } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const nomeRef = useRef(null);

  useEffect(() => {
    nomeRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !idade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert(`Nome: ${nome}\nEmail: ${email}\nIdade: ${idade}`);
    setNome("");
    setEmail("");
    setIdade("");
    nomeRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          ref={nomeRef}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCadastro;
