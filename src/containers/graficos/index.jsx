import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styled from 'styled-components';

// Registrar os componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Estilos básicos
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

const ProgressContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
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

const Index = () => {
  const [totalTarefas, setTotalTarefas] = useState(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0);

  // Função para lidar com a atualização do gráfico
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Atualiza o gráfico com base nas entradas de tarefas
    setTotalTarefas(parseInt(e.target.totalTarefas.value));
    setTarefasConcluidas(parseInt(e.target.tarefasConcluidas.value));
  };

  // Dados do gráfico
  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [tarefasConcluidas, totalTarefas - tarefasConcluidas],
        backgroundColor: ['#4caf50', '#ccc'],
        hoverBackgroundColor: ['#45a049', '#aaa'],
      },
    ],
  };

  // Opções do gráfico
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return tooltipItem.raw + " tarefas";
          },
        },
      },
    },
  };

  return (
    <Container>
      <ProgressContainer>
        <Title>Progresso de Tarefas Concluídas</Title>
        <form onSubmit={handleSubmit}>
          <div>
            <Label>Total de Tarefas:</Label>
            <Input
              type="number"
              name="totalTarefas"
              min="0"
              value={totalTarefas}
              onChange={(e) => setTotalTarefas(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Tarefas Concluídas:</Label>
            <Input
              type="number"
              name="tarefasConcluidas"
              min="0"
              value={tarefasConcluidas}
              onChange={(e) => setTarefasConcluidas(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Atualizar Progresso</Button>
        </form>

        <Doughnut data={data} options={options} />
      </ProgressContainer>
    </Container>
  );
};

export default Index;
