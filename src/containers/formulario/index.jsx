import React, { useState } from "react";

const Index = () => {
  // Definindo o estado para os campos do formulário
  const [nome, setNome] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [prioridade, setPrioridade] = useState("baixa");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Lógica para salvar ou processar os dados (exibindo no console por enquanto)
    console.log({
      nome,
      responsavel,
      dataEntrega,
      prioridade
    });
    
    // Limpar os campos após o envio
    setNome("");
    setResponsavel("");
    setDataEntrega("");
    setPrioridade("baixa");
  };

  return (
    <div>
      <h1>Adicionar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Projeto:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Responsável:</label>
          <input 
            type="text" 
            value={responsavel} 
            onChange={(e) => setResponsavel(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Data de Entrega:</label>
          <input 
            type="date" 
            value={dataEntrega} 
            onChange={(e) => setDataEntrega(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Prioridade:</label>
          <select 
            value={prioridade} 
            onChange={(e) => setPrioridade(e.target.value)} 
            required
          >
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        <button type="submit">Adicionar Projeto</button>
      </form>
    </div>
  );
};

export default Index;
