import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    background-color: #45a049;
  }
  
  &:active {
    background-color: #388e3c;
  }
`;

const TaskList = styled.div`
  margin-top: 20px;
`;

const TaskItem = styled.div`
  background-color: #e8f5e9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const Index = () => {
  const [membros, setMembros] = useState([]);
  const [membroNome, setMembroNome] = useState("");
  const [taskDescricao, setTaskDescricao] = useState("");
  const [taskMembro, setTaskMembro] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // Função para adicionar membro
  const handleAddMembro = (e) => {
    e.preventDefault();
    if (membroNome) {
      setMembros([...membros, membroNome]);
      setMembroNome(""); // Limpa o campo após adicionar
    }
  };

  // Função para atribuir tarefa
  const handleAddTarefa = (e) => {
    e.preventDefault();
    if (taskDescricao && taskMembro) {
      const novaTarefa = { descricao: taskDescricao, membro: taskMembro };
      setTarefas([...tarefas, novaTarefa]);
      setTaskDescricao(""); // Limpa o campo de descrição
      setTaskMembro(""); // Limpa o campo de membro
    }
  };

  return (
    <Container>
      <Title>Atribuição de Membros e Tarefas</Title>

      {/* Formulário para adicionar membro */}
      <FormContainer>
        <form onSubmit={handleAddMembro}>
          <div>
            <Label>Nome do Membro:</Label>
            <Input
              type="text"
              value={membroNome}
              onChange={(e) => setMembroNome(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Adicionar Membro</Button>
        </form>
      </FormContainer>

      {/* Formulário para atribuir tarefa */}
      <FormContainer>
        <form onSubmit={handleAddTarefa}>
          <div>
            <Label>Descrição da Tarefa:</Label>
            <Input
              type="text"
              value={taskDescricao}
              onChange={(e) => setTaskDescricao(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Responsável pela Tarefa:</Label>
            <Select
              value={taskMembro}
              onChange={(e) => setTaskMembro(e.target.value)}
              required
            >
              <option value="">Selecione um Membro</option>
              {membros.map((membro, index) => (
                <option key={index} value={membro}>
                  {membro}
                </option>
              ))}
            </Select>
          </div>
          <Button type="submit">Atribuir Tarefa</Button>
        </form>
      </FormContainer>

      {/* Exibe as tarefas atribuídas */}
      <TaskList>
        {tarefas.map((tarefa, index) => (
          <TaskItem key={index}>
            <span>{tarefa.descricao}</span>
            <span><strong>{tarefa.membro}</strong></span>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Index;
