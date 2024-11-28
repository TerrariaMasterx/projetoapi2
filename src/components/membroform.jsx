// src/components/MembroForm.jsx

import React from 'react';
import { FormContainer, Label, Input, Button } from '../styles';

const MembroForm = ({ membroNome, setMembroNome, handleAddMembro }) => {
  return (
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
  );
};

export default MembroForm;
