// src/components/TarefaForm.jsx

import React from 'react';
import { FormContainer, Label, Input, Select, Button } from '../styles';

const TarefaForm = ({ taskDescricao, setTaskDescricao, taskMembro, setTaskMembro, membros, handleAddTarefa }) => {
  return (
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
  );
};

export default TarefaForm;
